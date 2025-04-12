"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { parseKML } from "@/lib/kml-parser"
import { useToast } from "@/components/ui/use-toast"
import { Upload, CheckCircle, AlertCircle, FileText, Trash2, RefreshCw, Save } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

// Local storage keys
const STORAGE_KEY = "workshop-calculator-locations"
const STORAGE_SETS_KEY = "workshop-calculator-location-sets"

export function KMLImport({ onImportSuccess }) {
  const [isLoading, setIsLoading] = useState(false)
  const [importedFiles, setImportedFiles] = useState([])
  const [allImportedLocations, setAllImportedLocations] = useState([])
  const [locationSets, setLocationSets] = useState([])
  const [newSetName, setNewSetName] = useState("")
  const [saveDialogOpen, setSaveDialogOpen] = useState(false)
  const [selectedSet, setSelectedSet] = useState(null)
  const { toast } = useToast()

  // Load saved locations and sets on component mount
  useEffect(() => {
    loadSavedData()
  }, [])

  // Load saved locations and sets from localStorage
  const loadSavedData = () => {
    try {
      // Load saved locations
      const savedLocations = localStorage.getItem(STORAGE_KEY)
      if (savedLocations) {
        const parsed = JSON.parse(savedLocations)
        setAllImportedLocations(parsed)
        onImportSuccess(parsed)
      }

      // Load saved location sets
      const savedSets = localStorage.getItem(STORAGE_SETS_KEY)
      if (savedSets) {
        const parsed = JSON.parse(savedSets)
        setLocationSets(parsed)
      }
    } catch (error) {
      console.error("Error loading saved data:", error)
      toast({
        title: "Error loading saved data",
        description: "There was a problem loading your saved locations.",
        variant: "destructive",
      })
    }
  }

  // Save current locations as a named set
  const saveLocationSet = () => {
    if (!newSetName.trim()) {
      toast({
        title: "Set name required",
        description: "Please enter a name for this location set.",
        variant: "destructive",
      })
      return
    }

    // Check if name already exists
    const existingSetIndex = locationSets.findIndex((set) => set.name === newSetName)

    const updatedSets = [...locationSets]
    const newSet = {
      id: existingSetIndex >= 0 ? locationSets[existingSetIndex].id : Date.now().toString(),
      name: newSetName,
      date: new Date().toISOString(),
      count: allImportedLocations.length,
      locations: allImportedLocations,
    }

    if (existingSetIndex >= 0) {
      // Update existing set
      updatedSets[existingSetIndex] = newSet
      toast({
        title: "Set updated",
        description: `Updated location set "${newSetName}" with ${allImportedLocations.length} locations.`,
      })
    } else {
      // Add new set
      updatedSets.push(newSet)
      toast({
        title: "Set saved",
        description: `Saved ${allImportedLocations.length} locations as "${newSetName}".`,
      })
    }

    // Save to localStorage
    localStorage.setItem(STORAGE_SETS_KEY, JSON.stringify(updatedSets))
    setLocationSets(updatedSets)
    setSaveDialogOpen(false)
    setNewSetName("")
  }

  // Load a saved location set
  const loadLocationSet = (set) => {
    setSelectedSet(set)
    setAllImportedLocations(set.locations)
    onImportSuccess(set.locations)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(set.locations))

    toast({
      title: "Set loaded",
      description: `Loaded ${set.count} locations from "${set.name}".`,
    })
  }

  // Delete a saved location set
  const deleteLocationSet = (setId) => {
    const updatedSets = locationSets.filter((set) => set.id !== setId)
    setLocationSets(updatedSets)
    localStorage.setItem(STORAGE_SETS_KEY, JSON.stringify(updatedSets))

    // If the deleted set was selected, clear selection
    if (selectedSet && selectedSet.id === setId) {
      setSelectedSet(null)
    }

    toast({
      title: "Set deleted",
      description: "Location set has been deleted.",
    })
  }

  const handleFileChange = async (e) => {
    const files = Array.from(e.target.files)
    if (!files.length) return

    // Check if they're KML or KMZ files
    const invalidFiles = files.filter((file) => !file.name.endsWith(".kml") && !file.name.endsWith(".kmz"))
    if (invalidFiles.length > 0) {
      toast({
        title: "Invalid file format",
        description: "Please upload only KML or KMZ files",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    const newImportedFiles = [...importedFiles]
    let newLocations = []

    try {
      // Process each file
      for (const file of files) {
        try {
          // Read the file
          const fileContent = await readFileAsText(file)

          // Parse the KML data
          const locationData = parseKML(fileContent)

          // Add to new locations
          newLocations = [...newLocations, ...locationData]

          // Add to imported files list
          newImportedFiles.push({
            name: file.name,
            status: "success",
            count: locationData.length,
          })

          toast({
            title: "File imported",
            description: `Imported ${locationData.length} locations from ${file.name}`,
          })
        } catch (error) {
          console.error(`Error importing ${file.name}:`, error)
          newImportedFiles.push({
            name: file.name,
            status: "error",
            error: error.message,
          })

          toast({
            title: `Failed to import ${file.name}`,
            description: error.message,
            variant: "destructive",
          })
        }
      }

      // Update imported files list
      setImportedFiles(newImportedFiles)

      // Combine with existing locations (accumulate)
      const combinedLocations = [...allImportedLocations, ...newLocations]

      // Remove duplicates by ID
      const uniqueLocations = Array.from(new Map(combinedLocations.map((item) => [item.id, item])).values())

      // Update state and localStorage
      setAllImportedLocations(uniqueLocations)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(uniqueLocations))

      // Pass all parsed locations to parent
      if (uniqueLocations.length > 0) {
        onImportSuccess(uniqueLocations)
      }
    } catch (error) {
      console.error("Error during import:", error)
      toast({
        title: "Import failed",
        description: error.message,
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  // Helper function to read file content
  const readFileAsText = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = (e) => resolve(e.target.result)
      reader.onerror = (e) => reject(new Error("Failed to read file"))
      reader.readAsText(file)
    })
  }

  // Clear all imported locations
  const clearAllLocations = () => {
    if (confirm("Are you sure you want to clear all imported locations?")) {
      setAllImportedLocations([])
      setImportedFiles([])
      setSelectedSet(null)
      localStorage.removeItem(STORAGE_KEY)
      onImportSuccess([])

      toast({
        title: "Locations cleared",
        description: "All imported locations have been cleared.",
      })
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Import Your Locations</CardTitle>
        <CardDescription>Import your photography locations from Google Maps KML files</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* File Upload Area */}
          <div className="space-y-4">
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="kml-file"
                className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-8 h-8 mb-2 text-muted-foreground" />
                  <p className="mb-2 text-sm text-muted-foreground">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-muted-foreground">KML or KMZ files from Google Maps</p>
                </div>
                <input
                  id="kml-file"
                  type="file"
                  accept=".kml,.kmz"
                  className="hidden"
                  onChange={handleFileChange}
                  disabled={isLoading}
                  multiple
                />
              </label>
            </div>

            {isLoading && (
              <div className="flex items-center justify-center p-2">
                <div className="w-5 h-5 rounded-full border-2 border-t-transparent border-blue-500 animate-spin mr-2" />
                <span className="text-sm">Importing files...</span>
              </div>
            )}

            {importedFiles.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Recently Imported Files</h4>
                {importedFiles.map((file, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 rounded-md bg-muted">
                    {file.status === "success" ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-red-500" />
                    )}
                    <FileText className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{file.name}</span>
                    {file.status === "success" && (
                      <Badge variant="outline" className="ml-auto text-xs">
                        {file.count} locations
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Current Locations Summary */}
          <div className="p-4 bg-muted rounded-md">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-medium">Current Locations</h4>
              <Badge variant="outline">{allImportedLocations.length} total</Badge>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {/* Save As Set Button */}
              <Dialog open={saveDialogOpen} onOpenChange={setSaveDialogOpen}>
                <DialogTrigger asChild>
                  <Button size="sm" variant="outline" className="flex items-center gap-1">
                    <Save className="h-4 w-4" />
                    Save As Set
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Save Location Set</DialogTitle>
                    <DialogDescription>
                      Give this set of locations a name so you can easily load it later.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <Label htmlFor="setName">Set Name</Label>
                    <Input
                      id="setName"
                      value={newSetName}
                      onChange={(e) => setNewSetName(e.target.value)}
                      placeholder="e.g., Cornwall Beaches"
                    />
                    <p className="text-sm text-muted-foreground mt-2">
                      This will save all {allImportedLocations.length} currently loaded locations.
                    </p>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setSaveDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={saveLocationSet}>Save Set</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              {/* Clear All Button */}
              <Button
                size="sm"
                variant="outline"
                className="flex items-center gap-1"
                onClick={clearAllLocations}
                disabled={allImportedLocations.length === 0}
              >
                <Trash2 className="h-4 w-4" />
                Clear All
              </Button>
            </div>
          </div>

          {/* Saved Location Sets */}
          {locationSets.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Saved Location Sets</h4>
              <div className="space-y-2">
                {locationSets.map((set) => (
                  <div key={set.id} className="flex items-center justify-between p-3 border rounded-md">
                    <div>
                      <div className="font-medium">{set.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {set.count} locations • Saved {new Date(set.date).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant={selectedSet?.id === set.id ? "default" : "outline"}
                        onClick={() => loadLocationSet(set)}
                      >
                        <RefreshCw className="h-4 w-4 mr-1" />
                        {selectedSet?.id === set.id ? "Loaded" : "Load"}
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-red-500 hover:text-red-700"
                        onClick={() => deleteLocationSet(set.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
