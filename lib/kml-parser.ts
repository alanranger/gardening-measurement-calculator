import { mapToClosestRegion } from "@/lib/uk-locations"

export function parseKML(kmlString) {
  try {
    // Parse the KML XML
    const parser = new DOMParser()
    const kmlDoc = parser.parseFromString(kmlString, "text/xml")

    // Check for parsing errors
    const parserError = kmlDoc.querySelector("parsererror")
    if (parserError) {
      throw new Error("Invalid KML file")
    }

    // Extract all placemarks
    const placemarks = kmlDoc.querySelectorAll("Placemark")
    const locations = []

    // Process each placemark
    placemarks.forEach((placemark) => {
      try {
        // Get the name
        const name = placemark.querySelector("name")?.textContent || "Unnamed Location"

        // Get the description (if any)
        const descriptionElement = placemark.querySelector("description")
        const description = descriptionElement?.textContent || ""

        // Extract HTML content from CDATA if present
        let rawHtml = description
        if (description.includes("<![CDATA[")) {
          rawHtml = description.replace("<![CDATA[", "").replace("]]>", "")
        }

        // Parse any HTML in the description to extract structured data
        const googleMapsData = {}

        if (rawHtml) {
          // Create a temporary div to parse the HTML
          const tempDiv = document.createElement("div")
          tempDiv.innerHTML = rawHtml

          // Extract text content (clean version without HTML)
          const textContent = tempDiv.textContent || ""

          // Look for links (website URLs)
          const links = tempDiv.querySelectorAll("a")
          if (links.length > 0) {
            googleMapsData.website = links[0].href
          }

          // Extract address, phone, etc. from the text content
          const lines = textContent
            .split("\n")
            .map((line) => line.trim())
            .filter((line) => line)

          // First line is usually the name, which we already have
          // Second line is often the address
          if (lines.length > 1) {
            googleMapsData.address = lines[1]
          }

          // Look for phone number (patterns like +44, etc.)
          const phoneMatch = textContent.match(/(\+\d[\d\s-]+)/)
          if (phoneMatch) {
            googleMapsData.phone = phoneMatch[0].trim()
          }

          // Look for website URL in text
          const urlMatch = textContent.match(/([a-z0-9][-a-z0-9]*\.)+[a-z]{2,}/)
          if (urlMatch && !googleMapsData.website) {
            googleMapsData.website = urlMatch[0].trim()
          }

          // Look for category information
          const categoryMatch = textContent.match(/Category:\s*([^,\n]+)/i)
          if (categoryMatch && categoryMatch[1]) {
            googleMapsData.category = categoryMatch[1].trim()
          }

          // Look for parking information
          const parkingMatch = textContent.match(/Parking:\s*([^,\n]+)/i) || textContent.match(/Car Park:\s*([^,\n]+)/i)
          if (parkingMatch && parkingMatch[1]) {
            googleMapsData.parking = parkingMatch[1].trim()
          }

          // Look for amenities
          const amenitiesMatch = textContent.match(/Amenities:\s*([^,\n]+)/i)
          if (amenitiesMatch && amenitiesMatch[1]) {
            googleMapsData.amenities = amenitiesMatch[1].trim()
          }

          // Look for opening hours
          const hoursMatch =
            textContent.match(/Hours:\s*([^,\n]+)/i) || textContent.match(/Opening Hours:\s*([^,\n]+)/i)
          if (hoursMatch && hoursMatch[1]) {
            googleMapsData.hours = hoursMatch[1].trim()
          }

          // Extract any additional information
          // Look for specific sections like "Facilities", "Access", etc.
          const facilitiesMatch = textContent.match(/Facilities:([^:]+)/i)
          if (facilitiesMatch && facilitiesMatch[1]) {
            googleMapsData.facilities = facilitiesMatch[1].trim()
          }

          const accessMatch = textContent.match(/Access:([^:]+)/i)
          if (accessMatch && accessMatch[1]) {
            googleMapsData.access = accessMatch[1].trim()
          }
        }

        // Get coordinates
        const coordinatesElement = placemark.querySelector("Point coordinates")
        if (!coordinatesElement) return // Skip if no coordinates

        const coordinatesText = coordinatesElement.textContent.trim()
        const [lng, lat, altitude] = coordinatesText.split(",").map(Number.parseFloat)

        // Get folder/category information
        let originalCategory = "Uncategorized"
        let parent = placemark.parentElement
        while (parent && parent.tagName !== "Document") {
          if (parent.tagName === "Folder") {
            const folderName = parent.querySelector("name")?.textContent
            if (folderName) {
              originalCategory = folderName
              break
            }
          }
          parent = parent.parentElement
        }

        // Get style information (for icon/color)
        const styleUrl = placemark.querySelector("styleUrl")?.textContent

        // Determine if coastal or inland based on location name, description, or style
        // Coastal keywords to check for
        const coastalKeywords = [
          "beach",
          "coast",
          "shore",
          "sea",
          "ocean",
          "bay",
          "harbor",
          "harbour",
          "pier",
          "marina",
          "estuary",
          "cove",
          "cliff",
          "lighthouse",
          "quay",
          "tide",
          "tidal",
          "port",
          "wharf",
          "jetty",
          "seaside",
        ]

        // Check if the location is likely coastal based on name or description
        const nameAndDesc = (name + " " + description).toLowerCase()
        const isLikelyCoastal = coastalKeywords.some((keyword) => nameAndDesc.includes(keyword))

        // Set location type based on our checks
        let locationType = "unknown"

        if (
          isLikelyCoastal ||
          description.toLowerCase().includes("coastal") ||
          description.toLowerCase().includes("coast") ||
          (styleUrl && styleUrl.includes("coastal"))
        ) {
          locationType = "coastal"
        } else if (description.toLowerCase().includes("inland") || (styleUrl && styleUrl.includes("inland"))) {
          locationType = "inland"
        }

        // For specific locations we know should be coastal
        const knownCoastalLocations = [
          "aldeburgh",
          "southwold",
          "dunwich",
          "walberswick",
          "sizewell",
          "thorpeness",
          "orford",
          "shingle street",
          "felixstowe",
          "lowestoft",
          "great yarmouth",
          "cromer",
          "sheringham",
          "wells",
          "hunstanton",
          "brancaster",
          "blakeney",
          "cley",
          "salthouse",
          "mundesley",
        ]

        if (knownCoastalLocations.some((location) => name.toLowerCase().includes(location))) {
          locationType = "coastal"
        }

        // Check if it has tidal information
        const hasTidalData =
          locationType === "coastal" ||
          description.toLowerCase().includes("tide") ||
          description.toLowerCase().includes("tidal")

        // Map to the closest predefined region based on coordinates
        const mappedRegion = mapToClosestRegion(lat, lng)

        // Add to locations array
        locations.push({
          id: generateId(name),
          name,
          description,
          coordinates: { lat, lng },
          originalCategory,
          regionId: mappedRegion.id,
          regionName: mappedRegion.name,
          type: locationType,
          tidalLocation: locationType === "coastal" || hasTidalData,
          googleMapsData: googleMapsData,
          rawHtml: rawHtml, // Include the raw HTML for debugging
        })
      } catch (err) {
        console.warn("Error processing placemark:", err)
        // Continue with next placemark
      }
    })

    return locations
  } catch (error) {
    console.error("KML parsing error:", error)
    throw new Error("Failed to parse KML file: " + error.message)
  }
}

// Helper function to generate an ID from a name
function generateId(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}
