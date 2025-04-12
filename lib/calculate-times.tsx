export function calculateSunTimes(date, coordinates) {
  // Mock implementation for sun times calculation
  const baseDate = new Date(date)

  // Check if the date is valid
  if (isNaN(baseDate.getTime())) {
    console.error("Invalid date provided to calculateSunTimes:", date)
    // Return default values for an invalid date
    return {
      firstLight: null,
      sunrise: null,
      sunset: null,
      lastLight: null,
    }
  }

  baseDate.setHours(0, 0, 0, 0)

  // Month-based adjustment for seasonal changes
  const month = date.getMonth() // 0-11

  // Latitude adjustment - higher latitudes have earlier sunrise in summer, later in winter
  const latitudeAdjustment = (coordinates.lat - 52) / 10 // Using 52 as a reference for central UK

  // More realistic UK sun times by month
  let sunriseHour, sunriseMinute, sunsetHour, sunsetMinute, firstLightOffset, lastLightOffset

  if (month >= 0 && month <= 1) {
    // January-February (Winter)
    sunriseHour = 8
    sunriseMinute = 15
    sunsetHour = 16
    sunsetMinute = 30
    firstLightOffset = 30 // minutes before sunrise
    lastLightOffset = 30 // minutes after sunset
  } else if (month >= 2 && month <= 3) {
    // March-April (Early Spring)
    sunriseHour = 6
    sunriseMinute = 45
    sunsetHour = 19
    sunsetMinute = 30
    firstLightOffset = 35
    lastLightOffset = 35
  } else if (month >= 4 && month <= 5) {
    // May-June (Late Spring/Early Summer)
    sunriseHour = 5
    sunriseMinute = 0
    sunsetHour = 21
    sunsetMinute = 15
    firstLightOffset = 40
    lastLightOffset = 40
  } else if (month >= 6 && month <= 7) {
    // July-August (Summer)
    sunriseHour = 5
    sunriseMinute = 15
    sunsetHour = 21
    sunsetMinute = 30
    firstLightOffset = 40
    lastLightOffset = 40
  } else if (month >= 8 && month <= 9) {
    // September-October (Autumn)
    sunriseHour = 6
    sunriseMinute = 45
    sunsetHour = 19
    sunsetMinute = 0
    firstLightOffset = 35
    lastLightOffset = 35
  } else {
    // November-December (Winter)
    sunriseHour = 8
    sunriseMinute = 0
    sunsetHour = 16
    sunsetMinute = 15
    firstLightOffset = 30
    lastLightOffset = 30
  }

  // Apply latitude adjustment
  if (month >= 3 && month <= 8) {
    // Spring/Summer: higher latitudes have earlier sunrise and later sunset
    sunriseHour = Math.max(4, sunriseHour - Math.round(latitudeAdjustment))
    sunsetHour = Math.min(22, sunsetHour + Math.round(latitudeAdjustment))
  } else {
    // Autumn/Winter: higher latitudes have later sunrise and earlier sunset
    sunriseHour = Math.min(9, sunriseHour + Math.round(latitudeAdjustment))
    sunsetHour = Math.max(15, sunsetHour - Math.round(latitudeAdjustment))
  }

  // Create time objects with validation
  try {
    const firstLight = new Date(baseDate)
    firstLight.setHours(sunriseHour, sunriseMinute - firstLightOffset, 0, 0)

    const sunrise = new Date(baseDate)
    sunrise.setHours(sunriseHour, sunriseMinute, 0, 0)

    const sunset = new Date(baseDate)
    sunset.setHours(sunsetHour, sunsetMinute, 0, 0)

    const lastLight = new Date(baseDate)
    lastLight.setHours(sunsetHour, sunsetMinute + lastLightOffset, 0, 0)

    // Validate all dates before returning
    if (
      isNaN(firstLight.getTime()) ||
      isNaN(sunrise.getTime()) ||
      isNaN(sunset.getTime()) ||
      isNaN(lastLight.getTime())
    ) {
      throw new Error("Invalid date calculated")
    }

    return {
      firstLight: firstLight.toISOString(),
      sunrise: sunrise.toISOString(),
      sunset: sunset.toISOString(),
      lastLight: lastLight.toISOString(),
    }
  } catch (error) {
    console.error("Error calculating sun times:", error)
    return {
      firstLight: null,
      sunrise: null,
      sunset: null,
      lastLight: null,
    }
  }
}

export function calculateMockTidalTimes(date, locationId) {
  // Ensure we're working with a proper Date object
  const baseDate = new Date(date)

  // Validate the date
  if (isNaN(baseDate.getTime())) {
    console.error("Invalid date provided to calculateMockTidalTimes:", date)
    return {
      highTides: [],
      lowTides: [],
      midTides: [],
      bestTide: null,
    }
  }

  // Reset time to start of day
  baseDate.setHours(0, 0, 0, 0)

  // Special case for Alnmouth
  if (locationId === "alnmouth" || locationId.includes("alnmouth")) {
    // Get day of year to vary tide times throughout the year
    const dayOfYear = getDayOfYear(baseDate)

    // Create a predictable but varying pattern based on day of year
    // This creates a semi-diurnal tide pattern that shifts by ~50 minutes each day
    // which is close to the natural ~12 hour 25 minute cycle

    // Calculate minutes offset based on day of year (50 minutes per day)
    const minutesOffset = (dayOfYear * 50) % (24 * 60)

    // Base times (for day 0 of the year)
    let highTide1Hour = 4
    let highTide1Minute = 15
    let highTide2Hour = 16
    let highTide2Minute = 30

    let lowTide1Hour = 10
    let lowTide1Minute = 10
    let lowTide2Hour = 22
    let lowTide2Minute = 20

    // Apply the offset to all tide times
    const highTide1Minutes = (highTide1Hour * 60 + highTide1Minute + minutesOffset) % (24 * 60)
    const highTide2Minutes = (highTide2Hour * 60 + highTide2Minute + minutesOffset) % (24 * 60)
    const lowTide1Minutes = (lowTide1Hour * 60 + lowTide1Minute + minutesOffset) % (24 * 60)
    const lowTide2Minutes = (lowTide2Hour * 60 + lowTide2Minute + minutesOffset) % (24 * 60)

    // Convert back to hours and minutes
    highTide1Hour = Math.floor(highTide1Minutes / 60)
    highTide1Minute = highTide1Minutes % 60
    highTide2Hour = Math.floor(highTide2Minutes / 60)
    highTide2Minute = highTide2Minutes % 60
    lowTide1Hour = Math.floor(lowTide1Minutes / 60)
    lowTide1Minute = lowTide1Minutes % 60
    lowTide2Hour = Math.floor(lowTide2Minutes / 60)
    lowTide2Minute = lowTide2Minutes % 60

    // Create Date objects with the calculated times
    const highTide1 = new Date(baseDate)
    highTide1.setHours(highTide1Hour, highTide1Minute, 0, 0)

    const highTide2 = new Date(baseDate)
    highTide2.setHours(highTide2Hour, highTide2Minute, 0, 0)

    const lowTide1 = new Date(baseDate)
    lowTide1.setHours(lowTide1Hour, lowTide1Minute, 0, 0)

    const lowTide2 = new Date(baseDate)
    lowTide2.setHours(lowTide2Hour, lowTide2Minute, 0, 0)

    // Vary heights slightly based on day of year to simulate spring/neap tides
    // Spring tides occur at new and full moons (approximately every 14 days)
    const dayInCycle = dayOfYear % 28
    const springTideFactor = Math.cos((dayInCycle / 28) * 2 * Math.PI)
    const highTideHeight = 4.5 + 0.5 * springTideFactor
    const lowTideHeight = 0.7 - 0.3 * springTideFactor

    return {
      highTides: [
        { time: highTide1.toISOString(), height: Number.parseFloat((highTideHeight - 0.2).toFixed(1)) },
        { time: highTide2.toISOString(), height: Number.parseFloat(highTideHeight.toFixed(1)) },
      ],
      lowTides: [
        { time: lowTide1.toISOString(), height: Number.parseFloat(lowTideHeight.toFixed(1)) },
        { time: lowTide2.toISOString(), height: Number.parseFloat((lowTideHeight - 0.2).toFixed(1)) },
      ],
      midTides: [],
      bestTide: { type: "high", time: highTide2.toISOString(), height: Number.parseFloat(highTideHeight.toFixed(1)) },
    }
  }

  // For all other locations, use a standard tidal pattern that varies by date
  // UK tides follow a semi-diurnal pattern (two high and two low tides each day)
  // The cycle is approximately 12 hours and 25 minutes

  // Get day of year to vary tide times throughout the year
  const dayOfYear = getDayOfYear(baseDate)

  // Calculate minutes offset based on day of year (50 minutes per day)
  const minutesOffset = (dayOfYear * 50) % (24 * 60)

  // Base times (for day 0 of the year)
  let highTide1Hour = 3
  let highTide1Minute = 30
  let highTide2Hour = 15
  let highTide2Minute = 55

  let lowTide1Hour = 9
  let lowTide1Minute = 15
  let lowTide2Hour = 21
  let lowTide2Minute = 30

  // Apply the offset to all tide times
  const highTide1Minutes = (highTide1Hour * 60 + highTide1Minute + minutesOffset) % (24 * 60)
  const highTide2Minutes = (highTide2Hour * 60 + highTide2Minute + minutesOffset) % (24 * 60)
  const lowTide1Minutes = (lowTide1Hour * 60 + lowTide1Minute + minutesOffset) % (24 * 60)
  const lowTide2Minutes = (lowTide2Hour * 60 + lowTide2Minute + minutesOffset) % (24 * 60)

  // Convert back to hours and minutes
  highTide1Hour = Math.floor(highTide1Minutes / 60)
  highTide1Minute = highTide1Minutes % 60
  highTide2Hour = Math.floor(highTide2Minutes / 60)
  highTide2Minute = highTide2Minutes % 60
  lowTide1Hour = Math.floor(lowTide1Minutes / 60)
  lowTide1Minute = lowTide1Minutes % 60
  lowTide2Hour = Math.floor(lowTide2Minutes / 60)
  lowTide2Minute = lowTide2Minutes % 60

  // Create Date objects with the calculated times
  const highTide1 = new Date(baseDate)
  highTide1.setHours(highTide1Hour, highTide1Minute, 0, 0)

  const highTide2 = new Date(baseDate)
  highTide2.setHours(highTide2Hour, highTide2Minute, 0, 0)

  const lowTide1 = new Date(baseDate)
  lowTide1.setHours(lowTide1Hour, lowTide1Minute, 0, 0)

  const lowTide2 = new Date(baseDate)
  lowTide2.setHours(lowTide2Hour, lowTide2Minute, 0, 0)

  // Vary heights slightly based on day of year to simulate spring/neap tides
  // Spring tides occur at new and full moons (approximately every 14 days)
  const dayInCycle = dayOfYear % 28
  const springTideFactor = Math.cos((dayInCycle / 28) * 2 * Math.PI)
  const highTideHeight = 4.3 + 0.4 * springTideFactor
  const lowTideHeight = 0.7 - 0.2 * springTideFactor

  return {
    highTides: [
      { time: highTide1.toISOString(), height: Number.parseFloat((highTideHeight - 0.1).toFixed(1)) },
      { time: highTide2.toISOString(), height: Number.parseFloat(highTideHeight.toFixed(1)) },
    ],
    lowTides: [
      { time: lowTide1.toISOString(), height: Number.parseFloat(lowTideHeight.toFixed(1)) },
      { time: lowTide2.toISOString(), height: Number.parseFloat((lowTideHeight - 0.1).toFixed(1)) },
    ],
    midTides: [],
    bestTide: { type: "high", time: highTide2.toISOString(), height: Number.parseFloat(highTideHeight.toFixed(1)) },
  }
}

// Helper function to get day of year (0-365)
function getDayOfYear(date) {
  const start = new Date(date.getFullYear(), 0, 0)
  const diff = date - start
  const oneDay = 1000 * 60 * 60 * 24
  return Math.floor(diff / oneDay)
}

export async function calculateWorkshopTimes({ date, location, region, locationDetails }) {
  try {
    // Get the coordinates from the location details
    const { coordinates, type, tidalLocation } = locationDetails

    // Calculate sun times
    const sunTimes = calculateSunTimes(date, coordinates)

    // Calculate tidal times if it's a coastal location
    const hasTidalData = type === "coastal" || tidalLocation
    const tidalTimes = hasTidalData ? calculateMockTidalTimes(date, location) : null

    return {
      location: locationDetails.name,
      region: locationDetails.region,
      coordinates: coordinates,
      date: date,
      sunTimes: sunTimes,
      tidalTimes: tidalTimes,
      locationType: type,
      hasTidalData: hasTidalData,
      dataSource: "fallback",
      apiError: null,
    }
  } catch (error) {
    console.error("Error calculating workshop times:", error)
    return null
  }
}
