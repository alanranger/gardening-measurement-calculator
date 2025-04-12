"use client"

import { Badge } from "@/components/ui/badge"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon, AlertTriangleIcon, Copy, CheckCircle2, PlayIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { clearApiCache } from "@/lib/willy-weather-service"
import { Progress } from "@/components/ui/progress"
import { RouteTest } from "@/components/route-test"

export function TestsPanel() {
  const [activeTest, setActiveTest] = useState(null)

  // Overall test results state
  const [runningAllTests, setRunningAllTests] = useState(false)
  const [allTestsResults, setAllTestsResults] = useState(null)
  const [currentTestRunning, setCurrentTestRunning] = useState(null)

  // API Quick Test state
  const [lat, setLat] = useState("55.3369") // Default to Alnmouth
  const [lng, setLng] = useState("-1.6129")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [apiResponse, setApiResponse] = useState(null)
  const [apiKey, setApiKey] = useState(null)
  const [copied, setCopied] = useState(null)
  const [quickTestResults, setQuickTestResults] = useState(null)

  // API Debug state
  const [debugLat, setDebugLat] = useState("55.3369")
  const [debugLng, setDebugLng] = useState("-1.6129")
  const [locationId, setLocationId] = useState("alnmouth")
  const [date, setDate] = useState(new Date().toISOString().split("T")[0])
  const [type, setType] = useState("sun")
  const [debugLoading, setDebugLoading] = useState(false)
  const [debugError, setDebugError] = useState(null)
  const [debugApiResponse, setDebugApiResponse] = useState(null)
  const [processedData, setProcessedData] = useState(null)
  const [debugCopied, setDebugCopied] = useState(null)
  const [debugTestResults, setDebugTestResults] = useState(null)

  // Location Test state
  const [locationTestResults, setLocationTestResults] = useState(null)
  const [locationTestLoading, setLocationTestLoading] = useState(false)
  const [locationTestError, setLocationTestError] = useState(null)
  const [locationTestData, setLocationTestData] = useState(null)

  // Run all tests function
  const runAllTests = async () => {
    setRunningAllTests(true)
    setAllTestsResults(null)

    const results = {
      totalTests: 3,
      passedTests: 0,
      failedTests: 0,
      tests: {
        quickTest: { status: "pending", success: false, message: "" },
        debugTest: { status: "pending", success: false, message: "" },
        locationTest: { status: "pending", success: false, message: "" },
      },
    }

    try {
      // Run Quick API Test
      setCurrentTestRunning("Quick API Test")
      results.tests.quickTest.status = "running"
      setAllTestsResults({ ...results })

      const quickTestSuccess = await handleQuickTest(true)

      // Use the actual test result instead of checking apiKey
      if (quickTestSuccess) {
        results.tests.quickTest.success = true
        results.tests.quickTest.message = "API test successful"
        results.passedTests++
      } else {
        results.tests.quickTest.success = false
        results.tests.quickTest.message = error || "API key is not configured"
        results.failedTests++
      }
      results.tests.quickTest.status = "completed"
      setAllTestsResults({ ...results })

      // Run Debug API Test
      setCurrentTestRunning("API Debug Test")
      results.tests.debugTest.status = "running"
      setAllTestsResults({ ...results })

      const debugTestSuccess = await handleDebugTest(true)

      // Use the actual test result
      if (debugTestSuccess) {
        results.tests.debugTest.success = true
        results.tests.debugTest.message = "Debug API test successful"
        results.passedTests++
      } else {
        results.tests.debugTest.success = false
        results.tests.debugTest.message = debugError || "Debug API test failed"
        results.failedTests++
      }
      results.tests.debugTest.status = "completed"
      setAllTestsResults({ ...results })

      // Run Location Test
      setCurrentTestRunning("Location Test")
      results.tests.locationTest.status = "running"
      setAllTestsResults({ ...results })

      const locationResults = await runLocationTest(true)

      if (locationResults && locationResults.summary) {
        const successRate = (locationResults.summary.successfulTests / locationResults.summary.totalLocations) * 100
        results.tests.locationTest.success = successRate >= 50 // Consider success if at least 50% of locations pass
        results.tests.locationTest.message = `${locationResults.summary.successfulTests}/${locationResults.summary.totalLocations} locations tested successfully (${successRate.toFixed(1)}%)`

        if (results.tests.locationTest.success) {
          results.passedTests++
        } else {
          results.failedTests++
        }
      } else {
        results.tests.locationTest.success = false
        results.tests.locationTest.message = "Location test failed"
        results.failedTests++
      }
      results.tests.locationTest.status = "completed"
    } catch (error) {
      console.error("Error running all tests:", error)
    } finally {
      setRunningAllTests(false)
      setCurrentTestRunning(null)
      setAllTestsResults(results)
    }
  }

  // Handle API Quick Test
  const handleQuickTest = async (isPartOfAllTests = false) => {
    if (!isPartOfAllTests) {
      setLoading(true)
      setError(null)
      setApiResponse(null)
      setQuickTestResults(null)
    }

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
        setQuickTestResults({
          success: false,
          message: "API key not configured",
          passRate: 0,
        })
        if (!isPartOfAllTests) setLoading(false)
        return false
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
        setQuickTestResults({
          success: false,
          message: apiData.error,
          passRate: 0,
        })
        return false
      } else {
        setQuickTestResults({
          success: true,
          message: "API test successful",
          passRate: 100,
        })
        return true
      }
    } catch (err) {
      console.error("API test error:", err)
      setError(err instanceof Error ? err.message : "Unknown error occurred")
      setQuickTestResults({
        success: false,
        message: err instanceof Error ? err.message : "Unknown error occurred",
        passRate: 0,
      })
      return false
    } finally {
      if (!isPartOfAllTests) {
        setLoading(false)
      }
    }
  }

  // Handle API Debug Test
  const handleDebugTest = async (isPartOfAllTests = false) => {
    if (!isPartOfAllTests) {
      setDebugLoading(true)
      setDebugError(null)
      setDebugApiResponse(null)
      setProcessedData(null)
      setDebugTestResults(null)
    }

    try {
      // Clear cache to ensure fresh data
      clearApiCache()

      // Parse inputs
      const latNum = Number.parseFloat(debugLat)
      const lngNum = Number.parseFloat(debugLng)
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

      // Set results
      setDebugApiResponse(debugData)
      setDebugTestResults({
        success: true,
        message: "Debug API test successful",
        passRate: 100,
      })
      return true
    } catch (err) {
      console.error("API test error:", err)
      setDebugError(err instanceof Error ? err.message : "Unknown error occurred")
      setDebugTestResults({
        success: false,
        message: err instanceof Error ? err.message : "Unknown error occurred",
        passRate: 0,
      })
      return false
    } finally {
      if (!isPartOfAllTests) {
        setDebugLoading(false)
      }
    }
  }

  // Run Location Test
  const runLocationTest = async (isPartOfAllTests = false) => {
    if (!isPartOfAllTests) {
      setLocationTestLoading(true)
      setLocationTestError(null)
      setLocationTestData(null)
      setLocationTestResults(null)
    }

    try {
      const response = await fetch("/api/test-locations")

      if (!response.ok) {
        throw new Error(`API returned status ${response.status}`)
      }

      const data = await response.json()

      if (data.error) {
        throw new Error(data.error)
      }

      setLocationTestData(data)

      // Calculate success rate
      const successRate = (data.summary.successfulTests / data.summary.totalLocations) * 100

      setLocationTestResults({
        success: data.summary.successfulTests > 0,
        message: `${data.summary.successfulTests}/${data.summary.totalLocations} locations tested successfully`,
        passRate: successRate,
      })

      return data
    } catch (error) {
      setLocationTestError(error.message)
      setLocationTestResults({
        success: false,
        message: error.message,
        passRate: 0,
      })
      return null
    } finally {
      if (!isPartOfAllTests) {
        setLocationTestLoading(false)
      }
    }
  }

  // Copy to clipboard functions
  const copyToClipboard = (type, content) => {
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
    } else if (type === "debug-api") {
      textToCopy = JSON.stringify(debugApiResponse, null, 2)
    } else if (type === "debug-all") {
      textToCopy = `
API Debug Results
----------------
Date: ${new Date().toISOString()}
Type: ${type}
Coordinates: ${debugLat}, ${debugLng}
Location ID: ${locationId}
Test Date: ${date}
${debugError ? `Error: ${debugError}` : ""}

API Response:
${JSON.stringify(debugApiResponse, null, 2)}
`
    }

    navigator.clipboard.writeText(textToCopy).then(() => {
      if (type.startsWith("debug")) {
        setDebugCopied(type)
        setTimeout(() => setDebugCopied(null), 2000)
      } else {
        setCopied(type)
        setTimeout(() => setCopied(null), 2000)
      }
    })
  }

  // Helper function to render test result summary
  const renderTestResults = (results) => {
    if (!results) return null

    return (
      <div
        className={`mt-4 p-3 rounded-md ${results.success ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            {results.success ? (
              <CheckCircle2 className="h-5 w-5 text-green-600" />
            ) : (
              <AlertTriangleIcon className="h-5 w-5 text-red-600" />
            )}
            <div>
              <p className={`font-medium ${results.success ? "text-green-700" : "text-red-700"}`}>
                {results.success ? "Test Passed" : "Test Failed"}
              </p>
              <p className="text-sm text-muted-foreground">{results.message}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium">Pass Rate</p>
            <p className={`text-lg font-bold ${results.passRate >= 50 ? "text-green-600" : "text-red-600"}`}>
              {results.passRate.toFixed(1)}%
            </p>
          </div>
        </div>
        <Progress
          value={results.passRate}
          className="h-2 mt-2"
          indicatorClassName={results.passRate >= 50 ? "bg-green-600" : "bg-red-600"}
        />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Test Suite</CardTitle>
        </CardHeader>
        <CardContent>
          <Alert className="mb-6">
            <InfoIcon className="h-4 w-4" />
            <AlertTitle>Testing Tools</AlertTitle>
            <AlertDescription>
              This section contains various tools to test the application's functionality and API integration.
            </AlertDescription>
          </Alert>

          {/* Run All Tests Button */}
          <div className="mb-6">
            <Button
              onClick={runAllTests}
              disabled={runningAllTests}
              className="w-full py-6 flex flex-col items-center justify-center"
            >
              <PlayIcon className="h-6 w-6 mb-2" />
              <span className="text-lg font-medium">
                {runningAllTests ? `Running: ${currentTestRunning}...` : "Run All Tests"}
              </span>
              <span className="text-xs mt-1">Execute all test suites and generate a comprehensive report</span>
            </Button>

            {/* All Tests Results */}
            {allTestsResults && (
              <div className="mt-4 p-4 border rounded-md">
                <h3 className="text-lg font-medium mb-2">Test Suite Results</h3>

                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {allTestsResults.passedTests} of {allTestsResults.totalTests} tests passed
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">Overall Pass Rate</p>
                    <p
                      className={`text-lg font-bold ${(allTestsResults.passedTests / allTestsResults.totalTests) * 100 >= 50 ? "text-green-600" : "text-red-600"}`}
                    >
                      {((allTestsResults.passedTests / allTestsResults.totalTests) * 100).toFixed(1)}%
                    </p>
                  </div>
                </div>

                <Progress
                  value={(allTestsResults.passedTests / allTestsResults.totalTests) * 100}
                  className="h-2 mb-4"
                  indicatorClassName={
                    (allTestsResults.passedTests / allTestsResults.totalTests) * 100 >= 50
                      ? "bg-green-600"
                      : "bg-red-600"
                  }
                />

                <div className="space-y-3">
                  {Object.entries(allTestsResults.tests).map(([testName, result]) => (
                    <div key={testName} className="flex justify-between items-center p-2 border-b">
                      <div className="flex items-center gap-2">
                        {result.status === "completed" ? (
                          result.success ? (
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                          ) : (
                            <AlertTriangleIcon className="h-4 w-4 text-red-600" />
                          )
                        ) : (
                          <div className="h-4 w-4 rounded-full border-2 border-t-transparent border-blue-500 animate-spin" />
                        )}
                        <span className="font-medium">
                          {testName === "quickTest"
                            ? "Quick API Test"
                            : testName === "debugTest"
                              ? "API Debug Test"
                              : "Location Test"}
                        </span>
                      </div>
                      <span className={`text-sm ${result.success ? "text-green-600" : "text-red-600"}`}>
                        {result.message}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Button
              variant={activeTest === "quick" ? "default" : "outline"}
              onClick={() => setActiveTest(activeTest === "quick" ? null : "quick")}
              className="h-auto py-4 flex flex-col items-center justify-center"
            >
              <span className="text-lg font-medium">Quick API Test</span>
              <span className="text-xs mt-1">Test basic API connectivity</span>
            </Button>

            <Button
              variant={activeTest === "debug" ? "default" : "outline"}
              onClick={() => setActiveTest(activeTest === "debug" ? null : "debug")}
              className="h-auto py-4 flex flex-col items-center justify-center"
            >
              <span className="text-lg font-medium">API Debug</span>
              <span className="text-xs mt-1">Advanced API testing with parameters</span>
            </Button>

            <Button
              variant={activeTest === "locations" ? "default" : "outline"}
              onClick={() => setActiveTest(activeTest === "locations" ? null : "locations")}
              className="h-auto py-4 flex flex-col items-center justify-center"
            >
              <span className="text-lg font-medium">Location Tests</span>
              <span className="text-xs mt-1">Test multiple locations across the UK</span>
            </Button>

            <Button
              variant={activeTest === "routes" ? "default" : "outline"}
              onClick={() => setActiveTest(activeTest === "routes" ? null : "routes")}
              className="h-auto py-4 flex flex-col items-center justify-center"
            >
              <span className="text-lg font-medium">Route Tests</span>
              <span className="text-xs mt-1">Test route calculations and distances</span>
            </Button>
          </div>

          {activeTest === "quick" && (
            <div className="space-y-4 border p-4 rounded-md">
              <h3 className="text-lg font-medium">Quick API Test</h3>
              <p className="text-sm text-muted-foreground">
                Test the WillyWeather API integration with a simple request using default coordinates.
              </p>

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
                <Button onClick={() => handleQuickTest()} disabled={loading}>
                  {loading ? "Testing API..." : "Run Quick Test"}
                </Button>

                {apiResponse && (
                  <Button variant="outline" onClick={() => copyToClipboard("all", null)} className="ml-auto">
                    {copied === "all" ? <CheckCircle2 className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
                    Copy Results
                  </Button>
                )}
              </div>

              {/* Quick Test Results */}
              {renderTestResults(quickTestResults)}

              {apiKey && (
                <div
                  className={`p-4 ${
                    apiKey === "configured"
                      ? "bg-green-50 border border-green-200 text-green-800"
                      : "bg-yellow-50 border border-yellow-200 text-yellow-800"
                  } rounded-md text-sm`}
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
                    <Button size="sm" variant="ghost" onClick={() => copyToClipboard("error", null)}>
                      {copied === "error" ? <CheckCircle2 className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              )}

              {apiResponse && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">API Response</h3>
                    <Button size="sm" variant="ghost" onClick={() => copyToClipboard("api", null)}>
                      {copied === "api" ? <CheckCircle2 className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-md overflow-auto max-h-96">
                    <pre className="text-xs">{JSON.stringify(apiResponse, null, 2)}</pre>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTest === "debug" && (
            <div className="space-y-4 border p-4 rounded-md">
              <h3 className="text-lg font-medium">API Debug</h3>
              <p className="text-sm text-muted-foreground">
                Advanced API testing with custom parameters for detailed debugging.
              </p>

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
                  <Input value={debugLat} onChange={(e) => setDebugLat(e.target.value)} placeholder="e.g. 55.3369" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Longitude</label>
                  <Input value={debugLng} onChange={(e) => setDebugLng(e.target.value)} placeholder="e.g. -1.6129" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Location ID</label>
                  <Input
                    value={locationId}
                    onChange={(e) => setLocationId(e.target.value)}
                    placeholder="e.g. alnmouth"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Date</label>
                  <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
              </div>

              <div className="flex gap-2">
                <Button onClick={() => handleDebugTest()} disabled={debugLoading}>
                  {debugLoading ? "Testing API..." : "Run Debug Test"}
                </Button>

                {debugApiResponse && (
                  <Button variant="outline" onClick={() => copyToClipboard("debug-all", null)} className="ml-auto">
                    {debugCopied === "debug-all" ? (
                      <CheckCircle2 className="h-4 w-4 mr-2" />
                    ) : (
                      <Copy className="h-4 w-4 mr-2" />
                    )}
                    Copy Results
                  </Button>
                )}
              </div>

              {/* Debug Test Results */}
              {renderTestResults(debugTestResults)}

              {debugError && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-md text-red-800 text-sm">
                  <strong>Error:</strong> {debugError}
                </div>
              )}

              {debugApiResponse && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">Debug API Response</h3>
                    <Button size="sm" variant="ghost" onClick={() => copyToClipboard("debug-api", null)}>
                      {debugCopied === "debug-api" ? (
                        <CheckCircle2 className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-md overflow-auto max-h-96">
                    <pre className="text-xs">{JSON.stringify(debugApiResponse, null, 2)}</pre>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTest === "locations" && (
            <div className="space-y-4 border p-4 rounded-md">
              <h3 className="text-lg font-medium">Location Test Suite</h3>
              <p className="text-sm text-muted-foreground">
                This tool tests sun and tide times for 10 different locations across the UK and compares the calculated
                times with the API times.
              </p>

              <Button onClick={() => runLocationTest()} disabled={locationTestLoading}>
                {locationTestLoading ? "Running Tests..." : "Run Location Tests"}
              </Button>

              {/* Location Test Results */}
              {renderTestResults(locationTestResults)}

              {locationTestError && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-md text-red-800 text-sm">
                  <AlertTriangleIcon className="h-4 w-4 inline-block mr-2" />
                  <strong>Error:</strong> {locationTestError}
                </div>
              )}

              {locationTestData && (
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
                    <h3 className="text-lg font-medium mb-2">Test Summary</h3>
                    <p>
                      <strong>Date:</strong> {locationTestData.date}
                    </p>
                    <p>
                      <strong>Total Locations:</strong> {locationTestData.summary.totalLocations}
                    </p>
                    <p>
                      <strong>Successful Tests:</strong> {locationTestData.summary.successfulTests}
                    </p>
                    <p>
                      <strong>Failed Tests:</strong> {locationTestData.summary.failedTests}
                    </p>

                    <div className="mt-3">
                      <p className="font-medium mb-1">Success Rate</p>
                      <Progress
                        value={
                          (locationTestData.summary.successfulTests / locationTestData.summary.totalLocations) * 100
                        }
                        className="h-2"
                        indicatorClassName={
                          (locationTestData.summary.successfulTests / locationTestData.summary.totalLocations) * 100 >=
                          50
                            ? "bg-green-600"
                            : "bg-red-600"
                        }
                      />
                      <p className="text-xs text-right mt-1">
                        {(
                          (locationTestData.summary.successfulTests / locationTestData.summary.totalLocations) *
                          100
                        ).toFixed(1)}
                        %
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {locationTestData.results.map((result, index) => (
                      <div key={index} className="p-4 bg-gray-50 border border-gray-200 rounded-md">
                        <div className="flex justify-between items-center">
                          <h4 className="font-medium">{result.location}</h4>
                          {result.error ? (
                            <Badge variant="destructive">Failed</Badge>
                          ) : (
                            <Badge variant="outline" className="bg-green-50">
                              Passed
                            </Badge>
                          )}
                        </div>

                        {result.error ? (
                          <div className="text-red-600 mt-2 text-sm">Error: {result.error}</div>
                        ) : (
                          <div className="mt-2 text-sm">
                            <p className="text-muted-foreground">Sun times and tide times calculated successfully</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTest === "routes" && <RouteTest />}
        </CardContent>
      </Card>
    </div>
  )
}
