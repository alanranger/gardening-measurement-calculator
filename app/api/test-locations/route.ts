import { NextResponse } from "next/server"
import { format } from "date-fns"
import { calculateSunTimes, calculateMockTidalTimes } from "@/lib/calculate-times"

// Define 10 test locations across the UK
const testLocations = [
  { id: "alnmouth", name: "Alnmouth, Northumberland", lat: 55.3369, lng: -1.6129, type: "coastal" },
  { id: "bamburgh-castle", name: "Bamburgh Castle, Northumberland", lat: 55.6089, lng: -1.7099, type: "coastal" },
  { id: "holy-island", name: "Holy Island, Northumberland", lat: 55.6813, lng: -1.8008, type: "coastal" },
  { id: "durdle-door", name: "Durdle Door, Dorset", lat: 50.6212, lng: -2.2765, type: "coastal" },
  { id: "st-michaels-mount", name: "St. Michael's Mount, Cornwall", lat: 50.1177, lng: -5.4768, type: "coastal" },
  { id: "seven-sisters", name: "Seven Sisters, Sussex", lat: 50.7502, lng: 0.1548, type: "coastal" },
  { id: "loch-linnhe", name: "Loch Linnhe, Highlands", lat: 56.8167, lng: -5.1167, type: "coastal" },
  { id: "giants-causeway", name: "Giant's Causeway, Antrim", lat: 55.2408, lng: -6.5115, type: "coastal" },
  { id: "rhossili-bay", name: "Rhossili Bay, Gower", lat: 51.5684, lng: -4.2929, type: "coastal" },
  { id: "aldeburgh", name: "Aldeburgh, Suffolk", lat: 52.1533, lng: 1.6013, type: "coastal" },
]

export async function GET() {
  try {
    const today = new Date()
    const results = []

    // Test each location
    for (const location of testLocations) {
      try {
        // Calculate sun times using our fallback method
        const sunTimes = calculateSunTimes(today, { lat: location.lat, lng: location.lng })

        // Calculate tide times using our fallback method
        const tideTimes = calculateMockTidalTimes(today, location.id)

        // Try to get actual data from WillyWeather API
        let apiSunTimes = null
        let apiTideTimes = null
        let apiError = null

        try {
          // Make API request to our WillyWeather API endpoint
          const apiResponse = await fetch(
            `/api/willy-weather?type=sun&lat=${location.lat}&lng=${location.lng}&date=${format(today, "yyyy-MM-dd")}`,
          )

          if (!apiResponse.ok) {
            throw new Error(`API returned status ${apiResponse.status}`)
          }

          const apiData = await apiResponse.json()

          if (apiData.error) {
            throw new Error(apiData.error)
          }

          // Process the API response
          apiSunTimes = {
            firstLight: apiData.data?.forecasts?.["sunrise-sunset"]?.days?.[0]?.civilDawn?.dateTime,
            sunrise: apiData.data?.forecasts?.["sunrise-sunset"]?.days?.[0]?.sunrise?.dateTime,
            sunset: apiData.data?.forecasts?.["sunrise-sunset"]?.days?.[0]?.sunset?.dateTime,
            lastLight: apiData.data?.forecasts?.["sunrise-sunset"]?.days?.[0]?.civilDusk?.dateTime,
          }

          // Get tide times if it's a coastal location
          if (location.type === "coastal") {
            const tideResponse = await fetch(
              `/api/willy-weather?type=tide&lat=${location.lat}&lng=${location.lng}&date=${format(today, "yyyy-MM-dd")}&locationId=${location.id}`,
            )

            if (!tideResponse.ok) {
              throw new Error(`Tide API returned status ${tideResponse.status}`)
            }

            const tideData = await tideResponse.json()

            if (tideData.error) {
              throw new Error(tideData.error)
            }

            // Process the tide data
            const entries = tideData.data?.forecasts?.tides?.days?.[0]?.entries || []

            apiTideTimes = {
              highTides: entries
                .filter((e) => e.type === "high")
                .map((e) => ({
                  time: e.dateTime,
                  height: e.height,
                })),
              lowTides: entries
                .filter((e) => e.type === "low")
                .map((e) => ({
                  time: e.dateTime,
                  height: e.height,
                })),
            }
          }
        } catch (error) {
          apiError = error.message
        }

        // Compare the calculated times with the API times
        const comparison = {
          location: location.name,
          coordinates: { lat: location.lat, lng: location.lng },
          sunTimes: {
            calculated: {
              firstLight: format(new Date(sunTimes.firstLight), "HH:mm"),
              sunrise: format(new Date(sunTimes.sunrise), "HH:mm"),
              sunset: format(new Date(sunTimes.sunset), "HH:mm"),
              lastLight: format(new Date(sunTimes.lastLight), "HH:mm"),
            },
            api: apiSunTimes
              ? {
                  firstLight: apiSunTimes.firstLight ? format(new Date(apiSunTimes.firstLight), "HH:mm") : null,
                  sunrise: apiSunTimes.sunrise ? format(new Date(apiSunTimes.sunrise), "HH:mm") : null,
                  sunset: apiSunTimes.sunset ? format(new Date(apiSunTimes.sunset), "HH:mm") : null,
                  lastLight: apiSunTimes.lastLight ? format(new Date(apiSunTimes.lastLight), "HH:mm") : null,
                }
              : null,
            differences: apiSunTimes
              ? {
                  firstLight: calculateTimeDifference(sunTimes.firstLight, apiSunTimes.firstLight),
                  sunrise: calculateTimeDifference(sunTimes.sunrise, apiSunTimes.sunrise),
                  sunset: calculateTimeDifference(sunTimes.sunset, apiSunTimes.sunset),
                  lastLight: calculateTimeDifference(sunTimes.lastLight, apiSunTimes.lastLight),
                }
              : null,
          },
          tideTimes:
            location.type === "coastal"
              ? {
                  calculated: {
                    highTides: tideTimes.highTides.map((t) => ({
                      time: format(new Date(t.time), "HH:mm"),
                      height: t.height,
                    })),
                    lowTides: tideTimes.lowTides.map((t) => ({
                      time: format(new Date(t.time), "HH:mm"),
                      height: t.height,
                    })),
                  },
                  api: apiTideTimes
                    ? {
                        highTides: apiTideTimes.highTides.map((t) => ({
                          time: format(new Date(t.time), "HH:mm"),
                          height: t.height,
                        })),
                        lowTides: apiTideTimes.lowTides.map((t) => ({
                          time: format(new Date(t.time), "HH:mm"),
                          height: t.height,
                        })),
                      }
                    : null,
                  differences: apiTideTimes
                    ? {
                        highTides: tideTimes.highTides.map((t, i) => ({
                          time: apiTideTimes.highTides[i]
                            ? calculateTimeDifference(t.time, apiTideTimes.highTides[i].time)
                            : null,
                          height: apiTideTimes.highTides[i]
                            ? Math.abs(t.height - apiTideTimes.highTides[i].height).toFixed(1) + "m"
                            : null,
                        })),
                        lowTides: tideTimes.lowTides.map((t, i) => ({
                          time: apiTideTimes.lowTides[i]
                            ? calculateTimeDifference(t.time, apiTideTimes.lowTides[i].time)
                            : null,
                          height: apiTideTimes.lowTides[i]
                            ? Math.abs(t.height - apiTideTimes.lowTides[i].height).toFixed(1) + "m"
                            : null,
                        })),
                      }
                    : null,
                }
              : null,
          apiError,
        }

        results.push(comparison)
      } catch (error) {
        results.push({
          location: location.name,
          error: error.message,
        })
      }
    }

    return NextResponse.json({
      date: format(today, "yyyy-MM-dd"),
      results,
      summary: {
        totalLocations: testLocations.length,
        successfulTests: results.filter((r) => !r.error).length,
        failedTests: results.filter((r) => r.error).length,
      },
    })
  } catch (error) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 },
    )
  }
}

// Helper function to calculate time difference in minutes
function calculateTimeDifference(time1, time2) {
  if (!time1 || !time2) return null

  const date1 = new Date(time1)
  const date2 = new Date(time2)

  const diffMs = Math.abs(date1 - date2)
  const diffMins = Math.round(diffMs / 60000)

  return `${diffMins} mins`
}
