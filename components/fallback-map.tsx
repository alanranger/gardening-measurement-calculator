"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function FallbackMap({ selectedRegion, locations = [], selectedLocation = null, height = "400px" }) {
  const canvasRef = useRef(null)

  // Draw map when component mounts or props change
  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    const { width, height } = canvas.getBoundingClientRect()

    // Set canvas dimensions
    canvas.width = width * window.devicePixelRatio
    canvas.height = height * window.devicePixelRatio
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio)

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Draw UK outline (simplified)
    drawUK(ctx, width, height)

    // If no locations, show message
    if (locations.length === 0) {
      ctx.fillStyle = "#6b7280"
      ctx.font = "14px sans-serif"
      ctx.textAlign = "center"
      ctx.fillText("Import locations to see them on the map", width / 2, height / 2)
      return
    }

    // Draw locations
    drawLocations(ctx, width, height, locations, selectedLocation)

    // Draw region name
    if (selectedRegion) {
      ctx.fillStyle = "#1f2937"
      ctx.font = "bold 14px sans-serif"
      ctx.textAlign = "left"
      ctx.fillText(selectedRegion.name, 10, 20)
    }
  }, [locations, selectedLocation, selectedRegion])

  // Draw UK outline
  const drawUK = (ctx, width, height) => {
    // Draw background
    ctx.fillStyle = "#f3f4f6"
    ctx.fillRect(0, 0, width, height)

    // Draw simplified UK outline
    ctx.beginPath()

    // Scotland
    ctx.moveTo(width * 0.4, height * 0.1)
    ctx.lineTo(width * 0.45, height * 0.15)
    ctx.lineTo(width * 0.5, height * 0.12)
    ctx.lineTo(width * 0.55, height * 0.18)
    ctx.lineTo(width * 0.5, height * 0.25)

    // England & Wales
    ctx.lineTo(width * 0.52, height * 0.35)
    ctx.lineTo(width * 0.6, height * 0.4)
    ctx.lineTo(width * 0.55, height * 0.5)
    ctx.lineTo(width * 0.6, height * 0.6)
    ctx.lineTo(width * 0.5, height * 0.7)
    ctx.lineTo(width * 0.4, height * 0.65)
    ctx.lineTo(width * 0.35, height * 0.5)
    ctx.lineTo(width * 0.4, height * 0.35)
    ctx.lineTo(width * 0.45, height * 0.3)

    // Back to Scotland
    ctx.lineTo(width * 0.4, height * 0.25)
    ctx.lineTo(width * 0.35, height * 0.2)
    ctx.closePath()

    // Ireland (simplified)
    ctx.moveTo(width * 0.25, height * 0.3)
    ctx.lineTo(width * 0.3, height * 0.35)
    ctx.lineTo(width * 0.25, height * 0.5)
    ctx.lineTo(width * 0.2, height * 0.4)
    ctx.closePath()

    ctx.fillStyle = "#e5e7eb"
    ctx.fill()
    ctx.strokeStyle = "#d1d5db"
    ctx.lineWidth = 2
    ctx.stroke()

    // Add region labels
    ctx.fillStyle = "#9ca3af"
    ctx.font = "10px sans-serif"
    ctx.textAlign = "center"

    ctx.fillText("Scotland", width * 0.45, height * 0.2)
    ctx.fillText("North", width * 0.45, height * 0.35)
    ctx.fillText("Wales", width * 0.35, height * 0.5)
    ctx.fillText("Midlands", width * 0.5, height * 0.45)
    ctx.fillText("South", width * 0.5, height * 0.6)
    ctx.fillText("N. Ireland", width * 0.25, height * 0.4)
  }

  // Draw locations on the map
  const drawLocations = (ctx, width, height, locations, selectedLocation) => {
    // Get rough UK bounds for mapping
    const ukBounds = {
      minLat: 49.5,
      maxLat: 59.5,
      minLng: -8.5,
      maxLng: 2.0,
    }

    // Function to convert coordinates to canvas position
    const coordToCanvas = (lat, lng) => {
      const x = ((lng - ukBounds.minLng) / (ukBounds.maxLng - ukBounds.minLng)) * width
      // Flip y-axis since canvas 0,0 is top-left  / (ukBounds.maxLng - ukBounds.minLng)) * width
      // Flip y-axis since canvas 0,0 is top-left
      const y = (1 - (lat - ukBounds.minLat) / (ukBounds.maxLat - ukBounds.minLat)) * height
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
  }

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
            This is a simplified map visualization. For a more detailed map, please use the Google Maps integration.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
