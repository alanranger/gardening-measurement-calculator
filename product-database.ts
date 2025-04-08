export type ProductData = {
  id: string
  name: string
  type: string
  measurementType: "weight" | "volume" | "cap"
  defaultDosage: number
  defaultDosageUnit: string
  defaultWaterAmount: number
  defaultWaterUnit: string
  instructions: string
  capSize?: {
    fullCapML: number
    halfCapML: number
  }
}

export const COMMON_PRODUCTS: ProductData[] = [
  {
    id: "miracle-gro-all-purpose",
    name: "Miracle-Gro All Purpose Plant Food",
    type: "liquid_fertilizer",
    measurementType: "volume",
    defaultDosage: 5,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1,
    defaultWaterUnit: "l",
    instructions: "Apply every 1-2 weeks during the growing season. Safe for all plants.",
    capSize: {
      fullCapML: 10,
      halfCapML: 5,
    },
  },
  // Add more products as needed
]

export const AREA_TREATMENT_PRODUCTS: ProductData[] = [
  {
    id: "evergreen-lawn-feed",
    name: "Evergreen Complete Lawn Feed",
    type: "lawn_fertilizer",
    measurementType: "weight",
    defaultDosage: 35,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions: "Apply evenly across lawn. Water in if no rain expected within 48 hours.",
  },
  // Add more products as needed
]

export const WATER_TREATMENT_PRODUCTS: ProductData[] = [
  {
    id: "tetrapond-algae-control",
    name: "TetraPond Algae Control",
    type: "pond_treatment",
    measurementType: "volume",
    defaultDosage: 5,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1000,
    defaultWaterUnit: "l",
    instructions: "Treats green water and string algae. Safe for fish and plants when used as directed.",
  },
  // Add more products as needed
]
