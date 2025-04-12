"use client"

import { useEffect, useState, useRef } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, Marker, Tooltip, ZoomControl } from "react-leaflet"
import type { Location } from "@/lib/uk-locations"
import { findNearestPostcode } from "@/lib/uk-postcode-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface SimpleMapProps {
  locations: Location[]
  height?: string
  width?: string
  zoom?: number
  center?: [number, number]
  showTooltips?: boolean
  selectedRegion?: any
  selectedLocation?: any
}

// Cache for postcodes to avoid repeated API calls
const postcodeCache = new Map<string, string | null>()

// Change from default export to named export to match how it's imported
export function SimpleMap({
  locations,
  height = "400px",
  width = "100%",
  zoom = 6,
  center = [54.5, -3.5],
  showTooltips = true,
  selectedRegion,
  selectedLocation,
}: SimpleMapProps) {
  const [postcodes, setPostcodes] = useState<Map<string, string | null>>(new Map())
  const [isLoadingPostcodes, setIsLoadingPostcodes] = useState(false)
  const isInitialMount = useRef(true)

  // Fix for default marker icons in Leaflet with Next.js
  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "/marker-icon.png",
      iconUrl: "/marker-icon.png",
      shadowUrl: "/marker-shadow.png",
    })
  }, [])

  // Function to extract postcode from location data or find nearest
  const extractPostcode = async (location: Location): Promise<string | null> => {
    const cacheKey = `${location.coordinates.lat.toFixed(6)},${location.coordinates.lng.toFixed(6)}`

    // Check cache first
    if (postcodeCache.has(cacheKey)) {
      return postcodeCache.get(cacheKey) || null
    }

    // Try to find postcode in location data
    if (location.description && location.description.includes("Postcode:")) {
      const match = location.description.match(/Postcode:\s*([A-Z0-9]+\s*[A-Z0-9]+)/i)
      if (match && match[1]) {
        const postcode = match[1].trim()
        postcodeCache.set(cacheKey, postcode)
        return postcode
      }
    }

    // Skip API calls and use local database directly
    const nearestPostcode = findNearestPostcode(location.coordinates.lat, location.coordinates.lng)
    if (nearestPostcode) {
      const postcodeText = `${nearestPostcode.postcode} (${nearestPostcode.area})`
      postcodeCache.set(cacheKey, postcodeText)
      return postcodeText
    }

    // No postcode found
    postcodeCache.set(cacheKey, null)
    return null
  }

  // Load postcodes for visible locations
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
      return
    }

    const loadPostcodes = async () => {
      if (locations.length === 0) return

      setIsLoadingPostcodes(true)
      const newPostcodes = new Map<string, string | null>()

      // Process in batches to avoid overwhelming the system
      const batchSize = 5
      for (let i = 0; i < locations.length; i += batchSize) {
        const batch = locations.slice(i, i + batchSize)
        await Promise.all(
          batch.map(async (location) => {
            try {
              const postcode = await extractPostcode(location)
              newPostcodes.set(`${location.coordinates.lat},${location.coordinates.lng}`, postcode)
            } catch (error) {
              console.error(`Error extracting postcode for location ${location.id}:`, error)
              // Continue with other locations even if one fails
            }
          }),
        )
        // Small delay between batches
        if (i + batchSize < locations.length) {
          await new Promise((resolve) => setTimeout(resolve, 100))
        }
      }

      setPostcodes(newPostcodes)
      setIsLoadingPostcodes(false)
    }

    loadPostcodes()
  }, [locations])

  // Function to get postcode for a location
  const getPostcode = (location: Location): string => {
    const key = `${location.coordinates.lat},${location.coordinates.lng}`
    const postcode = postcodes.get(key)
    return postcode || "Loading postcode..."
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Location Map</CardTitle>
        {selectedRegion && (
          <Badge variant="outline">
            {selectedRegion.name} ({locations.length} locations)
          </Badge>
        )}
      </CardHeader>
      <CardContent>
        <div style={{ height, width: "100%", position: "relative" }}>
          <MapContainer center={center} zoom={zoom} style={{ height: "100%", width: "100%" }} zoomControl={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ZoomControl position="bottomright" />

            {locations.map((location, index) => (
              <Marker
                key={`${location.coordinates.lat}-${location.coordinates.lng}-${index}`}
                position={[location.coordinates.lat, location.coordinates.lng]}
                title={location.name}
              >
                {showTooltips && (
                  <Tooltip direction="top" offset={[0, -40]} opacity={1} permanent>
                    <div>
                      <strong>{location.name}</strong>
                      <br />
                      {getPostcode(location)}
                    </div>
                  </Tooltip>
                )}
              </Marker>
            ))}
          </MapContainer>
        </div>
        <div className="mt-3 text-xs text-muted-foreground text-center">
          <p>
            <span className="inline-block w-3 h-3 rounded-full bg-red-500 mr-1"></span> Inland locations
            <span className="inline-block w-3 h-3 rounded-full bg-blue-500 mx-1 ml-3"></span> Coastal/Tidal locations
            <span className="inline-block w-3 h-3 rounded-full bg-orange-500 mx-1 ml-3"></span> Selected location
          </p>
          <p className="mt-1">Use the interactive map for detailed information and tidal data</p>
        </div>
      </CardContent>
    </Card>
  )
}
