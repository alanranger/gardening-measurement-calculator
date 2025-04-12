"use client"

import { format } from "date-fns"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SunIcon, MoonIcon, WavesIcon, MapPinIcon, CloudIcon, AlertTriangleIcon } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function WorkshopResults({ results }) {
  if (!results) return null

  const {
    location,
    region,
    coordinates,
    date,
    sunTimes,
    tidalTimes,
    locationType,
    hasTidalData,
    dataSource,
    apiError,
  } = results

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

  // Helper function to safely calculate time offsets
  const safeTimeOffset = (dateString, offsetMinutes) => {
    try {
      if (!dateString) return null
      const date = new Date(dateString)
      if (isNaN(date.getTime())) return null
      return new Date(date.getTime() + offsetMinutes * 60 * 1000)
    } catch (error) {
      console.error("Error calculating time offset:", error)
      return null
    }
  }

  // Sort tidal times chronologically
  const sortedTidalTimes = tidalTimes
    ? [
        ...tidalTimes.highTides.map((tide) => ({ ...tide, type: "high" })),
        ...tidalTimes.lowTides.map((tide) => ({ ...tide, type: "low" })),
      ].sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime())
    : []

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">Workshop Schedule</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="outline" className="text-sm">
            {safeFormat(new Date(date), "EEEE, MMMM d, yyyy")}
          </Badge>
          <Badge variant="outline" className="text-sm">
            {location}
          </Badge>
          <Badge variant="outline" className="text-sm">
            {region}
          </Badge>
          <Badge variant={locationType === "coastal" ? "secondary" : "outline"} className="text-sm">
            {locationType === "coastal" ? "Coastal" : "Inland"}
          </Badge>
          {dataSource === "api" ? (
            <Badge variant="outline" className="text-sm bg-blue-50">
              <CloudIcon className="h-3 w-3 mr-1" />
              WillyWeather Data
            </Badge>
          ) : (
            <Badge variant="outline" className="text-sm bg-yellow-50">
              <AlertTriangleIcon className="h-3 w-3 mr-1" />
              Fallback Calculations
            </Badge>
          )}
        </div>
        <div className="text-xs text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <MapPinIcon className="h-3 w-3" />
            <span>
              Coordinates: {coordinates.lat.toFixed(4)}, {coordinates.lng.toFixed(4)}
            </span>
          </div>
        </div>

        {apiError && (
          <Alert variant="warning" className="mb-4">
            <AlertTriangleIcon className="h-4 w-4" />
            <AlertTitle>API Error</AlertTitle>
            <AlertDescription>
              Could not retrieve data from WillyWeather API: {apiError}
              {dataSource === "fallback" && " Using fallback calculations instead."}
            </AlertDescription>
          </Alert>
        )}
      </div>

      <Tabs defaultValue="sun" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="sun">
            <SunIcon className="h-4 w-4 mr-2" />
            Sun Times
          </TabsTrigger>
          <TabsTrigger value="tidal" disabled={!tidalTimes}>
            <WavesIcon className="h-4 w-4 mr-2" />
            Tidal Times
          </TabsTrigger>
        </TabsList>
        <TabsContent value="sun" className="space-y-4">
          {sunTimes ? (
            <>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center">
                    <SunIcon className="h-4 w-4 mr-2 text-amber-500" />
                    Morning Golden Hour
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex flex-col">
                      <span className="text-muted-foreground">First Light</span>
                      <span className="font-medium">{safeFormat(sunTimes.firstLight, "h:mm a")}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-muted-foreground">Sunrise</span>
                      <span className="font-medium">{safeFormat(sunTimes.sunrise, "h:mm a")}</span>
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground">
                    <p>
                      Optimal shooting time:{" "}
                      <span className="font-medium">
                        {safeFormat(sunTimes.firstLight, "h:mm a")} -{" "}
                        {safeFormat(safeTimeOffset(sunTimes.sunrise, 30), "h:mm a")}
                      </span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center">
                    <MoonIcon className="h-4 w-4 mr-2 text-indigo-500" />
                    Evening Golden Hour
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex flex-col">
                      <span className="text-muted-foreground">Sunset</span>
                      <span className="font-medium">{safeFormat(sunTimes.sunset, "h:mm a")}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-muted-foreground">Last Light</span>
                      <span className="font-medium">{safeFormat(sunTimes.lastLight, "h:mm a")}</span>
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground">
                    <p>
                      Optimal shooting time:{" "}
                      <span className="font-medium">
                        {safeFormat(safeTimeOffset(sunTimes.sunset, -30), "h:mm a")} -{" "}
                        {safeFormat(sunTimes.lastLight, "h:mm a")}
                      </span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </>
          ) : (
            <div className="text-center p-8 text-muted-foreground">No sun time information available.</div>
          )}
        </TabsContent>

        <TabsContent value="tidal" className="space-y-4">
          {tidalTimes ? (
            <>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center">
                    <WavesIcon className="h-4 w-4 mr-2 text-blue-500" />
                    Tidal Times (Chronological)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {sortedTidalTimes.map((tide, index) => (
                      <div key={index} className="flex flex-col">
                        <span className="text-muted-foreground">
                          {tide.type === "high" ? "High Tide" : "Low Tide"} {index + 1}
                        </span>
                        <span className="font-medium">{safeFormat(tide.time, "h:mm a")}</span>
                        <span className="text-xs text-muted-foreground">Height: {tide.height}m</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-xs text-muted-foreground">
                    <p>Optimal shooting time for high tides: 1-2 hours before and after high tide</p>
                    <p>Optimal shooting time for low tides: 1 hour before and 2 hours after low tide</p>
                  </div>
                </CardContent>
              </Card>
            </>
          ) : (
            <div className="text-center p-8 text-muted-foreground">
              {locationType === "coastal"
                ? "No tidal information available for this location."
                : "N/A - This is an inland location."}
            </div>
          )}
        </TabsContent>
      </Tabs>

      <div className="mt-6">
        <h3 className="text-sm font-medium mb-2">Recommended Schedule</h3>
        <div className="space-y-2 text-sm">
          {sunTimes && (
            <>
              <div className="flex items-start gap-2">
                <div className="bg-amber-100 text-amber-800 rounded-full p-1">
                  <SunIcon className="h-3 w-3" />
                </div>
                <div>
                  <p className="font-medium">Morning Session</p>
                  <p className="text-muted-foreground">
                    Arrive at {safeFormat(safeTimeOffset(sunTimes.firstLight, -15), "h:mm a")} to set up for first light
                    at {safeFormat(sunTimes.firstLight, "h:mm a")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="bg-indigo-100 text-indigo-800 rounded-full p-1">
                  <MoonIcon className="h-3 w-3" />
                </div>
                <div>
                  <p className="font-medium">Evening Session</p>
                  <p className="text-muted-foreground">
                    Arrive at {safeFormat(safeTimeOffset(sunTimes.sunset, -60), "h:mm a")} to set up for sunset at{" "}
                    {safeFormat(sunTimes.sunset, "h:mm a")}
                  </p>
                </div>
              </div>
            </>
          )}

          {tidalTimes && tidalTimes.bestTide && (
            <div className="flex items-start gap-2">
              <div className="bg-blue-100 text-blue-800 rounded-full p-1">
                <WavesIcon className="h-3 w-3" />
              </div>
              <div>
                <p className="font-medium">Tidal Considerations</p>
                <p className="text-muted-foreground">
                  Plan around {tidalTimes.bestTide.type === "high" ? "high tide" : "low tide"} at{" "}
                  {safeFormat(tidalTimes.bestTide.time, "h:mm a")} for optimal conditions
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {dataSource === "api" ? (
        <div className="text-xs text-center text-muted-foreground mt-4">Powered by WillyWeather</div>
      ) : (
        <div className="text-xs text-center text-muted-foreground mt-4">
          Using fallback calculations - WillyWeather API data unavailable
        </div>
      )}
    </div>
  )
}
