import { WorkshopCalculator } from "@/components/workshop-calculator"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Landscape Workshop Calculator</h1>
      <p className="text-center mb-8 max-w-2xl mx-auto text-muted-foreground">
        Plan your landscape photography workshops by calculating optimal shooting times based on sunrise, sunset, and
        tidal information.
      </p>
      <WorkshopCalculator />
    </main>
  )
}
