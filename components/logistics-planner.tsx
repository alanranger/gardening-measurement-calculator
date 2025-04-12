"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  MapPinIcon,
  CarIcon,
  ClockIcon,
  SearchIcon,
  ArrowRightIcon,
  WavesIcon,
  LoaderIcon,
  CloudIcon,
  CalculatorIcon,
  ExternalLinkIcon,
} from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"

export function LogisticsPlanner({ locations = [] }) {
  // State for location selection
  const [startLocation, setStartLocation] = useState(null)
  const [endLocation, setEndLocation] = useState(null)

  // State for manual input
  const [startInput, setStartInput] = useState("")
  const [endInput, setEndInput] = useState("")
  const [startCoordinates, setStartCoordinates] = useState(null)
  const [endCoordinates, setEndCoordinates] = useState(null)

  // State for search
  const [startSearchOpen, setStartSearchOpen] = useState(false)
  const [endSearchOpen, setEndSearchOpen] = useState(false)
  const [searchResults, setSearchResults] = useState([])

  // State for results
  const [distance, setDistance] = useState(null)
  const [drivingTime, setDrivingTime] = useState(null)
  const [calculationMethod, setCalculationMethod] = useState(null)
  const [error, setError] = useState(null)
  const [errorDetails, setErrorDetails] = useState(null)
  const [fixInstructions, setFixInstructions] = useState(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [routeInfo, setRouteInfo] = useState(null)
  const [routeSource, setRouteSource] = useState(null)

  // Process locations for display and selection
  const processedLocations = locations.map((location, index) => ({
    ...location,
    displayId: `#${index + 1}`,
    displayName: location.name,
    searchText: `${location.name} ${location.cluster || ""} ${location.type || ""}`.toLowerCase(),
  }))

  // Filter locations based on search input
  const filterLocations = (input) => {
    if (!input) return processedLocations.slice(0, 10) // Return first 10 if no input

    const searchText = input.toLowerCase()
    return processedLocations
      .filter(
        (location) =>
          location.searchText.includes(searchText) ||
          (location.displayId && location.displayId.toLowerCase().includes(searchText)),
      )
      .slice(0, 10) // Limit to 10 results
  }

  // Handle search input change
  useEffect(() => {
    setSearchResults(filterLocations(startInput || endInput))
  }, [startInput, endInput])

  // Calculate route when both locations are selected
  useEffect(() => {
    if ((startLocation || startCoordinates) && (endLocation || endCoordinates)) {
      calculateRoute()
    }
  }, [startLocation, endLocation, startCoordinates, endCoordinates])

  // Function to calculate the route using the API
  const calculateRoute = async () => {
    try {
      setError(null)
      setErrorDetails(null)
      setFixInstructions(null)
      setIsCalculating(true)
      setRouteInfo(null)
      setRouteSource(null)

      // Get coordinates from either selected locations or manual input
      const startLat = startLocation ? startLocation.coordinates.lat : startCoordinates?.lat
      const startLng = startLocation ? startLocation.coordinates.lng : startCoordinates?.lng
      const endLat = endLocation ? endLocation.coordinates.lat : endCoordinates?.lat
      const endLng = endLocation ? endLocation.coordinates.lng : endCoordinates?.lng

      if (!startLat || !startLng || !endLat || !endLng) {
        setError("Please provide valid coordinates for both locations")
        setIsCalculating(false)
        return
      }

      // Call our route calculator API
      const response = await fetch("/api/route-calculator", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          startLat,
          startLng,
          endLat,
          endLng,
        }),
      })

      // Check if the response is JSON
      const contentType = response.headers.get("content-type")
      if (!contentType || !contentType.includes("application/json")) {
        // Not a JSON response, handle as error
        const text = await response.text()
        console.error("API returned non-JSON response:", text)
        throw new Error(`API returned non-JSON response (${response.status})`)
      }

      const data = await response.json()

      if (data.error && !data.route) {
        throw new Error(data.error)
      }

      // Set the route information
      setRouteInfo(data.route)
      setRouteSource(data.source)

      // If there was a Google Maps error but we're using simulation, show a warning
      if (data.googleMapsError) {
        setError(`Google Maps API error: ${data.googleMapsError}. Using simulation instead.`)
        setErrorDetails(data.googleMapsErrorDetails || null)
        setFixInstructions(data.fixInstructions || null)
      }

      // Extract distance and time from the response
      const distanceText = data.route.distance.text
      const durationText = data.route.duration.text

      // Parse the distance value (remove " miles" and convert to number)
      const distanceValue = Number.parseFloat(distanceText.replace(" miles", "").replace(" feet", ""))
      setDistance(distanceValue)

      // Parse the duration
      const durationMinutes = data.route.duration.value / 60 // Convert seconds to minutes
      setDrivingTime({
        hours: Math.floor(durationMinutes / 60),
        minutes: Math.round(durationMinutes % 60),
        totalMinutes: Math.round(durationMinutes),
      })

      // Set calculation method
      setCalculationMethod(startLocation && endLocation ? "database" : "coordinates")
    } catch (err) {
      console.error("Error calculating route:", err)
      setError(`Failed to calculate route: ${err.message}`)

      // Fallback to simulation if API fails
      try {
        const startLat = startLocation ? startLocation.coordinates.lat : startCoordinates?.lat
        const startLng = startLocation ? startLocation.coordinates.lng : startCoordinates?.lng
        const endLat = endLocation ? endLocation.coordinates.lat : endCoordinates?.lat
        const endLng = endLocation ? endLocation.coordinates.lng : endCoordinates?.lng

        if (startLat && startLng && endLat && endLng) {
          // Use our local simulation as fallback
          const simulatedRoute = getSimulatedRoute(startLat, startLng, endLat, endLng)

          setRouteInfo(simulatedRoute)
          setRouteSource("simulation")
          setError(`${err.message}. Using simulated route as fallback.`)

          // Extract distance and time from the simulated route
          const distanceText = simulatedRoute.distance.text
          const distanceValue = Number.parseFloat(distanceText.replace(" miles", "").replace(" feet", ""))
          setDistance(distanceValue)

          // Parse the duration
          const durationMinutes = simulatedRoute.duration.value / 60
          setDrivingTime({
            hours: Math.floor(durationMinutes / 60),
            minutes: Math.round(durationMinutes % 60),
            totalMinutes: Math.round(durationMinutes),
          })
        }
      } catch (fallbackError) {
        console.error("Error in fallback route calculation:", fallbackError)
      }
    } finally {
      setIsCalculating(false)
    }
  }

  // Function to handle manual coordinate input
  const handleManualCoordinateInput = (input, isStart) => {
    try {
      // Check if input is a postcode
      if (/^[A-Z]{1,2}[0-9][0-9A-Z]?\s?[0-9][A-Z]{2}$/i.test(input)) {
        // This would normally call a postcode API, but for now we'll use our mock data
        // In a real implementation, you would use a geocoding service
        setError("Postcode lookup would be implemented with a real API")
        return
      }

      // Check if input is coordinates (lat,lng format)
      const coordsMatch = input.match(/(-?\d+\.?\d*),\s*(-?\d+\.?\d*)/)
      if (coordsMatch) {
        const lat = Number.parseFloat(coordsMatch[1])
        const lng = Number.parseFloat(coordsMatch[2])

        if (isNaN(lat) || isNaN(lng) || lat < -90 || lat > 90 || lng < -180 || lng > 180) {
          setError("Invalid coordinates. Latitude must be between -90 and 90, longitude between -180 and 180.")
          return
        }

        if (isStart) {
          setStartCoordinates({ lat, lng })
        } else {
          setEndCoordinates({ lat, lng })
        }
        return
      }

      // If not coordinates or postcode, try to find a location by name
      const matchedLocation = processedLocations.find((loc) => loc.name.toLowerCase() === input.toLowerCase())

      if (matchedLocation) {
        if (isStart) {
          setStartLocation(matchedLocation)
        } else {
          setEndLocation(matchedLocation)
        }
        return
      }

      setError(`Could not find location "${input}". Please try coordinates, postcode, or select from the list.`)
    } catch (err) {
      console.error("Error processing manual input:", err)
      setError("Failed to process input. Please try again.")
    }
  }

  // Fallback function for when the API call fails
  function getSimulatedRoute(startLat, startLng, endLat, endLng) {
    // Calculate straight-line distance first (Haversine formula)
    const R = 3959 // Radius of the earth in miles
    const dLat = deg2rad(endLat - startLat)
    const dLng = deg2rad(endLng - startLng)
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(startLat)) * Math.cos(deg2rad(endLat)) * Math.sin(dLng / 2) * Math.sin(dLng / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    const distanceMiles = R * c // Distance in miles

    // Apply a "winding factor" to simulate real roads (typically 20-40% longer than straight line)
    const windingFactor = 1.3 + Math.random() * 0.2 // Between 1.3 and 1.5

    // Check if we're in a known mountainous or complex road area
    const isMountainous =
      // Scottish Highlands
      (startLat > 56.5 && startLng < -4.0) ||
      (endLat > 56.5 && endLng < -4.0) ||
      // Lake District
      (startLat > 54.3 && startLat < 54.8 && startLng > -3.5 && startLng < -2.8) ||
      (endLat > 54.3 && endLat < 54.8 && endLng > -3.5 && endLng < -2.8) ||
      // Snowdonia
      (startLat > 52.8 && startLat < 53.2 && startLng > -4.2 && startLng < -3.8) ||
      (endLat > 52.8 && endLat < 53.2 && endLng > -4.2 && endLng < -3.8)

    // Apply additional factor for mountainous areas
    const terrainFactor = isMountainous ? 1.2 : 1.0

    // Calculate adjusted distance
    const adjustedDistanceMiles = distanceMiles * windingFactor * terrainFactor

    // For very short distances, show in feet
    let distanceText
    if (adjustedDistanceMiles < 0.1) {
      const distanceFeet = Math.round(adjustedDistanceMiles * 5280)
      distanceText = `${distanceFeet} feet`
    } else {
      distanceText = `${adjustedDistanceMiles.toFixed(1)} miles`
    }

    // Calculate driving time
    const isLongDistance = adjustedDistanceMiles > 30
    const avgSpeedMph = isLongDistance ? 50 : 40
    const adjustedSpeed = isMountainous ? avgSpeedMph * 0.8 : avgSpeedMph
    const timeHours = adjustedDistanceMiles / adjustedSpeed
    const timeMinutes = Math.round(timeHours * 60)
    const trafficFactor = 1 + (Math.random() * 0.1 + 0.05)
    const finalTimeMinutes = Math.round(timeMinutes * trafficFactor)

    return {
      distance: {
        text: distanceText,
        value: Math.round(adjustedDistanceMiles * 5280), // Convert to feet
      },
      duration: {
        text:
          finalTimeMinutes >= 60
            ? `${Math.floor(finalTimeMinutes / 60)} hours ${finalTimeMinutes % 60} mins`
            : `${finalTimeMinutes} mins`,
        value: finalTimeMinutes * 60, // Convert to seconds
      },
      source: "simulation",
    }
  }

  function deg2rad(deg) {
    return deg * (Math.PI / 180)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Workshop Logistics Planner</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="locations">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="locations">Select Locations</TabsTrigger>
            <TabsTrigger value="manual">Manual Input</TabsTrigger>
          </TabsList>

          <TabsContent value="locations" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Start Location */}
              <div className="space-y-2">
                <Label>Start Location</Label>
                <Popover open={startSearchOpen} onOpenChange={setStartSearchOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={startSearchOpen}
                      className="w-full justify-between"
                    >
                      {startLocation ? (
                        <div className="flex items-center">
                          <Badge variant="outline" className="mr-2">
                            {startLocation.displayId}
                          </Badge>
                          {startLocation.type === "coastal" ? (
                            <WavesIcon className="h-3.5 w-3.5 mr-2 text-blue-500" />
                          ) : (
                            <MapPinIcon className="h-3.5 w-3.5 mr-2 text-gray-500" />
                          )}
                          <span>{startLocation.displayName}</span>
                        </div>
                      ) : (
                        "Select start location..."
                      )}
                      <SearchIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[300px] p-0">
                    <Command>
                      <CommandInput
                        placeholder="Search locations..."
                        value={startInput}
                        onValueChange={setStartInput}
                      />
                      <CommandList>
                        <CommandEmpty>No locations found.</CommandEmpty>
                        <CommandGroup>
                          {filterLocations(startInput).map((location) => (
                            <CommandItem
                              key={location.id}
                              value={location.id}
                              onSelect={() => {
                                setStartLocation(location)
                                setStartCoordinates(null)
                                setStartSearchOpen(false)
                              }}
                            >
                              <div className="flex items-center">
                                <Badge variant="outline" className="mr-2">
                                  {location.displayId}
                                </Badge>
                                {location.type === "coastal" ? (
                                  <WavesIcon className="h-3.5 w-3.5 mr-2 text-blue-500" />
                                ) : (
                                  <MapPinIcon className="h-3.5 w-3.5 mr-2 text-gray-500" />
                                )}
                                <span>{location.displayName}</span>
                              </div>
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>

              {/* End Location */}
              <div className="space-y-2">
                <Label>End Location</Label>
                <Popover open={endSearchOpen} onOpenChange={setEndSearchOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={endSearchOpen}
                      className="w-full justify-between"
                    >
                      {endLocation ? (
                        <div className="flex items-center">
                          <Badge variant="outline" className="mr-2">
                            {endLocation.displayId}
                          </Badge>
                          {endLocation.type === "coastal" ? (
                            <WavesIcon className="h-3.5 w-3.5 mr-2 text-blue-500" />
                          ) : (
                            <MapPinIcon className="h-3.5 w-3.5 mr-2 text-gray-500" />
                          )}
                          <span>{endLocation.displayName}</span>
                        </div>
                      ) : (
                        "Select end location..."
                      )}
                      <SearchIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[300px] p-0">
                    <Command>
                      <CommandInput placeholder="Search locations..." value={endInput} onValueChange={setEndInput} />
                      <CommandList>
                        <CommandEmpty>No locations found.</CommandEmpty>
                        <CommandGroup>
                          {filterLocations(endInput).map((location) => (
                            <CommandItem
                              key={location.id}
                              value={location.id}
                              onSelect={() => {
                                setEndLocation(location)
                                setEndCoordinates(null)
                                setEndSearchOpen(false)
                              }}
                            >
                              <div className="flex items-center">
                                <Badge variant="outline" className="mr-2">
                                  {location.displayId}
                                </Badge>
                                {location.type === "coastal" ? (
                                  <WavesIcon className="h-3.5 w-3.5 mr-2 text-blue-500" />
                                ) : (
                                  <MapPinIcon className="h-3.5 w-3.5 mr-2 text-gray-500" />
                                )}
                                <span>{location.displayName}</span>
                              </div>
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="manual" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Manual Start Input */}
              <div className="space-y-2">
                <Label>Start Location</Label>
                <div className="flex space-x-2">
                  <Input
                    placeholder="Name, postcode, or coordinates (lat,lng)"
                    value={startInput}
                    onChange={(e) => setStartInput(e.target.value)}
                  />
                  <Button variant="outline" onClick={() => handleManualCoordinateInput(startInput, true)}>
                    Set
                  </Button>
                </div>
                {startCoordinates && (
                  <p className="text-xs text-muted-foreground">
                    Coordinates: {startCoordinates.lat.toFixed(6)}, {startCoordinates.lng.toFixed(6)}
                  </p>
                )}
              </div>

              {/* Manual End Input */}
              <div className="space-y-2">
                <Label>End Location</Label>
                <div className="flex space-x-2">
                  <Input
                    placeholder="Name, postcode, or coordinates (lat,lng)"
                    value={endInput}
                    onChange={(e) => setEndInput(e.target.value)}
                  />
                  <Button variant="outline" onClick={() => handleManualCoordinateInput(endInput, false)}>
                    Set
                  </Button>
                </div>
                {endCoordinates && (
                  <p className="text-xs text-muted-foreground">
                    Coordinates: {endCoordinates.lat.toFixed(6)}, {endCoordinates.lng.toFixed(6)}
                  </p>
                )}
              </div>
            </div>

            <div className="text-sm text-muted-foreground">
              <p>Enter location details in one of these formats:</p>
              <ul className="list-disc list-inside mt-1">
                <li>Location name (if it exists in our database)</li>
                <li>UK postcode (e.g., NE65 7PX)</li>
                <li>Coordinates (e.g., 55.3369,-1.6129)</li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>

        {/* Error Message */}
        {error && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-800 text-sm">{error}</div>
        )}

        {error && error.includes("Google Maps API") && (
          <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-md text-blue-800 text-sm">
            <h4 className="font-medium mb-1">Google Maps API Setup</h4>
            <p className="mb-2">
              {errorDetails ||
                "The application is currently using simulated routes because of a Google Maps API issue."}
            </p>

            {fixInstructions ? (
              <div className="mt-2">
                <p className="font-medium">How to fix:</p>
                <p>{fixInstructions}</p>
              </div>
            ) : (
              <ol className="list-decimal list-inside space-y-1">
                <li>
                  <strong>Check your API key:</strong> Verify that <code>GOOGLE_MAPS_API_KEY</code> is correctly set in
                  your environment variables
                </li>
                <li>
                  <strong>Enable the Directions API:</strong>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>
                      Go to{" "}
                      <a
                        href="https://console.cloud.google.com/apis/library"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        Google Cloud Console <ExternalLinkIcon className="h-3 w-3 inline" />
                      </a>
                    </li>
                    <li>Search for "Directions API"</li>
                    <li>Click on it and press "Enable"</li>
                  </ul>
                </li>
                <li>
                  <strong>Remove API restrictions:</strong>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>In Google Cloud Console, go to Credentials → API Keys</li>
                    <li>Edit your key and set "Application restrictions" to "None"</li>
                    <li>Or add your domain to the allowed referrers if using HTTP referrer restrictions</li>
                  </ul>
                </li>
                <li>
                  <strong>Set up billing:</strong>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>In Google Cloud Console, go to Billing</li>
                    <li>Link a billing account to your project</li>
                    <li>Google offers a free tier with $200 credit</li>
                  </ul>
                </li>
              </ol>
            )}
            <p className="mt-2">The application will continue to work with simulated routes until this is resolved.</p>
          </div>
        )}

        {/* Loading State */}
        {isCalculating && (
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-md flex items-center">
            <LoaderIcon className="h-5 w-5 text-blue-500 animate-spin mr-2" />
            <span className="text-blue-700">Calculating route...</span>
          </div>
        )}

        {/* Results */}
        {routeInfo && !isCalculating && (
          <div className="mt-6 p-4 bg-gray-50 border rounded-md">
            <h3 className="text-lg font-medium mb-4">Route Information</h3>

            <div className="flex items-center mb-4">
              <div className="flex-1">
                {startLocation ? (
                  <div className="flex items-center">
                    <Badge variant="outline" className="mr-2">
                      {startLocation.displayId}
                    </Badge>
                    <span className="font-medium">{startLocation.displayName}</span>
                  </div>
                ) : startCoordinates ? (
                  <div>
                    <span className="font-medium">Custom Location</span>
                    <p className="text-xs text-muted-foreground">
                      {startCoordinates.lat.toFixed(6)}, {startCoordinates.lng.toFixed(6)}
                    </p>
                  </div>
                ) : null}
              </div>

              <ArrowRightIcon className="mx-4 h-5 w-5 text-muted-foreground" />

              <div className="flex-1">
                {endLocation ? (
                  <div className="flex items-center">
                    <Badge variant="outline" className="mr-2">
                      {endLocation.displayId}
                    </Badge>
                    <span className="font-medium">{endLocation.displayName}</span>
                  </div>
                ) : endCoordinates ? (
                  <div>
                    <span className="font-medium">Custom Location</span>
                    <p className="text-xs text-muted-foreground">
                      {endCoordinates.lat.toFixed(6)}, {endCoordinates.lng.toFixed(6)}
                    </p>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="flex items-center p-3 bg-white rounded-md border">
                <CarIcon className="h-8 w-8 text-blue-500 mr-3" />
                <div>
                  <p className="text-sm text-muted-foreground">Driving Distance</p>
                  <p className="text-xl font-bold">{routeInfo.distance.text}</p>
                </div>
              </div>

              <div className="flex items-center p-3 bg-white rounded-md border">
                <ClockIcon className="h-8 w-8 text-green-500 mr-3" />
                <div>
                  <p className="text-sm text-muted-foreground">Estimated Driving Time</p>
                  <p className="text-xl font-bold">{routeInfo.duration.text}</p>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-md">
              <div className="flex items-center gap-2 mb-1">
                {routeSource === "google_maps" ? (
                  <CloudIcon className="h-4 w-4 text-amber-800" />
                ) : (
                  <CalculatorIcon className="h-4 w-4 text-amber-800" />
                )}
                <h4 className="font-medium text-amber-800">
                  {routeSource === "google_maps" ? "Google Maps Data" : "Simulated Route"}
                </h4>
              </div>
              <p className="text-sm text-amber-700">
                {routeSource === "google_maps"
                  ? "This route was calculated using real-world road data from Google Maps."
                  : "This is a simulated route. For the most accurate information, please verify with Google Maps before your journey."}
              </p>

              <div className="mt-2 text-xs text-amber-600">
                <p>
                  <strong>Note:</strong> Actual driving times may vary based on traffic conditions, weather, and time of
                  day.
                </p>
              </div>
            </div>

            <div className="mt-4 text-right">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  // Open Google Maps with these coordinates
                  const startCoord = startLocation
                    ? `${startLocation.coordinates.lat},${startLocation.coordinates.lng}`
                    : `${startCoordinates.lat},${startCoordinates.lng}`

                  const endCoord = endLocation
                    ? `${endLocation.coordinates.lat},${endLocation.coordinates.lng}`
                    : `${endCoordinates.lat},${endCoordinates.lng}`

                  const url = `https://www.google.com/maps/dir/${startCoord}/${endCoord}`
                  window.open(url, "_blank")
                }}
              >
                View in Google Maps
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
