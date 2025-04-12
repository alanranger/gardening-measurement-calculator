// Function to find the nearest postcode to given coordinates

import { type PostcodeMapping, postcodeData } from "./postcode-data" // Assuming postcode data is in a separate file

function deg2rad(deg: number): number {
  return deg * (Math.PI / 180)
}

export function findNearestPostcode(lat: number, lng: number): PostcodeMapping | null {
  if (!postcodeData || postcodeData.length === 0) return null

  let nearestPostcode = postcodeData[0]
  let minDistance = calculateDistance(lat, lng, nearestPostcode.lat, nearestPostcode.lng)

  for (let i = 1; i < postcodeData.length; i++) {
    const distance = calculateDistance(lat, lng, postcodeData[i].lat, postcodeData[i].lng)
    if (distance < minDistance) {
      minDistance = distance
      nearestPostcode = postcodeData[i]
    }
  }

  // Only return if within reasonable distance (12 miles, which is approximately 20km)
  if (minDistance <= 12) {
    return nearestPostcode
  }

  return null
}

// Calculate distance between two points using Haversine formula
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 3959 // Radius of the earth in miles
  const dLat = deg2rad(lat2 - lat1)
  const dLon = deg2rad(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const d = R * c // Distance in miles
  return d
}
