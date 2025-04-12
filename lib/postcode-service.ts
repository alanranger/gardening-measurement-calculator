/**
 * Service for fetching and caching postcode data from FindThatPostcode API
 */

import { findNearestPostcode } from "@/lib/uk-postcode-data"

// Cache for postcode data to reduce API calls
const postcodeCache = new Map<string, any>()

/**
 * Get the nearest postcode to a given latitude and longitude
 * Uses the FindThatPostcode API: https://findthatpostcode.uk/
 */
export async function getNearestPostcode(lat: number, lng: number): Promise<any> {
  try {
    // Use Promise.race with a timeout instead of AbortController
    const fetchPromise = fetch(`https://findthatpostcode.uk/points/${lat},${lng}.json`, {
      headers: {
        Accept: "application/json",
      },
    })

    // Create a timeout promise
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error("Request timed out after 3 seconds"))
      }, 3000)
    })

    // Race the fetch against the timeout
    const response = (await Promise.race([fetchPromise, timeoutPromise])) as Response

    if (!response.ok) {
      throw new Error(`Failed to fetch postcode: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching postcode:", error)
    // Return null instead of throwing to allow graceful fallback
    return null
  }
}

/**
 * Get the nearest postcode with caching to reduce API calls
 */
export async function getCachedNearestPostcode(lat: number, lng: number): Promise<any> {
  // Round coordinates to 5 decimal places for caching
  // This gives ~1.1m precision which is sufficient for postcodes
  const roundedLat = Math.round(lat * 100000) / 100000
  const roundedLng = Math.round(lng * 100000) / 100000

  const cacheKey = `${roundedLat},${roundedLng}`

  // Check if we have this location in cache
  if (postcodeCache.has(cacheKey)) {
    return postcodeCache.get(cacheKey)
  }

  // Try our local database first before making any API calls
  const nearestPostcode = findNearestPostcode(roundedLat, roundedLng)

  if (nearestPostcode) {
    // Create a compatible data structure for our local postcode data
    const localData = {
      data: {
        attributes: {
          postcode: nearestPostcode.postcode,
          parish: nearestPostcode.area.split(",")[0] || "",
          admin_district: nearestPostcode.area.split(",")[1] || nearestPostcode.area,
        },
      },
    }

    // Cache the local result
    postcodeCache.set(cacheKey, localData)
    return localData
  }

  // Only try the API if we couldn't find a local match
  try {
    const data = await getNearestPostcode(roundedLat, roundedLng)

    // If API call succeeded, cache the result
    if (data) {
      postcodeCache.set(cacheKey, data)
      return data
    }

    // If API call failed, cache null
    postcodeCache.set(cacheKey, null)
    return null
  } catch (error) {
    console.error("Error in getCachedNearestPostcode:", error)
    // Cache null to avoid repeated failed lookups
    postcodeCache.set(cacheKey, null)
    return null
  }
}

/**
 * Format postcode data for display
 */
export function formatPostcodeDisplay(postcodeData: any): string {
  if (!postcodeData || !postcodeData.data) {
    return "Postcode not available"
  }

  try {
    const result = postcodeData.data.attributes

    // Get the postcode
    const postcode = result.postcode

    // Get area information if available
    let areaInfo = ""

    if (result.parish && result.parish !== "None") {
      areaInfo += result.parish
    }

    if (result.admin_district && result.admin_district !== "None") {
      if (areaInfo) areaInfo += ", "
      areaInfo += result.admin_district
    }

    // Return formatted postcode with area if available
    if (areaInfo) {
      return `${postcode} (${areaInfo})`
    }

    return postcode
  } catch (error) {
    console.error("Error formatting postcode data:", error)
    return "Postcode not available"
  }
}
