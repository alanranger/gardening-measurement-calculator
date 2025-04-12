"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { AlertTriangleIcon, CheckCircle2 } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export function LocationTest() {
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState(null)
  const [error, setError] = useState(null)

  const runTest = async () => {
    setLoading(true)
    setError(null)
    setResults(null)

    try {
      const response = await fetch("/api/test-locations")

      if (!response.ok) {
        throw new Error(`API returned status ${response.status}`)
      }

      const data = await response.json()

      if (data.error) {
        throw new Error(data.error)
      }

      setResults(data)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  // Calculate success rate
  const successRate = results ? (results.summary.successfulTests / results.summary.totalLocations) * 100 : 0

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Button onClick={runTest} disabled={loading}>
          {loading ? "Running Tests..." : "Run Location Tests"}
        </Button>

        {results && (
          <div className="text-right">
            <p className="text-sm font-medium">Pass Rate</p>
            <p className={`text-lg font-bold ${successRate >= 50 ? "text-green-600" : "text-red-600"}`}>
              {successRate.toFixed(1)}%
            </p>
          </div>
        )}
      </div>

      {/* Test Results Summary */}
      {results && (
        <div
          className={`p-4 rounded-md ${successRate >= 50 ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}
        >
          <div className="flex items-center gap-2 mb-2">
            {successRate >= 50 ? (
              <CheckCircle2 className="h-5 w-5 text-green-600" />
            ) : (
              <AlertTriangleIcon className="h-5 w-5 text-red-600" />
            )}
            <div>
              <p className={`font-medium ${successRate >= 50 ? "text-green-700" : "text-red-700"}`}>
                {successRate >= 50 ? "Tests Passed" : "Tests Failed"}
              </p>
              <p className="text-sm text-muted-foreground">
                {results.summary.successfulTests} of {results.summary.totalLocations} locations tested successfully
              </p>
            </div>
          </div>
          <Progress
            value={successRate}
            className="h-2"
            indicatorClassName={successRate >= 50 ? "bg-green-600" : "bg-red-600"}
          />
        </div>
      )}

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-md text-red-800 text-sm">
          <AlertTriangleIcon className="h-4 w-4 inline-block mr-2" />
          <strong>Error:</strong> {error}
        </div>
      )}

      {results && (
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
            <h3 className="text-lg font-medium mb-2">Test Summary</h3>
            <p>
              <strong>Date:</strong> {results.date}
            </p>
            <p>
              <strong>Total Locations:</strong> {results.summary.totalLocations}
            </p>
            <p>
              <strong>Successful Tests:</strong> {results.summary.successfulTests}
            </p>
            <p>
              <strong>Failed Tests:</strong> {results.summary.failedTests}
            </p>
          </div>

          <Tabs defaultValue="results">
            <TabsList>
              <TabsTrigger value="results">Results</TabsTrigger>
              <TabsTrigger value="raw">Raw Data</TabsTrigger>
            </TabsList>

            <TabsContent value="results">
              <div className="space-y-4">
                {results.results.map((result, index) => (
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
                      <div className="text-red-600">Error: {result.error}</div>
                    ) : (
                      <div className="space-y-3">
                        <div>
                          <h5 className="font-medium text-sm mb-1">Sun Times</h5>
                          <div className="grid grid-cols-4 gap-2 text-xs">
                            <div className="font-medium">Time</div>
                            <div className="font-medium">Calculated</div>
                            <div className="font-medium">API</div>
                            <div className="font-medium">Difference</div>

                            <div>First Light</div>
                            <div>{result.sunTimes.calculated.firstLight}</div>
                            <div>{result.sunTimes.api?.firstLight || "N/A"}</div>
                            <div>{result.sunTimes.differences?.firstLight || "N/A"}</div>

                            <div>Sunrise</div>
                            <div>{result.sunTimes.calculated.sunrise}</div>
                            <div>{result.sunTimes.api?.sunrise || "N/A"}</div>
                            <div>{result.sunTimes.differences?.sunrise || "N/A"}</div>

                            <div>Sunset</div>
                            <div>{result.sunTimes.calculated.sunset}</div>
                            <div>{result.sunTimes.api?.sunset || "N/A"}</div>
                            <div>{result.sunTimes.differences?.sunset || "N/A"}</div>

                            <div>Last Light</div>
                            <div>{result.sunTimes.calculated.lastLight}</div>
                            <div>{result.sunTimes.api?.lastLight || "N/A"}</div>
                            <div>{result.sunTimes.differences?.lastLight || "N/A"}</div>
                          </div>
                        </div>

                        {result.tideTimes && (
                          <div>
                            <h5 className="font-medium text-sm mb-1">Tide Times</h5>
                            <div className="grid grid-cols-3 gap-2 text-xs">
                              <div className="font-medium">Type</div>
                              <div className="font-medium">Calculated</div>
                              <div className="font-medium">API</div>

                              {result.tideTimes.calculated.highTides.map((tide, i) => (
                                <React.Fragment key={`high-tide-${i}`}>
                                  <div>High Tide {i + 1}</div>
                                  <div>
                                    {tide.time} ({tide.height}m)
                                  </div>
                                  <div>
                                    {result.tideTimes.api?.highTides[i]
                                      ? `${result.tideTimes.api.highTides[i].time} (${result.tideTimes.api.highTides[i].height}m)`
                                      : "N/A"}
                                  </div>
                                </React.Fragment>
                              ))}

                              {result.tideTimes.calculated.lowTides.map((tide, i) => (
                                <React.Fragment key={`low-tide-${i}`}>
                                  <div>Low Tide {i + 1}</div>
                                  <div>
                                    {tide.time} ({tide.height}m)
                                  </div>
                                  <div>
                                    {result.tideTimes.api?.lowTides[i]
                                      ? `${result.tideTimes.api.lowTides[i].time} (${result.tideTimes.api.lowTides[i].height}m)`
                                      : "N/A"}
                                  </div>
                                </React.Fragment>
                              ))}
                            </div>
                          </div>
                        )}

                        {result.apiError && <div className="text-red-600 text-xs">API Error: {result.apiError}</div>}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="raw">
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-md overflow-auto max-h-96">
                <pre className="text-xs">{JSON.stringify(results, null, 2)}</pre>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  )
}
