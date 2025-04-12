"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPinIcon, WavesIcon, InfoIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { calculateMockTidalTimes, calculateSunTimes } from "@/lib/calculate-times"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { findNearestPostcode } from "@/lib/uk-postcode-data"
import "leaflet/dist/leaflet.css"
import type { Location } from "@/lib/uk-locations"

interface DetailedMapProps {
  locations: Location[]
  selectedLocation: Location | null
  onLocationSelect?: (location: Location) => void
  height?: string
  width?: string
  showInfoPanel?: boolean
}

// Change back to named export to match existing imports
export function DetailedMap({
  selectedRegion,
  locations = [],
  selectedLocation = null,
  height = "700px", // Increased from 600px to 700px
  selectedDate = new Date(),
}) {
  const mapContainerRef = useRef(null)
  const [mapLoaded, setMapLoaded] = useState(false)
  const mapInstanceRef = useRef(null)
  const markersRef = useRef([])
  const [error, setError] = useState(null)
  const tileErrorRef = useRef(false)
  const scriptLoadedRef = useRef(false)
  const popupRef = useRef(null)

  // Add a state for postcodes
  const [componentPostcodeCache, setComponentPostcodeCache] = useState({})

  // Add this function to get postcode with caching at the component level
  const getPostcodeFromLocation = useCallback(
    async (location) => {
      if (!location) return null

      // Check if we already have this postcode in our component cache
      const cacheKey = `${location.id}`
      if (componentPostcodeCache[cacheKey]) {
        return componentPostcodeCache[cacheKey]
      }

      // First check if there's a postcode in the googleMapsData
      if (location.googleMapsData && location.googleMapsData.address) {
        const address = location.googleMapsData.address

        // UK postcode regex
        const postcodeRegex = /\b[A-Z]{1,2}[0-9][0-9A-Z]?\s?[0-9][A-Z]{2}\b/gi
        const postcodeMatch = address.match(postcodeRegex)

        if (postcodeMatch) {
          const postcode = postcodeMatch[0]
          return postcode
        }
      }

      // Always use local database first - this is the most reliable approach
      if (location.coordinates) {
        const { lat, lng } = location.coordinates
        const nearestPostcode = findNearestPostcode(lat, lng)

        if (nearestPostcode) {
          const formattedPostcode = `${nearestPostcode.postcode} (${nearestPostcode.area})`
          return formattedPostcode
        }
      }

      // If no match found, return null
      return null
    },
    [componentPostcodeCache],
  )

  // Now replace the useEffect for loading postcodes with this version
  // that properly updates the state only once per batch

  useEffect(() => {
    if (!mapLoaded) return

    // Load postcodes for all visible locations
    const loadPostcodes = async () => {
      try {
        // Process in batches to avoid overwhelming the system
        const batchSize = 5
        const newPostcodes = { ...componentPostcodeCache }
        let hasUpdates = false

        for (let i = 0; i < locations.length; i += batchSize) {
          const batch = locations.slice(i, i + batchSize)
          const results = await Promise.all(
            batch.map(async (location) => {
              try {
                const postcode = await getPostcodeFromLocation(location)
                return { id: location.id, postcode }
              } catch (err) {
                console.error(`Error loading postcode for ${location.name}:`, err)
                return { id: location.id, postcode: null }
              }
            }),
          )

          // Update the cache with the results
          results.forEach(({ id, postcode }) => {
            if (postcode && !newPostcodes[id]) {
              newPostcodes[id] = postcode
              hasUpdates = true
            }
          })

          // Small delay between batches
          if (i + batchSize < locations.length) {
            await new Promise((resolve) => setTimeout(resolve, 100))
          }
        }

        // Also load for selected location if not in the locations array
        if (
          selectedLocation &&
          !locations.find((loc) => loc.id === selectedLocation.id) &&
          !newPostcodes[selectedLocation.id]
        ) {
          const postcode = await getPostcodeFromLocation(selectedLocation)
          if (postcode) {
            newPostcodes[selectedLocation.id] = postcode
            hasUpdates = true
          }
        }

        // Only update state if we have new postcodes
        if (hasUpdates) {
          setComponentPostcodeCache(newPostcodes)
        }
      } catch (error) {
        console.error("Error loading postcodes:", error)
        // Continue with the map even if postcode loading fails
      }
    }

    loadPostcodes()
  }, [mapLoaded, locations, selectedLocation, getPostcodeFromLocation])

  // Function to determine marker type based on location data
  const getMarkerType = (location) => {
    // Check for parking locations
    if (
      location.category?.toLowerCase().includes("parking") ||
      location.name.toLowerCase().includes("parking") ||
      location.name.toLowerCase().includes("car park") ||
      location.googleMapsData?.category?.toLowerCase().includes("parking") ||
      location.googleMapsData?.parking
    ) {
      return "parking"
    }

    // Check for restaurants, cafes, hotels
    if (
      location.category?.toLowerCase().includes("restaurant") ||
      location.category?.toLowerCase().includes("café") ||
      location.category?.toLowerCase().includes("cafe") ||
      location.category?.toLowerCase().includes("hotel") ||
      location.category?.toLowerCase().includes("accommodation") ||
      location.category?.toLowerCase().includes("pub") ||
      location.category?.toLowerCase().includes("bar") ||
      location.name.toLowerCase().includes("restaurant") ||
      location.name.toLowerCase().includes("café") ||
      location.name.toLowerCase().includes("cafe") ||
      location.name.toLowerCase().includes("hotel") ||
      location.name.toLowerCase().includes("pub") ||
      location.name.toLowerCase().includes("bar") ||
      location.googleMapsData?.category?.toLowerCase().includes("restaurant") ||
      location.googleMapsData?.category?.toLowerCase().includes("café") ||
      location.googleMapsData?.category?.toLowerCase().includes("cafe") ||
      location.googleMapsData?.category?.toLowerCase().includes("hotel") ||
      location.googleMapsData?.category?.toLowerCase().includes("pub") ||
      location.googleMapsData?.category?.toLowerCase().includes("bar")
    ) {
      return "hospitality"
    }

    // Default to location
    return "location"
  }

  // Add a function to validate and correct coordinates
  const validateCoordinates = (lat, lng) => {
    // UK mainland rough boundaries
    const ukBounds = {
      minLat: 49.5, // Southern tip of UK
      maxLat: 58.7, // Northern tip of mainland Scotland
      minLng: -8.2, // Western edge
      maxLng: 1.8, // Eastern edge
    }

    // Check if coordinates are within UK bounds
    let validLat = lat
    let validLng = lng

    // If coordinates are clearly in the sea (more than 0.5 degrees from land)
    // Adjust them to be closer to land
    if (lat < ukBounds.minLat) validLat = ukBounds.minLat
    if (lat > ukBounds.maxLat) validLat = ukBounds.maxLat
    if (lng < ukBounds.minLng) validLng = ukBounds.minLng
    if (lng > ukBounds.maxLng) validLng = ukBounds.maxLng

    // Special case for North East England - adjust pins that appear in the sea
    if (lat > 54.5 && lat < 56.0 && lng > -1.5 && lng < 0.5) {
      // This is the North East region where pins might be in the sea
      // Move pins slightly west if they're too far east
      if (lng > 0) {
        validLng = -0.2 // Move closer to shore
      }
    }

    return { lat: validLat, lng: validLng }
  }

  // Initialize map when component mounts
  useEffect(() => {
    // Prevent multiple initializations
    if (mapInstanceRef.current || scriptLoadedRef.current) return

    // Check if leaflet is available
    if (typeof window !== "undefined" && !window.L) {
      // Load Leaflet dynamically
      scriptLoadedRef.current = true

      const link = document.createElement("link")
      link.rel = "stylesheet"
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      document.head.appendChild(link)

      const script = document.createElement("script")
      script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
      script.async = true
      script.onload = initializeMap
      script.onerror = () => setError("Failed to load map library")
      document.body.appendChild(script)

      return () => {
        // Clean up script and link if component unmounts before loading completes
        if (document.head.contains(link)) {
          document.head.removeChild(link)
        }
        if (document.body.contains(script)) {
          document.body.removeChild(script)
        }
        scriptLoadedRef.current = false
      }
    } else if (window.L) {
      initializeMap()
    }

    function initializeMap() {
      if (!mapContainerRef.current || mapInstanceRef.current) return

      try {
        // Create map instance
        const L = window.L
        const map = L.map(mapContainerRef.current, {
          // Add these options to improve performance and reliability
          preferCanvas: true,
          minZoom: 3,
          maxZoom: 18,
          zoomControl: true,
          attributionControl: true,
        }).setView([54.5, -3.5], 5)

        // Try multiple tile providers to improve reliability
        // First try: OpenStreetMap (may have CORS issues in some environments)
        const osmLayer = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 19,
          crossOrigin: "anonymous",
        })

        // Second option: OpenStreetMap via HTTPS proxy (may help with CORS)
        const osmSecureLayer = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 19,
          crossOrigin: "anonymous",
        })

        // Third option: Stamen Terrain (alternative provider)
        const stamenLayer = L.tileLayer("https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png", {
          attribution:
            'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
          maxZoom: 18,
          crossOrigin: "anonymous",
        })

        // Fourth option: Carto (another alternative provider)
        const cartoLayer = L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: "abcd",
          maxZoom: 19,
          crossOrigin: "anonymous",
        })

        // Add the first layer to the map
        osmLayer.addTo(map)

        // Handle tile loading errors by switching to alternative providers
        osmLayer.on("tileerror", () => {
          if (!tileErrorRef.current) {
            tileErrorRef.current = true
            map.removeLayer(osmLayer)

            // Try the second provider
            osmSecureLayer.addTo(map)

            // Set up error handling for the second provider
            osmSecureLayer.on("tileerror", () => {
              map.removeLayer(osmSecureLayer)

              // Try the third provider
              stamenLayer.addTo(map)

              // Set up error handling for the third provider
              stamenLayer.on("tileerror", () => {
                map.removeLayer(stamenLayer)

                // Try the fourth provider as last resort
                cartoLayer.addTo(map)
              })
            })
          }
        })

        // Add a simple fallback background in case all tile providers fail
        const fallbackPane = map.createPane("fallbackPane")
        fallbackPane.style.zIndex = 100
        const fallbackLayer = L.rectangle(
          [
            [-90, -180],
            [90, 180],
          ],
          {
            color: "#e5e7eb",
            weight: 1,
            fillColor: "#f3f4f6",
            fillOpacity: 1,
            pane: "fallbackPane",
          },
        ).addTo(map)
        fallbackLayer.bringToBack()

        // Add scale control
        L.control.scale().addTo(map)

        // Add custom legend control
        const legendControl = L.control({ position: "bottomleft" })
        legendControl.onAdd = (map) => {
          const div = L.DomUtil.create("div", "info legend")
          div.innerHTML = `
            <div style="background: white; padding: 8px; border-radius: 4px; box-shadow: 0 1px 5px rgba(0,0,0,0.2); font-size: 12px;">
              <div style="font-weight: bold; margin-bottom: 5px;">Map Legend</div>
              <div style="display: flex; align-items: center; margin-bottom: 4px;">
                <div style="width: 20px; height: 20px; border-radius: 50%; background: #22c55e; color: white; display: flex; align-items: center; justify-content: center; margin-right: 5px; font-weight: bold; font-size: 10px;">L</div>
                <span>Locations</span>
              </div>
              <div style="display: flex; align-items: center; margin-bottom: 4px;">
                <div style="width: 20px; height: 20px; border-radius: 50%; background: #3b82f6; color: white; display: flex; align-items: center; justify-content: center; margin-right: 5px; font-weight: bold; font-size: 10px;">P</div>
                <span>Parking</span>
              </div>
              <div style="display: flex; align-items: center;">
                <div style="width: 20px; height: 20px; border-radius: 50%; background: #f97316; color: white; display: flex; align-items: center; justify-content: center; margin-right: 5px; font-weight: bold; font-size: 10px;">R</div>
                <span>Restaurants/Hotels</span>
              </div>
            </div>
          `
          return div
        }
        legendControl.addTo(map)

        mapInstanceRef.current = map
        setMapLoaded(true)
      } catch (err) {
        console.error("Error initializing map:", err)
        setError("Failed to initialize map")
      }
    }

    // Clean up map when component unmounts
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
        setMapLoaded(false)
      }
    }
  }, [])

  // Function to show combined sun and tidal information popup
  const showLocationInfo = useCallback(
    (location, latlng) => {
      if (!mapInstanceRef.current) return

      // Close existing popup if open
      if (popupRef.current) {
        popupRef.current.close()
      }

      // Get postcode from cache
      const postcode = componentPostcodeCache[location.id]

      // Calculate sun times for the selected date and location
      const sunTimes = calculateSunTimes(selectedDate, location.coordinates)

      // Calculate tidal times for coastal locations
      const isTidal = location.type === "coastal" || location.tidalLocation
      const tidalTimes = isTidal ? calculateMockTidalTimes(selectedDate, location.id) : null

      // Helper function to safely format dates
      const safeFormat = (dateString, formatString) => {
        try {
          if (!dateString) return "N/A"
          const date = new Date(dateString)
          // Check if date is valid
          if (isNaN(date.getTime())) return "N/A"
          return format(date, formatString)
        } catch (error) {
          console.error("Error formatting date:", error, dateString)
          return "N/A"
        }
      }

      // Format the Google Maps data
      let googleMapsHtml = ""
      if (location.googleMapsData) {
        const data = location.googleMapsData

        // Address
        if (data.address) {
          googleMapsHtml += `
          <div style="margin-top: 12px;">
            <h4 style="font-weight: bold; margin-bottom: 4px;">Address</h4>
            <p style="margin: 0;">${data.address}</p>
          </div>
        `
        }

        // Category
        if (data.category) {
          googleMapsHtml += `
          <div style="margin-top: 8px;">
            <h4 style="font-weight: bold; margin-bottom: 4px;">Category</h4>
            <p style="margin: 0;">${data.category}</p>
          </div>
        `
        }

        // Parking
        if (data.parking) {
          googleMapsHtml += `
          <div style="margin-top: 8px;">
            <h4 style="font-weight: bold; margin-bottom: 4px;">Parking</h4>
          <p style="margin: 0;">${data.parking}</p>
          </div>
        `
        }

        // Hours
        if (data.hours) {
          googleMapsHtml += `
          <div style="margin-top: 8px;">
            <h4 style="font-weight: bold; margin-bottom: 4px;">Opening Hours</h4>
            <p style="margin: 0;">${data.hours}</p>
          </div>
        `
        }

        // Amenities
        if (data.amenities) {
          googleMapsHtml += `
          <div style="margin-top: 8px;">
            <h4 style="font-weight: bold; margin-bottom: 4px;">Amenities</h4>
            <p style="margin: 0;">${data.amenities}</p>
          </div>
        `
        }

        // Facilities
        if (data.facilities) {
          googleMapsHtml += `
          <div style="margin-top: 8px;">
            <h4 style="font-weight: bold; margin-bottom: 4px;">Facilities</h4>
            <p style="margin: 0;">${data.facilities}</p>
          </div>
        `
        }

        // Access
        if (data.access) {
          googleMapsHtml += `
          <div style="margin-top: 8px;">
            <h4 style="font-weight: bold; margin-bottom: 4px;">Access</h4>
            <p style="margin: 0;">${data.access}</p>
          </div>
        `
        }

        // Website
        if (data.website) {
          googleMapsHtml += `
          <div style="margin-top: 8px;">
            <h4 style="font-weight: bold; margin-bottom: 4px;">Website</h4>
            <p style="margin: 0;"><a href="${data.website}" target="_blank">${data.website}</a></p>
          </div>
        `
        }

        // Phone
        if (data.phone) {
          googleMapsHtml += `
          <div style="margin-top: 8px;">
            <h4 style="font-weight: bold; margin-bottom: 4px;">Phone</h4>
            <p style="margin: 0;">${data.phone}</p>
          </div>
        `
        }
      }

      // Format the sun times section
      const sunTimesHtml = `
    <div style="margin-top: 16px; border-top: 1px solid #e5e7eb; padding-top: 12px;">
      <h3 style="font-weight: bold; margin-bottom: 8px; display: flex; align-items: center;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style="margin-right: 6px;">
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2"></path>
          <path d="M12 20v2"></path>
          <path d="m4.93 4.93 1.41 1.41"></path>
          <path d="m17.66 17.66 1.41 1.41"></path>
          <path d="M2 12h2"></path>
          <path d="M20 12h2"></path>
          <path d="m6.34 17.66-1.41 1.41"></path>
          <path d="m19.07 4.93-1.41 1.41"></path>
        </svg>
        Sun Times
      </h3>
      <p style="margin-bottom: 8px; font-size: 0.9em;">Date: ${safeFormat(selectedDate, "EEEE, MMMM d, yyyy")}</p>
      
      <div style="margin-bottom: 12px;">
        <h4 style="font-weight: bold; margin-bottom: 4px; color: #f59e0b;">Morning</h4>
        <table style="width: 100%; border-collapse: collapse;">
          <tbody>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 4px;"><strong>First Light:</strong></td>
              <td style="text-align: right; padding: 4px;">${safeFormat(sunTimes.firstLight, "h:mm a")}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 4px;"><strong>Sunrise:</strong></td>
              <td style="text-align: right; padding: 4px;">${safeFormat(sunTimes.sunrise, "h:mm a")}</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div>
        <h4 style="font-weight: bold; margin-bottom: 4px; color: #7c3aed;">Evening</h4>
        <table style="width: 100%; border-collapse: collapse;">
          <tbody>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 4px;"><strong>Sunset:</strong></td>
              <td style="text-align: right; padding: 4px;">${safeFormat(sunTimes.sunset, "h:mm a")}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 4px;"><strong>Last Light:</strong></td>
              <td style="text-align: right; padding: 4px;">${safeFormat(sunTimes.lastLight, "h:mm a")}</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div style="margin-top: 12px; font-size: 0.9em;">
        <p><strong>Morning Golden Hour:</strong> ${safeFormat(sunTimes.firstLight, "h:mm a")} - ${
          sunTimes.sunrise
            ? safeFormat(new Date(new Date(sunTimes.sunrise).getTime() + 30 * 60 * 1000), "h:mm a")
            : "N/A"
        }</p>
        <p><strong>Evening Golden Hour:</strong> ${
          sunTimes.sunset ? safeFormat(new Date(new Date(sunTimes.sunset).getTime() - 30 * 60 * 1000), "h:mm a") : "N/A"
        } - ${safeFormat(sunTimes.lastLight, "h:mm a")}</p>
      </div>
    </div>
  `

      // Format the tidal times section if available
      let tidalTimesHtml = ""
      if (isTidal && tidalTimes) {
        tidalTimesHtml = `
      <div style="margin-top: 16px; border-top: 1px solid #e5e7eb; padding-top: 12px;">
        <h3 style="font-weight: bold; margin-bottom: 8px; display: flex; align-items: center;">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style="margin-right: 6px;">
            <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
            <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
            <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
          </svg>
          Tidal Information
        </h3>
        
        <div style="margin-bottom: 12px;">
          <h4 style="font-weight: bold; margin-bottom: 4px; color: #3b82f6;">High Tides</h4>
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <th style="text-align: left; padding: 4px;">Time</th>
                <th style="text-align: right; padding: 4px;">Height</th>
              </tr>
            </thead>
            <tbody>
              ${tidalTimes.highTides
                .map(
                  (tide) => `
                <tr style="border-bottom: 1px solid #f3f4f6;">
                  <td style="padding: 4px;">${safeFormat(tide.time, "h:mm a")}</td>
                  <td style="text-align: right; padding: 4px;">${tide.height}m</td>
                </tr>
              `,
                )
                .join("")}
            </tbody>
          </table>
        </div>
        
        <div style="margin-bottom: 12px;">
          <h4 style="font-weight: bold; margin-bottom: 4px; color: #3b82f6;">Mid Tides</h4>
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <th style="text-align: left; padding: 4px;">Time</th>
                <th style="text-align: right; padding: 4px;">Height</th>
              </tr>
            </thead>
            <tbody>
              ${tidalTimes.midTides
                .map(
                  (tide) => `
                <tr style="border-bottom: 1px solid #f3f4f6;">
                  <td style="padding: 4px;">${safeFormat(tide.time, "h:mm a")}</td>
                  <td style="text-align: right; padding: 4px;">${tide.height}m</td>
                </tr>
              `,
                )
                .join("")}
            </tbody>
          </table>
        </div>
        
        <div>
          <h4 style="font-weight: bold; margin-bottom: 4px; color: #3b82f6;">Low Tides</h4>
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <th style="text-align: left; padding: 4px;">Time</th>
                <th style="text-align: right; padding: 4px;">Height</th>
              </tr>
            </thead>
            <tbody>
              ${tidalTimes.lowTides
                .map(
                  (tide) => `
                <tr style="border-bottom: 1px solid #f3f4f6;">
                  <td style="padding: 4px;">${safeFormat(tide.time, "h:mm a")}</td>
                  <td style="text-align: right; padding: 4px;">${tide.height}m</td>
                </tr>
              `,
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </div>
    `
      }

      // Combine all sections into a complete popup
      const popupContent = `
    <div class="location
    <div class="location-popup" style="max-width: 450px; max-height: 500px; overflow-y: auto;">
      <h3 style="font-weight: bold; margin-bottom: 4px; font-size: 16px;">${location.name}</h3>
      <p style="margin-bottom: 4px; font-size: 14px;">${location.type === "coastal" ? "Coastal" : "Inland"} location</p>
      
      <div style="margin-top: 8px;">
        ${postcode ? `<p style="font-size: 0.9em; margin: 0;"><strong>Postcode:</strong> ${postcode}</p>` : ""}
      <p style="font-size: 0.9em; margin-top: 4px;">
        <strong>GPS:</strong> ${location.coordinates.lat.toFixed(6)}, ${location.coordinates.lng.toFixed(6)}
      </p>
      ${location.cluster ? `<p style="font-size: 0.9em; margin-top: 4px;"><strong>Area:</strong> ${location.cluster}</p>` : ""}
    </div>
    
    ${googleMapsHtml}
    ${sunTimesHtml}
    ${tidalTimesHtml}
    
    ${
      location.description && !location.rawHtml
        ? `<div style="margin-top: 12px; border-top: 1px solid #e5e7eb; padding-top: 12px;">
            <h4 style="font-weight: bold; margin-bottom: 4px;">Description</h4>
            <p style="margin: 0; font-size: 0.9em;">${location.description}</p>
           </div>`
        : ""
    }
  </div>
`

      // Create and open the popup
      const L = window.L
      const popup = L.popup({
        maxWidth: 500,
        maxHeight: 500,
        autoPan: true,
        autoPanPadding: [50, 50],
      })
        .setLatLng(latlng)
        .setContent(popupContent)
        .openOn(mapInstanceRef.current)

      // Store reference to the popup
      popupRef.current = popup
    },
    [componentPostcodeCache, selectedDate],
  )

  // Update map view when region or location changes
  useEffect(() => {
    if (!mapInstanceRef.current || !mapLoaded) return

    const map = mapInstanceRef.current
    const L = window.L

    // Clear existing markers
    markersRef.current.forEach((marker) => {
      if (marker) marker.remove()
    })
    markersRef.current = []

    if (locations.length === 0) {
      // Default UK view if no locations
      map.setView([54.5, -3.5], 5)
      return
    }

    // Calculate bounds for all locations in the region
    const bounds = L.latLngBounds()

    // Add markers for each location
    const newMarkers = locations.map((location) => {
      // Validate and potentially correct coordinates
      const validCoords = validateCoordinates(location.coordinates.lat, location.coordinates.lng)
      const { lat, lng } = validCoords

      bounds.extend([lat, lng])

      // Determine marker type
      const markerType = getMarkerType(location)
      const isCoastal = location.type === "coastal"
      const isSelected = selectedLocation && selectedLocation.id === location.id

      // Create marker icon based on location type and category
      let iconHtml = `<div class="marker-pin ${markerType} ${isCoastal ? "coastal" : ""} ${isSelected ? "selected" : ""}">`

      // Add letter based on marker type
      let letter = "L" // Default for locations
      let bgColor = "#22c55e" // Green for locations

      if (markerType === "parking") {
        letter = "P"
        bgColor = "#3b82f6" // Blue for parking
      } else if (markerType === "hospitality") {
        letter = "R"
        bgColor = "#f97316" // Orange for restaurants/hotels
      }

      iconHtml += `<span class="marker-letter">${letter}</span></div>`

      const icon = L.divIcon({
        className: "custom-div-icon",
        html: iconHtml,
        iconSize: [30, 30],
        iconAnchor: [15, 30],
      })

      // Create marker with validated coordinates
      const marker = L.marker([lat, lng], { icon }).addTo(map)

      // Get postcode from cache
      const markerPostcode = componentPostcodeCache[location.id]

      // Format all available KML data for the popup
      const popupContent = `
      <div class="marker-popup">
        <h3 style="font-weight: bold; margin-bottom: 4px;">${location.name}</h3>
        <p style="margin-bottom: 4px;">${isCoastal ? "Coastal" : "Inland"} location</p>
        ${markerPostcode ? `<p style="font-size: 0.9em; margin: 0;"><strong>Postcode:</strong> ${markerPostcode}</p>` : ""}
        <p style="font-size: 0.9em; margin-top: 4px;">
          <strong>GPS:</strong> ${lat.toFixed(6)}, ${lng.toFixed(6)}
        </p>
        ${location.category ? `<p style="font-size: 0.9em; margin-top: 4px;"><strong>Category:</strong> ${location.category}</p>` : ""}
        ${location.cluster ? `<p style="font-size: 0.9em; margin-top: 4px;"><strong>Area:</strong> ${location.cluster}</p>` : ""}
        
        <div style="margin-top: 8px; display: flex; gap: 8px;">
          <p style="color: #3b82f6; cursor: pointer; text-decoration: underline;" class="info-link" data-lat="${lat}" data-lng="${lng}" data-id="${
            location.id
          }">
            <span style="display: inline-flex; align-items: center;">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style="margin-right: 4px;">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4"></path>
                <path d="M12 8h.01"></path>
              </svg>
              Sun & Tide Times
            </span>
          </p>
        </div>
      </div>
    `

      // Create popup with event listener for info link
      const popup = L.popup().setContent(popupContent)

      // Add event listener after popup is opened
      popup.on("add", () => {
        const infoLink = document.querySelector(".info-link")
        if (infoLink) {
          infoLink.addEventListener("click", (e) => {
            e.preventDefault()
            const lat = Number.parseFloat(infoLink.getAttribute("data-lat"))
            const lng = Number.parseFloat(infoLink.getAttribute("data-lng"))
            showLocationInfo(location, [lat, lng])
          })
        }
      })

      marker.bindPopup(popup)

      // Format tooltip content with Google Maps data
      let tooltipContent = `<strong>${location.name}</strong>`

      // Add marker type to tooltip
      if (markerType === "parking") {
        tooltipContent += `<br><strong>Parking</strong>`
      } else if (markerType === "hospitality") {
        tooltipContent += `<br><strong>Restaurant/Hotel</strong>`
      }

      // Add postcode if available
      if (markerPostcode) {
        tooltipContent += `<br><strong>Postcode:</strong> ${markerPostcode}`
      }

      // Add GPS coordinates
      tooltipContent += `<br><strong>GPS:</strong> ${lat.toFixed(6)}, ${lng.toFixed(6)}`

      // Add location type
      tooltipContent += `<br>${isCoastal ? "Coastal/Tidal" : "Inland"} location`

      // Add sun and tidal times info
      tooltipContent += `<br><span style="color: #3b82f6; text-decoration: underline;">Sun & Tide Times available</span>`

      // Add Google Maps data to tooltip
      if (location.googleMapsData) {
        const data = location.googleMapsData
        if (data.address) {
          tooltipContent += `<br>${data.address}`
        }
        if (data.phone) {
          tooltipContent += `<br>${data.phone}`
        }
        if (data.website) {
          tooltipContent += `<br>${data.website}`
        }
        if (data.parking) {
          tooltipContent += `<br>Parking: ${data.parking}`
        }
        if (data.hours) {
          tooltipContent += `<br>Hours: ${data.hours}`
        }
      }

      // Add original category if available
      if (location.originalCategory) {
        tooltipContent += `<br>Category: ${location.originalCategory}`
      }

      marker.bindTooltip(tooltipContent, {
        direction: "top",
        offset: [0, -15],
        opacity: 0.9,
        className: "custom-tooltip",
      })

      // Open popup if this is the selected location
      if (selectedLocation && selectedLocation.id === location.id) {
        marker.openPopup()
      }

      return marker
    })

    // Store markers in ref
    markersRef.current = newMarkers

    // Fit map to bounds with padding
    if (bounds.isValid()) {
      map.fitBounds(bounds, { padding: [50, 50] })
    }

    // Add CSS for custom markers if not already added
    if (!document.getElementById("marker-styles")) {
      const style = document.createElement("style")
      style.id = "marker-styles"
      style.innerHTML = `
        .marker-pin {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #22c55e; /* Green by default for locations */
          border: 2px solid white;
          box-shadow: 0 1px 3px rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .marker-pin.parking {
          background: #3b82f6; /* Blue for parking */
        }
        .marker-pin.hospitality {
          background: #f97316; /* Orange for restaurants/hotels */
        }
        .marker-pin.selected {
          width: 24px;
          height: 24px;
          border: 3px solid white;
          box-shadow: 0 1px 5px rgba(0,0,0,0.4);
        }
        .marker-letter {
          color: white;
          font-size: 12px;
          font-weight: bold;
        }
        /* Style for the popup */
        .leaflet-popup-content {
          min-width: 200px;
        }
        /* Style for the tooltip */
        .leaflet-tooltip {
          background-color: rgba(255, 255, 255, 0.95);
          border: 1px solid #ccc;
          border-radius: 4px;
          box-shadow: 0 1px 5px rgba(0,0,0,0.2);
          padding: 6px 10px;
          font-size: 12px;
          max-width: 300px;
          white-space: normal;
        }
        .custom-tooltip {
          line-height: 1.4;
        }
        /* Style for info links */
        .info-link {
          cursor: pointer;
          text-decoration: underline;
        }
        .info-link:hover {
          text-decoration: none;
        }
        /* Style for popups */
        .location-popup {
          min-width: 250px;
        }
        /* Style for legend */
        .info.legend {
          background: white;
          padding: 6px 8px;
          border-radius: 4px;
          box-shadow: 0 1px 5px rgba(0,0,0,0.2);
        }
      `
      document.head.appendChild(style)
    }

    // Clean up function
    return () => {
      // We'll clean up markers in the next effect run
      if (popupRef.current) {
        popupRef.current.close()
        popupRef.current = null
      }
    }
  }, [mapLoaded, locations, selectedLocation, selectedDate, componentPostcodeCache, showLocationInfo])

  // If there's an error loading the map
  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Location Map</CardTitle>
        </CardHeader>
        <CardContent>
          <div
            className="bg-gray-100 rounded-md flex flex-col items-center justify-center text-center p-4"
            style={{ height, width: "100%" }}
          >
            <p className="text-red-500 mb-2">Unable to load map: {error}</p>
            <p className="text-sm text-muted-foreground">
              Please try refreshing the page or check your internet connection.
            </p>

            {/* Show location information even if map fails */}
            {selectedRegion && (
              <div className="mt-4 p-3 bg-white rounded-md shadow-sm w-full max-w-md">
                <h3 className="font-medium text-sm mb-2">{selectedRegion.name}</h3>
                <p className="text-xs text-muted-foreground">{locations.length} locations in this region</p>

                {selectedLocation && (
                  <div className="mt-2 pt-2 border-t">
                    <div className="flex items-center gap-1">
                      {selectedLocation.type === "coastal" ? (
                        <WavesIcon className="h-3 w-3 text-blue-500" />
                      ) : (
                        <MapPinIcon className="h-3 w-3 text-gray-500" />
                      )}
                      <span className="font-medium text-sm">{selectedLocation.name}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Coordinates: {selectedLocation.coordinates.lat.toFixed(6)},{" "}
                      {selectedLocation.coordinates.lng.toFixed(6)}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    )
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
        <div className="relative" style={{ height, width: "100%" }}>
          {/* Map container */}
          <div
            ref={mapContainerRef}
            className="absolute inset-0 rounded-md"
            style={{ height: "100%", width: "100%" }}
          />

          {/* Loading state */}
          {!mapLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-md">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 border-4 border-t-blue-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin mb-2"></div>
                <p className="text-muted-foreground">Loading map...</p>
              </div>
            </div>
          )}

          {/* Selected location info overlay */}
          {mapLoaded && selectedLocation && (
            <div className="absolute top-2 right-2 z-[1000] bg-white/90 p-3 rounded-md shadow-md max-w-xs">
              <div className="flex items-center gap-1 mb-1">
                {selectedLocation.type === "coastal" ? (
                  <WavesIcon className="h-4 w-4 text-blue-500" />
                ) : (
                  <MapPinIcon className="h-4 w-4 text-red-500" />
                )}
                <span className="font-medium">{selectedLocation.name}</span>
              </div>
              {componentPostcodeCache[selectedLocation.id] && (
                <p className="text-xs text-muted-foreground">
                  <strong>Postcode:</strong> {componentPostcodeCache[selectedLocation.id]}
                </p>
              )}
              <p className="text-xs text-muted-foreground">
                <strong>GPS:</strong> {selectedLocation.coordinates.lat.toFixed(6)},{" "}
                {selectedLocation.coordinates.lng.toFixed(6)}
              </p>
              {selectedLocation.googleMapsData?.address && (
                <p className="text-xs text-muted-foreground mt-1">{selectedLocation.googleMapsData.address}</p>
              )}
              <div className="mt-2 flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs h-7 px-2"
                  onClick={() =>
                    showLocationInfo(selectedLocation, [
                      selectedLocation.coordinates.lat,
                      selectedLocation.coordinates.lng,
                    ])
                  }
                >
                  <InfoIcon className="h-3 w-3 mr-1" />
                  Sun & Tide Times
                </Button>
              </div>
            </div>
          )}
        </div>

        <div className="mt-3 text-xs text-muted-foreground text-center">
          <p className="mt-1">Hover over pins to see location details, click for more information</p>
          <p className="mt-1">Click on "Sun & Tide Times" to see detailed information for planning your shoot</p>
        </div>
      </CardContent>
    </Card>
  )
}
