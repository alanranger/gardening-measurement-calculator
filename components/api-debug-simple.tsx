"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { clearApiCache } from "@/lib/willy-weather-service"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon, AlertTriangleIcon, Copy, CheckCircle2 } from "lucide-react"

export function ApiDebugSimple() {
  const [lat, setLat] = useState("55.3369") // Default to Alnmouth
  const [lng, setLng] = useState("-1.6129")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [apiResponse, setApiResponse] = useState<any>(null)
  const [apiKey, setApiKey] = useState<string | null>(null)
  const [copied, setCopied] = useState<string | null>(null)

  const handleTest = async () => {
    setLoading(true)
    setError(null)
    setApiResponse(null)

    try {
      // Clear cache to ensure fresh data
      clearApiCache()

      // Parse inputs
      const latNum = Number.parseFloat(lat)
      const lngNum = Number.parseFloat(lng)

      // Validate inputs
      if (isNaN(latNum) || isNaN(lngNum)) {
        throw new Error("Invalid latitude or longitude values")
      }

      // First, check if the API key is configured
      const keyResponse = await fetch("/api/check-api-key")
      const keyData = await keyResponse.json()
      setApiKey(keyData.keyStatus)

      if (keyData.keyStatus !== "configured") {
        setError("WillyWeather API key is not configured. Please add it to your environment variables.")
        setLoading(false)
        return
      }

      // Test the actual WillyWeather API
      const today = new Date().toISOString().split("T")[0]
      const apiResponse = await fetch(`/api/willy-weather?type=sun&lat=${latNum}&lng=${lngNum}&date=${today}`)

      const apiData = await apiResponse.json()

      // Add the real API response to our results
      setApiResponse({
        source: "WillyWeather API",
        data: apiData,
      })

      if (apiData.error) {
        setError(apiData.error)
      }
    } catch (err) {
      console.error("API test error:", err)
      setError(err instanceof Error ? err.message : "Unknown error occurred")
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = (type: string) => {
    let textToCopy = ""

    if (type === "api") {
      textToCopy = JSON.stringify(apiResponse, null, 2)
    } else if (type === "error") {
      textToCopy = `API Error: ${error}\nAPI Key Status: ${apiKey}\nCoordinates: ${lat}, ${lng}`
    } else if (type === "all") {
      textToCopy = `
API Test Results
----------------
Date: ${new Date().toISOString()}
Coordinates: ${lat}, ${lng}
API Key Status: ${apiKey}
${error ? `Error: ${error}` : ""}

API Response:
${JSON.stringify(apiResponse, null, 2)}
`
    }

    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(type)
      setTimeout(() => setCopied(null), 2000)
    })
  }

  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>WillyWeather API Test</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Alert>
            <InfoIcon className="h-4 w-4" />
            <AlertTitle>API Integration Status</AlertTitle>
            <AlertDescription>Test the WillyWeather API integration to ensure it's working correctly.</AlertDescription>
          </Alert>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-1 block">Latitude</label>
              <Input value={lat} onChange={(e) => setLat(e.target.value)} placeholder="e.g. 55.3369" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Longitude</label>
              <Input value={lng} onChange={(e) => setLng(e.target.value)} placeholder="e.g. -1.6129" />
            </div>
          </div>

          <div className="flex gap-2">
            <Button onClick={handleTest} disabled={loading}>
              {loading ? "Testing API..." : "Test API"}
            </Button>

            {apiResponse && (
              <Button variant="outline" onClick={() => copyToClipboard("all")} className="ml-auto">
                {copied === "all" ? <CheckCircle2 className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
                Copy All Results
              </Button>
            )}
          </div>

          {apiKey && (
            <div
              className={`p-4 ${apiKey === "configured" ? "bg-green-50 border border-green-200 text-green-800" : "bg-yellow-50 border border-yellow-200 text-yellow-800"} rounded-md text-sm`}
            >
              <strong>API Key Status:</strong> {apiKey === "configured" ? "Configured" : "Not Configured"}
            </div>
          )}

          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-md text-red-800 text-sm">
              <div className="flex justify-between items-start">
                <div>
                  <AlertTriangleIcon className="h-4 w-4 inline-block mr-2" />
                  <strong>API Error:</strong> {error}
                </div>
                <Button size="sm" variant="ghost" onClick={() => copyToClipboard("error")}>
                  {copied === "error" ? <CheckCircle2 className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          )}

          {apiResponse && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">API Response</h3>
                <Button size="sm" variant="ghost" onClick={() => copyToClipboard("api")}>
                  {copied === "api" ? <CheckCircle2 className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-md overflow-auto max-h-96">
                <pre className="text-xs">{JSON.stringify(apiResponse, null, 2)}</pre>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
