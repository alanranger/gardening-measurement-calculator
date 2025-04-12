import { NextResponse } from "next/server"

// Fallback function for when the API call fails
function getSimulatedRoute(startLat: number, startLng: number, endLat: number, endLng: number) {
  // Calculate straight-line distance first (Haversine formula)
  const R = 3959 // Radius of the earth in miles (instead of 6371 km)
  const dLat = deg2rad(endLat - startLat)
  const dLng = deg2rad(endLng - startLng)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(startLat)) * Math.cos(deg2rad(endLat)) * Math.sin(dLng / 2) * Math.sin(dLng / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const distanceMiles = R * c // Distance in miles

  // Apply a "winding factor" to simulate real roads (typically 20-40% longer than straight line)
  // For rural/mountainous areas, this can be even higher
  const windingFactor = 1.3 + Math.random() * 0.2 // Between 1.3 and 1.5

  // Check if we're in a known mountainous or complex road area
  // This is a simplified approach - real implementation would use geofencing
  const isMountainous =
    // Scottish Highlands
    (startLat > 56.5 && startLng < -4.0) ||
    (endLat > 56.5 && endLng < -4.0) ||
    // Lake District
    (startLat > 54.3 && startLat < 54.8 && startLng > -3.5 && startLng < -2.8) ||
    (endLat > 54.3 && endLat < 54.8 && endLng > -3.5 && endLng < -2.8) ||
    // Snowdonia
    (startLat > 52.8 && startLat < 53.2 && startLng > -4.2 && startLng < -3.8) ||
    (endLat > 52.8 && endLat < 53.2 && endLng > -4.2 && endLng < -3.8)

  // Apply additional factor for mountainous areas
  const terrainFactor = isMountainous ? 1.2 : 1.0

  // Calculate adjusted distance
  const adjustedDistanceMiles = distanceMiles * windingFactor * terrainFactor

  // For very short distances, show in feet
  let distanceText
  if (adjustedDistanceMiles < 0.1) {
    const distanceFeet = Math.round(adjustedDistanceMiles * 5280)
    distanceText = `${distanceFeet} feet`
  } else {
    distanceText = `${adjustedDistanceMiles.toFixed(1)} miles`
  }

  // Calculate driving time based on average speeds
  // Rural roads: ~40 mph, Highways: ~60 mph
  // We'll use a weighted average based on the distance
  const isLongDistance = adjustedDistanceMiles > 30
  const avgSpeedMph = isLongDistance ? 50 : 40

  // Adjust speed for mountainous terrain
  const adjustedSpeed = isMountainous ? avgSpeedMph * 0.8 : avgSpeedMph

  // Calculate time in minutes
  const timeHours = adjustedDistanceMiles / adjustedSpeed
  const timeMinutes = Math.round(timeHours * 60)

  // Add traffic factor (random 5-15% increase for realism)
  const trafficFactor = 1 + (Math.random() * 0.1 + 0.05)
  const finalTimeMinutes = Math.round(timeMinutes * trafficFactor)

  // Calculate traffic variations (±20% for typical variations)
  const minTimeMinutes = Math.round(finalTimeMinutes * 0.8)
  const maxTimeMinutes = Math.round(finalTimeMinutes * 1.2)

  // Format the duration text with range
  const durationText = formatDurationRange(finalTimeMinutes, minTimeMinutes, maxTimeMinutes)

  return {
    distance: {
      text: distanceText,
      value: Math.round(adjustedDistanceMiles * 5280), // Convert to feet for consistency
    },
    duration: {
      text: durationText,
      value: finalTimeMinutes * 60, // Convert to seconds for consistency with Google API
      range: {
        min: minTimeMinutes * 60,
        max: maxTimeMinutes * 60,
      },
    },
    trafficInfo: {
      typical: finalTimeMinutes,
      minimum: minTimeMinutes,
      maximum: maxTimeMinutes,
    },
    source: "simulation",
  }
}

// Helper function to format duration with range
function formatDurationRange(typical: number, min: number, max: number): string {
  // Convert minutes to hours and minutes format
  const formatTime = (minutes: number) => {
    if (minutes < 60) {
      return `${minutes} mins`
    } else {
      const hours = Math.floor(minutes / 60)
      const mins = minutes % 60
      return mins > 0 ? `${hours} hours ${mins} mins` : `${hours} hours`
    }
  }

  const typicalText = formatTime(typical)

  // For short durations, don't show the range
  if (typical < 20) {
    return typicalText
  }

  // For longer durations, show the range
  return `${typicalText} (±${Math.round((max - min) / 2)} mins)`
}

function deg2rad(degrees: number) {
  return degrees * (Math.PI / 180)
}

async function getRouteFromGoogleMaps(startLat: number, startLng: number, endLat: number, endLng: number) {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY

  if (!apiKey) {
    return {
      error: "Google Maps API key not configured",
      source: "error",
      details: "The GOOGLE_MAPS_API_KEY environment variable is not set",
      fixInstructions: "Please add your Google Maps API key to the environment variables",
    }
  }

  try {
    // Construct the Google Maps Directions API URL
    // Add departure_time=now to get current traffic conditions
    const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${startLat},${startLng}&destination=${endLat},${endLng}&departure_time=now&key=${apiKey}`

    console.log(`Calling Google Maps API: ${url.replace(apiKey, "API_KEY_HIDDEN")}`)

    const response = await fetch(url)

    // Check if the response is OK
    if (!response.ok) {
      return {
        error: `Google Maps API returned status ${response.status}`,
        source: "error",
        details: `HTTP error: ${response.statusText}`,
      }
    }

    const data = await response.json()

    // Check if the API returned an error status
    if (data.status !== "OK") {
      return {
        error: `Google Maps API error: ${data.status}`,
        source: "error",
        details: data.error_message || "No additional details available",
        fixInstructions: getFixInstructions(data.status),
      }
    }

    // Extract the route information
    const route = data.routes[0].legs[0]

    // Convert distance to miles if it's in kilometers
    let distanceText = route.distance.text
    if (distanceText.includes("km")) {
      const km = Number.parseFloat(distanceText.replace(" km", ""))
      const miles = km * 0.621371
      distanceText = `${miles.toFixed(1)} miles`
    }

    // Calculate traffic variations (±15% for typical variations)
    const durationInSeconds = route.duration.value
    const durationInMinutes = Math.round(durationInSeconds / 60)
    const minTimeMinutes = Math.round(durationInMinutes * 0.85)
    const maxTimeMinutes = Math.round(durationInMinutes * 1.15)

    // Check if we have duration_in_traffic
    let trafficDurationText = route.duration.text
    let trafficDurationValue = route.duration.value

    if (route.duration_in_traffic) {
      trafficDurationText = route.duration_in_traffic.text
      trafficDurationValue = route.duration_in_traffic.value
    }

    // Format the duration text with range
    const durationText = formatDurationRange(Math.round(trafficDurationValue / 60), minTimeMinutes, maxTimeMinutes)

    return {
      distance: {
        text: distanceText,
        value: route.distance.value,
      },
      duration: {
        text: durationText,
        value: trafficDurationValue,
        range: {
          min: minTimeMinutes * 60,
          max: maxTimeMinutes * 60,
        },
      },
      trafficInfo: {
        typical: Math.round(trafficDurationValue / 60),
        minimum: minTimeMinutes,
        maximum: maxTimeMinutes,
        current: route.duration_in_traffic ? Math.round(route.duration_in_traffic.value / 60) : null,
      },
      source: "google_maps",
    }
  } catch (error) {
    console.error("Error fetching from Google Maps API:", error)
    return {
      error: `Failed to fetch from Google Maps API: ${error instanceof Error ? error.message : String(error)}`,
      source: "error",
      details: "There was an error making the request to the Google Maps API",
    }
  }
}

// Helper function to provide specific fix instructions based on the error
function getFixInstructions(status: string): string {
  switch (status) {
    case "INVALID_REQUEST":
      return "The request was invalid. Check that the coordinates are valid and try again."
    case "OVER_QUERY_LIMIT":
      return "You have exceeded your Google Maps API quota. Check your billing settings in the Google Cloud Console."
    case "REQUEST_DENIED":
      return "The request was denied. Make sure the Directions API is enabled in your Google Cloud Console and your API key has the correct restrictions."
    case "UNKNOWN_ERROR":
      return "An unknown error occurred. Please try again later."
    case "ZERO_RESULTS":
      return "No route could be found between the origin and destination. Try different locations."
    default:
      return "Check your Google Maps API configuration and make sure the Directions API is enabled."
  }
}

export async function POST(request: Request) {
  try {
    // First, try to parse the request body
    let body
    try {
      body = await request.json()
    } catch (parseError) {
      console.error("Error parsing request body:", parseError)
      return NextResponse.json(
        {
          error: "Invalid request body",
          details: "The request body could not be parsed as JSON",
        },
        { status: 400 },
      )
    }

    const { startLat, startLng, endLat, endLng } = body

    // Validate inputs
    if (!startLat || !startLng || !endLat || !endLng) {
      return NextResponse.json({ error: "Missing required coordinates" }, { status: 400 })
    }

    // First try to get route from Google Maps API
    const googleMapsResult = await getRouteFromGoogleMaps(startLat, startLng, endLat, endLng)

    // Check if there was an error with the Google Maps API
    if (googleMapsResult.source === "error") {
      console.log("Falling back to simulation due to Google Maps API error:", googleMapsResult.error)

      // Use our simulation as fallback
      const simulatedRoute = getSimulatedRoute(startLat, startLng, endLat, endLng)

      return NextResponse.json({
        success: true,
        route: simulatedRoute,
        source: "simulation",
        googleMapsError: googleMapsResult.error,
        googleMapsErrorDetails: googleMapsResult.details || "No additional details available",
        fixInstructions: googleMapsResult.fixInstructions || null,
      })
    }

    // If Google Maps API worked, return that data
    return NextResponse.json({
      success: true,
      route: googleMapsResult,
      source: "google_maps",
    })
  } catch (error) {
    console.error("Error calculating route:", error)

    // Even if there's an error, try to return a simulated route
    try {
      let body
      try {
        body = await request.json()
      } catch (parseError) {
        // If we can't parse the body, create a default response
        return NextResponse.json(
          {
            error: "Failed to calculate route",
            message: "Invalid request format",
          },
          { status: 400 },
        )
      }

      const { startLat, startLng, endLat, endLng } = body

      if (startLat && startLng && endLat && endLng) {
        const simulatedRoute = getSimulatedRoute(startLat, startLng, endLat, endLng)
        return NextResponse.json({
          success: true,
          route: simulatedRoute,
          source: "simulation",
          error: "Used simulation due to error: " + (error instanceof Error ? error.message : String(error)),
        })
      }
    } catch (fallbackError) {
      console.error("Error in fallback route calculation:", fallbackError)
    }

    // Last resort error response
    return NextResponse.json(
      {
        error: "Failed to calculate route",
        message: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}
