"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { MapPinIcon, WavesIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function StaticRegionMap({ selectedRegion, locations = [], selectedLocation = null, height = "400px" }) {
  const [mapUrl, setMapUrl] = useState("")
  const [mapReady, setMapReady] = useState(false)
  const [error, setError] = useState(null)

  // Update map when region or location changes
  useEffect(() => {
    if (!locations || locations.length === 0) {
      // Default UK map if no locations
      setMapUrl(
        `https://maps.geoapify.com/v1/staticmap?style=osm-carto&width=600&height=400&center=lonlat:-3.5,54.5&zoom=5&apiKey=YOUR_API_KEY`,
      )
      setMapReady(true)
      return
    }

    try {
      // Calculate bounds for all locations
      const lats = locations.map((loc) => loc.coordinates.lat)
      const lngs = locations.map((loc) => loc.coordinates.lng)

      const minLat = Math.min(...lats)
      const maxLat = Math.max(...lats)
      const minLng = Math.min(...lngs)
      const maxLng = Math.max(...lngs)

      // Add padding
      const latPadding = (maxLat - minLat) * 0.1 || 0.1
      const lngPadding = (maxLng - minLng) * 0.1 || 0.1

      const bounds = {
        minLat: minLat - latPadding,
        maxLat: maxLat + latPadding,
        minLng: minLng - lngPadding,
        maxLng: maxLng + lngPadding,
      }

      // Determine center and zoom
      let center, zoom

      if (selectedLocation && selectedLocation.coordinates) {
        // Center on selected location
        center = `${selectedLocation.coordinates.lng},${selectedLocation.coordinates.lat}`
        zoom = 12
      } else {
        // Center on all locations
        const centerLat = (bounds.minLat + bounds.maxLat) / 2
        const centerLng = (bounds.minLng + bounds.maxLng) / 2
        center = `${centerLng},${centerLat}`

        // Calculate appropriate zoom level based on bounds
        const latRange = bounds.maxLat - bounds.minLat
        const lngRange = bounds.maxLng - bounds.minLng
        const maxRange = Math.max(latRange, lngRange)

        if (maxRange > 2) zoom = 6
        else if (maxRange > 1) zoom = 7
        else if (maxRange > 0.5) zoom = 8
        else if (maxRange > 0.2) zoom = 9
        else zoom = 10
      }

      // Build marker string for all locations
      let markers = ""
      locations.forEach((location) => {
        const color = location.type === "coastal" ? "blue" : "green"
        const size = selectedLocation && selectedLocation.id === location.id ? "large" : "medium"
        markers += `&marker=lonlat:${location.coordinates.lng},${location.coordinates.lat};color:${color};size:${size}`
      })

      // Build the map URL using OpenStreetMap style
      // Note: In production, replace YOUR_API_KEY with an actual Geoapify API key
      const mapUrl = `https://maps.geoapify.com/v1/staticmap?style=osm-carto&width=600&height=400&center=lonlat:${center}&zoom=${zoom}${markers}&apiKey=YOUR_API_KEY`

      // For demo purposes, use a placeholder
      setMapUrl(`/placeholder.svg?height=400&width=600`)
      setMapReady(true)
    } catch (err) {
      console.error("Error generating map URL:", err)
      setError("Failed to generate map")
    }
  }, [selectedRegion, selectedLocation, locations])

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
          {mapReady ? (
            <>
              <div className="absolute inset-0 bg-gray-100 rounded-md flex items-center justify-center">
                <Image
                  src={mapUrl || "/placeholder.svg"}
                  alt="Map"
                  width={600}
                  height={400}
                  className="rounded-md object-cover"
                  unoptimized={true}
                />
              </div>

              {/* Overlay with location information */}
              <div className="absolute inset-0 p-4">
                <div className="bg-white/80 p-3 rounded-md shadow-sm max-w-xs">
                  <h3 className="font-medium text-sm mb-2">
                    {selectedRegion ? selectedRegion.name : "United Kingdom"}
                  </h3>

                  {selectedLocation ? (
                    <div className="text-xs space-y-1">
                      <div className="flex items-center gap-1">
                        {selectedLocation.type === "coastal" ? (
                          <WavesIcon className="h-3 w-3 text-blue-500" />
                        ) : (
                          <MapPinIcon className="h-3 w-3 text-gray-500" />
                        )}
                        <span className="font-medium">{selectedLocation.name}</span>
                      </div>
                      <p className="text-muted-foreground">
                        {selectedLocation.coordinates.lat.toFixed(4)}, {selectedLocation.coordinates.lng.toFixed(4)}
                      </p>
                    </div>
                  ) : locations.length > 0 ? (
                    <p className="text-xs text-muted-foreground">{locations.length} locations in this region</p>
                  ) : (
                    <p className="text-xs text-muted-foreground">Import locations to see them on the map</p>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center bg-gray-100 rounded-md" style={{ height, width: "100%" }}>
              <p className="text-muted-foreground">Loading map...</p>
            </div>
          )}
        </div>

        <div className="mt-3 text-xs text-muted-foreground text-center">
          <p>
            This map shows the selected region and locations. In a production app, replace the placeholder with a real
            map API.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
