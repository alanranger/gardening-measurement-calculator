// Product Database - Base products
const BASE_COMMON_PRODUCTS = [
  {
    id: "miracle-gro-all-purpose",
    name: "Miracle-Gro All Purpose Liquid Plant Food",
    type: "liquid_fertilizer",
    measurementType: "cap",
    defaultDosage: 0.5,
    defaultDosageUnit: "cap",
    defaultWaterAmount: 1,
    defaultWaterUnit: "l",
    instructions: "Add half a cap (5ml) to 1 litre of water. Apply once or twice a week.",
    capSize: {
      fullCapML: 10,
      markings: { half: 5, full: 10 },
    },
  },
  {
    id: "miracle-gro-tomato",
    name: "Miracle-Gro Tomato Plant Food",
    type: "liquid_fertilizer",
    measurementType: "cap",
    defaultDosage: 1,
    defaultDosageUnit: "cap",
    defaultWaterAmount: 1.5,
    defaultWaterUnit: "l",
    instructions: "Add one full cap (10ml) to 1.5 litres of water. Apply once a week.",
    capSize: {
      fullCapML: 10,
      markings: { half: 5, full: 10 },
    },
  },
  {
    id: "baby-bio-houseplant",
    name: "Baby Bio Houseplant Food",
    type: "liquid_fertilizer",
    measurementType: "cap",
    defaultDosage: 0.5,
    defaultDosageUnit: "cap",
    defaultWaterAmount: 1,
    defaultWaterUnit: "l",
    instructions:
      "Add 5-10 drops per 500ml of water for normal feeding, or half a cap (2.5ml) per litre for stronger feeding.",
    capSize: {
      fullCapML: 5,
      markings: { half: 2.5, full: 5 },
    },
  },
  {
    id: "tomorite",
    name: "Levington Tomorite Tomato Food",
    type: "liquid_fertilizer",
    measurementType: "cap",
    defaultDosage: 2,
    defaultDosageUnit: "cap",
    defaultWaterAmount: 4.5,
    defaultWaterUnit: "l",
    instructions: "Add 20ml (2 caps) per 4.5 litres (1 gallon) of water. Apply twice a week.",
    capSize: {
      fullCapML: 10,
      markings: { half: 5, full: 10 },
    },
  },
  {
    id: "phostrogen-liquid",
    name: "Phostrogen Liquid Plant Food",
    type: "liquid_fertilizer",
    measurementType: "cap",
    defaultDosage: 1,
    defaultDosageUnit: "cap",
    defaultWaterAmount: 4.5,
    defaultWaterUnit: "l",
    instructions: "Add one capful (10ml) per 4.5 litres (1 gallon) of water.",
    capSize: {
      fullCapML: 10,
      markings: { half: 5, full: 10 },
    },
  },
  {
    id: "phostrogen",
    name: "Phostrogen All Purpose Plant Food",
    type: "granular_fertilizer",
    measurementType: "weight",
    defaultDosage: 3.5,
    defaultDosageUnit: "g",
    defaultWaterAmount: 4.5,
    defaultWaterUnit: "l",
    instructions: "Dissolve one level scoop (3.5g) in 4.5 litres (1 gallon) of water.",
  },
  {
    id: "growmore",
    name: "Westland Growmore Garden Fertiliser",
    type: "granular_fertilizer",
    measurementType: "weight",
    defaultDosage: 35,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions: "Apply 35g per square metre and work into the soil surface.",
  },
]

// Base area treatment products
const BASE_AREA_TREATMENT_PRODUCTS = [
  {
    id: "evergreen-lawn-feed",
    name: "Evergreen Complete 4-in-1 Lawn Feed",
    type: "lawn_fertilizer",
    measurementType: "weight",
    defaultDosage: 35,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions: "Apply 35g per square metre using a spreader. Water in if no rain falls within 48 hours.",
  },
  {
    id: "miracle-gro-lawn-food",
    name: "Miracle-Gro Water Soluble Lawn Food",
    type: "lawn_fertilizer",
    measurementType: "weight",
    defaultDosage: 15,
    defaultDosageUnit: "g",
    defaultWaterAmount: 4.5,
    defaultWaterUnit: "l",
    instructions: "Dissolve 15g in 4.5 litres (1 gallon) of water to cover 1 square metre.",
  },
  {
    id: "westland-lawn-seed",
    name: "Westland Lawn Seed",
    type: "lawn_seed",
    measurementType: "weight",
    defaultDosage: 25,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions: "Sow at 25g per square metre for new lawns, 15g per square metre for overseeding.",
  },
  {
    id: "resolva-lawn-weedkiller",
    name: "Resolva Lawn Weedkiller",
    type: "weed_killer",
    measurementType: "volume",
    defaultDosage: 10,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1,
    defaultWaterUnit: "l",
    instructions: "Dilute 10ml in 1 litre of water. Apply at 100ml of diluted product per square metre.",
  },
]

// Base water treatment products
const BASE_WATER_TREATMENT_PRODUCTS = [
  {
    id: "tetra-pond-algae",
    name: "TetraPond AlgoRem",
    type: "pond_treatment",
    measurementType: "volume",
    defaultDosage: 50,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1000,
    defaultWaterUnit: "l",
    instructions: "Add 50ml per 1000 litres of pond water. Repeat after 2-3 weeks if necessary.",
  },
  {
    id: "pondcare-algaefix",
    name: "API PondCare AlgaeFix",
    type: "algaecide",
    measurementType: "volume",
    defaultDosage: 10,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1000,
    defaultWaterUnit: "l",
    instructions: "Add 10ml per 1000 litres of pond water. Repeat weekly as needed.",
  },
  {
    id: "tetra-pond-clearplus",
    name: "TetraPond ClearPlus",
    type: "water_clarifier",
    measurementType: "volume",
    defaultDosage: 25,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1000,
    defaultWaterUnit: "l",
    instructions: "Add 25ml per 1000 litres of pond water. Repeat after 2 weeks if necessary.",
  },
]

// Additional products that need to be merged
const ADDITIONAL_COMMON_PRODUCTS = [
  // Add your additional common products here
  {
    id: "miracle-gro-all-purpose-soluble",
    name: "Miracle-Gro All Purpose Soluble Plant Food",
    type: "liquid_fertilizer",
    measurementType: "volume",
    defaultDosage: 15,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 4.5,
    defaultWaterUnit: "l",
    instructions:
      "Feed every two weeks from March to September; promotes healthy growth and abundant blooms. 1kg makes up to 360 liters of feed.",
  },
  {
    id: "levington-tomorite-organic",
    name: "Levington Tomorite Organic Concentrate",
    type: "liquid_fertilizer",
    measurementType: "volume",
    defaultDosage: 20,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 4.5,
    defaultWaterUnit: "l",
    instructions:
      "Ideal for fruiting plants; feed every 7 days during the growing season. 1 liter makes up to 225 liters of feed.",
  },
  {
    id: "bronte-tub-basket",
    name: "Bronte Heritage Collection Tub & Basket Plant Food",
    type: "liquid_fertilizer",
    measurementType: "volume",
    defaultDosage: 100,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 4.5,
    defaultWaterUnit: "l",
    instructions:
      "Feed every 7-14 days during the growing season; reduce rate for sensitive or young plants. Apply diluted feed to the base of plants.",
  },
  {
    id: "ecofective-basket-tub",
    name: "ecofective® Basket & Tub Feed",
    type: "liquid_fertilizer",
    measurementType: "volume",
    defaultDosage: 30,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 4.5,
    defaultWaterUnit: "l",
    instructions:
      "Organic feed; safe for children, pets, and beneficial insects; feed every 7-14 days. Covers up to 6 square meters.",
  },
  {
    id: "miracle-gro-orchid",
    name: "Miracle-Gro Orchid Plant Food",
    type: "liquid_fertilizer",
    measurementType: "volume",
    defaultDosage: 5,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1,
    defaultWaterUnit: "l",
    instructions:
      "Apply every 7-14 days. For best results, apply when the compost is moist. Suitable for all orchid varieties.",
  },
  {
    id: "baby-bio-citrus",
    name: "Baby Bio Citrus Food",
    type: "liquid_fertilizer",
    measurementType: "cap",
    defaultDosage: 1,
    defaultDosageUnit: "cap",
    defaultWaterAmount: 1,
    defaultWaterUnit: "l",
    instructions: "Feed every 2 weeks during the growing season (March to October) and monthly during winter.",
    capSize: {
      fullCapML: 5,
      markings: { half: 2.5, full: 5 },
    },
  },
  {
    id: "westland-houseplant-feed",
    name: "Westland Houseplant Feed",
    type: "liquid_fertilizer",
    measurementType: "cap",
    defaultDosage: 1,
    defaultDosageUnit: "cap",
    defaultWaterAmount: 1,
    defaultWaterUnit: "l",
    instructions: "Feed every 2 weeks during the growing season. Reduce to once a month in winter.",
    capSize: {
      fullCapML: 10,
      markings: { half: 5, full: 10 },
    },
  },
  {
    id: "maxicrop-seaweed",
    name: "Maxicrop Original Seaweed Extract",
    type: "liquid_fertilizer",
    measurementType: "volume",
    defaultDosage: 20,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 4.5,
    defaultWaterUnit: "l",
    instructions: "Apply every 2 weeks during the growing season. Can be used as a foliar feed or soil drench.",
  },
  {
    id: "seasol-seaweed",
    name: "Seasol Seaweed Plant Tonic",
    type: "liquid_fertilizer",
    measurementType: "volume",
    defaultDosage: 30,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 9,
    defaultWaterUnit: "l",
    instructions:
      "Apply every 2-4 weeks throughout the year. Ideal for reducing transplant shock and improving stress tolerance.",
  },
  {
    id: "neudorff-organic-tomato",
    name: "Neudorff Organic Tomato Feed",
    type: "liquid_fertilizer",
    measurementType: "volume",
    defaultDosage: 15,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 2,
    defaultWaterUnit: "l",
    instructions: "Apply weekly during the growing season. Suitable for all fruiting vegetables.",
  },
  {
    id: "vitax-organic-liquid",
    name: "Vitax Organic Liquid Seaweed",
    type: "liquid_fertilizer",
    measurementType: "volume",
    defaultDosage: 20,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 4.5,
    defaultWaterUnit: "l",
    instructions: "Apply every 2 weeks during the growing season. Suitable for all plants.",
  },
  {
    id: "chempak-formula-4",
    name: "Chempak Formula 4 High Potash Feed",
    type: "granular_fertilizer",
    measurementType: "weight",
    defaultDosage: 4,
    defaultDosageUnit: "g",
    defaultWaterAmount: 4.5,
    defaultWaterUnit: "l",
    instructions: "Dissolve in water and apply every 10-14 days. Ideal for flowering and fruiting plants.",
  },
  {
    id: "miracle-gro-bonsai",
    name: "Miracle-Gro Bonsai Plant Food",
    type: "liquid_fertilizer",
    measurementType: "volume",
    defaultDosage: 5,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1,
    defaultWaterUnit: "l",
    instructions: "Apply every 7 days during the growing season. Reduce to once a month in winter.",
  },
  {
    id: "osmocote-controlled-release",
    name: "Osmocote Controlled Release Plant Food",
    type: "granular_fertilizer",
    measurementType: "weight",
    defaultDosage: 5,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "l",
    instructions: "Mix into compost before planting or apply as a top dressing. Feeds for up to 6 months.",
  },
  {
    id: "miracle-gro-azalea",
    name: "Miracle-Gro Azalea, Camellia & Rhododendron Food",
    type: "liquid_fertilizer",
    measurementType: "volume",
    defaultDosage: 15,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 4.5,
    defaultWaterUnit: "l",
    instructions: "Apply every 1-2 weeks during the growing season. Specially formulated for acid-loving plants.",
  },
  {
    id: "growth-technology-orchid-myst",
    name: "Growth Technology Orchid Myst",
    type: "liquid_fertilizer",
    measurementType: "volume",
    defaultDosage: 10,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1,
    defaultWaterUnit: "plant",
    instructions: "Spray directly onto leaves and aerial roots. Use 2-3 times per week during active growth.",
  },
  // Add more products as needed
]

const ADDITIONAL_AREA_PRODUCTS = [
  // Add your additional area products here
  {
    id: "miracle-gro-evergreen-complete",
    name: "Miracle-Gro EverGreen Complete 4-in-1",
    type: "lawn_fertilizer",
    measurementType: "weight",
    defaultDosage: 35,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions: "Apply using a spreader; avoid mowing for 3-4 days after application. Treats up to 400m².",
  },
  {
    id: "westland-safelawn",
    name: "Westland SafeLawn Natural Lawn Feed",
    type: "lawn_fertilizer",
    measurementType: "weight",
    defaultDosage: 35,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions:
      "Apply every 3-4 weeks from February to September; safe for children and pets. A 2.8kg box covers 80m².",
  },
  {
    id: "miracle-gro-performance-organics",
    name: "Miracle-Gro Performance Organics All Purpose Plant Food",
    type: "granular_fertilizer",
    measurementType: "weight",
    defaultDosage: 50,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions:
      "Mix into soil before planting or apply around the base of established plants. Apply as top-dressing; feeds for up to 6 weeks.",
  },
  {
    id: "westland-growmore",
    name: "Westland Growmore",
    type: "granular_fertilizer",
    measurementType: "weight",
    defaultDosage: 70,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions:
      "Suitable for all around the garden; apply every 4-6 weeks during the growing season. Apply as a top dressing and work into the soil.",
  },
  {
    id: "after-plant-evergreen",
    name: "After Plant Evergreen Fertiliser",
    type: "granular_fertilizer",
    measurementType: "weight",
    defaultDosage: 25,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions: "Apply around the base; enhances soil quality with beneficial microbes. 1kg bag covers 40m².",
  },
  {
    id: "miracle-gro-rose-shrub",
    name: "Miracle-Gro Premium Rose & Shrub Continuous Release Plant Food",
    type: "granular_fertilizer",
    measurementType: "weight",
    defaultDosage: 25,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "plant",
    instructions: "Apply at the beginning of the growing season; feeds for up to 6 months. 900g feeds up to 45 plants.",
  },
  {
    id: "roundup-fast-action",
    name: "Roundup Fast Action Weedkiller",
    type: "weed_killer",
    measurementType: "volume",
    defaultDosage: 25,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions: "Apply when weeds are actively growing. Visible results in 1-2 days. Rainproof in 1 hour.",
  },
  {
    id: "weedol-lawn-weedkiller",
    name: "Weedol Lawn Weed Killer",
    type: "weed_killer",
    measurementType: "volume",
    defaultDosage: 10,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions: "Apply when weeds are actively growing. Do not mow for 3 days before or after treatment.",
  },
  {
    id: "scotts-turf-builder",
    name: "Scotts Turf Builder Lawn Food",
    type: "lawn_fertilizer",
    measurementType: "weight",
    defaultDosage: 35,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions:
      "Apply using a spreader. Water in if no rain falls within 48 hours. Apply every 8-10 weeks during growing season.",
  },
  {
    id: "nemasys-leatherjacket-killer",
    name: "Nemasys Leatherjacket Killer",
    type: "pest_control",
    measurementType: "volume",
    defaultDosage: 500,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 50,
    defaultWaterUnit: "sq_m",
    instructions: "Apply when soil temperature is above 10°C. Water the area before and after application.",
  },
  {
    id: "vitax-q4",
    name: "Vitax Q4 Fertilizer",
    type: "granular_fertilizer",
    measurementType: "weight",
    defaultDosage: 70,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions: "Apply in spring and summer. Rake into the soil surface. Water in well after application.",
  },
  {
    id: "westland-bone-meal",
    name: "Westland Bone Meal",
    type: "granular_fertilizer",
    measurementType: "weight",
    defaultDosage: 100,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions:
      "Apply before planting or as a top dressing. Rake into the soil surface. Ideal for bulbs and root development.",
  },
  {
    id: "doff-slug-killer",
    name: "Doff Slug Killer Blue Mini Pellets",
    type: "pest_control",
    measurementType: "weight",
    defaultDosage: 5,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions: "Scatter pellets thinly around vulnerable plants. Reapply after heavy rain.",
  },
  {
    id: "evergreen-moss-control",
    name: "Evergreen Moss Control Lawn Food",
    type: "lawn_fertilizer",
    measurementType: "weight",
    defaultDosage: 35,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions: "Apply using a spreader. Do not apply during drought conditions or when rain is imminent.",
  },
  {
    id: "miracle-gro-moisture-control",
    name: "Miracle-Gro Moisture Control Compost",
    type: "mulch",
    measurementType: "volume",
    defaultDosage: 5,
    defaultDosageUnit: "l",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions: "Apply a 5cm layer around plants. Ideal for containers and hanging baskets.",
  },
  {
    id: "westland-garden-lime",
    name: "Westland Garden Lime",
    type: "lime",
    measurementType: "weight",
    defaultDosage: 100,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions: "Apply in autumn or winter. Rake into the soil surface. Do not apply to acid-loving plants.",
  },
  {
    id: "bayer-provado-ultimate",
    name: "Bayer Provado Ultimate Bug Killer",
    type: "pest_control",
    measurementType: "volume",
    defaultDosage: 10,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1,
    defaultWaterUnit: "l",
    instructions:
      "Apply as a foliar spray. Repeat after 14 days if necessary. Effective against a wide range of pests.",
  },
  // Add more products as needed
]

const ADDITIONAL_WATER_PRODUCTS = [
  // Add your additional water products here
  {
    id: "bermuda-greenwater",
    name: "Bermuda Greenwater Treatment",
    type: "pond_treatment",
    measurementType: "volume",
    defaultDosage: 50,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1000,
    defaultWaterUnit: "l",
    instructions: "Clears green water algae; safe for fish and wildlife. 500ml treats up to 10,000 liters.",
  },
  {
    id: "cloverleaf-absolute-ct",
    name: "Cloverleaf Absolute CT Anti Bacterial",
    type: "pond_treatment",
    measurementType: "weight",
    defaultDosage: 10,
    defaultDosageUnit: "g",
    defaultWaterAmount: 4546,
    defaultWaterUnit: "l",
    instructions:
      "Treats bacterial infections in fish; ensure adequate oxygenation during treatment. Apply daily for up to 4 days.",
  },
  {
    id: "api-pond-salt",
    name: "API Pond Salt",
    type: "pond_treatment",
    measurementType: "weight",
    defaultDosage: 120,
    defaultDosageUnit: "g",
    defaultWaterAmount: 100,
    defaultWaterUnit: "l",
    instructions:
      "Dissolve in water before adding to pond. Use for fish stress, disease prevention, and to improve gill function.",
  },
  {
    id: "tetra-pond-ph-minus",
    name: "Tetra Pond pH Minus",
    type: "water_clarifier",
    measurementType: "volume",
    defaultDosage: 50,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1000,
    defaultWaterUnit: "l",
    instructions: "Add gradually over several days. Test pH regularly. Ideal pH for most pond fish is 7.0-8.5.",
  },
  {
    id: "blagdon-pond-guardian",
    name: "Blagdon Pond Guardian",
    type: "pond_treatment",
    measurementType: "volume",
    defaultDosage: 25,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1000,
    defaultWaterUnit: "l",
    instructions:
      "Add directly to pond water. Treats a wide range of fish diseases. Safe for plants and filter bacteria.",
  },
  {
    id: "nishikoi-health-treatment",
    name: "Nishikoi Health Treatment",
    type: "fish_medication",
    measurementType: "volume",
    defaultDosage: 25,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1000,
    defaultWaterUnit: "l",
    instructions:
      "Add directly to pond water. Treats ulcers, fin rot, and bacterial infections. Safe for plants and filter bacteria.",
  },
  {
    id: "oase-aquaactiv-biokick",
    name: "Oase AquaActiv BioKick",
    type: "pond_treatment",
    measurementType: "volume",
    defaultDosage: 10,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1000,
    defaultWaterUnit: "l",
    instructions:
      "Add when setting up a new pond or after cleaning the filter. Contains live bacteria to establish biological filtration.",
  },
  {
    id: "pondcare-algaefix-plus",
    name: "PondCare AlgaeFix Plus",
    type: "algaecide",
    measurementType: "volume",
    defaultDosage: 10,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1000,
    defaultWaterUnit: "l",
    instructions: "Add weekly to control algae. Safe for fish and plants when used as directed.",
  },
  {
    id: "tetra-pond-crystal-water",
    name: "Tetra Pond Crystal Water",
    type: "water_clarifier",
    measurementType: "volume",
    defaultDosage: 25,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1000,
    defaultWaterUnit: "l",
    instructions: "Add directly to pond water. Clears cloudy water. Safe for fish and plants.",
  },
  {
    id: "pondcare-accu-clear",
    name: "PondCare Accu-Clear",
    type: "water_clarifier",
    measurementType: "volume",
    defaultDosage: 15,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1000,
    defaultWaterUnit: "l",
    instructions:
      "Add directly to pond water. Clumps suspended particles for easy filter removal. Safe for fish and plants.",
  },
  {
    id: "api-pond-ammo-lock",
    name: "API Pond Ammo-Lock",
    type: "pond_treatment",
    measurementType: "volume",
    defaultDosage: 10,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 100,
    defaultWaterUnit: "l",
    instructions: "Add during water changes or when ammonia is detected. Detoxifies ammonia immediately.",
  },
  {
    id: "laguna-plant-grow",
    name: "Laguna Plant Grow Fertilizer",
    type: "plant_nutrient",
    measurementType: "volume",
    defaultDosage: 5,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 100,
    defaultWaterUnit: "l",
    instructions: "Add weekly during the growing season. Promotes healthy plant growth without encouraging algae.",
  },
  // Add more products as needed
]

// Merge the additional products with the existing ones
const COMMON_PRODUCTS = [...BASE_COMMON_PRODUCTS, ...ADDITIONAL_COMMON_PRODUCTS]
const AREA_TREATMENT_PRODUCTS = [...BASE_AREA_TREATMENT_PRODUCTS, ...ADDITIONAL_AREA_PRODUCTS]
const WATER_TREATMENT_PRODUCTS = [...BASE_WATER_TREATMENT_PRODUCTS, ...ADDITIONAL_WATER_PRODUCTS]

// Conversion factors
const WEIGHT_CONVERSIONS = {
  g: 1,
  kg: 1000,
  oz: 28.3495,
  lb: 453.592,
}

const VOLUME_CONVERSIONS = {
  ml: 1,
  l: 1000,
  tsp: 4.92892,
  tbsp: 14.7868,
  cup: 236.588,
  pt: 473.176,
  qt: 946.353,
  gal_uk: 4546.09,
  cap: 10, // Default cap size, will be overridden by product-specific cap sizes
}

const AREA_CONVERSIONS = {
  sq_m: 1,
  sq_ft: 0.092903,
  sq_yd: 0.836127,
  acre: 4046.86,
  hectare: 10000,
  plant: 0.25, // Approximate area per plant
}

const LENGTH_CONVERSIONS = {
  m: 1,
  cm: 0.01,
  ft: 0.3048,
  in: 0.0254,
}

// Product type hints
const PRODUCT_TYPE_HINTS = {
  liquid_fertilizer: "Typical usage: 5-10ml per liter of water",
  granular_fertilizer: "Typical usage: 1-2g per liter of water or 30-60g per sq meter",
  lawn_feed: "Typical usage: 35g per sq meter or 1oz per sq yard",
  pond_treatment: "Typical usage: 5ml per 1000 liters of water",
  plant_food: "Typical usage: 5ml per liter of water, weekly",
  pesticide: "Typical usage: 5-10ml per liter of water",
  compost_additive: "Typical usage: 50g per 10kg of compost",
  custom: "Varies by product",
  lawn_fertilizer: "Typical usage: 35g per sq meter or 1oz per sq yard",
  lawn_seed: "Typical usage: 25-35g per sq meter",
  weed_killer: "Typical usage: 10ml per sq meter diluted in water",
  mulch: "Typical usage: 5-10 liters per sq meter",
  lime: "Typical usage: 100g per sq meter",
  algaecide: "Typical usage: 10ml per 1000 liters of water",
  water_clarifier: "Typical usage: 5ml per 1000 liters of water",
  fish_medication: "Typical usage: 1g per 100 liters of water",
  plant_nutrient: "Typical usage: 5ml per 50 liters of water",
}

// DOM Elements - Main Tabs
const tabButtons = document.querySelectorAll(".tab-button")
const tabPanels = document.querySelectorAll(".tab-panel")

// DOM Elements - Guide Tabs
const guideTabs = document.querySelectorAll(".guide-tab")
const guideTabPanels = document.querySelectorAll(".guide-tab-panel")

// DOM Elements - Product Calculator
const productTypeSelect = document.getElementById("product-type")
const productTypeHint = document.getElementById("product-type-hint")
const measurementTypeRadios = document.querySelectorAll('input[name="measurement-type"]')
const capSizeGroup = document.getElementById("cap-size-group")
const capSizeInput = document.getElementById("cap-size")
const hasScoopRadios = document.querySelectorAll('input[name="has-scoop"]')
const scoopSizeGroup = document.getElementById("scoop-size-group")
const calculationModeRadios = document.querySelectorAll('input[name="calculation-mode"]')
const calculationModePanels = document.querySelectorAll(".calculation-mode-panel")
const findProductBtn = document.getElementById("find-product-btn")
const productSearchPanel = document.getElementById("product-search-panel")
const productSearchInput = document.getElementById("product-search")
const productSearchResults = document.getElementById("product-search-results")
const myPresetsBtn = document.getElementById("my-presets-btn")
const presetsPanel = document.getElementById("presets-panel")
const presetsList = document.getElementById("presets-list")
const productNameInput = document.getElementById("product-name")
const productInstructions = document.getElementById("product-instructions")
const instructionsText = document.getElementById("instructions-text")
const ratioLabel = document.getElementById("ratio-label")
const ratioLabel2 = document.getElementById("ratio-label-2")
const savePresetBtn = document.getElementById("save-preset-btn")
const calculateBtn = document.getElementById("calculate-btn")
const metricResult = document.getElementById("metric-result")
const imperialResult = document.getElementById("imperial-result")
const capResultCard = document.getElementById("cap-result-card")
const capResult = document.getElementById("cap-result")
const scoopResultCard = document.getElementById("scoop-result-card")
const scoopResult = document.getElementById("scoop-result")
const alternativeResult = document.getElementById("alternative-result")
const wateringCanSection = document.getElementById("watering-can-section")
const wateringCanTitle = document.getElementById("watering-can-title")
const wateringCanResult = document.getElementById("watering-can-result")
const wateringCanInfo = document.getElementById("watering-can-info")
const debugTrigger = document.getElementById("debug-trigger")
const debugContent = document.getElementById("debug-content")
const debugInfo = document.getElementById("debug-info")
const copyDebugBtn = document.getElementById("copy-debug-btn")
const productDropdown = document.getElementById("product-dropdown")

// DOM Elements - Area Calculator
const areaShapeRadios = document.querySelectorAll('input[name="area-shape"]')
const rectangleInputs = document.getElementById("rectangle-inputs")
const circleInputs = document.getElementById("circle-inputs")
const lengthInput = document.getElementById("length")
const widthInput = document.getElementById("width")
const areaUnitSelect = document.getElementById("area-unit")
const diameterInput = document.getElementById("diameter")
const circleUnitSelect = document.getElementById("circle-unit")
const calculatedAreaDiv = document.getElementById("calculated-area")
const areaResultText = document.getElementById("area-result")
const findAreaProductBtn = document.getElementById("find-area-product-btn")
const areaProductSearchPanel = document.getElementById("area-product-search-panel")
const areaProductSearchInput = document.getElementById("area-product-search")
const areaProductSearchResults = document.getElementById("area-product-search-results")
const areaPresetsBtn = document.getElementById("area-presets-btn")
const areaPresetsPanel = document.getElementById("area-presets-panel")
const areaPresetsList = document.getElementById("area-presets-list")
const areaProductTypeSelect = document.getElementById("area-product-type")
const areaProductTypeHint = document.getElementById("area-product-type-hint")
const areaProductNameInput = document.getElementById("area-product-name")
const areaProductInstructions = document.getElementById("area-product-instructions")
const areaInstructionsText = document.getElementById("area-instructions-text")
const applicationRateInput = document.getElementById("application-rate")
const rateUnitSelect = document.getElementById("rate-unit")
const rateAreaUnitSelect = document.getElementById("rate-area-unit")
const saveAreaPresetBtn = document.getElementById("save-area-preset-btn")
const calculateAreaBtn = document.getElementById("calculate-area-btn")
const totalAmountResult = document.getElementById("total-amount-result")
const alternativeAmountResult = document.getElementById("alternative-amount-result")
const metricRateResult = document.getElementById("metric-rate-result")
const imperialRateResult = document.getElementById("imperial-rate-result")
const areaDebugTrigger = document.getElementById("area-debug-trigger")
const areaDebugContent = document.getElementById("area-debug-content")
const areaDebugInfo = document.getElementById("area-debug-info")
const copyAreaDebugBtn = document.getElementById("copy-area-debug-btn")
const areaProductDropdown = document.getElementById("area-product-dropdown")

// DOM Elements - Water Calculator
const containerShapeRadios = document.querySelectorAll('input[name="container-shape"]')
const rectangularInputs = document.getElementById("rectangular-inputs")
const circularInputs = document.getElementById("circular-inputs")
const dimensionUnitSelect = document.getElementById("dimension-unit")
const containerLengthInput = document.getElementById("container-length")
const containerWidthInput = document.getElementById("container-width")
const containerHeightInput = document.getElementById("container-height")
const containerDiameterInput = document.getElementById("container-diameter")
const containerDepthInput = document.getElementById("container-depth")
const calculatedVolumeDiv = document.getElementById("calculated-volume")
const volumeResultText = document.getElementById("volume-result")
const volumeConversionText = document.getElementById("volume-conversion")
const waterVolumeInput = document.getElementById("water-volume")
const waterVolumeUnitSelect = document.getElementById("water-volume-unit")
const findWaterProductBtn = document.getElementById("find-water-product-btn")
const waterProductSearchPanel = document.getElementById("water-product-search-panel")
const waterProductSearchInput = document.getElementById("water-product-search")
const waterProductSearchResults = document.getElementById("water-product-search-results")
const waterPresetsBtn = document.getElementById("water-presets-btn")
const waterPresetsPanel = document.getElementById("water-presets-panel")
const waterPresetsList = document.getElementById("water-presets-list")
const waterProductTypeSelect = document.getElementById("water-product-type")
const waterProductTypeHint = document.getElementById("water-product-type-hint")
const waterProductNameInput = document.getElementById("water-product-name")
const waterProductInstructions = document.getElementById("water-product-instructions")
const waterInstructionsText = document.getElementById("water-instructions-text")
const dosageAmountInput = document.getElementById("dosage-amount")
const dosageUnitSelect = document.getElementById("dosage-unit")
const saveWaterPresetBtn = document.getElementById("save-water-preset-btn")
const calculateWaterBtn = document.getElementById("calculate-water-btn")
const waterTotalAmountResult = document.getElementById("water-total-amount-result")
const waterMetricDosageResult = document.getElementById("water-metric-dosage-result")
const waterImperialDosageResult = document.getElementById("water-imperial-dosage-result")
const waterAlternativeDosageResult = document.getElementById("water-alternative-dosage-result")
const waterDebugTrigger = document.getElementById("water-debug-trigger")
const waterDebugContent = document.getElementById("water-debug-content")
const waterDebugInfo = document.getElementById("water-debug-info")
const copyWaterDebugBtn = document.getElementById("copy-water-debug-btn")
const waterProductDropdown = document.getElementById("water-product-dropdown")

// DOM Elements - Accordion
const accordionTriggers = document.querySelectorAll(".accordion-trigger")

// Populate product dropdowns
function populateProductDropdowns() {
  // Populate main product dropdown
  if (productDropdown) {
    // Clear existing options except the first one
    while (productDropdown.options.length > 1) {
      productDropdown.remove(1)
    }

    // Clear existing optgroups
    const optgroups = productDropdown.querySelectorAll("optgroup")
    optgroups.forEach((group) => group.remove())

    // Create optgroups
    const liquidFertilizerGroup = document.createElement("optgroup")
    liquidFertilizerGroup.label = "Liquid Fertilizers"

    const granularFertilizerGroup = document.createElement("optgroup")
    granularFertilizerGroup.label = "Granular Fertilizers"

    const plantFoodGroup = document.createElement("optgroup")
    plantFoodGroup.label = "Plant Foods"

    const otherProductsGroup = document.createElement("optgroup")
    otherProductsGroup.label = "Other Products"

    // Add products to appropriate groups
    COMMON_PRODUCTS.forEach((product) => {
      const option = document.createElement("option")
      option.value = product.id
      option.textContent = product.name

      if (product.type === "liquid_fertilizer") {
        liquidFertilizerGroup.appendChild(option)
      } else if (product.type === "granular_fertilizer") {
        granularFertilizerGroup.appendChild(option)
      } else if (product.type === "plant_food") {
        plantFoodGroup.appendChild(option)
      } else {
        otherProductsGroup.appendChild(option)
      }
    })

    // Add optgroups to dropdown
    if (liquidFertilizerGroup.children.length > 0) {
      productDropdown.appendChild(liquidFertilizerGroup)
    }
    if (granularFertilizerGroup.children.length > 0) {
      productDropdown.appendChild(granularFertilizerGroup)
    }
    if (plantFoodGroup.children.length > 0) {
      productDropdown.appendChild(plantFoodGroup)
    }
    if (otherProductsGroup.children.length > 0) {
      productDropdown.appendChild(otherProductsGroup)
    }
  }

  // Populate area product dropdown
  if (areaProductDropdown) {
    // Clear existing options except the first one
    while (areaProductDropdown.options.length > 1) {
      areaProductDropdown.remove(1)
    }

    // Clear existing optgroups
    const optgroups = areaProductDropdown.querySelectorAll("optgroup")
    optgroups.forEach((group) => group.remove())

    // Create optgroups
    const lawnFertilizerGroup = document.createElement("optgroup")
    lawnFertilizerGroup.label = "Lawn Fertilizers"

    const lawnSeedGroup = document.createElement("optgroup")
    lawnSeedGroup.label = "Lawn Seeds"

    const weedKillerGroup = document.createElement("optgroup")
    weedKillerGroup.label = "Weed Killers"

    const otherAreaGroup = document.createElement("optgroup")
    otherAreaGroup.label = "Other Area Products"

    // Add products to appropriate groups
    AREA_TREATMENT_PRODUCTS.forEach((product) => {
      const option = document.createElement("option")
      option.value = product.id
      option.textContent = product.name

      if (product.type === "lawn_fertilizer") {
        lawnFertilizerGroup.appendChild(option)
      } else if (product.type === "lawn_seed") {
        lawnSeedGroup.appendChild(option)
      } else if (product.type === "weed_killer") {
        weedKillerGroup.appendChild(option)
      } else {
        otherAreaGroup.appendChild(option)
      }
    })

    // Add optgroups to dropdown
    if (lawnFertilizerGroup.children.length > 0) {
      areaProductDropdown.appendChild(lawnFertilizerGroup)
    }
    if (lawnSeedGroup.children.length > 0) {
      areaProductDropdown.appendChild(lawnSeedGroup)
    }
    if (weedKillerGroup.children.length > 0) {
      areaProductDropdown.appendChild(weedKillerGroup)
    }
    if (otherAreaGroup.children.length > 0) {
      areaProductDropdown.appendChild(otherAreaGroup)
    }
  }

  // Populate water product dropdown
  if (waterProductDropdown) {
    // Clear existing options except the first one
    while (waterProductDropdown.options.length > 1) {
      waterProductDropdown.remove(1)
    }

    // Clear existing optgroups
    const optgroups = waterProductDropdown.querySelectorAll("optgroup")
    optgroups.forEach((group) => group.remove())

    // Create optgroups
    const pondTreatmentGroup = document.createElement("optgroup")
    pondTreatmentGroup.label = "Pond Treatments"

    const algaecideGroup = document.createElement("optgroup")
    algaecideGroup.label = "Algaecides"

    const waterClarifierGroup = document.createElement("optgroup")
    waterClarifierGroup.label = "Water Clarifiers"

    const otherWaterGroup = document.createElement("optgroup")
    otherWaterGroup.label = "Other Water Products"

    // Add products to appropriate groups
    WATER_TREATMENT_PRODUCTS.forEach((product) => {
      const option = document.createElement("option")
      option.value = product.id
      option.textContent = product.name

      if (product.type === "pond_treatment") {
        pondTreatmentGroup.appendChild(option)
      } else if (product.type === "algaecide") {
        algaecideGroup.appendChild(option)
      } else if (product.type === "water_clarifier") {
        waterClarifierGroup.appendChild(option)
      } else {
        otherWaterGroup.appendChild(option)
      }
    })

    // Add optgroups to dropdown
    if (pondTreatmentGroup.children.length > 0) {
      waterProductDropdown.appendChild(pondTreatmentGroup)
    }
    if (algaecideGroup.children.length > 0) {
      waterProductDropdown.appendChild(algaecideGroup)
    }
    if (waterClarifierGroup.children.length > 0) {
      waterProductDropdown.appendChild(waterClarifierGroup)
    }
    if (otherWaterGroup.children.length > 0) {
      waterProductDropdown.appendChild(otherWaterGroup)
    }
  }
}

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded - Simplified script.js")

  // Initialize tabs with direct DOM manipulation
  initTabs()

  // Initialize guide tabs
  initGuideTabs()

  // Initialize other components
  initProductCalculator()
  initAreaCalculator()
  initWaterCalculator()
  initAccordion()
  populateProductDropdowns()
})

// Initialize tabs
function initTabs() {
  console.log("Initializing tabs")

  // Get all tab buttons
  const tabButtons = document.querySelectorAll(".tab-button")
  console.log("Found tab buttons:", tabButtons.length)

  // Get all tab panels
  const tabPanels = document.querySelectorAll(".tab-panel")
  console.log("Found tab panels:", tabPanels.length)

  // Set initial display styles
  tabPanels.forEach((panel) => {
    if (panel.classList.contains("active")) {
      panel.style.display = "block"
    } else {
      panel.style.display = "none"
    }
  })

  // Add click event listeners to tab buttons
  tabButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault()
      const tabId = this.getAttribute("data-tab")
      console.log("Tab clicked:", tabId)

      // Remove active class from all buttons
      tabButtons.forEach((btn) => {
        btn.classList.remove("active")
      })

      // Add active class to clicked button
      this.classList.add("active")

      // Hide all tab panels
      tabPanels.forEach((panel) => {
        panel.classList.remove("active")
        panel.style.display = "none"
      })

      // Show the selected tab panel
      const targetPanel = document.getElementById(tabId + "-panel")
      if (targetPanel) {
        targetPanel.classList.add("active")
        targetPanel.style.display = "block"
        console.log("Activated panel:", targetPanel.id)
      } else {
        console.error("Panel not found:", tabId + "-panel")
      }
    })
  })
}

// Initialize guide tabs
function initGuideTabs() {
  console.log("Initializing guide tabs")

  // Get all guide tabs
  const guideTabs = document.querySelectorAll(".guide-tab")
  console.log("Found guide tabs:", guideTabs.length)

  // Get all guide tab panels
  const guideTabPanels = document.querySelectorAll(".guide-tab-panel")
  console.log("Found guide tab panels:", guideTabPanels.length)

  // Set initial display styles
  guideTabPanels.forEach((panel) => {
    if (panel.classList.contains("active")) {
      panel.style.display = "block"
    } else {
      panel.style.display = "none"
    }
  })

  // Add click event listeners to guide tabs
  guideTabs.forEach((tab) => {
    tab.addEventListener("click", function (e) {
      e.preventDefault()
      const tabId = this.getAttribute("data-guide-tab")
      console.log("Guide tab clicked:", tabId)

      // Remove active class from all guide tabs
      guideTabs.forEach((t) => {
        t.classList.remove("active")
      })

      // Add active class to clicked guide tab
      this.classList.add("active")

      // Hide all guide tab panels
      guideTabPanels.forEach((panel) => {
        panel.classList.remove("active")
        panel.style.display = "none"
      })

      // Show the selected guide tab panel
      const targetPanel = document.getElementById(tabId + "-panel")
      if (targetPanel) {
        targetPanel.classList.add("active")
        targetPanel.style.display = "block"
        console.log("Activated guide panel:", targetPanel.id)
      } else {
        console.error("Guide panel not found:", tabId + "-panel")
      }
    })
  })
}

// Initialize product calculator
function initProductCalculator() {
  // DOM Elements - Product Calculator
  const productTypeSelect = document.getElementById("product-type")
  const productTypeHint = document.getElementById("product-type-hint")
  const measurementTypeRadios = document.querySelectorAll('input[name="measurement-type"]')
  const capSizeGroup = document.getElementById("cap-size-group")
  const capSizeInput = document.getElementById("cap-size")
  const hasScoopRadios = document.querySelectorAll('input[name="has-scoop"]')
  const scoopSizeGroup = document.getElementById("scoop-size-group")
  const calculationModeRadios = document.querySelectorAll('input[name="calculation-mode"]')
  const calculationModePanels = document.querySelectorAll(".calculation-mode-panel")
  const findProductBtn = document.getElementById("find-product-btn")
  const productSearchPanel = document.getElementById("product-search-panel")
  const productSearchInput = document.getElementById("product-search")
  const productSearchResults = document.getElementById("product-search-results")
  const myPresetsBtn = document.getElementById("my-presets-btn")
  const presetsPanel = document.getElementById("presets-panel")
  const presetsList = document.getElementById("presets-list")
  const productNameInput = document.getElementById("product-name")
  const productInstructions = document.getElementById("product-instructions")
  const instructionsText = document.getElementById("instructions-text")
  const ratioLabel = document.getElementById("ratio-label")
  const ratioLabel2 = document.getElementById("ratio-label-2")
  const savePresetBtn = document.getElementById("save-preset-btn")
  const calculateBtn = document.getElementById("calculate-btn")
  const productDropdown = document.getElementById("product-dropdown")

  // Update product type hint
  if (productTypeSelect) {
    productTypeSelect.addEventListener("change", () => {
      const selectedType = productTypeSelect.value
      productTypeHint.textContent = PRODUCT_TYPE_HINTS[selectedType] || ""
    })
  }

  // Toggle cap size input based on measurement type
  if (measurementTypeRadios) {
    measurementTypeRadios.forEach((radio) => {
      radio.addEventListener("change", () => {
        if (radio.value === "cap") {
          capSizeGroup.classList.remove("hidden")
        } else {
          capSizeGroup.classList.add("hidden")
        }
        updateRatioLabels()
      })
    })
  }

  // Toggle scoop size input based on has scoop selection
  if (hasScoopRadios) {
    hasScoopRadios.forEach((radio) => {
      radio.addEventListener("change", () => {
        if (radio.value === "yes") {
          scoopSizeGroup.classList.remove("hidden")
        } else {
          scoopSizeGroup.classList.add("hidden")
        }
      })
    })
  }

  // Toggle calculation mode panels
  if (calculationModeRadios) {
    calculationModeRadios.forEach((radio) => {
      radio.addEventListener("change", () => {
        calculationModePanels.forEach((panel) => panel.classList.add("hidden"))
        document.getElementById(`${radio.value}-panel`).classList.remove("hidden")
      })
    })
  }

  // Find product button click handler
  if (findProductBtn) {
    findProductBtn.addEventListener("click", () => {
      productSearchPanel.classList.remove("hidden")
    })
  }

  // Product search input keyup handler
  if (productSearchInput) {
    productSearchInput.addEventListener("keyup", () => {
      const searchTerm = productSearchInput.value.toLowerCase()
      const searchResults = COMMON_PRODUCTS.filter((product) => product.name.toLowerCase().includes(searchTerm))
      renderProductSearchResults(searchResults, productSearchResults, handleProductSelect)
    })
  }

  // Product dropdown change handler
  if (productDropdown) {
    productDropdown.addEventListener("change", () => {
      const selectedProductId = productDropdown.value
      if (selectedProductId === "") {
        // Reset fields if no product is selected
        productNameInput.value = ""
        productTypeSelect.value = ""
        productTypeHint.textContent = ""
        document.querySelectorAll('input[name="measurement-type"]').forEach((radio) => (radio.checked = false))
        capSizeGroup.classList.add("hidden")
        instructionsText.textContent = ""
        productInstructions.classList.add("hidden")
        return
      }

      const selectedProduct = COMMON_PRODUCTS.find((product) => product.id === selectedProductId)
      if (selectedProduct) {
        handleProductSelect(selectedProduct)
      }
    })
  }

  // Other event listeners and functionality
  // (Implementation omitted for brevity)
}

// Initialize area calculator
function initAreaCalculator() {
  // Area shape radio button change handler
  if (areaShapeRadios) {
    areaShapeRadios.forEach((radio) => {
      radio.addEventListener("change", () => {
        if (radio.value === "rectangle") {
          rectangleInputs.classList.remove("hidden")
          circleInputs.classList.add("hidden")
        } else {
          rectangleInputs.classList.add("hidden")
          circleInputs.classList.remove("hidden")
        }
      })
    })
  }

  // Area unit select change handler
  if (areaUnitSelect) {
    areaUnitSelect.addEventListener("change", () => {
      calculateArea()
    })
  }

  // Circle unit select change handler
  if (circleUnitSelect) {
    circleUnitSelect.addEventListener("change", () => {
      calculateArea()
    })
  }

  // Length input keyup handler
  if (lengthInput) {
    lengthInput.addEventListener("keyup", () => {
      calculateArea()
    })
  }

  // Width input keyup handler
  if (widthInput) {
    widthInput.addEventListener("keyup", () => {
      calculateArea()
    })
  }

  // Diameter input keyup handler
  if (diameterInput) {
    diameterInput.addEventListener("keyup", () => {
      calculateArea()
    })
  }

  // Calculate area function
  function calculateArea() {
    let area = 0
    const selectedShape = document.querySelector('input[name="area-shape"]:checked')?.value
    const areaUnit = areaUnitSelect.value
    const circleUnit = circleUnitSelect.value

    if (selectedShape === "rectangle") {
      const length = Number.parseFloat(lengthInput.value) || 0
      const width = Number.parseFloat(widthInput.value) || 0
      area = length * width
    } else {
      const diameter = Number.parseFloat(diameterInput.value) || 0
      const radius = diameter / 2
      area = Math.PI * radius * radius
    }

    // Convert area to square meters
    let areaInSqMeters = area
    if (selectedShape === "rectangle") {
      if (areaUnit !== "sq_m") {
        areaInSqMeters = area * AREA_CONVERSIONS[areaUnit]
      }
    } else {
      if (circleUnit !== "sq_m") {
        areaInSqMeters = area * AREA_CONVERSIONS[circleUnit]
      }
    }

    // Display calculated area
    calculatedAreaDiv.classList.remove("hidden")
    areaResultText.textContent = `${areaInSqMeters.toFixed(2)} sq m`

    return areaInSqMeters
  }

  // Find area product button click handler
  if (findAreaProductBtn) {
    findAreaProductBtn.addEventListener("click", () => {
      areaProductSearchPanel.classList.remove("hidden")
    })
  }

  // Area product search input keyup handler
  if (areaProductSearchInput) {
    areaProductSearchInput.addEventListener("keyup", () => {
      const searchTerm = areaProductSearchInput.value.toLowerCase()
      const searchResults = AREA_TREATMENT_PRODUCTS.filter((product) => product.name.toLowerCase().includes(searchTerm))
      renderProductSearchResults(searchResults, areaProductSearchResults, handleAreaProductSelect)
    })
  }

  // Area product dropdown change handler
  if (areaProductDropdown) {
    areaProductDropdown.addEventListener("change", () => {
      const selectedProductId = areaProductDropdown.value
      if (selectedProductId === "") {
        // Reset fields if no product is selected
        areaProductNameInput.value = ""
        areaProductTypeSelect.value = ""
        areaProductTypeHint.textContent = ""
        applicationRateInput.value = ""
        areaInstructionsText.textContent = ""
        areaProductInstructions.classList.add("hidden")
        return
      }

      const selectedProduct = AREA_TREATMENT_PRODUCTS.find((product) => product.id === selectedProductId)
      if (selectedProduct) {
        handleAreaProductSelect(selectedProduct)
      }
    })
  }

  // Handle area product selection
  function handleAreaProductSelect(product) {
    // Set product name
    areaProductNameInput.value = product.name

    // Set product type
    areaProductTypeSelect.value = product.type
    areaProductTypeHint.textContent = PRODUCT_TYPE_HINTS[product.type] || ""

    // Set application rate
    applicationRateInput.value = product.defaultDosage
    rateUnitSelect.value = product.defaultDosageUnit
    rateAreaUnitSelect.value = product.defaultWaterUnit

    // Show product instructions
    areaInstructionsText.textContent = product.instructions
    areaProductInstructions.classList.remove("hidden")

    // Hide search panel
    areaProductSearchPanel.classList.add("hidden")
  }

  // Calculate area button click handler
  if (calculateAreaBtn) {
    calculateAreaBtn.addEventListener("click", () => {
      const areaInSqMeters = calculateArea()
      const applicationRate = Number.parseFloat(applicationRateInput.value) || 0
      const rateUnit = rateUnitSelect.value
      const rateAreaUnit = rateAreaUnitSelect.value

      // Convert application rate to g per sq meter
      let rateInGPerSqMeter = applicationRate
      if (rateUnit !== "g") {
        rateInGPerSqMeter = applicationRate * WEIGHT_CONVERSIONS[rateUnit]
      }
      if (rateAreaUnit !== "sq_m") {
        rateInGPerSqMeter = rateInGPerSqMeter / AREA_CONVERSIONS[rateAreaUnit]
      }

      // Calculate total amount
      const totalAmount = areaInSqMeters * rateInGPerSqMeter

      // Display results
      totalAmountResult.textContent = `${totalAmount.toFixed(2)} g`
      metricRateResult.textContent = `${rateInGPerSqMeter.toFixed(2)} g/sq m`

      // Convert to imperial units
      const totalAmountOz = totalAmount / WEIGHT_CONVERSIONS.oz
      imperialRateResult.textContent = `${((rateInGPerSqMeter / WEIGHT_CONVERSIONS.oz) * AREA_CONVERSIONS.sq_yd).toFixed(2)} oz/sq yd`
      alternativeAmountResult.textContent = `${totalAmountOz.toFixed(2)} oz`
    })
  }
}

// Initialize water calculator
function initWaterCalculator() {
  // Container shape radio button change handler
  if (containerShapeRadios) {
    containerShapeRadios.forEach((radio) => {
      radio.addEventListener("change", () => {
        if (radio.value === "rectangular") {
          rectangularInputs.classList.remove("hidden")
          circularInputs.classList.add("hidden")
        } else {
          rectangularInputs.classList.add("hidden")
          circularInputs.classList.remove("hidden")
        }
      })
    })
  }

  // Dimension unit select change handler
  if (dimensionUnitSelect) {
    dimensionUnitSelect.addEventListener("change", () => {
      calculateVolume()
    })
  }

  // Water volume unit select change handler
  if (waterVolumeUnitSelect) {
    waterVolumeUnitSelect.addEventListener("change", () => {
      calculateWaterDosage()
    })
  }

  // Container length input keyup handler
  if (containerLengthInput) {
    containerLengthInput.addEventListener("keyup", () => {
      calculateVolume()
    })
  }

  // Container width input keyup handler
  if (containerWidthInput) {
    containerWidthInput.addEventListener("keyup", () => {
      calculateVolume()
    })
  }

  // Container height input keyup handler
  if (containerHeightInput) {
    containerHeightInput.addEventListener("keyup", () => {
      calculateVolume()
    })
  }

  // Container diameter input keyup handler
  if (containerDiameterInput) {
    containerDiameterInput.addEventListener("keyup", () => {
      calculateVolume()
    })
  }

  // Container depth input keyup handler
  if (containerDepthInput) {
    containerDepthInput.addEventListener("keyup", () => {
      calculateVolume()
    })
  }

  // Dosage amount input keyup handler
  if (dosageAmountInput) {
    dosageAmountInput.addEventListener("keyup", () => {
      calculateWaterDosage()
    })
  }

  // Dosage unit select change handler
  if (dosageUnitSelect) {
    dosageUnitSelect.addEventListener("change", () => {
      calculateWaterDosage()
    })
  }

  // Water volume input keyup handler
  if (waterVolumeInput) {
    waterVolumeInput.addEventListener("keyup", () => {
      calculateWaterDosage()
    })
  }

  // Calculate volume function
  function calculateVolume() {
    let volume = 0
    const selectedShape = document.querySelector('input[name="container-shape"]:checked')?.value
    const dimensionUnit = dimensionUnitSelect.value

    if (selectedShape === "rectangular") {
      const length = Number.parseFloat(containerLengthInput.value) || 0
      const width = Number.parseFloat(containerWidthInput.value) || 0
      const height = Number.parseFloat(containerHeightInput.value) || 0
      volume = length * width * height
    } else {
      const diameter = Number.parseFloat(containerDiameterInput.value) || 0
      const depth = Number.parseFloat(containerDepthInput.value) || 0
      const radius = diameter / 2
      volume = Math.PI * radius * radius * depth
    }

    // Convert volume to liters
    let volumeInLiters = volume
    if (dimensionUnit !== "m") {
      volumeInLiters =
        volume *
        LENGTH_CONVERSIONS[dimensionUnit] *
        LENGTH_CONVERSIONS[dimensionUnit] *
        LENGTH_CONVERSIONS[dimensionUnit] *
        1000
    } else {
      volumeInLiters = volume * 1000
    }

    // Display calculated volume
    calculatedVolumeDiv.classList.remove("hidden")
    volumeResultText.textContent = `${volumeInLiters.toFixed(2)} l`
    volumeConversionText.textContent = `${(volumeInLiters / VOLUME_CONVERSIONS.gal_uk).toFixed(2)} gal (UK)`

    return volumeInLiters
  }

  // Find water product button click handler
  if (findWaterProductBtn) {
    findWaterProductBtn.addEventListener("click", () => {
      waterProductSearchPanel.classList.remove("hidden")
    })
  }

  // Water product search input keyup handler
  if (waterProductSearchInput) {
    waterProductSearchInput.addEventListener("keyup", () => {
      const searchTerm = waterProductSearchInput.value.toLowerCase()
      const searchResults = WATER_TREATMENT_PRODUCTS.filter((product) =>
        product.name.toLowerCase().includes(searchTerm),
      )
      renderProductSearchResults(searchResults, waterProductSearchResults, handleWaterProductSelect)
    })
  }

  // Water product dropdown change handler
  if (waterProductDropdown) {
    waterProductDropdown.addEventListener("change", () => {
      const selectedProductId = waterProductDropdown.value
      if (selectedProductId === "") {
        // Reset fields if no product is selected
        waterProductNameInput.value = ""
        waterProductTypeSelect.value = ""
        waterProductTypeHint.textContent = ""
        dosageAmountInput.value = ""
        waterInstructionsText.textContent = ""
        waterProductInstructions.classList.add("hidden")
        return
      }

      const selectedProduct = WATER_TREATMENT_PRODUCTS.find((product) => product.id === selectedProductId)
      if (selectedProduct) {
        handleWaterProductSelect(selectedProduct)
      }
    })
  }

  // Handle water product selection
  function handleWaterProductSelect(product) {
    // Set product name
    waterProductNameInput.value = product.name

    // Set product type
    waterProductTypeSelect.value = product.type
    waterProductTypeHint.textContent = PRODUCT_TYPE_HINTS[product.type] || ""

    // Set dosage amount and unit
    dosageAmountInput.value = product.defaultDosage
    dosageUnitSelect.value = product.defaultDosageUnit

    // Show product instructions
    waterInstructionsText.textContent = product.instructions
    waterProductInstructions.classList.remove("hidden")

    // Hide search panel
    waterProductSearchPanel.classList.add("hidden")
  }

  // Calculate water dosage function
  function calculateWaterDosage() {
    const volumeInLiters = calculateVolume()
    const dosageAmount = Number.parseFloat(dosageAmountInput.value) || 0
    const dosageUnit = dosageUnitSelect.value
    const waterVolume = Number.parseFloat(waterVolumeInput.value) || 0
    const waterVolumeUnit = waterVolumeUnitSelect.value

    // Convert dosage amount to ml
    let dosageInML = dosageAmount
    if (dosageUnit !== "ml") {
      dosageInML = dosageAmount * VOLUME_CONVERSIONS[dosageUnit]
    }

    // Convert water volume to liters
    let waterVolumeInLiters = waterVolume
    if (waterVolumeUnit !== "l") {
      waterVolumeInLiters = waterVolume * VOLUME_CONVERSIONS[waterVolumeUnit]
    }

    // Calculate total amount
    const totalAmount = (volumeInLiters / waterVolumeInLiters) * dosageInML

    // Display results
    waterTotalAmountResult.textContent = `${totalAmount.toFixed(2)} ml`
    waterMetricDosageResult.textContent = `${dosageInML.toFixed(2)} ml per ${waterVolumeInLiters.toFixed(2)} l`

    // Convert to imperial units
    const dosageInOz = dosageInML / VOLUME_CONVERSIONS.oz
    waterImperialDosageResult.textContent = `${dosageInOz.toFixed(2)} oz per ${(waterVolumeInLiters / VOLUME_CONVERSIONS.gal_uk).toFixed(2)} gal (UK)`
    waterAlternativeDosageResult.textContent = `${(totalAmount / VOLUME_CONVERSIONS.oz).toFixed(2)} oz`
  }

  // Calculate water button click handler
  if (calculateWaterBtn) {
    calculateWaterBtn.addEventListener("click", () => {
      calculateWaterDosage()
    })
  }
}

// Initialize accordion
function initAccordion() {
  const accordionTriggers = document.querySelectorAll(".accordion-trigger")

  accordionTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const accordionItem = trigger.parentElement
      accordionItem.classList.toggle("active")
    })
  })
}

// Update ratio labels based on measurement type and water unit
function updateRatioLabels() {
  const measurementType = document.querySelector('input[name="measurement-type"]:checked')?.value
  const waterUnit = document.getElementById("water-unit")?.value
  const waterUnit2 = document.getElementById("water-unit-2")?.value
  const targetUnit = document.getElementById("target-unit")?.value

  if (!measurementType || !waterUnit || !waterUnit2 || !targetUnit) return

  let unitText = ""
  if (measurementType === "weight") {
    unitText = "g"
  } else if (measurementType === "volume") {
    unitText = "ml"
  } else if (measurementType === "cap") {
    unitText = "cap"
  }

  let waterUnitText = ""
  if (waterUnit === "l") {
    waterUnitText = "liter"
  } else if (waterUnit === "gal_uk") {
    waterUnitText = "gallon"
  } else {
    waterUnitText = waterUnit
  }

  let waterUnitText2 = ""
  if (waterUnit2 === "l") {
    waterUnitText2 = "liter"
  } else if (waterUnit2 === "gal_uk") {
    waterUnitText2 = "gallon"
  } else {
    waterUnitText2 = waterUnit2
  }

  let targetUnitText = ""
  if (targetUnit === "l") {
    targetUnitText = "liter"
  } else if (targetUnit === "gal_uk") {
    targetUnitText = "gallon"
  } else {
    targetUnitText = targetUnit
  }

  const ratioLabelElement = document.getElementById("ratio-label")
  const ratioLabel2Element = document.getElementById("ratio-label-2")

  if (ratioLabelElement) {
    ratioLabelElement.textContent = `${unitText} per ${waterUnitText}`
  }

  if (ratioLabel2Element) {
    ratioLabel2Element.textContent = `${unitText} per ${targetUnitText}`
  }
}

// Render product search results
function renderProductSearchResults(products, resultsElement, selectHandler) {
  if (products.length === 0) {
    resultsElement.innerHTML = '<div class="p-4 text-center">No products found</div>'
    return
  }

  let html = "<ul>"
  products.forEach((product) => {
    html += `
      <li data-id="${product.id}">
        <div class="font-medium">${product.name}</div>
        <div class="hint">${product.instructions}</div>
      </li>
    `
  })
  html += "</ul>"

  resultsElement.innerHTML = html

  // Add click event listeners
  resultsElement.querySelectorAll("li").forEach((li) => {
    li.addEventListener("click", () => {
      const productId = li.getAttribute("data-id")
      const product = products.find((p) => p.id === productId)
      if (product) {
        selectHandler(product)
      }
    })
  })
}

// Handle product selection
function handleProductSelect(product) {
  // Set product name
  productNameInput.value = product.name

  // Set product type
  productTypeSelect.value = product.type
  productTypeHint.textContent = PRODUCT_TYPE_HINTS[product.type] || ""

  // Set measurement type
  document.querySelector(`input[name="measurement-type"][value="${product.measurementType}"]`).checked = true
  if (product.measurementType === "cap") {
    capSizeGroup.classList.remove("hidden")
    capSizeInput.value = product.capSize?.fullCapML || 10
  } else {
    capSizeGroup.classList.add("hidden")
  }

  // Show product instructions
  instructionsText.textContent = product.instructions
  productInstructions.classList.remove("hidden")

  // Hide search panel
  productSearchPanel.classList.add("hidden")

  // Update ratio labels
  updateRatioLabels()
}

// Additional functions for handling presets, area calculator, water calculator, etc.
// would be implemented here
// Product Database
const COMMON_PRODUCTS = [
  {
    id: "miracle-gro-all-purpose",
    name: "Miracle-Gro All Purpose Liquid Plant Food",
    type: "liquid_fertilizer",
    measurementType: "cap",
    defaultDosage: 0.5,
    defaultDosageUnit: "cap",
    defaultWaterAmount: 1,
    defaultWaterUnit: "l",
    instructions: "Add half a cap (5ml) to 1 litre of water. Apply once or twice a week.",
    capSize: {
      fullCapML: 10,
      markings: { half: 5, full: 10 },
    },
  },
  {
    id: "miracle-gro-tomato",
    name: "Miracle-Gro Tomato Plant Food",
    type: "liquid_fertilizer",
    measurementType: "cap",
    defaultDosage: 1,
    defaultDosageUnit: "cap",
    defaultWaterAmount: 1.5,
    defaultWaterUnit: "l",
    instructions: "Add one full cap (10ml) to 1.5 litres of water. Apply once a week.",
    capSize: {
      fullCapML: 10,
      markings: { half: 5, full: 10 },
    },
  },
  {
    id: "baby-bio-houseplant",
    name: "Baby Bio Houseplant Food",
    type: "liquid_fertilizer",
    measurementType: "cap",
    defaultDosage: 0.5,
    defaultDosageUnit: "cap",
    defaultWaterAmount: 1,
    defaultWaterUnit: "l",
    instructions:
      "Add 5-10 drops per 500ml of water for normal feeding, or half a cap (2.5ml) per litre for stronger feeding.",
    capSize: {
      fullCapML: 5,
      markings: { half: 2.5, full: 5 },
    },
  },
  {
    id: "tomorite",
    name: "Levington Tomorite Tomato Food",
    type: "liquid_fertilizer",
    measurementType: "cap",
    defaultDosage: 2,
    defaultDosageUnit: "cap",
    defaultWaterAmount: 4.5,
    defaultWaterUnit: "l",
    instructions: "Add 20ml (2 caps) per 4.5 litres (1 gallon) of water. Apply twice a week.",
    capSize: {
      fullCapML: 10,
      markings: { half: 5, full: 10 },
    },
  },
  {
    id: "phostrogen-liquid",
    name: "Phostrogen Liquid Plant Food",
    type: "liquid_fertilizer",
    measurementType: "cap",
    defaultDosage: 1,
    defaultDosageUnit: "cap",
    defaultWaterAmount: 4.5,
    defaultWaterUnit: "l",
    instructions: "Add one capful (10ml) per 4.5 litres (1 gallon) of water.",
    capSize: {
      fullCapML: 10,
      markings: { half: 5, full: 10 },
    },
  },
  {
    id: "phostrogen",
    name: "Phostrogen All Purpose Plant Food",
    type: "granular_fertilizer",
    measurementType: "weight",
    defaultDosage: 3.5,
    defaultDosageUnit: "g",
    defaultWaterAmount: 4.5,
    defaultWaterUnit: "l",
    instructions: "Dissolve one level scoop (3.5g) in 4.5 litres (1 gallon) of water.",
  },
  {
    id: "growmore",
    name: "Westland Growmore Garden Fertiliser",
    type: "granular_fertilizer",
    measurementType: "weight",
    defaultDosage: 35,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions: "Apply 35g per square metre and work into the soil surface.",
  },
  // New products from the provided data
  {
    id: "miracle-gro-all-purpose-soluble",
    name: "Miracle-Gro All Purpose Soluble Plant Food",
    type: "liquid_fertilizer",
    measurementType: "volume",
    defaultDosage: 15,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 4.5,
    defaultWaterUnit: "l",
    instructions:
      "Feed every two weeks from March to September; promotes healthy growth and abundant blooms. 1kg makes up to 360 liters of feed.",
  },
  {
    id: "levington-tomorite-organic",
    name: "Levington Tomorite Organic Concentrate",
    type: "liquid_fertilizer",
    measurementType: "volume",
    defaultDosage: 20,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 4.5,
    defaultWaterUnit: "l",
    instructions:
      "Ideal for fruiting plants; feed every 7 days during the growing season. 1 liter makes up to 225 liters of feed.",
  },
  {
    id: "bronte-tub-basket",
    name: "Bronte Heritage Collection Tub & Basket Plant Food",
    type: "liquid_fertilizer",
    measurementType: "volume",
    defaultDosage: 100,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 4.5,
    defaultWaterUnit: "l",
    instructions:
      "Feed every 7-14 days during the growing season; reduce rate for sensitive or young plants. Apply diluted feed to the base of plants.",
  },
  {
    id: "ecofective-basket-tub",
    name: "ecofective® Basket & Tub Feed",
    type: "liquid_fertilizer",
    measurementType: "volume",
    defaultDosage: 30,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 4.5,
    defaultWaterUnit: "l",
    instructions:
      "Organic feed; safe for children, pets, and beneficial insects; feed every 7-14 days. Covers up to 6 square meters.",
  },
  {
    id: "miracle-gro-orchid",
    name: "Miracle-Gro Orchid Plant Food",
    type: "liquid_fertilizer",
    measurementType: "volume",
    defaultDosage: 5,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1,
    defaultWaterUnit: "l",
    instructions:
      "Apply every 7-14 days. For best results, apply when the compost is moist. Suitable for all orchid varieties.",
  },
  {
    id: "baby-bio-citrus",
    name: "Baby Bio Citrus Food",
    type: "liquid_fertilizer",
    measurementType: "cap",
    defaultDosage: 1,
    defaultDosageUnit: "cap",
    defaultWaterAmount: 1,
    defaultWaterUnit: "l",
    instructions: "Feed every 2 weeks during the growing season (March to October) and monthly during winter.",
    capSize: {
      fullCapML: 5,
      markings: { half: 2.5, full: 5 },
    },
  },
  {
    id: "westland-houseplant-feed",
    name: "Westland Houseplant Feed",
    type: "liquid_fertilizer",
    measurementType: "cap",
    defaultDosage: 1,
    defaultDosageUnit: "cap",
    defaultWaterAmount: 1,
    defaultWaterUnit: "l",
    instructions: "Feed every 2 weeks during the growing season. Reduce to once a month in winter.",
    capSize: {
      fullCapML: 10,
      markings: { half: 5, full: 10 },
    },
  },
  {
    id: "maxicrop-seaweed",
    name: "Maxicrop Original Seaweed Extract",
    type: "liquid_fertilizer",
    measurementType: "volume",
    defaultDosage: 20,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 4.5,
    defaultWaterUnit: "l",
    instructions: "Apply every 2 weeks during the growing season. Can be used as a foliar feed or soil drench.",
  },
  {
    id: "seasol-seaweed",
    name: "Seasol Seaweed Plant Tonic",
    type: "liquid_fertilizer",
    measurementType: "volume",
    defaultDosage: 30,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 9,
    defaultWaterUnit: "l",
    instructions:
      "Apply every 2-4 weeks throughout the year. Ideal for reducing transplant shock and improving stress tolerance.",
  },
  {
    id: "neudorff-organic-tomato",
    name: "Neudorff Organic Tomato Feed",
    type: "liquid_fertilizer",
    measurementType: "volume",
    defaultDosage: 15,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 2,
    defaultWaterUnit: "l",
    instructions: "Apply weekly during the growing season. Suitable for all fruiting vegetables.",
  },
  {
    id: "vitax-organic-liquid",
    name: "Vitax Organic Liquid Seaweed",
    type: "liquid_fertilizer",
    measurementType: "volume",
    defaultDosage: 20,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 4.5,
    defaultWaterUnit: "l",
    instructions: "Apply every 2 weeks during the growing season. Suitable for all plants.",
  },
  {
    id: "chempak-formula-4",
    name: "Chempak Formula 4 High Potash Feed",
    type: "granular_fertilizer",
    measurementType: "weight",
    defaultDosage: 4,
    defaultDosageUnit: "g",
    defaultWaterAmount: 4.5,
    defaultWaterUnit: "l",
    instructions: "Dissolve in water and apply every 10-14 days. Ideal for flowering and fruiting plants.",
  },
  {
    id: "miracle-gro-bonsai",
    name: "Miracle-Gro Bonsai Plant Food",
    type: "liquid_fertilizer",
    measurementType: "volume",
    defaultDosage: 5,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1,
    defaultWaterUnit: "l",
    instructions: "Apply every 7 days during the growing season. Reduce to once a month in winter.",
  },
  {
    id: "osmocote-controlled-release",
    name: "Osmocote Controlled Release Plant Food",
    type: "granular_fertilizer",
    measurementType: "weight",
    defaultDosage: 5,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "l",
    instructions: "Mix into compost before planting or apply as a top dressing. Feeds for up to 6 months.",
  },
  {
    id: "miracle-gro-azalea",
    name: "Miracle-Gro Azalea, Camellia & Rhododendron Food",
    type: "liquid_fertilizer",
    measurementType: "volume",
    defaultDosage: 15,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 4.5,
    defaultWaterUnit: "l",
    instructions: "Apply every 1-2 weeks during the growing season. Specially formulated for acid-loving plants.",
  },
  {
    id: "growth-technology-orchid-myst",
    name: "Growth Technology Orchid Myst",
    type: "liquid_fertilizer",
    measurementType: "volume",
    defaultDosage: 10,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1,
    defaultWaterUnit: "plant",
    instructions: "Spray directly onto leaves and aerial roots. Use 2-3 times per week during active growth.",
  },
]

// Area Treatment Products
const AREA_TREATMENT_PRODUCTS = [
  {
    id: "evergreen-lawn-feed",
    name: "Evergreen Complete 4-in-1 Lawn Feed",
    type: "lawn_fertilizer",
    measurementType: "weight",
    defaultDosage: 35,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions: "Apply 35g per square metre using a spreader. Water in if no rain falls within 48 hours.",
  },
  {
    id: "miracle-gro-lawn-food",
    name: "Miracle-Gro Water Soluble Lawn Food",
    type: "lawn_fertilizer",
    measurementType: "weight",
    defaultDosage: 15,
    defaultDosageUnit: "g",
    defaultWaterAmount: 4.5,
    defaultWaterUnit: "l",
    instructions: "Dissolve 15g in 4.5 litres (1 gallon) of water to cover 1 square metre.",
  },
  {
    id: "westland-lawn-seed",
    name: "Westland Lawn Seed",
    type: "lawn_seed",
    measurementType: "weight",
    defaultDosage: 25,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions: "Sow at 25g per square metre for new lawns, 15g per square metre for overseeding.",
  },
  {
    id: "resolva-lawn-weedkiller",
    name: "Resolva Lawn Weedkiller",
    type: "weed_killer",
    measurementType: "volume",
    defaultDosage: 10,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1,
    defaultWaterUnit: "l",
    instructions: "Dilute 10ml in 1 litre of water. Apply at 100ml of diluted product per square metre.",
  },
  // New products from the provided data
  {
    id: "miracle-gro-evergreen-complete",
    name: "Miracle-Gro EverGreen Complete 4-in-1",
    type: "lawn_fertilizer",
    measurementType: "weight",
    defaultDosage: 35,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions: "Apply using a spreader; avoid mowing for 3-4 days after application. Treats up to 400m².",
  },
  {
    id: "westland-safelawn",
    name: "Westland SafeLawn Natural Lawn Feed",
    type: "lawn_fertilizer",
    measurementType: "weight",
    defaultDosage: 35,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions:
      "Apply every 3-4 weeks from February to September; safe for children and pets. A 2.8kg box covers 80m².",
  },
  {
    id: "miracle-gro-performance-organics",
    name: "Miracle-Gro Performance Organics All Purpose Plant Food",
    type: "granular_fertilizer",
    measurementType: "weight",
    defaultDosage: 50,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions:
      "Mix into soil before planting or apply around the base of established plants. Apply as top-dressing; feeds for up to 6 weeks.",
  },
  {
    id: "westland-growmore",
    name: "Westland Growmore",
    type: "granular_fertilizer",
    measurementType: "weight",
    defaultDosage: 70,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions:
      "Suitable for all around the garden; apply every 4-6 weeks during the growing season. Apply as a top dressing and work into the soil.",
  },
  {
    id: "after-plant-evergreen",
    name: "After Plant Evergreen Fertiliser",
    type: "granular_fertilizer",
    measurementType: "weight",
    defaultDosage: 25,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions: "Apply around the base; enhances soil quality with beneficial microbes. 1kg bag covers 40m².",
  },
  {
    id: "miracle-gro-rose-shrub",
    name: "Miracle-Gro Premium Rose & Shrub Continuous Release Plant Food",
    type: "granular_fertilizer",
    measurementType: "weight",
    defaultDosage: 25,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "plant",
    instructions: "Apply at the beginning of the growing season; feeds for up to 6 months. 900g feeds up to 45 plants.",
  },
  {
    id: "roundup-fast-action",
    name: "Roundup Fast Action Weedkiller",
    type: "weed_killer",
    measurementType: "volume",
    defaultDosage: 25,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions: "Apply when weeds are actively growing. Visible results in 1-2 days. Rainproof in 1 hour.",
  },
  {
    id: "weedol-lawn-weedkiller",
    name: "Weedol Lawn Weed Killer",
    type: "weed_killer",
    measurementType: "volume",
    defaultDosage: 10,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions: "Apply when weeds are actively growing. Do not mow for 3 days before or after treatment.",
  },
  {
    id: "scotts-turf-builder",
    name: "Scotts Turf Builder Lawn Food",
    type: "lawn_fertilizer",
    measurementType: "weight",
    defaultDosage: 35,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions:
      "Apply using a spreader. Water in if no rain falls within 48 hours. Apply every 8-10 weeks during growing season.",
  },
  {
    id: "nemasys-leatherjacket-killer",
    name: "Nemasys Leatherjacket Killer",
    type: "pest_control",
    measurementType: "volume",
    defaultDosage: 500,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 50,
    defaultWaterUnit: "sq_m",
    instructions: "Apply when soil temperature is above 10°C. Water the area before and after application.",
  },
  {
    id: "vitax-q4",
    name: "Vitax Q4 Fertilizer",
    type: "granular_fertilizer",
    measurementType: "weight",
    defaultDosage: 70,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions: "Apply in spring and summer. Rake into the soil surface. Water in well after application.",
  },
  {
    id: "westland-bone-meal",
    name: "Westland Bone Meal",
    type: "granular_fertilizer",
    measurementType: "weight",
    defaultDosage: 100,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions:
      "Apply before planting or as a top dressing. Rake into the soil surface. Ideal for bulbs and root development.",
  },
  {
    id: "doff-slug-killer",
    name: "Doff Slug Killer Blue Mini Pellets",
    type: "pest_control",
    measurementType: "weight",
    defaultDosage: 5,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions: "Scatter pellets thinly around vulnerable plants. Reapply after heavy rain.",
  },
  {
    id: "evergreen-moss-control",
    name: "Evergreen Moss Control Lawn Food",
    type: "lawn_fertilizer",
    measurementType: "weight",
    defaultDosage: 35,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions: "Apply using a spreader. Do not apply during drought conditions or when rain is imminent.",
  },
  {
    id: "miracle-gro-moisture-control",
    name: "Miracle-Gro Moisture Control Compost",
    type: "mulch",
    measurementType: "volume",
    defaultDosage: 5,
    defaultDosageUnit: "l",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions: "Apply a 5cm layer around plants. Ideal for containers and hanging baskets.",
  },
  {
    id: "westland-garden-lime",
    name: "Westland Garden Lime",
    type: "lime",
    measurementType: "weight",
    defaultDosage: 100,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions: "Apply in autumn or winter. Rake into the soil surface. Do not apply to acid-loving plants.",
  },
  {
    id: "bayer-provado-ultimate",
    name: "Bayer Provado Ultimate Bug Killer",
    type: "pest_control",
    measurementType: "volume",
    defaultDosage: 10,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1,
    defaultWaterUnit: "l",
    instructions:
      "Apply as a foliar spray. Repeat after 14 days if necessary. Effective against a wide range of pests.",
  },
]

// Water Treatment Products
const WATER_TREATMENT_PRODUCTS = [
  {
    id: "tetra-pond-algae",
    name: "TetraPond AlgoRem",
    type: "pond_treatment",
    measurementType: "volume",
    defaultDosage: 50,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1000,
    defaultWaterUnit: "l",
    instructions: "Add 50ml per 1000 litres of pond water. Repeat after 2-3 weeks if necessary.",
  },
  {
    id: "pondcare-algaefix",
    name: "API PondCare AlgaeFix",
    type: "algaecide",
    measurementType: "volume",
    defaultDosage: 10,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1000,
    defaultWaterUnit: "l",
    instructions: "Add 10ml per 1000 litres of pond water. Repeat weekly as needed.",
  },
  {
    id: "tetra-pond-clearplus",
    name: "TetraPond ClearPlus",
    type: "water_clarifier",
    measurementType: "volume",
    defaultDosage: 25,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1000,
    defaultWaterUnit: "l",
    instructions: "Add 25ml per 1000 litres of pond water. Repeat after 2 weeks if necessary.",
  },
  // New products from the provided data
  {
    id: "bermuda-greenwater",
    name: "Bermuda Greenwater Treatment",
    type: "pond_treatment",
    measurementType: "volume",
    defaultDosage: 50,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1000,
    defaultWaterUnit: "l",
    instructions: "Clears green water algae; safe for fish and wildlife. 500ml treats up to 10,000 liters.",
  },
  {
    id: "cloverleaf-absolute-ct",
    name: "Cloverleaf Absolute CT Anti Bacterial",
    type: "pond_treatment",
    measurementType: "weight",
    defaultDosage: 10,
    defaultDosageUnit: "g",
    defaultWaterAmount: 4546,
    defaultWaterUnit: "l",
    instructions:
      "Treats bacterial infections in fish; ensure adequate oxygenation during treatment. Apply daily for up to 4 days.",
  },
  {
    id: "api-pond-salt",
    name: "API Pond Salt",
    type: "pond_treatment",
    measurementType: "weight",
    defaultDosage: 120,
    defaultDosageUnit: "g",
    defaultWaterAmount: 100,
    defaultWaterUnit: "l",
    instructions:
      "Dissolve in water before adding to pond. Use for fish stress, disease prevention, and to improve gill function.",
  },
  {
    id: "tetra-pond-ph-minus",
    name: "Tetra Pond pH Minus",
    type: "water_clarifier",
    measurementType: "volume",
    defaultDosage: 50,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1000,
    defaultWaterUnit: "l",
    instructions: "Add gradually over several days. Test pH regularly. Ideal pH for most pond fish is 7.0-8.5.",
  },
  {
    id: "blagdon-pond-guardian",
    name: "Blagdon Pond Guardian",
    type: "pond_treatment",
    measurementType: "volume",
    defaultDosage: 25,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1000,
    defaultWaterUnit: "l",
    instructions:
      "Add directly to pond water. Treats a wide range of fish diseases. Safe for plants and filter bacteria.",
  },
  {
    id: "nishikoi-health-treatment",
    name: "Nishikoi Health Treatment",
    type: "fish_medication",
    measurementType: "volume",
    defaultDosage: 25,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1000,
    defaultWaterUnit: "l",
    instructions:
      "Add directly to pond water. Treats ulcers, fin rot, and bacterial infections. Safe for plants and filter bacteria.",
  },
  {
    id: "oase-aquaactiv-biokick",
    name: "Oase AquaActiv BioKick",
    type: "pond_treatment",
    measurementType: "volume",
    defaultDosage: 10,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1000,
    defaultWaterUnit: "l",
    instructions:
      "Add when setting up a new pond or after cleaning the filter. Contains live bacteria to establish biological filtration.",
  },
  {
    id: "pondcare-algaefix-plus",
    name: "PondCare AlgaeFix Plus",
    type: "algaecide",
    measurementType: "volume",
    defaultDosage: 10,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1000,
    defaultWaterUnit: "l",
    instructions: "Add weekly to control algae. Safe for fish and plants when used as directed.",
  },
  {
    id: "tetra-pond-crystal-water",
    name: "Tetra Pond Crystal Water",
    type: "water_clarifier",
    measurementType: "volume",
    defaultDosage: 25,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1000,
    defaultWaterUnit: "l",
    instructions: "Add directly to pond water. Clears cloudy water. Safe for fish and plants.",
  },
  {
    id: "pondcare-accu-clear",
    name: "PondCare Accu-Clear",
    type: "water_clarifier",
    measurementType: "volume",
    defaultDosage: 15,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1000,
    defaultWaterUnit: "l",
    instructions:
      "Add directly to pond water. Clumps suspended particles for easy filter removal. Safe for fish and plants.",
  },
  {
    id: "api-pond-ammo-lock",
    name: "API Pond Ammo-Lock",
    type: "pond_treatment",
    measurementType: "volume",
    defaultDosage: 10,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 100,
    defaultWaterUnit: "l",
    instructions: "Add during water changes or when ammonia is detected. Detoxifies ammonia immediately.",
  },
  {
    id: "laguna-plant-grow",
    name: "Laguna Plant Grow Fertilizer",
    type: "plant_nutrient",
    measurementType: "volume",
    defaultDosage: 5,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 100,
    defaultWaterUnit: "l",
    instructions: "Add weekly during the growing season. Promotes healthy plant growth without encouraging algae.",
  },
]

// Conversion factors
const WEIGHT_CONVERSIONS = {
  g: 1,
  kg: 1000,
  oz: 28.3495,
  lb: 453.592,
}

const VOLUME_CONVERSIONS = {
  ml: 1,
  l: 1000,
  tsp: 4.92892,
  tbsp: 14.7868,
  cup: 236.588,
  pt: 473.176,
  qt: 946.353,
  gal_uk: 4546.09,
  cap: 10, // Default cap size, will be overridden by product-specific cap sizes
}

const AREA_CONVERSIONS = {
  sq_m: 1,
  sq_ft: 0.092903,
  sq_yd: 0.836127,
  acre: 4046.86,
  hectare: 10000,
  plant: 0.25, // Approximate area per plant
}

const LENGTH_CONVERSIONS = {
  m: 1,
  cm: 0.01,
  ft: 0.3048,
  in: 0.0254,
}

// Product type hints
const PRODUCT_TYPE_HINTS = {
  liquid_fertilizer: "Typical usage: 5-10ml per liter of water",
  granular_fertilizer: "Typical usage: 1-2g per liter of water or 30-60g per sq meter",
  lawn_feed: "Typical usage: 35g per sq meter or 1oz per sq yard",
  pond_treatment: "Typical usage: 5ml per 1000 liters of water",
  plant_food: "Typical usage: 5ml per liter of water, weekly",
  pesticide: "Typical usage: 5-10ml per liter of water",
  compost_additive: "Typical usage: 50g per 10kg of compost",
  custom: "Varies by product",
  lawn_fertilizer: "Typical usage: 35g per sq meter or 1oz per sq yard",
  lawn_seed: "Typical usage: 25-35g per sq meter",
  weed_killer: "Typical usage: 10ml per sq meter diluted in water",
  mulch: "Typical usage: 5-10 liters per sq meter",
  lime: "Typical usage: 100g per sq meter",
  algaecide: "Typical usage: 10ml per 1000 liters of water",
  water_clarifier: "Typical usage: 5ml per 1000 liters of water",
  fish_medication: "Typical usage: 1g per 100 liters of water",
  plant_nutrient: "Typical usage: 5ml per 50 liters of water",
}

// DOM Elements - Main Tabs
const tabButtons = document.querySelectorAll(".tab-button")
const tabPanels = document.querySelectorAll(".tab-panel")

// DOM Elements - Guide Tabs
const guideTabs = document.querySelectorAll(".guide-tab")
const guideTabPanels = document.querySelectorAll(".guide-tab-panel")

// DOM Elements - Product Calculator
const productTypeSelect = document.getElementById("product-type")
const productTypeHint = document.getElementById("product-type-hint")
const measurementTypeRadios = document.querySelectorAll('input[name="measurement-type"]')
const capSizeGroup = document.getElementById("cap-size-group")
const capSizeInput = document.getElementById("cap-size")
const hasScoopRadios = document.querySelectorAll('input[name="has-scoop"]')
const scoopSizeGroup = document.getElementById("scoop-size-group")
const calculationModeRadios = document.querySelectorAll('input[name="calculation-mode"]')
const calculationModePanels = document.querySelectorAll(".calculation-mode-panel")
const findProductBtn = document.getElementById("find-product-btn")
const productSearchPanel = document.getElementById("product-search-panel")
const productSearchInput = document.getElementById("product-search")
const productSearchResults = document.getElementById("product-search-results")
const myPresetsBtn = document.getElementById("my-presets-btn")
const presetsPanel = document.getElementById("presets-panel")
const presetsList = document.getElementById("presets-list")
const productNameInput = document.getElementById("product-name")
const productInstructions = document.getElementById("product-instructions")
const instructionsText = document.getElementById("instructions-text")
const ratioLabel = document.getElementById("ratio-label")
const ratioLabel2 = document.getElementById("ratio-label-2")
const savePresetBtn = document.getElementById("save-preset-btn")
const calculateBtn = document.getElementById("calculate-btn")
const metricResult = document.getElementById("metric-result")
const imperialResult = document.getElementById("imperial-result")
const capResultCard = document.getElementById("cap-result-card")
const capResult = document.getElementById("cap-result")
const scoopResultCard = document.getElementById("scoop-result-card")
const scoopResult = document.getElementById("scoop-result")
const alternativeResult = document.getElementById("alternative-result")
const wateringCanSection = document.getElementById("watering-can-section")
const wateringCanTitle = document.getElementById("watering-can-title")
const wateringCanResult = document.getElementById("watering-can-result")
const wateringCanInfo = document.getElementById("watering-can-info")
const debugTrigger = document.getElementById("debug-trigger")
const debugContent = document.getElementById("debug-content")
const debugInfo = document.getElementById("debug-info")
const copyDebugBtn = document.getElementById("copy-debug-btn")
const productDropdown = document.getElementById("product-dropdown")

// DOM Elements - Area Calculator
const areaShapeRadios = document.querySelectorAll('input[name="area-shape"]')
const rectangleInputs = document.getElementById("rectangle-inputs")
const circleInputs = document.getElementById("circle-inputs")
const lengthInput = document.getElementById("length")
const widthInput = document.getElementById("width")
const areaUnitSelect = document.getElementById("area-unit")
const diameterInput = document.getElementById("diameter")
const circleUnitSelect = document.getElementById("circle-unit")
const calculatedAreaDiv = document.getElementById("calculated-area")
const areaResultText = document.getElementById("area-result")
const findAreaProductBtn = document.getElementById("find-area-product-btn")
const areaProductSearchPanel = document.getElementById("area-product-search-panel")
const areaProductSearchInput = document.getElementById("area-product-search")
const areaProductSearchResults = document.getElementById("area-product-search-results")
const areaPresetsBtn = document.getElementById("area-presets-btn")
const areaPresetsPanel = document.getElementById("area-presets-panel")
const areaPresetsList = document.getElementById("area-presets-list")
const areaProductTypeSelect = document.getElementById("area-product-type")
const areaProductTypeHint = document.getElementById("area-product-type-hint")
const areaProductNameInput = document.getElementById("area-product-name")
const areaProductInstructions = document.getElementById("area-product-instructions")
const areaInstructionsText = document.getElementById("area-instructions-text")
const applicationRateInput = document.getElementById("application-rate")
const rateUnitSelect = document.getElementById("rate-unit")
const rateAreaUnitSelect = document.getElementById("rate-area-unit")
const saveAreaPresetBtn = document.getElementById("save-area-preset-btn")
const calculateAreaBtn = document.getElementById("calculate-area-btn")
const totalAmountResult = document.getElementById("total-amount-result")
const alternativeAmountResult = document.getElementById("alternative-amount-result")
const metricRateResult = document.getElementById("metric-rate-result")
const imperialRateResult = document.getElementById("imperial-rate-result")
const areaDebugTrigger = document.getElementById("area-debug-trigger")
const areaDebugContent = document.getElementById("area-debug-content")
const areaDebugInfo = document.getElementById("area-debug-info")
const copyAreaDebugBtn = document.getElementById("copy-area-debug-btn")
const areaProductDropdown = document.getElementById("area-product-dropdown")

// DOM Elements - Water Calculator
const containerShapeRadios = document.querySelectorAll('input[name="container-shape"]')
const rectangularInputs = document.getElementById("rectangular-inputs")
const circularInputs = document.getElementById("circular-inputs")
const dimensionUnitSelect = document.getElementById("dimension-unit")
const containerLengthInput = document.getElementById("container-length")
const containerWidthInput = document.getElementById("container-width")
const containerHeightInput = document.getElementById("container-height")
const containerDiameterInput = document.getElementById("container-diameter")
const containerDepthInput = document.getElementById("container-depth")
const calculatedVolumeDiv = document.getElementById("calculated-volume")
const volumeResultText = document.getElementById("volume-result")
const volumeConversionText = document.getElementById("volume-conversion")
const waterVolumeInput = document.getElementById("water-volume")
const waterVolumeUnitSelect = document.getElementById("water-volume-unit")
const findWaterProductBtn = document.getElementById("find-water-product-btn")
const waterProductSearchPanel = document.getElementById("water-product-search-panel")
const waterProductSearchInput = document.getElementById("water-product-search")
const waterProductSearchResults = document.getElementById("water-product-search-results")
const waterPresetsBtn = document.getElementById("water-presets-btn")
const waterPresetsPanel = document.getElementById("water-presets-panel")
const waterPresetsList = document.getElementById("water-presets-list")
const waterProductTypeSelect = document.getElementById("water-product-type")
const waterProductTypeHint = document.getElementById("water-product-type-hint")
const waterProductNameInput = document.getElementById("water-product-name")
const waterProductInstructions = document.getElementById("water-product-instructions")
const waterInstructionsText = document.getElementById("water-instructions-text")
const dosageAmountInput = document.getElementById("dosage-amount")
const dosageUnitSelect = document.getElementById("dosage-unit")
const saveWaterPresetBtn = document.getElementById("save-water-preset-btn")
const calculateWaterBtn = document.getElementById("calculate-water-btn")
const waterTotalAmountResult = document.getElementById("water-total-amount-result")
const waterMetricDosageResult = document.getElementById("water-metric-dosage-result")
const waterImperialDosageResult = document.getElementById("water-imperial-dosage-result")
const waterAlternativeDosageResult = document.getElementById("water-alternative-dosage-result")
const waterDebugTrigger = document.getElementById("water-debug-trigger")
const waterDebugContent = document.getElementById("water-debug-content")
const waterDebugInfo = document.getElementById("water-debug-info")
const copyWaterDebugBtn = document.getElementById("copy-water-debug-btn")
const waterProductDropdown = document.getElementById("water-product-dropdown")

// DOM Elements - Accordion
const accordionTriggers = document.querySelectorAll(".accordion-trigger")

// Populate product dropdowns
function populateProductDropdowns() {
  // Populate main product dropdown
  if (productDropdown) {
    // Clear existing options except the first one
    while (productDropdown.options.length > 1) {
      productDropdown.remove(1)
    }

    // Clear existing optgroups
    const optgroups = productDropdown.querySelectorAll("optgroup")
    optgroups.forEach((group) => group.remove())

    // Create optgroups
    const liquidFertilizerGroup = document.createElement("optgroup")
    liquidFertilizerGroup.label = "Liquid Fertilizers"

    const granularFertilizerGroup = document.createElement("optgroup")
    granularFertilizerGroup.label = "Granular Fertilizers"

    const plantFoodGroup = document.createElement("optgroup")
    plantFoodGroup.label = "Plant Foods"

    const otherProductsGroup = document.createElement("optgroup")
    otherProductsGroup.label = "Other Products"

    // Add products to appropriate groups
    COMMON_PRODUCTS.forEach((product) => {
      const option = document.createElement("option")
      option.value = product.id
      option.textContent = product.name

      if (product.type === "liquid_fertilizer") {
        liquidFertilizerGroup.appendChild(option)
      } else if (product.type === "granular_fertilizer") {
        granularFertilizerGroup.appendChild(option)
      } else if (product.type === "plant_food") {
        plantFoodGroup.appendChild(option)
      } else {
        otherProductsGroup.appendChild(option)
      }
    })

    // Add optgroups to dropdown
    if (liquidFertilizerGroup.children.length > 0) {
      productDropdown.appendChild(liquidFertilizerGroup)
    }
    if (granularFertilizerGroup.children.length > 0) {
      productDropdown.appendChild(granularFertilizerGroup)
    }
    if (plantFoodGroup.children.length > 0) {
      productDropdown.appendChild(plantFoodGroup)
    }
    if (otherProductsGroup.children.length > 0) {
      productDropdown.appendChild(otherProductsGroup)
    }
  }

  // Populate area product dropdown
  if (areaProductDropdown) {
    // Clear existing options except the first one
    while (areaProductDropdown.options.length > 1) {
      areaProductDropdown.remove(1)
    }

    // Clear existing optgroups
    const optgroups = areaProductDropdown.querySelectorAll("optgroup")
    optgroups.forEach((group) => group.remove())

    // Create optgroups
    const lawnFertilizerGroup = document.createElement("optgroup")
    lawnFertilizerGroup.label = "Lawn Fertilizers"

    const lawnSeedGroup = document.createElement("optgroup")
    lawnSeedGroup.label = "Lawn Seeds"

    const weedKillerGroup = document.createElement("optgroup")
    weedKillerGroup.label = "Weed Killers"

    const otherAreaGroup = document.createElement("optgroup")
    otherAreaGroup.label = "Other Area Products"

    // Add products to appropriate groups
    AREA_TREATMENT_PRODUCTS.forEach((product) => {
      const option = document.createElement("option")
      option.value = product.id
      option.textContent = product.name

      if (product.type === "lawn_fertilizer") {
        lawnFertilizerGroup.appendChild(option)
      } else if (product.type === "lawn_seed") {
        lawnSeedGroup.appendChild(option)
      } else if (product.type === "weed_killer") {
        weedKillerGroup.appendChild(option)
      } else {
        otherAreaGroup.appendChild(option)
      }
    })

    // Add optgroups to dropdown
    if (lawnFertilizerGroup.children.length > 0) {
      areaProductDropdown.appendChild(lawnFertilizerGroup)
    }
    if (lawnSeedGroup.children.length > 0) {
      areaProductDropdown.appendChild(lawnSeedGroup)
    }
    if (weedKillerGroup.children.length > 0) {
      areaProductDropdown.appendChild(weedKillerGroup)
    }
    if (otherAreaGroup.children.length > 0) {
      areaProductDropdown.appendChild(otherAreaGroup)
    }
  }

  // Populate water product dropdown
  if (waterProductDropdown) {
    // Clear existing options except the first one
    while (waterProductDropdown.options.length > 1) {
      waterProductDropdown.remove(1)
    }

    // Clear existing optgroups
    const optgroups = waterProductDropdown.querySelectorAll("optgroup")
    optgroups.forEach((group) => group.remove())

    // Create optgroups
    const pondTreatmentGroup = document.createElement("optgroup")
    pondTreatmentGroup.label = "Pond Treatments"

    const algaecideGroup = document.createElement("optgroup")
    algaecideGroup.label = "Algaecides"

    const waterClarifierGroup = document.createElement("optgroup")
    waterClarifierGroup.label = "Water Clarifiers"

    const otherWaterGroup = document.createElement("optgroup")
    otherWaterGroup.label = "Other Water Products"

    // Add products to appropriate groups
    WATER_TREATMENT_PRODUCTS.forEach((product) => {
      const option = document.createElement("option")
      option.value = product.id
      option.textContent = product.name

      if (product.type === "pond_treatment") {
        pondTreatmentGroup.appendChild(option)
      } else if (product.type === "algaecide") {
        algaecideGroup.appendChild(option)
      } else if (product.type === "water_clarifier") {
        waterClarifierGroup.appendChild(option)
      } else {
        otherWaterGroup.appendChild(option)
      }
    })

    // Add optgroups to dropdown
    if (pondTreatmentGroup.children.length > 0) {
      waterProductDropdown.appendChild(pondTreatmentGroup)
    }
    if (algaecideGroup.children.length > 0) {
      waterProductDropdown.appendChild(algaecideGroup)
    }
    if (waterClarifierGroup.children.length > 0) {
      waterProductDropdown.appendChild(waterClarifierGroup)
    }
    if (otherWaterGroup.children.length > 0) {
      waterProductDropdown.appendChild(otherWaterGroup)
    }
  }
}

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded - Simplified script.js")

  // Initialize tabs with direct DOM manipulation
  initTabs()

  // Initialize guide tabs
  initGuideTabs()

  // Initialize other components
  initProductCalculator()
  initAreaCalculator()
  initWaterCalculator()
  initAccordion()
  populateProductDropdowns()
})

// Initialize tabs
function initTabs() {
  console.log("Initializing tabs")

  // Get all tab buttons
  const tabButtons = document.querySelectorAll(".tab-button")
  console.log("Found tab buttons:", tabButtons.length)

  // Get all tab panels
  const tabPanels = document.querySelectorAll(".tab-panel")
  console.log("Found tab panels:", tabPanels.length)

  // Set initial display styles
  tabPanels.forEach((panel) => {
    if (panel.classList.contains("active")) {
      panel.style.display = "block"
    } else {
      panel.style.display = "none"
    }
  })

  // Add click event listeners to tab buttons
  tabButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault()
      const tabId = this.getAttribute("data-tab")
      console.log("Tab clicked:", tabId)

      // Remove active class from all buttons
      tabButtons.forEach((btn) => {
        btn.classList.remove("active")
      })

      // Add active class to clicked button
      this.classList.add("active")

      // Hide all tab panels
      tabPanels.forEach((panel) => {
        panel.classList.remove("active")
        panel.style.display = "none"
      })

      // Show the selected tab panel
      const targetPanel = document.getElementById(tabId + "-panel")
      if (targetPanel) {
        targetPanel.classList.add("active")
        targetPanel.style.display = "block"
        console.log("Activated panel:", targetPanel.id)
      } else {
        console.error("Panel not found:", tabId + "-panel")
      }
    })
  })
}

// Initialize guide tabs
function initGuideTabs() {
  console.log("Initializing guide tabs")

  // Get all guide tabs
  const guideTabs = document.querySelectorAll(".guide-tab")
  console.log("Found guide tabs:", guideTabs.length)

  // Get all guide tab panels
  const guideTabPanels = document.querySelectorAll(".guide-tab-panel")
  console.log("Found guide tab panels:", guideTabPanels.length)

  // Set initial display styles
  guideTabPanels.forEach((panel) => {
    if (panel.classList.contains("active")) {
      panel.style.display = "block"
    } else {
      panel.style.display = "none"
    }
  })

  // Add click event listeners to guide tabs
  guideTabs.forEach((tab) => {
    tab.addEventListener("click", function (e) {
      e.preventDefault()
      const tabId = this.getAttribute("data-guide-tab")
      console.log("Guide tab clicked:", tabId)

      // Remove active class from all guide tabs
      guideTabs.forEach((t) => {
        t.classList.remove("active")
      })

      // Add active class to clicked guide tab
      this.classList.add("active")

      // Hide all guide tab panels
      guideTabPanels.forEach((panel) => {
        panel.classList.remove("active")
        panel.style.display = "none"
      })

      // Show the selected guide tab panel
      const targetPanel = document.getElementById(tabId + "-panel")
      if (targetPanel) {
        targetPanel.classList.add("active")
        targetPanel.style.display = "block"
        console.log("Activated guide panel:", targetPanel.id)
      } else {
        console.error("Guide panel not found:", tabId + "-panel")
      }
    })
  })
}

// Initialize product calculator
function initProductCalculator() {
  // DOM Elements - Product Calculator
  const productTypeSelect = document.getElementById("product-type")
  const productTypeHint = document.getElementById("product-type-hint")
  const measurementTypeRadios = document.querySelectorAll('input[name="measurement-type"]')
  const capSizeGroup = document.getElementById("cap-size-group")
  const capSizeInput = document.getElementById("cap-size")
  const hasScoopRadios = document.querySelectorAll('input[name="has-scoop"]')
  const scoopSizeGroup = document.getElementById("scoop-size-group")
  const calculationModeRadios = document.querySelectorAll('input[name="calculation-mode"]')
  const calculationModePanels = document.querySelectorAll(".calculation-mode-panel")
  const findProductBtn = document.getElementById("find-product-btn")
  const productSearchPanel = document.getElementById("product-search-panel")
  const productSearchInput = document.getElementById("product-search")
  const productSearchResults = document.getElementById("product-search-results")
  const myPresetsBtn = document.getElementById("my-presets-btn")
  const presetsPanel = document.getElementById("presets-panel")
  const presetsList = document.getElementById("presets-list")
  const productNameInput = document.getElementById("product-name")
  const productInstructions = document.getElementById("product-instructions")
  const instructionsText = document.getElementById("instructions-text")
  const ratioLabel = document.getElementById("ratio-label")
  const ratioLabel2 = document.getElementById("ratio-label-2")
  const savePresetBtn = document.getElementById("save-preset-btn")
  const calculateBtn = document.getElementById("calculate-btn")
  const productDropdown = document.getElementById("product-dropdown")

  // Update product type hint
  if (productTypeSelect) {
    productTypeSelect.addEventListener("change", () => {
      const selectedType = productTypeSelect.value
      productTypeHint.textContent = PRODUCT_TYPE_HINTS[selectedType] || ""
    })
  }

  // Toggle cap size input based on measurement type
  if (measurementTypeRadios) {
    measurementTypeRadios.forEach((radio) => {
      radio.addEventListener("change", () => {
        if (radio.value === "cap") {
          capSizeGroup.classList.remove("hidden")
        } else {
          capSizeGroup.classList.add("hidden")
        }
        updateRatioLabels()
      })
    })
  }

  // Toggle scoop size input based on has scoop selection
  if (hasScoopRadios) {
    hasScoopRadios.forEach((radio) => {
      radio.addEventListener("change", () => {
        if (radio.value === "yes") {
          scoopSizeGroup.classList.remove("hidden")
        } else {
          scoopSizeGroup.classList.add("hidden")
        }
      })
    })
  }

  // Toggle calculation mode panels
  if (calculationModeRadios) {
    calculationModeRadios.forEach((radio) => {
      radio.addEventListener("change", () => {
        calculationModePanels.forEach((panel) => panel.classList.add("hidden"))
        document.getElementById(`${radio.value}-panel`).classList.remove("hidden")
      })
    })
  }

  // Other event listeners and functionality
  // (Implementation omitted for brevity)
}

// Initialize area calculator
function initAreaCalculator() {
  // Implementation omitted for brevity
}

// Initialize water calculator
function initWaterCalculator() {
  // Implementation omitted for brevity
}

// Initialize accordion
function initAccordion() {
  const accordionTriggers = document.querySelectorAll(".accordion-trigger")

  accordionTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const accordionItem = trigger.parentElement
      accordionItem.classList.toggle("active")
    })
  })
}

// Update ratio labels based on measurement type and water unit
function updateRatioLabels() {
  const measurementType = document.querySelector('input[name="measurement-type"]:checked')?.value
  const waterUnit = document.getElementById("water-unit")?.value
  const waterUnit2 = document.getElementById("water-unit-2")?.value
  const targetUnit = document.getElementById("target-unit")?.value

  if (!measurementType || !waterUnit || !waterUnit2 || !targetUnit) return

  let unitText = ""
  if (measurementType === "weight") {
    unitText = "g"
  } else if (measurementType === "volume") {
    unitText = "ml"
  } else if (measurementType === "cap") {
    unitText = "cap"
  }

  let waterUnitText = ""
  if (waterUnit === "l") {
    waterUnitText = "liter"
  } else if (waterUnit === "gal_uk") {
    waterUnitText = "gallon"
  } else {
    waterUnitText = waterUnit
  }

  let waterUnitText2 = ""
  if (waterUnit2 === "l") {
    waterUnitText2 = "liter"
  } else if (waterUnit2 === "gal_uk") {
    waterUnitText2 = "gallon"
  } else {
    waterUnitText2 = waterUnit2
  }

  let targetUnitText = ""
  if (targetUnit === "l") {
    targetUnitText = "liter"
  } else if (targetUnit === "gal_uk") {
    targetUnitText = "gallon"
  } else {
    targetUnitText = targetUnit
  }

  const ratioLabelElement = document.getElementById("ratio-label")
  const ratioLabel2Element = document.getElementById("ratio-label-2")

  if (ratioLabelElement) {
    ratioLabelElement.textContent = `${unitText} per ${waterUnitText}`
  }

  if (ratioLabel2Element) {
    ratioLabel2Element.textContent = `${unitText} per ${targetUnitText}`
  }
}
