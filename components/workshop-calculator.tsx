"use client"

import { useState, useEffect } from "react"
import { format } from "date-fns"
import { CalendarIcon, MapPinIcon, WavesIcon, InfoIcon, SunIcon, TruckIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { calculateWorkshopTimes, calculateSunTimes, calculateMockTidalTimes } from "@/lib/calculate-times"
import { WorkshopResults } from "@/components/workshop-results"
import { ukRegions } from "@/lib/uk-locations"
import { Badge } from "@/components/ui/badge"
import { KMLImport } from "@/components/kml-import"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { DetailedMap } from "@/components/detailed-map"
import { TestsPanel } from "@/components/tests-panel"
import { LogisticsPlanner } from "@/components/logistics-planner"
import { Card, CardContent } from "@/components/ui/card"

// Function to calculate distance between two points using Haversine formula
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 3959 // Radius of the earth in miles (instead of 6371 km)
  const dLat = deg2rad(lat2 - lat1)
  const dLon = deg2rad(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const d = R * c // Distance in miles
  return d
}

// Function to convert miles to feet
function milesToFeet(miles) {
  return miles * 5280
}

// Helper function to safely format distances
function formatDistance(miles) {
  if (miles < 0.1) {
    // For very short distances, show in feet
    const feet = Math.round(milesToFeet(miles))
    return `${feet} feet`
  } else {
    // For longer distances, show in miles with one decimal place
    return `${miles.toFixed(1)} miles`
  }
}

function deg2rad(deg) {
  return deg * (Math.PI / 180)
}

// Function to convert km to miles
function kmToMiles(km) {
  return km * 0.621371
}

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

// Helper function to sort tide times chronologically
const sortTidesChronologically = (tidalTimes) => {
  if (!tidalTimes) return { sortedTides: [] }

  // Combine high and low tides
  const allTides = [
    ...tidalTimes.highTides.map((tide) => ({ ...tide, type: "high" })),
    ...tidalTimes.lowTides.map((tide) => ({ ...tide, type: "low" })),
  ]

  // Sort by time
  const sortedTides = allTides.sort((a, b) => {
    return new Date(a.time).getTime() - new Date(b.time).getTime()
  })

  return { sortedTides }
}

export function WorkshopCalculator() {
  // Form state
  const [selectedRegion, setSelectedRegion] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("")
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [formErrors, setFormErrors] = useState({
    region: "",
    location: "",
    date: "",
  })

  // UI state
  const [results, setResults] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [availableLocations, setAvailableLocations] = useState([])
  const [selectedLocationDetails, setSelectedLocationDetails] = useState(null)
  const [locationTimesPreview, setLocationTimesPreview] = useState(null)

  // State for imported locations
  const [importedLocations, setImportedLocations] = useState([])
  const [populatedRegions, setPopulatedRegions] = useState([])

  // Local storage key for saving imported locations
  const STORAGE_KEY = "workshop-calculator-locations"

  // Load saved locations on component mount
  useEffect(() => {
    const savedLocations = localStorage.getItem(STORAGE_KEY)
    if (savedLocations) {
      try {
        const parsed = JSON.parse(savedLocations)
        setImportedLocations(parsed)

        // Organize imported locations by region
        organizeLocationsByRegion(parsed)
      } catch (error) {
        console.error("Error loading saved locations:", error)
      }
    }
  }, [])

  // Function to organize locations by region and geographical proximity
  const organizeLocationsByRegion = (locations) => {
    // Group locations by region
    const regionMap = {}

    // Initialize with empty regions
    ukRegions.forEach((region) => {
      regionMap[region.id] = {
        ...region,
        locations: [],
        clusters: {},
      }
    })

    // First, assign locations to their regions
    locations.forEach((location) => {
      if (location.regionId && regionMap[location.regionId]) {
        regionMap[location.regionId].locations.push(location)
      }
    })

    // For each region, create geographical clusters (15-mile radius)
    Object.values(regionMap).forEach((region) => {
      const { locations } = region
      const clusters = {}
      const processedLocations = []

      // Process each location
      for (let i = 0; i < locations.length; i++) {
        const location = locations[i]

        // Skip if already processed
        if (processedLocations.includes(i)) continue

        // Create a new cluster with this location as the center
        const clusterLocations = [location]
        processedLocations.push(i)

        // Find all locations within 15 miles
        for (let j = 0; j < locations.length; j++) {
          if (i === j || processedLocations.includes(j)) continue

          const otherLocation = locations[j]
          const distance = calculateDistance(
            location.coordinates.lat,
            location.coordinates.lng,
            otherLocation.coordinates.lat,
            otherLocation.coordinates.lng,
          )

          // If within 15 miles, add to this cluster
          if (distance <= 15) {
            clusterLocations.push(otherLocation)
            processedLocations.push(j)
          }
        }

        // Determine cluster name - use the most prominent location or geographical feature
        let clusterName = ""

        // Try to extract from original category or name
        const categories = clusterLocations.map((loc) =>
          loc.originalCategory && loc.originalCategory !== "Uncategorized"
            ? loc.originalCategory
            : loc.name.split(",")[0].trim(),
        )

        // Count occurrences of each category
        const categoryCounts = {}
        categories.forEach((cat) => {
          categoryCounts[cat] = (categoryCounts[cat] || 0) + 1
        })

        // Find the most common category
        let maxCount = 0
        Object.entries(categoryCounts).forEach(([cat, count]) => {
          if (count > maxCount) {
            maxCount = count
            clusterName = cat
          }
        })

        // If no common category found, use the first location's name
        if (!clusterName) {
          clusterName = location.name.split(",")[0].trim()
        }

        // Add cluster to region
        if (!clusters[clusterName]) {
          clusters[clusterName] = []
        }

        // Process each location to add Google Maps category and other details
        clusterLocations.forEach((loc) => {
          // Extract Google Maps category if available
          let category = ""
          if (loc.googleMapsData && loc.googleMapsData.category) {
            category = loc.googleMapsData.category
          } else if (loc.originalCategory && loc.originalCategory !== "Uncategorized") {
            category = loc.originalCategory
          }

          // Create display name with cluster and category
          const displayName = `${clusterName} - ${loc.name}${category ? ` (${category})` : ""}`

          clusters[clusterName].push({
            ...loc,
            displayName,
            cluster: clusterName,
            category,
          })
        })
      }

      // Replace region locations with clustered locations
      region.clusters = clusters

      // Flatten clusters for the location list, sorted alphabetically within each cluster
      const flattenedLocations = []
      Object.entries(clusters)
        .sort(([a], [b]) => a.localeCompare(b))
        .forEach(([clusterName, locs]) => {
          locs
            .sort((a, b) => a.name.localeCompare(b.name))
            .forEach((loc) => {
              flattenedLocations.push(loc)
            })
        })

      region.locations = flattenedLocations
    })

    // Convert to array and filter out empty regions
    const populated = Object.values(regionMap).filter((region) => region.locations.length > 0)
    setPopulatedRegions(populated)
  }

  // Handle successful KML import
  const handleImportSuccess = (locations) => {
    // Process Google Maps data to extract categories
    const processedLocations = locations.map((location) => {
      let category = ""

      // Try to extract category from Google Maps data
      if (location.rawHtml) {
        // Look for category information in the HTML
        const categoryMatch = location.rawHtml.match(/Category:\s*([^<]+)/i)
        if (categoryMatch && categoryMatch[1]) {
          category = categoryMatch[1].trim()
        }
      }

      return {
        ...location,
        googleMapsData: {
          ...(location.googleMapsData || {}),
          category,
        },
      }
    })

    setImportedLocations(processedLocations)

    // Save to localStorage for persistence
    // localStorage.setItem(STORAGE_KEY, JSON.stringify(processedLocations)) // Removed as per instructions

    // Organize into regions
    organizeLocationsByRegion(processedLocations)

    // Reset form selections
    setSelectedRegion("")
    setSelectedLocation("")
    setSelectedLocationDetails(null)
  }

  // Update available locations when region changes
  useEffect(() => {
    if (selectedRegion) {
      const region = populatedRegions.find((r) => r.id === selectedRegion)
      setAvailableLocations(region ? region.locations : [])

      // Reset the location when region changes
      setSelectedLocation("")
      setSelectedLocationDetails(null)
      setLocationTimesPreview(null)
    } else {
      setAvailableLocations([])
    }
  }, [selectedRegion, populatedRegions])

  // Update location details when location changes
  useEffect(() => {
    if (selectedLocation) {
      // Find the location in our regions
      let locationDetails = null

      for (const region of populatedRegions) {
        const location = region.locations.find((loc) => loc.id === selectedLocation)
        if (location) {
          locationDetails = {
            ...location,
            region: region.name,
            regionId: region.id,
          }
          break
        }
      }

      setSelectedLocationDetails(locationDetails)

      // Calculate preview times for the location
      if (locationDetails && selectedDate) {
        const sunTimes = calculateSunTimes(selectedDate, locationDetails.coordinates)
        const isTidal = locationDetails.type === "coastal" || locationDetails.tidalLocation
        const tidalTimes = isTidal ? calculateMockTidalTimes(selectedDate, locationDetails.id) : null

        setLocationTimesPreview({ sunTimes, tidalTimes, isTidal })
      } else {
        setLocationTimesPreview(null)
      }
    } else {
      setSelectedLocationDetails(null)
      setLocationTimesPreview(null)
    }
  }, [selectedLocation, populatedRegions, selectedDate])

  // Form validation
  const validateForm = () => {
    const errors = {
      region: "",
      location: "",
      date: "",
    }

    if (!selectedRegion) {
      errors.region = "Please select a region"
    }

    if (!selectedLocation) {
      errors.location = "Please select a location"
    }

    if (!selectedDate) {
      errors.date = "Please select a date"
    }

    setFormErrors(errors)

    // Return true if no errors
    return !Object.values(errors).some((error) => error)
  }

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)
    try {
      // Get the location details
      const locationDetails = selectedLocationDetails

      // In a real implementation, this would call an API with the location coordinates
      const calculatedTimes = await calculateWorkshopTimes({
        date: selectedDate,
        location: selectedLocation,
        region: selectedRegion,
        locationDetails,
      })

      setResults(calculatedTimes)
    } catch (error) {
      console.error("Error calculating times:", error)
    } finally {
      setIsLoading(false)
    }
  }

  // Get the selected region object
  const selectedRegionObject = populatedRegions.find((r) => r.id === selectedRegion)

  // Group locations by cluster for the dropdown
  const groupedLocations = {}
  if (availableLocations.length > 0) {
    availableLocations.forEach((location) => {
      const cluster = location.cluster || "Other"
      if (!groupedLocations[cluster]) {
        groupedLocations[cluster] = []
      }
      groupedLocations[cluster].push(location)
    })
  }

  // Sort tidal times chronologically if available
  const sortedTidalTimes = locationTimesPreview?.tidalTimes
    ? sortTidesChronologically(locationTimesPreview.tidalTimes)
    : null

  return (
    <div className="space-y-8">
      <Tabs defaultValue={importedLocations.length > 0 ? "calculator" : "import"}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="calculator">Calculator</TabsTrigger>
          <TabsTrigger value="logistics">
            <TruckIcon className="h-4 w-4 mr-2" />
            Logistics
          </TabsTrigger>
          <TabsTrigger value="import">Import Locations</TabsTrigger>
          <TabsTrigger value="tests">Tests</TabsTrigger>
        </TabsList>

        <TabsContent value="calculator" className="space-y-4">
          {importedLocations.length === 0 ? (
            <Alert>
              <InfoIcon className="h-4 w-4" />
              <AlertTitle>No locations imported</AlertTitle>
              <AlertDescription>
                Please import your locations from a KML file first using the Import tab.
              </AlertDescription>
            </Alert>
          ) : (
            <>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="bg-card p-6 rounded-lg border shadow-sm">
                  <h2 className="text-xl font-semibold mb-4">Workshop Details</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Region Selection */}
                    <div className="space-y-2">
                      <label htmlFor="region" className="text-sm font-medium">
                        Region
                      </label>
                      <Select
                        value={selectedRegion}
                        onValueChange={(value) => {
                          setSelectedRegion(value)
                          setFormErrors((prev) => ({ ...prev, region: "" }))
                        }}
                      >
                        <SelectTrigger id="region">
                          <SelectValue placeholder="Select a region" />
                        </SelectTrigger>
                        <SelectContent>
                          {populatedRegions.map((region) => (
                            <SelectItem key={region.id} value={region.id}>
                              {region.name} ({region.locations.length})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <p className="text-sm text-muted-foreground">Select a UK region for your workshop</p>
                      {formErrors.region && <p className="text-sm text-red-500">{formErrors.region}</p>}
                    </div>

                    {/* Location Selection */}
                    <div className="space-y-2">
                      <label htmlFor="location" className="text-sm font-medium">
                        Location
                      </label>
                      <Select
                        value={selectedLocation}
                        onValueChange={(value) => {
                          setSelectedLocation(value)
                          setFormErrors((prev) => ({ ...prev, location: "" }))
                        }}
                        disabled={!selectedRegion || availableLocations.length === 0}
                      >
                        <SelectTrigger id="location">
                          <SelectValue placeholder="Select a location" />
                        </SelectTrigger>
                        <SelectContent>
                          <div className="grid grid-cols-1 gap-1">
                            {Object.entries(groupedLocations).map(([cluster, locations]) => (
                              <div key={cluster}>
                                <div className="px-2 py-1.5 text-sm font-semibold mt-2">{cluster}</div>
                                {locations.map((location) => (
                                  <SelectItem key={location.id} value={location.id}>
                                    <div className="flex items-center">
                                      {location.type === "coastal" ? (
                                        <WavesIcon className="h-3.5 w-3.5 mr-2 text-blue-500" />
                                      ) : (
                                        <MapPinIcon className="h-3.5 w-3.5 mr-2 text-muted-foreground" />
                                      )}
                                      {location.name}
                                      {location.category && (
                                        <span className="ml-1 text-xs text-muted-foreground">
                                          ({location.category})
                                        </span>
                                      )}
                                    </div>
                                  </SelectItem>
                                ))}
                              </div>
                            ))}
                          </div>
                        </SelectContent>
                      </Select>
                      <p className="text-sm text-muted-foreground">Select a specific location for your workshop</p>
                      {formErrors.location && <p className="text-sm text-red-500">{formErrors.location}</p>}
                    </div>

                    {/* Date Selection */}
                    <div className="space-y-2">
                      <label htmlFor="date" className="text-sm font-medium">
                        Date
                      </label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            id="date"
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !selectedDate && "text-muted-foreground",
                            )}
                            onClick={() => setFormErrors((prev) => ({ ...prev, date: "" }))}
                          >
                            {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={(date) => date && setSelectedDate(date)}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <p className="text-sm text-muted-foreground">Select the date for your workshop</p>
                      {formErrors.date && <p className="text-sm text-red-500">{formErrors.date}</p>}
                    </div>

                    {/* Display selected location details with sun and tide times */}
                    {selectedLocationDetails && (
                      <Card>
                        <CardContent className="p-4 space-y-3">
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium">Location Summary</h3>
                            {selectedDate && (
                              <Badge variant="outline" className="text-xs">
                                {format(selectedDate, "EEEE, MMMM d, yyyy")}
                              </Badge>
                            )}
                            {selectedLocationDetails.type && (
                              <Badge variant="outline" className="text-xs">
                                {selectedLocationDetails.type === "coastal" ? "Coastal" : "Inland"}
                              </Badge>
                            )}
                            {selectedLocationDetails.tidalLocation && (
                              <Badge variant="outline" className="text-xs bg-blue-50">
                                Tidal Data
                              </Badge>
                            )}
                          </div>

                          <div className="text-sm">
                            <p className="font-medium">{selectedLocationDetails.name}</p>
                            <p className="text-muted-foreground text-xs">
                              Coordinates: {selectedLocationDetails.coordinates.lat.toFixed(6)},{" "}
                              {selectedLocationDetails.coordinates.lng.toFixed(6)}
                            </p>
                            {selectedLocationDetails.cluster && (
                              <p className="text-muted-foreground text-xs">Area: {selectedLocationDetails.cluster}</p>
                            )}
                          </div>

                          {locationTimesPreview && (
                            <div className="border-t pt-3 mt-3 space-y-3">
                              <div className="space-y-1">
                                <div className="flex items-center gap-1">
                                  <SunIcon className="h-4 w-4 text-amber-500" />
                                  <h4 className="text-sm font-medium">Sun Times</h4>
                                </div>
                                <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
                                  <div className="flex justify-between">
                                    <span>First Light:</span>
                                    <span className="font-medium">
                                      {safeFormat(locationTimesPreview.sunTimes.firstLight, "h:mm a")}
                                    </span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>Sunrise:</span>
                                    <span className="font-medium">
                                      {safeFormat(locationTimesPreview.sunTimes.sunrise, "h:mm a")}
                                    </span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>Sunset:</span>
                                    <span className="font-medium">
                                      {safeFormat(locationTimesPreview.sunTimes.sunset, "h:mm a")}
                                    </span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>Last Light:</span>
                                    <span className="font-medium">
                                      {safeFormat(locationTimesPreview.sunTimes.lastLight, "h:mm a")}
                                    </span>
                                  </div>
                                </div>
                              </div>

                              {locationTimesPreview.isTidal && locationTimesPreview.tidalTimes && (
                                <div className="space-y-1">
                                  <div className="flex items-center gap-1">
                                    <WavesIcon className="h-4 w-4 text-blue-500" />
                                    <h4 className="text-sm font-medium">Tide Times (Chronological)</h4>
                                  </div>
                                  <div className="grid grid-cols-1 gap-x-4 gap-y-1 text-xs">
                                    {sortedTidalTimes &&
                                      sortedTidalTimes.sortedTides.map((tide, i) => (
                                        <div key={`tide-${i}`} className="flex justify-between">
                                          <span>
                                            {tide.type === "high" ? "High Tide" : "Low Tide"} {i + 1}:
                                          </span>
                                          <span className="font-medium">
                                            {safeFormat(tide.time, "h:mm a")} ({tide.height}m)
                                          </span>
                                        </div>
                                      ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    )}

                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? "Calculating..." : "Calculate Optimal Times"}
                    </Button>
                  </form>
                </div>

                <div className="bg-card p-6 rounded-lg border shadow-sm">
                  {results ? (
                    <WorkshopResults results={results} />
                  ) : (
                    <div className="h-full flex items-center justify-center text-center p-8">
                      <div className="max-w-md">
                        <h3 className="text-lg font-medium mb-2">Enter your workshop details</h3>
                        <p className="text-muted-foreground">
                          Fill out the form to calculate the optimal shooting times based on sunrise, sunset, and tidal
                          information for your selected location and date.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Map View - Only interactive map now */}
              <DetailedMap
                selectedRegion={selectedRegionObject}
                locations={availableLocations}
                selectedLocation={selectedLocationDetails}
                selectedDate={selectedDate}
                height="700px"
              />
            </>
          )}
        </TabsContent>

        <TabsContent value="logistics">
          {importedLocations.length === 0 ? (
            <Alert>
              <InfoIcon className="h-4 w-4" />
              <AlertTitle>No locations imported</AlertTitle>
              <AlertDescription>
                Please import your locations from a KML file first using the Import tab.
              </AlertDescription>
            </Alert>
          ) : (
            <LogisticsPlanner locations={importedLocations} />
          )}
        </TabsContent>

        <TabsContent value="import">
          <div className="space-y-6">
            <KMLImport onImportSuccess={handleImportSuccess} />

            {importedLocations.length > 0 && (
              <div className="bg-card p-6 rounded-lg border shadow-sm">
                <h3 className="text-lg font-medium mb-4">Imported Locations</h3>
                <div className="text-sm text-muted-foreground mb-4">
                  {importedLocations.length} locations imported from your KML file(s)
                </div>

                <div className="space-y-4">
                  {/* Display summary of imported locations by region */}
                  {populatedRegions.map((region) => (
                    <div key={region.id} className="border rounded-md p-3">
                      <h4 className="font-medium mb-2">{region.name}</h4>
                      <div className="text-sm text-muted-foreground">{region.locations.length} locations</div>

                      {/* Display clusters */}
                      <div className="mt-2 space-y-2">
                        {Object.entries(region.clusters || {}).map(([cluster, locations]) => (
                          <div key={cluster} className="text-xs">
                            <span className="font-medium">{cluster}:</span> {locations.length} locations
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    if (confirm("Are you sure you want to clear all imported locations?")) {
                      setImportedLocations([])
                      setPopulatedRegions([])
                      localStorage.removeItem(STORAGE_KEY)
                    }
                  }}
                >
                  Clear Imported Locations
                </Button>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="tests">
          <TestsPanel />
        </TabsContent>
      </Tabs>
    </div>
  )
}
