"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ConversionGuide() {
  const [conversionType, setConversionType] = useState("weight")

  return (
    <Card className="bg-amber-50">
      <CardHeader>
        <CardTitle>Gardener's Conversion Guide</CardTitle>
        <CardDescription>Reference guide for common gardening measurements and conversions</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Conversion guide content will go here</p>
      </CardContent>
    </Card>
  )
}
