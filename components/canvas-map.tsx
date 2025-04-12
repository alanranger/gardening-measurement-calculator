"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CanvasMap({ selectedRegion, locations = [], selectedLocation = null, height = "400px" }) {
  const canvasRef = useRef(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  // Set up canvas dimensions on mount
  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current
      const container = canvas.parentElement
      const { width, height } = container.getBoundingClientRect()

      // Set canvas dimensions
      setDimensions({ width, height })
      canvas.width = width * window.devicePixelRatio
      canvas.height = height * window.devicePixelRatio

      // Scale canvas for high DPI displays
      const ctx = canvas.getContext("2d")
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
  }, [])

  // Draw map when locations or selection changes
  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    // Clear canvas
    ctx.clearRect(0, 0, dimensions.width, dimensions.height)

    // Draw background
    ctx.fillStyle = "#f3f4f6"
    ctx.fillRect(0, 0, dimensions.width, dimensions.height)

    // Draw UK outline (simplified)
    ctx.beginPath()
    ctx.moveTo(dimensions.width * 0.3, dimensions.height * 0.2)
    ctx.lineTo(dimensions.width * 0.4, dimensions.height * 0.3)
    ctx.lineTo(dimensions.width * 0.5, dimensions.height * 0.4)
    ctx.lineTo(dimensions.width * 0.6, dimensions.height * 0.5)
    ctx.lineTo(dimensions.width * 0.5, dimensions.height * 0.7)
    ctx.lineTo(dimensions.width * 0.4, dimensions.height * 0.8)
    ctx.lineTo(dimensions.width * 0.3, dimensions.height * 0.7)
    ctx.lineTo(dimensions.width * 0.2, dimensions.height * 0.5)
    ctx.closePath()
    ctx.fillStyle = "#e5e7eb"
    ctx.fill()
    ctx.strokeStyle = "#d1d5db"
    ctx.lineWidth = 2
    ctx.stroke()

    // If no locations, show message
    if (locations.length === 0) {
      ctx.fillStyle = "#6b7280"
      ctx.font = "14px sans-serif"
      ctx.textAlign = "center"
      ctx.fillText("Import locations to see them on the map", dimensions.width / 2, dimensions.height / 2)
      return
    }

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

    // Function to convert coordinates to canvas position
    const coordToCanvas = (lat, lng) => {
      const x = ((lng - bounds.minLng) / (bounds.maxLng - bounds.minLng)) * dimensions.width
      // Flip y-axis since canvas 0,0 is top-left
      const y = (1 - (lat - bounds.minLat) / (bounds.maxLat - bounds.minLat)) * dimensions.height
      return { x, y }
    }

    // Draw locations
    locations.forEach((location) => {
      const { x, y } = coordToCanvas(location.coordinates.lat, location.coordinates.lng)
      const isSelected = selectedLocation && selectedLocation.id === location.id

      // Draw pin
      ctx.beginPath()
      ctx.arc(x, y, isSelected ? 8 : 6, 0, Math.PI * 2)

      if (isSelected) {
        ctx.fillStyle = "#2563eb"
      } else if (location.type === "coastal") {
        ctx.fillStyle = "#93c5fd"
      } else {
        ctx.fillStyle = "#9ca3af"
      }

      ctx.fill()
      ctx.strokeStyle = "#ffffff"
      ctx.lineWidth = 2
      ctx.stroke()
    })

    // Draw selected location label
    if (selectedLocation) {
      const { x, y } = coordToCanvas(selectedLocation.coordinates.lat, selectedLocation.coordinates.lng)

      ctx.fillStyle = "#ffffff"
      ctx.font = "bold 12px sans-serif"
      ctx.textAlign = "center"
      ctx.fillText(selectedLocation.name, x, y - 15)

      // Add shadow effect for better readability
      ctx.fillStyle = "#1f2937"
      ctx.font = "bold 12px sans-serif"
      ctx.fillText(selectedLocation.name, x, y - 15)
    }

    // Draw region name
    if (selectedRegion) {
      ctx.fillStyle = "#1f2937"
      ctx.font = "bold 14px sans-serif"
      ctx.textAlign = "left"
      ctx.fillText(selectedRegion.name, 10, 20)
    }
  }, [dimensions, locations, selectedLocation, selectedRegion])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Location Map</CardTitle>
      </CardHeader>
      <CardContent>
        <div style={{ height, width: "100%", position: "relative" }}>
          <canvas
            ref={canvasRef}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "0.375rem",
            }}
          />
        </div>
        <div className="mt-3 text-xs text-muted-foreground text-center">
          <p>
            This is a simplified map visualization. Locations are positioned approximately based on their coordinates.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
