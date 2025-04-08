import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Let's keep the original imports exactly as they were in the working version
import ProductCalculator from "@/components/product-calculator"
import AreaCalculator from "@/components/area-calculator"
import WaterCalculator from "@/components/water-calculator"
import ConversionGuide from "@/components/conversion-guide"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Version number in top right */}
      <div className="absolute top-2 right-4 text-sm font-medium text-muted-foreground">Version 1.0.0</div>

      <main className="container mx-auto px-4 py-8 max-w-5xl flex-grow">
        <h1 className="text-3xl font-bold text-center mb-2">Gardener's Measurement Calculator</h1>
        <p className="text-center text-muted-foreground mb-2">
          Calculate accurate quantities for all your gardening needs
        </p>

        {/* Warning message in red */}
        <p className="text-center text-red-600 font-medium mb-8">
          This is a beta tool. Please double check calculations - no liability is accepted by using this tool
        </p>

        <Tabs defaultValue="product" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              value="product"
              className="data-[state=active]:bg-olive-100 data-[state=active]:text-olive-900"
            >
              Product Dosage
            </TabsTrigger>
            <TabsTrigger value="area" className="data-[state=active]:bg-sky-100 data-[state=active]:text-sky-900">
              Area Treatments
            </TabsTrigger>
            <TabsTrigger value="water" className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-900">
              Water Treatments
            </TabsTrigger>
            <TabsTrigger value="guide" className="data-[state=active]:bg-amber-100 data-[state=active]:text-amber-900">
              Conversion Guide
            </TabsTrigger>
          </TabsList>

          <TabsContent value="product" className="mt-6">
            <ProductCalculator />
          </TabsContent>

          <TabsContent value="area" className="mt-6">
            <AreaCalculator />
          </TabsContent>

          <TabsContent value="water" className="mt-6">
            <WaterCalculator />
          </TabsContent>

          <TabsContent value="guide" className="mt-6">
            <ConversionGuide />
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer with copyright */}
      <footer className="py-4 border-t mt-8 text-center text-sm text-muted-foreground">
        &copy; 2025 Alan Ranger. All rights reserved.
      </footer>
    </div>
  )
}
