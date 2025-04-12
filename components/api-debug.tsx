"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { getSunTimes, getTideTimes, clearApiCache } from "@/lib/willy-weather-service"
import { format } from "date-fns"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon, Copy, CheckCircle2 } from "lucide-react"

export function ApiDebug() {
  const [lat, setLat] = useState("55.3369") // Default to Alnmouth
  const [lng, setLng] = useState("-1.6129")
  const [locationId, setLocationId] = useState("alnmouth") // Default to Alnmouth
  const [date, setDate] = useState(format(new Date(), "yyyy-MM-dd"))
  const [type, setType] = useState("sun") // Default to sun data
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [apiResponse, setApiResponse] = useState<any>(null)
  const [processedData, setProcessedData] = useState<any>(null)
  const [copied, setCopied] = useState<string | null>(null)

  const handleTest = async () => {
    setLoading(true)
    setError(null)
    setApiResponse(null)
    setProcessedData(null)

    try {
      // Clear cache to ensure fresh data
      clearApiCache()

      // Parse inputs
      const latNum = Number.parseFloat(lat)
      const lngNum = Number.parseFloat(lng)
      const dateObj = new Date(date)

      // Validate inputs
      if (isNaN(latNum) || isNaN(lngNum) || !dateObj || isNaN(dateObj.getTime())) {
        throw new Error("Invalid input values. Please check latitude, longitude, and date.")
      }

      console.log("Testing WillyWeather API with:", { type, lat: latNum, lng: lngNum, date: dateObj, locationId })

      // Get raw API response from debug endpoint
      const debugUrl = `/api/debug-api?type=${type}&lat=${latNum}&lng=${lngNum}&date=${date}&locationId=${locationId}`
      console.log("Calling debug API:", debugUrl)

      const rawResponse = await fetch(debugUrl)

      if (!rawResponse.ok) {
        const errorText = await rawResponse.text()
        throw new Error(`API error: ${rawResponse.status} ${rawResponse.statusText}\n${errorText}`)
      }

      const debugData = await rawResponse.json()

      // Get processed data
      let processedResult = null
      if (type === "sun") {
        processedResult = await getSunTimes(latNum, lngNum, dateObj)
      } else if (type === "tide") {
        processedResult = await getTideTimes(latNum, lngNum, dateObj, locationId)
      }

      // Set results
      setApiResponse(debugData)
      setProcessedData(processedResult)
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
    } else if (type === "processed") {
      textToCopy = JSON.stringify(processedData, null, 2)
    } else if (type === "all") {
      textToCopy = `
API Debug Results
----------------
Date: ${new Date().toISOString()}
Type: ${type}
Coordinates: ${lat}, ${lng}
Location ID: ${locationId}
Test Date: ${date}
${error ? `Error: ${error}` : ""}

API Response:
${JSON.stringify(apiResponse, null, 2)}

Processed Data:
${JSON.stringify(processedData, null, 2)}
`
    }

    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(type)
      setTimeout(() => setCopied(null), 2000)
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>WillyWeather API Debug</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Alert>
            <InfoIcon className="h-4 w-4" />
            <AlertTitle>Debug Tool</AlertTitle>
            <AlertDescription>
              This tool helps diagnose issues with the WillyWeather API integration. It returns mock data for debugging
              purposes.
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-5 gap-4">
            <div>
              <label className="text-sm font-medium mb-1 block">Data Type</label>
              <Select value={type} onValueChange={setType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select data type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sun">Sun Times</SelectItem>
                  <SelectItem value="tide">Tide Times</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Latitude</label>
              <Input value={lat} onChange={(e) => setLat(e.target.value)} placeholder="e.g. 55.3369" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Longitude</label>
              <Input value={lng} onChange={(e) => setLng(e.target.value)} placeholder="e.g. -1.6129" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Location ID</label>
              <Input value={locationId} onChange={(e) => setLocationId(e.target.value)} placeholder="e.g. alnmouth" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Date</label>
              <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
          </div>

          <div className="flex gap-2">
            <Button onClick={handleTest} disabled={loading}>
              {loading ? "Testing API..." : "Test API"}
            </Button>

            {(apiResponse || processedData) && (
              <Button variant="outline" onClick={() => copyToClipboard("all")} className="ml-auto">
                {copied === "all" ? <CheckCircle2 className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
                Copy All Results
              </Button>
            )}
          </div>

          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-md text-red-800 text-sm">
              <strong>Error:</strong> {error}
            </div>
          )}

          {apiResponse && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">Debug API Response</h3>
                <Button size="sm" variant="ghost" onClick={() => copyToClipboard("api")}>
                  {copied === "api" ? <CheckCircle2 className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-md overflow-auto max-h-96">
                <pre className="text-xs">{JSON.stringify(apiResponse, null, 2)}</pre>
              </div>
            </div>
          )}

          {processedData && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">Processed Data</h3>
                <Button size="sm" variant="ghost" onClick={() => copyToClipboard("processed")}>
                  {copied === "processed" ? <CheckCircle2 className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-md overflow-auto max-h-96">
                <pre className="text-xs">{JSON.stringify(processedData, null, 2)}</pre>
              </div>
            </div>
          )}

          <div className="text-sm text-muted-foreground">
            <p>Use this tool to test the WillyWeather API integration and report any issues.</p>
            <p>Copy and paste the results when reporting problems.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
