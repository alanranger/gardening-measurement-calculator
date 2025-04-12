import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    // Get API key from environment variable
    const apiKey = process.env.WILLY_WEATHER_API_KEY

    if (!apiKey) {
      return NextResponse.json({ error: "API key not configured" }, { status: 500 })
    }

    // Get the URL from the search params
    const { searchParams } = new URL(request.url)
    const lat = searchParams.get("lat") || "55.3369" // Default to Alnmouth
    const lng = searchParams.get("lng") || "-1.6129"

    // Log the request details
    console.log(`Testing WillyWeather API for coordinates: ${lat}, ${lng}`)

    // Construct API URL for WillyWeather
    // Note: This URL structure is based on the documentation you provided
    // You may need to adjust it based on the actual API documentation
    const url = `https://api.willyweather.co.uk/v2/${apiKey}/locations/search.json?lat=${lat}&lng=${lng}`

    console.log(`Calling WillyWeather API: ${url}`)

    // Make the API request
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      cache: "no-store", // Ensure we get fresh data
    })

    if (!response.ok) {
      console.error(`API error: ${response.status} ${response.statusText}`)
      return NextResponse.json(
        {
          error: `API returned ${response.status} ${response.statusText}`,
          details: await response.text(),
        },
        { status: response.status },
      )
    }

    // Return the raw API response
    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error calling WillyWeather API:", error)
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
