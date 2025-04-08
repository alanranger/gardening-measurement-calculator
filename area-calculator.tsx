"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

export default function AreaCalculator() {
  const { toast } = useToast()

  return (
    <Card className="bg-sky-50">
      <CardHeader>
        <CardTitle>Area Treatment Calculator</CardTitle>
        <CardDescription>
          Calculate product quantities needed for lawn care, garden beds, and other area treatments
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Area calculator content will go here</p>
      </CardContent>
    </Card>
  )
}
