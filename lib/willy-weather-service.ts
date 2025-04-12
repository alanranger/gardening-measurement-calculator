import { format } from "date-fns"

// Cache for API responses to minimize calls
const apiCache = new Map<string, { data: any; timestamp: number }>()
const CACHE_DURATION = 24 * 60 * 60 * 1000 // 24 hours in milliseconds

/**
 * Get sun times from WillyWeather API
 */
export async function getSunTimes(lat: number, lng: number, date: Date) {
  const cacheKey = `sun_${lat.toFixed(4)}_${lng.toFixed(4)}_${format(date, "yyyy-MM-dd")}`

  // Check cache first
  if (apiCache.has(cacheKey)) {
    const cached = apiCache.get(cacheKey)
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
      console.log("Using cached sun times data")
      return cached.data
    }
  }

  try {
    // Format date for API
    const formattedDate = format(date, "yyyy-MM-dd")

    // Make API request to our server-side endpoint
    console.log(`Requesting sun times for ${lat}, ${lng} on ${formattedDate}`)
    const response = await fetch(`/api/willy-weather?type=sun&lat=${lat}&lng=${lng}&date=${formattedDate}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })

    // Parse response
    const data = await response.json()

    // Check if the API call was successful
    if (data.error) {
      console.error(`API returned error: ${data.error}`)
      const errorMessage = data.details ? `${data.error}: ${data.details}` : data.error
      throw new Error(errorMessage)
    }

    // Process the successful API response
    const sunTimes = processSunTimesData(data.data)

    // Cache the result
    apiCache.set(cacheKey, { data: sunTimes, timestamp: Date.now() })
    return sunTimes
  } catch (error) {
    console.error("Error fetching sun times:", error)
    throw error
  }
}

/**
 * Get tide times from WillyWeather API
 */
export async function getTideTimes(lat: number, lng: number, date: Date, locationId = "") {
  const cacheKey = `tide_${lat.toFixed(4)}_${lng.toFixed(4)}_${format(date, "yyyy-MM-dd")}`

  // Check cache first
  if (apiCache.has(cacheKey)) {
    const cached = apiCache.get(cacheKey)
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
      console.log("Using cached tide times data")
      return cached.data
    }
  }

  try {
    // Format date for API
    const formattedDate = format(date, "yyyy-MM-dd")

    // Make API request to our server-side endpoint
    console.log(`Requesting tide times for ${lat}, ${lng} on ${formattedDate}`)
    const response = await fetch(
      `/api/willy-weather?type=tide&lat=${lat}&lng=${lng}&date=${formattedDate}&locationId=${locationId}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )

    // Parse response
    const data = await response.json()

    // Check if the API call was successful
    if (data.error) {
      console.error(`API returned error: ${data.error}`)
      const errorMessage = data.details ? `${data.error}: ${data.details}` : data.error
      throw new Error(errorMessage)
    }

    // Process the successful API response
    const tideTimes = processTideTimesData(data.data)

    // Cache the result
    apiCache.set(cacheKey, { data: tideTimes, timestamp: Date.now() })
    return tideTimes
  } catch (error) {
    console.error("Error fetching tide times:", error)
    throw error
  }
}

/**
 * Process sun times data from WillyWeather API
 */
function processSunTimesData(data: any) {
  try {
    // Extract the relevant data from the API response
    const sunriseSunsetData = data?.forecasts?.["sunrise-sunset"]?.days?.[0]

    if (!sunriseSunsetData) {
      throw new Error("Sun times data not found in API response")
    }

    // Extract times and convert to ISO strings
    const firstLight = new Date(sunriseSunsetData.civilDawn?.dateTime).toISOString()
    const sunrise = new Date(sunriseSunsetData.sunrise?.dateTime).toISOString()
    const sunset = new Date(sunriseSunsetData.sunset?.dateTime).toISOString()
    const lastLight = new Date(sunriseSunsetData.civilDusk?.dateTime).toISOString()

    return {
      firstLight,
      sunrise,
      sunset,
      lastLight,
    }
  } catch (error) {
    console.error("Error processing sun times data:", error)
    throw new Error("Failed to process sun times data from API")
  }
}

/**
 * Process tide times data from WillyWeather API
 */
function processTideTimesData(data: any) {
  try {
    // Extract the relevant data from the API response
    const tideData = data?.forecasts?.tides?.days?.[0]?.entries

    if (!tideData || !Array.isArray(tideData)) {
      throw new Error("Tide data not found in API response")
    }

    // Filter and map high tides
    const highTides = tideData
      .filter((entry) => entry.type === "high")
      .map((entry) => ({
        time: new Date(entry.dateTime).toISOString(),
        height: entry.height,
      }))

    // Filter and map low tides
    const lowTides = tideData
      .filter((entry) => entry.type === "low")
      .map((entry) => ({
        time: new Date(entry.dateTime).toISOString(),
        height: entry.height,
      }))

    // Calculate mid tides (halfway between high and low)
    const midTides = []

    // For each pair of consecutive high and low tides, calculate a mid tide
    for (let i = 0; i < tideData.length - 1; i++) {
      const current = tideData[i]
      const next = tideData[i + 1]

      if (current.type !== next.type) {
        // One is high, one is low
        const midTime = new Date((new Date(current.dateTime).getTime() + new Date(next.dateTime).getTime()) / 2)
        const midHeight = (current.height + next.height) / 2

        midTides.push({
          time: midTime.toISOString(),
          height: midHeight,
        })
      }
    }

    // Find the best tide for photography (closest to sunset)
    // We'll need to get the sunset time for this date
    // For now, just use the first high tide as a placeholder
    const bestTide = highTides.length > 0 ? { type: "high", ...highTides[0] } : { type: "low", ...lowTides[0] }

    return {
      highTides,
      lowTides,
      midTides,
      bestTide,
    }
  } catch (error) {
    console.error("Error processing tide times data:", error)
    throw new Error("Failed to process tide times data from API")
  }
}

/**
 * Clear API cache
 */
export function clearApiCache() {
  apiCache.clear()
}
