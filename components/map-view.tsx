"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { MapPinIcon, WavesIcon } from "lucide-react"

export function MapView({ selectedRegion, locations = [], selectedLocation = null, height = "400px" }) {
  const [mapUrl, setMapUrl] = useState("")
  const [mapReady, setMapReady] = useState(false)

  // Update map when region or location changes
  useEffect(() => {
    if (locations.length === 0) {
      // Default UK map if no locations
      const defaultMapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=54.5,-3.5&zoom=5&size=600x400&scale=2&maptype=terrain&key=YOUR_API_KEY`
      setMapUrl("/placeholder.svg?height=400&width=600")
      return
    }

    let center, zoom

    if (selectedLocation && selectedLocation.coordinates) {
      // Center on selected location
      center = `${selectedLocation.coordinates.lat},${selectedLocation.coordinates.lng}`
      zoom = 12
    } else if (locations.length > 0) {
      // Calculate center of all locations in region
      const lats = locations.map((loc) => loc.coordinates.lat)
      const lngs = locations.map((loc) => loc.coordinates.lng)

      const centerLat = lats.reduce((a, b) => a + b, 0) / lats.length
      const centerLng = lngs.reduce((a, b) => a + b, 0) / lngs.length

      center = `${centerLat},${centerLng}`

      // Set zoom based on region size
      const latRange = Math.max(...lats) - Math.min(...lats)
      const lngRange = Math.max(...lngs) - Math.min(...lngs)
      const maxRange = Math.max(latRange, lngRange)

      if (maxRange > 2) zoom = 6
      else if (maxRange > 1) zoom = 7
      else if (maxRange > 0.5) zoom = 8
      else if (maxRange > 0.2) zoom = 9
      else zoom = 10
    }

    // For demo purposes, we'll use a placeholder image
    // In a real app, you would use the Google Maps Static API with markers
    // const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${center}&zoom=${zoom}&size=600x400&scale=2&maptype=terrain&key=YOUR_API_KEY`

    // For locations, you would add markers like:
    // &markers=color:red|label:A|${lat},${lng}

    setMapUrl("/placeholder.svg?height=400&width=600")
    setMapReady(true)
  }, [selectedRegion, selectedLocation, locations])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Location Map</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative" style={{ height, width: "100%" }}>
          {mapReady ? (
            <>
              <div className="absolute inset-0 bg-gray-100 rounded-md flex items-center justify-center">
                <Image src={mapUrl || "/placeholder.svg"} alt="Map" fill className="rounded-md object-cover" />
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

              {/* Location pins */}
              {locations.map((location, index) => {
                // Calculate relative position on the map container
                // This is a simplified approach - in a real app with Google Maps API
                // the markers would be part of the map image

                // For demo purposes, we'll place some sample pins
                const left = `${20 + ((index * 10) % 80)}%`
                const top = `${20 + ((index * 15) % 60)}%`

                const isSelected = selectedLocation && selectedLocation.id === location.id

                return (
                  <div
                    key={location.id}
                    className={`absolute w-6 h-6 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center
                      ${isSelected ? "z-10" : "z-0"}`}
                    style={{ left, top }}
                  >
                    <div
                      className={`
                      rounded-full p-1
                      ${
                        isSelected
                          ? "bg-primary text-primary-foreground"
                          : location.type === "coastal"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-gray-100 text-gray-700"
                      }
                    `}
                    >
                      {location.type === "coastal" ? (
                        <WavesIcon className="h-3 w-3" />
                      ) : (
                        <MapPinIcon className="h-3 w-3" />
                      )}
                    </div>
                  </div>
                )
              })}
            </>
          ) : (
            <div className="flex items-center justify-center bg-gray-100 rounded-md" style={{ height, width: "100%" }}>
              <p className="text-muted-foreground">Loading map...</p>
            </div>
          )}
        </div>

        <div className="mt-3 text-xs text-muted-foreground text-center">
          <p>
            This is a placeholder map. In a production app, this would be an interactive map with actual location
            markers.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
