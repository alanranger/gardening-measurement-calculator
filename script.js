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
  console.log("DOM loaded")

  // Fix for tab panels - ensure they have proper display styles
  document.querySelectorAll(".tab-panel").forEach((panel) => {
    if (panel.classList.contains("active")) {
      panel.style.display = "block"
    } else {
      panel.style.display = "none"
    }
  })

  document.querySelectorAll(".guide-tab-panel").forEach((panel) => {
    if (panel.classList.contains("active")) {
      panel.style.display = "block"
    } else {
      panel.style.display = "none"
    }
  })

  console.log("Tab buttons found:", document.querySelectorAll(".tab-button").length)
  console.log("Tab panels found:", document.querySelectorAll(".tab-panel").length)

  initTabs()
  initGuideTabs()
  initProductCalculator()
  initAreaCalculator()
  initWaterCalculator()
  initAccordion()
  populateProductDropdowns() // Add this line
})

// Initialize tabs
function initTabs() {
  console.log("Initializing tabs with direct DOM manipulation")

  // Get all tab buttons
  const tabButtons = document.querySelectorAll(".tab-button")
  console.log("Found tab buttons:", tabButtons.length)

  // Log all tab buttons and their data-tab attributes
  tabButtons.forEach((button) => {
    console.log("Tab button:", button.textContent.trim(), "data-tab:", button.getAttribute("data-tab"))
  })

  // Get all tab panels
  const tabPanels = document.querySelectorAll(".tab-panel")
  console.log("Found tab panels:", tabPanels.length)

  // Log all tab panels and their IDs
  tabPanels.forEach((panel) => {
    console.log("Tab panel ID:", panel.id)
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
        // Log all available panels for debugging
        console.log("Available panels:")
        tabPanels.forEach((p) => {
          console.log(p.id)
        })
      }
    })
  })

  // Make sure the first tab is active on page load
  if (tabButtons.length > 0 && tabPanels.length > 0) {
    const firstTabId = tabButtons[0].getAttribute("data-tab")
    const firstPanel = document.getElementById(firstTabId + "-panel")

    tabButtons[0].classList.add("active")
    if (firstPanel) {
      firstPanel.classList.add("active")
      firstPanel.style.display = "block"
      console.log("Initialized first tab:", firstTabId)
    }
  }
}

// Initialize guide tabs
function initGuideTabs() {
  console.log("Initializing guide tabs with direct DOM manipulation")

  // Get all guide tabs
  const guideTabs = document.querySelectorAll(".guide-tab")
  console.log("Found guide tabs:", guideTabs.length)

  // Get all guide tab panels
  const guideTabPanels = document.querySelectorAll(".guide-tab-panel")
  console.log("Found guide tab panels:", guideTabPanels.length)

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

  // Make sure the first guide tab is active on page load
  if (guideTabs.length > 0 && guideTabPanels.length > 0) {
    const firstTabId = guideTabs[0].getAttribute("data-guide-tab")
    const firstPanel = document.getElementById(firstTabId + "-panel")

    guideTabs[0].classList.add("active")
    if (firstPanel) {
      firstPanel.classList.add("active")
      firstPanel.style.display = "block"
      console.log("Initialized first guide tab:", firstTabId)
    }
  }
}

// Initialize product calculator
function initProductCalculator() {
  // Update product type hint
  productTypeSelect.addEventListener("change", () => {
    const selectedType = productTypeSelect.value
    productTypeHint.textContent = PRODUCT_TYPE_HINTS[selectedType] || ""
  })

  // Toggle cap size input based on measurement type
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

  // Toggle scoop size input based on has scoop selection
  hasScoopRadios.forEach((radio) => {
    radio.addEventListener("change", () => {
      if (radio.value === "yes") {
        scoopSizeGroup.classList.remove("hidden")
      } else {
        scoopSizeGroup.classList.add("hidden")
      }
    })
  })

  // Toggle calculation mode panels
  calculationModeRadios.forEach((radio) => {
    radio.addEventListener("change", () => {
      calculationModePanels.forEach((panel) => panel.classList.add("hidden"))
      document.getElementById(`${radio.value}-panel`).classList.remove("hidden")
    })
  })

  // Toggle product search panel
  findProductBtn.addEventListener("click", () => {
    if (productSearchPanel.classList.contains("hidden")) {
      productSearchPanel.classList.remove("hidden")
      presetsPanel.classList.add("hidden")
      productSearchInput.focus()
    } else {
      productSearchPanel.classList.add("hidden")
    }
  })

  // Handle product search
  productSearchInput.addEventListener("input", () => {
    const searchTerm = productSearchInput.value.toLowerCase()
    const filteredProducts = COMMON_PRODUCTS.filter((product) => product.name.toLowerCase().includes(searchTerm))

    renderProductSearchResults(filteredProducts, productSearchResults, handleProductSelect)
  })

  // Toggle presets panel
  myPresetsBtn.addEventListener("click", () => {
    if (presetsPanel.classList.contains("hidden")) {
      presetsPanel.classList.remove("hidden")
      productSearchPanel.classList.add("hidden")
      loadPresets("gardenerPresets", presetsList, handlePresetSelect)
    } else {
      presetsPanel.classList.add("hidden")
    }
  })

  // Save preset
  savePresetBtn.addEventListener("click", () => {
    savePreset("gardenerPresets")
  })

  // Calculate button
  calculateBtn.addEventListener("click", () => {
    calculateProductDosage()
  })

  // Debug trigger
  debugTrigger.addEventListener("click", () => {
    debugContent.classList.toggle("hidden")
    debugTrigger.querySelector(".icon").textContent = debugContent.classList.contains("hidden") ? "▼" : "▲"
  })

  // Copy debug info
  copyDebugBtn.addEventListener("click", () => {
    const debugText = debugInfo.textContent
    navigator.clipboard.writeText(debugText)
    alert("Debug information copied to clipboard")
  })

  // Update ratio labels when measurement type or water unit changes
  document.getElementById("water-unit").addEventListener("change", updateRatioLabels)
  document.getElementById("water-unit-2").addEventListener("change", updateRatioLabels)
  document.getElementById("target-unit").addEventListener("change", updateRatioLabels)

  // Add event listener for product dropdown
  if (productDropdown) {
    productDropdown.addEventListener("change", () => {
      const selectedProductId = productDropdown.value
      if (selectedProductId) {
        const product = COMMON_PRODUCTS.find((p) => p.id === selectedProductId)
        if (product) {
          handleProductSelect(product)
        }
      }
    })
  }

  // Initial setup
  updateRatioLabels()
}

// Initialize area calculator
function initAreaCalculator() {
  // Toggle area shape inputs
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

  // Calculate area when inputs change
  ;[lengthInput, widthInput, areaUnitSelect, diameterInput, circleUnitSelect].forEach((input) => {
    input.addEventListener("change", calculateArea)
    input.addEventListener("input", calculateArea)
  })

  // Update product type hint
  areaProductTypeSelect.addEventListener("change", () => {
    const selectedType = areaProductTypeSelect.value
    areaProductTypeHint.textContent = PRODUCT_TYPE_HINTS[selectedType] || ""
  })

  // Toggle product search panel
  findAreaProductBtn.addEventListener("click", () => {
    if (areaProductSearchPanel.classList.contains("hidden")) {
      areaProductSearchPanel.classList.remove("hidden")
      areaPresetsPanel.classList.add("hidden")
      areaProductSearchInput.focus()
    } else {
      areaProductSearchPanel.classList.add("hidden")
    }
  })

  // Handle product search
  areaProductSearchInput.addEventListener("input", () => {
    const searchTerm = areaProductSearchInput.value.toLowerCase()
    const filteredProducts = AREA_TREATMENT_PRODUCTS.filter((product) =>
      product.name.toLowerCase().includes(searchTerm),
    )

    renderProductSearchResults(filteredProducts, areaProductSearchResults, handleAreaProductSelect)
  })

  // Toggle presets panel
  areaPresetsBtn.addEventListener("click", () => {
    if (areaPresetsPanel.classList.contains("hidden")) {
      areaPresetsPanel.classList.remove("hidden")
      areaProductSearchPanel.classList.add("hidden")
      loadPresets("gardenerAreaPresets", areaPresetsList, handleAreaPresetSelect)
    } else {
      areaPresetsPanel.classList.add("hidden")
    }
  })

  // Save preset
  saveAreaPresetBtn.addEventListener("click", () => {
    saveAreaPreset()
  })

  // Calculate button
  calculateAreaBtn.addEventListener("click", () => {
    calculateAreaApplication()
  })

  // Debug trigger
  areaDebugTrigger.addEventListener("click", () => {
    areaDebugContent.classList.toggle("hidden")
    areaDebugTrigger.querySelector(".icon").textContent = areaDebugContent.classList.contains("hidden") ? "▼" : "▲"
  })

  // Copy debug info
  copyAreaDebugBtn.addEventListener("click", () => {
    const debugText = areaDebugInfo.textContent
    navigator.clipboard.writeText(debugText)
    alert("Debug information copied to clipboard")
  })

  // Add event listener for area product dropdown
  if (areaProductDropdown) {
    areaProductDropdown.addEventListener("change", () => {
      const selectedProductId = areaProductDropdown.value
      if (selectedProductId) {
        const product = AREA_TREATMENT_PRODUCTS.find((p) => p.id === selectedProductId)
        if (product) {
          handleAreaProductSelect(product)
        }
      }
    })
  }
}

// Initialize water calculator
function initWaterCalculator() {
  // Toggle container shape inputs
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

  // Calculate volume when inputs change
  ;[
    containerLengthInput,
    containerWidthInput,
    containerHeightInput,
    containerDiameterInput,
    containerDepthInput,
    dimensionUnitSelect,
  ].forEach((input) => {
    input.addEventListener("change", calculateVolume)
    input.addEventListener("input", calculateVolume)
  })

  // Update product type hint
  waterProductTypeSelect.addEventListener("change", () => {
    const selectedType = waterProductTypeSelect.value
    waterProductTypeHint.textContent = PRODUCT_TYPE_HINTS[selectedType] || ""
  })

  // Toggle product search panel
  findWaterProductBtn.addEventListener("click", () => {
    if (waterProductSearchPanel.classList.contains("hidden")) {
      waterProductSearchPanel.classList.remove("hidden")
      waterPresetsPanel.classList.add("hidden")
      waterProductSearchInput.focus()
    } else {
      waterProductSearchPanel.classList.add("hidden")
    }
  })

  // Handle product search
  waterProductSearchInput.addEventListener("input", () => {
    const searchTerm = waterProductSearchInput.value.toLowerCase()
    const filteredProducts = WATER_TREATMENT_PRODUCTS.filter((product) =>
      product.name.toLowerCase().includes(searchTerm),
    )

    renderProductSearchResults(filteredProducts, waterProductSearchResults, handleWaterProductSelect)
  })

  // Toggle presets panel
  waterPresetsBtn.addEventListener("click", () => {
    if (waterPresetsPanel.classList.contains("hidden")) {
      waterPresetsPanel.classList.remove("hidden")
      waterProductSearchPanel.classList.add("hidden")
      loadPresets("gardenerWaterPresets", waterPresetsList, handleWaterPresetSelect)
    } else {
      waterPresetsPanel.classList.add("hidden")
    }
  })

  // Save preset
  saveWaterPresetBtn.addEventListener("click", () => {
    saveWaterPreset()
  })

  // Calculate button
  calculateWaterBtn.addEventListener("click", () => {
    calculateWaterDosage()
  })

  // Debug trigger
  waterDebugTrigger.addEventListener("click", () => {
    waterDebugContent.classList.toggle("hidden")
    waterDebugTrigger.querySelector(".icon").textContent = waterDebugContent.classList.contains("hidden") ? "▼" : "▲"
  })

  // Copy debug info
  copyWaterDebugBtn.addEventListener("click", () => {
    const debugText = waterDebugInfo.textContent
    navigator.clipboard.writeText(debugText)
    alert("Debug information copied to clipboard")
  })

  // Add event listener for water product dropdown
  if (waterProductDropdown) {
    waterProductDropdown.addEventListener("change", () => {
      const selectedProductId = waterProductDropdown.value
      if (selectedProductId) {
        const product = WATER_TREATMENT_PRODUCTS.find((p) => p.id === selectedProductId)
        if (product) {
          handleWaterProductSelect(product)
        }
      }
    })
  }
}

// Initialize accordion
function initAccordion() {
  accordionTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const accordionItem = trigger.parentElement
      accordionItem.classList.toggle("active")
    })
  })
}

// Update ratio labels based on measurement type and water unit
function updateRatioLabels() {
  const measurementType = document.querySelector('input[name="measurement-type"]:checked').value
  const waterUnit = document.getElementById("water-unit").value
  const waterUnit2 = document.getElementById("water-unit-2").value
  const targetUnit = document.getElementById("target-unit").value

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

  ratioLabel.textContent = `${unitText} per ${waterUnitText}`
  ratioLabel2.textContent = `${unitText} per ${targetUnitText}`
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

  // Set product amount and unit
  document.getElementById("product-amount").value = product.defaultDosage
  document.getElementById("product-unit").value = product.defaultDosageUnit

  // Set water amount and unit
  document.getElementById("water-amount").value = product.defaultWaterAmount
  document.getElementById("water-unit").value = product.defaultWaterUnit

  // Set ratio
  document.getElementById("ratio").value = product.defaultDosage

  // Set water amount for water to product mode
  document.getElementById("water-amount-2").value = product.defaultWaterAmount
  document.getElementById("water-unit-2").value = product.defaultWaterUnit

  // Show product instructions
  instructionsText.textContent = product.instructions
  productInstructions.classList.remove("hidden")

  // Hide search panel
  productSearchPanel.classList.add("hidden")

  // Update ratio labels
  updateRatioLabels()
}

// Handle preset selection
function handlePresetSelect(preset) {
  // Set product name
  productNameInput.value = preset.name

  // Set product type
  productTypeSelect.value = preset.type
  productTypeHint.textContent = PRODUCT_TYPE_HINTS[preset.type] || ""

  // Set measurement type
  document.querySelector(`input[name="measurement-type"][value="${preset.measurementType}"]`).checked = true
  if (preset.measurementType === "cap") {
    capSizeGroup.classList.remove("hidden")
    capSizeInput.value = preset.capSize || 10
  } else {
    capSizeGroup.classList.add("hidden")
  }

  // Set has scoop
  document.querySelector(`input[name="has-scoop"][value="${preset.hasScoopMeasure ? "yes" : "no"}"]`).checked = true
  if (preset.hasScoopMeasure) {
  }

  // Set has scoop
  document.querySelector(`input[name="has-scoop"][value="${preset.hasScoopMeasure ? "yes" : "no"}"]`).checked = true
  if (preset.hasScoopMeasure) {
    scoopSizeGroup.classList.remove("hidden")
    document.getElementById("scoop-size").value = preset.scoopSize
    document.getElementById("scoop-unit").value = preset.scoopUnit
  } else {
    scoopSizeGroup.classList.add("hidden")
  }

  // Set product amount and unit
  document.getElementById("product-amount").value = preset.productAmount
  document.getElementById("product-unit").value = preset.productUnit

  // Set water amount and unit
  document.getElementById("water-amount").value = preset.waterAmount
  document.getElementById("water-unit").value = preset.waterUnit

  // Set ratio
  document.getElementById("ratio").value = preset.productAmount

  // Set water amount for water to product mode
  document.getElementById("water-amount-2").value = preset.waterAmount
  document.getElementById("water-unit-2").value = preset.waterUnit

  // Hide presets panel
  presetsPanel.classList.add("hidden")

  // Update ratio labels
  updateRatioLabels()
}

// Handle area product selection
function handleAreaProductSelect(product) {
  // Set product name
  areaProductNameInput.value = product.name

  // Set product type
  areaProductTypeSelect.value = product.type
  areaProductTypeHint.textContent = PRODUCT_TYPE_HINTS[product.type] || ""

  // Set application rate and units
  applicationRateInput.value = product.defaultDosage
  rateUnitSelect.value = product.defaultDosageUnit
  rateAreaUnitSelect.value = product.defaultWaterUnit

  // Show product instructions
  areaInstructionsText.textContent = product.instructions
  areaProductInstructions.classList.remove("hidden")

  // Hide search panel
  areaProductSearchPanel.classList.add("hidden")
}

// Handle area preset selection
function handleAreaPresetSelect(preset) {
  // Set product name
  areaProductNameInput.value = preset.name

  // Set product type
  areaProductTypeSelect.value = preset.type
  areaProductTypeHint.textContent = PRODUCT_TYPE_HINTS[preset.type] || ""

  // Set application rate and units
  applicationRateInput.value = preset.applicationRate
  rateUnitSelect.value = preset.rateUnit
  rateAreaUnitSelect.value = preset.rateAreaUnit

  // Hide presets panel
  areaPresetsPanel.classList.add("hidden")
}

// Handle water product selection
function handleWaterProductSelect(product) {
  // Set product name
  waterProductNameInput.value = product.name

  // Set product type
  waterProductTypeSelect.value = product.type
  waterProductTypeHint.textContent = PRODUCT_TYPE_HINTS[product.type] || ""

  // Set dosage amount and units
  dosageAmountInput.value = product.defaultDosage
  dosageUnitSelect.value = product.defaultDosageUnit

  // Set water amount and unit
  waterVolumeInput.value = product.defaultWaterAmount
  waterVolumeUnitSelect.value = product.defaultWaterUnit

  // Show product instructions
  waterInstructionsText.textContent = product.instructions
  waterProductInstructions.classList.remove("hidden")

  // Hide search panel
  waterProductSearchPanel.classList.add("hidden")
}

// Handle water preset selection
function handleWaterPresetSelect(preset) {
  // Set product name
  waterProductNameInput.value = preset.name

  // Set product type
  waterProductTypeSelect.value = preset.type
  waterProductTypeHint.textContent = PRODUCT_TYPE_HINTS[preset.type] || ""

  // Set dosage amount and units
  dosageAmountInput.value = preset.dosageAmount
  dosageUnitSelect.value = preset.dosageUnit

  // Set water amount and unit
  waterVolumeInput.value = preset.waterAmount
  waterVolumeUnitSelect.value = preset.waterVolumeUnit

  // Hide presets panel
  waterPresetsPanel.classList.add("hidden")
}

// Load presets from localStorage
function loadPresets(storageKey, listElement, selectHandler) {
  const presets = JSON.parse(localStorage.getItem(storageKey) || "[]")

  if (presets.length === 0) {
    listElement.innerHTML = '<div class="p-4 text-center">No saved presets</div>'
    return
  }

  let html = "<ul>"
  presets.forEach((preset) => {
    html += `
          <li data-id="${preset.id}">
              <div class="font-medium">${preset.name}</div>
              <div class="hint">${preset.productAmount || preset.applicationRate || preset.dosageAmount} ${preset.productUnit || preset.rateUnit || preset.dosageUnit} per ${preset.waterAmount || "1"} ${preset.waterUnit || preset.rateAreaUnit || "l"}</div>
          </li>
      `
  })
  html += "</ul>"

  listElement.innerHTML = html

  // Add click event listeners
  listElement.querySelectorAll("li").forEach((li) => {
    li.addEventListener("click", () => {
      const presetId = li.getAttribute("data-id")
      const preset = presets.find((p) => p.id === presetId)
      if (preset) {
        selectHandler(preset)
      }
    })
  })
}

// Save preset to localStorage
function savePreset(storageKey) {
  const productName = productNameInput.value.trim()

  if (!productName) {
    alert("Please enter a product name")
    return
  }

  const measurementType = document.querySelector('input[name="measurement-type"]:checked').value
  const hasScoopMeasure = document.querySelector('input[name="has-scoop"]:checked').value === "yes"

  const preset = {
    id: Date.now().toString(),
    name: productName,
    type: productTypeSelect.value,
    measurementType,
    productAmount: document.getElementById("product-amount").value,
    productUnit: document.getElementById("product-unit").value,
    waterAmount: document.getElementById("water-amount").value,
    waterUnit: document.getElementById("water-unit").value,
    hasScoopMeasure,
  }

  if (hasScoopMeasure) {
    preset.scoopSize = document.getElementById("scoop-size").value
    preset.scoopUnit = document.getElementById("scoop-unit").value
  }

  if (measurementType === "cap") {
    preset.capSize = capSizeInput.value
  }

  // Get existing presets
  const existingPresets = JSON.parse(localStorage.getItem(storageKey) || "[]")

  // Add new preset
  existingPresets.push(preset)

  // Save to localStorage
  localStorage.setItem(storageKey, JSON.stringify(existingPresets))

  alert(`Preset "${productName}" saved successfully`)
}

// Save area preset to localStorage
function saveAreaPreset() {
  const productName = areaProductNameInput.value.trim()

  if (!productName) {
    alert("Please enter a product name")
    return
  }

  const preset = {
    id: Date.now().toString(),
    name: productName,
    type: areaProductTypeSelect.value,
    applicationRate: applicationRateInput.value,
    rateUnit: rateUnitSelect.value,
    rateAreaUnit: rateAreaUnitSelect.value,
  }

  // Get existing presets
  const existingPresets = JSON.parse(localStorage.getItem("gardenerAreaPresets") || "[]")

  // Add new preset
  existingPresets.push(preset)

  // Save to localStorage
  localStorage.setItem("gardenerAreaPresets", JSON.stringify(existingPresets))

  alert(`Preset "${productName}" saved successfully`)
}

// Save water preset to localStorage
function saveWaterPreset() {
  const productName = waterProductNameInput.value.trim()

  if (!productName) {
    alert("Please enter a product name")
    return
  }

  const preset = {
    id: Date.now().toString(),
    name: productName,
    type: waterProductTypeSelect.value,
    dosageAmount: dosageAmountInput.value,
    dosageUnit: dosageUnitSelect.value,
    waterAmount: waterVolumeInput.value,
    waterVolumeUnit: waterVolumeUnitSelect.value,
  }

  // Get existing presets
  const existingPresets = JSON.parse(localStorage.getItem("gardenerWaterPresets") || "[]")

  // Add new preset
  existingPresets.push(preset)

  // Save to localStorage
  localStorage.setItem("gardenerWaterPresets", JSON.stringify(existingPresets))

  alert(`Preset "${productName}" saved successfully`)
}

// Calculate product dosage
function calculateProductDosage() {
  // Get calculation mode
  const calculationMode = document.querySelector('input[name="calculation-mode"]:checked').value

  // Get measurement type
  const measurementType = document.querySelector('input[name="measurement-type"]:checked').value

  // Get has scoop
  const hasScoopMeasure = document.querySelector('input[name="has-scoop"]:checked').value === "yes"

  // Get cap size
  const capSize = Number.parseFloat(capSizeInput.value) || 10

  // Initialize debug info
  const debug = {
    calculationMode,
    measurementType,
    hasScoopMeasure,
    capSize,
  }

  // Variables for calculation
  let productQty = 0
  let waterQty = 0
  let ratio = 0
  const wateringCanDosage = ""

  // Get values based on calculation mode
  if (calculationMode === "product_to_water") {
    const productAmount = Number.parseFloat(document.getElementById("product-amount").value)
    const productUnit = document.getElementById("product-unit").value
    const waterAmount = Number.parseFloat(document.getElementById("water-amount").value) || 1
    const waterUnit = document.getElementById("water-unit").value

    if (isNaN(productAmount)) {
      alert("Please enter a valid product amount")
      return
    }

    debug.productAmount = productAmount
    debug.productUnit = productUnit
    debug.waterAmount = waterAmount
    debug.waterUnit = waterUnit

    productQty = productAmount
    waterQty = waterAmount
    ratio = productQty / waterQty

    debug.productQty = productQty
    debug.waterQty = waterQty
    debug.ratio = ratio
  } else if (calculationMode === "water_to_product") {
    const waterAmount = Number.parseFloat(document.getElementById("water-amount-2").value)
    const waterUnit = document.getElementById("water-unit-2").value
    const ratioValue = Number.parseFloat(document.getElementById("ratio").value)

    if (isNaN(waterAmount) || isNaN(ratioValue)) {
      alert("Please enter valid water amount and ratio")
      return
    }

    debug.waterAmount = waterAmount
    debug.waterUnit = waterUnit
    debug.ratioValue = ratioValue

    waterQty = waterAmount
    ratio = ratioValue
    productQty = ratio * waterQty

    debug.waterQty = waterQty
    debug.ratio = ratio
    debug.productQty = productQty
  } else if (calculationMode === "ratio_based") {
    const ratioValue = Number.parseFloat(document.getElementById("ratio-2").value)
    const targetAmount = Number.parseFloat(document.getElementById("target-amount").value)
    const targetUnit = document.getElementById("target-unit").value

    if (isNaN(ratioValue) || isNaN(targetAmount)) {
      alert("Please enter valid ratio and target amount")
      return
    }

    debug.ratioValue = ratioValue
    debug.targetAmount = targetAmount
    debug.targetUnit = targetUnit

    ratio = ratioValue
    waterQty = targetAmount
    productQty = ratio * waterQty

    debug.ratio = ratio
    debug.waterQty = waterQty
    debug.productQty = productQty
  }

  // Get units
  const productUnit =
    calculationMode === "product_to_water"
      ? document.getElementById("product-unit").value
      : measurementType === "weight"
        ? "g"
        : measurementType === "volume"
          ? "ml"
          : "cap"

  const waterUnit =
    calculationMode === "product_to_water"
      ? document.getElementById("water-unit").value
      : calculationMode === "water_to_product"
        ? document.getElementById("water-unit-2").value
        : document.getElementById("target-unit").value

  debug.productUnit = productUnit
  debug.waterUnit = waterUnit

  // Convert to base units
  let productBaseQty = productQty
  if (measurementType === "weight" && WEIGHT_CONVERSIONS[productUnit]) {
    productBaseQty = productQty * WEIGHT_CONVERSIONS[productUnit]
  } else if ((measurementType === "volume" || measurementType === "cap") && VOLUME_CONVERSIONS[productUnit]) {
    productBaseQty = productQty * VOLUME_CONVERSIONS[productUnit]
  }

  let waterBaseQty = waterQty
  if (VOLUME_CONVERSIONS[waterUnit]) {
    waterBaseQty = waterQty * VOLUME_CONVERSIONS[waterUnit]
  }

  debug.productBaseQty = productBaseQty
  debug.waterBaseQty = waterBaseQty

  // Calculate metric dosage (ml or g per liter)
  const metricRatio = productBaseQty / (waterBaseQty / 1000)
  debug.metricRatio = metricRatio

  // Calculate imperial dosage (oz or fl oz per gallon)
  let imperialRatio
  if (measurementType === "weight") {
    // Convert g/l to oz/gal
    imperialRatio = productBaseQty / 28.3495 / (waterBaseQty / 4546.09)
  } else {
    // Convert ml/l to fl oz/gal
    imperialRatio = productBaseQty / 29.5735 / (waterBaseQty / 4546.09)
  }
  debug.imperialRatio = imperialRatio

  // Calculate scoop dosage if applicable
  let scoopDosageText = ""
  if (hasScoopMeasure) {
    const scoopSize = Number.parseFloat(document.getElementById("scoop-size").value)
    const scoopUnit = document.getElementById("scoop-unit").value

    if (!isNaN(scoopSize)) {
      let scoopBaseQty = scoopSize

      if (WEIGHT_CONVERSIONS[scoopUnit]) {
        scoopBaseQty = scoopSize * WEIGHT_CONVERSIONS[scoopUnit]
      } else if (VOLUME_CONVERSIONS[scoopUnit]) {
        scoopBaseQty = scoopSize * VOLUME_CONVERSIONS[scoopUnit]
      }

      const scoopsNeeded = productBaseQty / scoopBaseQty
      scoopDosageText = `${scoopsNeeded.toFixed(2)} scoops per ${waterQty} ${waterUnit}`

      debug.scoopSize = scoopSize
      debug.scoopUnit = scoopUnit
      debug.scoopBaseQty = scoopBaseQty
      debug.scoopsNeeded = scoopsNeeded
    }
  }

  // Calculate cap dosage if applicable
  let capDosageText = ""
  if (measurementType === "volume" || measurementType === "cap") {
    const mlAmount = productBaseQty
    const capsNeeded = mlAmount / capSize

    debug.mlAmount = mlAmount
    debug.capsNeeded = capsNeeded

    if (capsNeeded < 0.25) {
      capDosageText = `${(capsNeeded * capSize).toFixed(1)} ml (a few drops)`
    } else if (capsNeeded < 0.4) {
      capDosageText = `${(capsNeeded * capSize).toFixed(1)} ml (about 1/4 cap)`
    } else if (capsNeeded < 0.6) {
      capDosageText = `${(capsNeeded * capSize).toFixed(1)} ml (about 1/2 cap)`
    } else if (capsNeeded < 0.85) {
      capDosageText = `${(capsNeeded * capSize).toFixed(1)} ml (about 3/4 cap)`
    } else if (capsNeeded < 1.25) {
      capDosageText = `${(capsNeeded * capSize).toFixed(1)} ml (about 1 full cap)`
    } else {
      const wholeCaps = Math.floor(capsNeeded)
      const fraction = capsNeeded - wholeCaps
      let fractionText = ""

      if (fraction < 0.125) fractionText = ""
      else if (fraction < 0.375) fractionText = " and 1/4"
      else if (fraction < 0.625) fractionText = " and 1/2"
      else if (fraction < 0.875) fractionText = " and 3/4"
      else fractionText = " and 1"

      capDosageText = `${wholeCaps}${fractionText} caps (${(capsNeeded * capSize).toFixed(1)} ml)`
    }
  }

  // Calculate alternative dosage
  const waterUnitLabel = waterUnit === "l" ? "gallon" : "liter"
  const alternativeWaterAmount = waterUnit === "l" ? 4.54609 : 1
  const alternativeRatio = productBaseQty / (alternativeWaterAmount * 1000)

  debug.waterUnitLabel = waterUnitLabel
  debug.alternativeWaterAmount = alternativeWaterAmount
  debug.alternativeRatio = alternativeRatio

  let alternativeDosageText
  if (measurementType === "weight") {
    alternativeDosageText = `${alternativeRatio.toFixed(2)}g per ${waterUnitLabel}`
  } else {
    alternativeDosageText = `${alternativeRatio.toFixed(2)}ml per ${waterUnitLabel}`
  }

  // Format results based on calculation mode
  let metricDosageText, imperialDosageText

  if (calculationMode === "product_to_water") {
    metricDosageText = `${metricRatio.toFixed(2)} ${measurementType === "weight" ? "g" : "ml"} per liter`
    imperialDosageText = `${imperialRatio.toFixed(2)} ${measurementType === "weight" ? "oz" : "fl oz"} per gallon`
  } else if (calculationMode === "water_to_product") {
    metricDosageText = `${productBaseQty.toFixed(2)} ${measurementType === "weight" ? "g" : "ml"} for ${waterQty} ${waterUnit}`
    imperialDosageText = `${(productBaseQty / (measurementType === "weight" ? 28.3495 : 29.5735)).toFixed(2)} ${measurementType === "weight" ? "oz" : "fl oz"} for ${(waterBaseQty / 4546.09).toFixed(2)} gallons`
  } else if (calculationMode === "ratio_based") {
    metricDosageText = `${productBaseQty.toFixed(2)} ${measurementType === "weight" ? "g" : "ml"} product with ${waterQty} ${waterUnit} water`
    imperialDosageText = `${(productBaseQty / (measurementType === "weight" ? 28.3495 : 29.5735)).toFixed(2)} ${measurementType === "weight" ? "oz" : "fl oz"} product with ${(waterBaseQty / 4546.09).toFixed(2)} gallons water`
  }

  // Update results
  metricResult.textContent = metricDosageText
  imperialResult.textContent = imperialDosageText

  if (capDosageText) {
    capResult.textContent = capDosageText
    capResultCard.classList.remove("hidden")
  } else {
    capResultCard.classList.add("hidden")
  }

  if (scoopDosageText) {
    scoopResult.textContent = scoopDosageText
    scoopResultCard.classList.remove("hidden")
  } else {
    scoopResultCard.classList.add("hidden")
  }

  alternativeResult.textContent = alternativeDosageText

  // Update watering can helper if applicable
  const productNameValue = productNameInput.value
  if (calculationMode === "water_to_product" && productNameValue) {
    wateringCanTitle.textContent = `For your ${waterQty} ${waterUnit} watering can:`

    // Get the manufacturer's measurement unit (cap, scoop, etc.)
    let manufacturerText = ""

    if (measurementType === "cap") {
      // For cap measurements, show both ml and caps
      const capsNeeded = productBaseQty / capSize

      // Format the cap measurement in a user-friendly way
      let capText = ""
      if (capsNeeded < 0.25) {
        capText = "a few drops"
      } else if (capsNeeded < 0.4) {
        capText = "1/4 cap"
      } else if (capsNeeded < 0.6) {
        capText = "1/2 cap"
      } else if (capsNeeded < 0.85) {
        capText = "3/4 cap"
      } else if (capsNeeded < 1.25) {
        capText = "1 full cap"
      } else {
        const wholeCaps = Math.floor(capsNeeded)
        const fraction = capsNeeded - wholeCaps
        let fractionText = ""

        if (fraction < 0.125) fractionText = ""
        else if (fraction < 0.375) fractionText = " and 1/4"
        else if (fraction < 0.625) fractionText = " and 1/2"
        else if (fraction < 0.875) fractionText = " and 3/4"
        else fractionText = " and 1"

        capText = `${wholeCaps}${fractionText} caps`
      }

      manufacturerText = ` (${capText})`
    } else if (hasScoopMeasure) {
      // For scoop measurements, show both ml/g and scoops
      const scoopSize = Number.parseFloat(document.getElementById("scoop-size").value)
      const scoopUnit = document.getElementById("scoop-unit").value

      if (!isNaN(scoopSize)) {
        let scoopBaseQty = scoopSize

        if (WEIGHT_CONVERSIONS[scoopUnit]) {
          scoopBaseQty = scoopSize * WEIGHT_CONVERSIONS[scoopUnit]
        } else if (VOLUME_CONVERSIONS[scoopUnit]) {
          scoopBaseQty = scoopSize * VOLUME_CONVERSIONS[scoopUnit]
        }

        const scoopsNeeded = productBaseQty / scoopBaseQty

        // Format the scoop measurement
        let scoopText = ""
        if (scoopsNeeded < 0.25) {
          scoopText = "a small pinch"
        } else if (scoopsNeeded < 1) {
          const fraction = Math.round(scoopsNeeded * 4) / 4
          if (fraction === 0.25) scoopText = "1/4 scoop"
          else if (fraction === 0.5) scoopText = "1/2 scoop"
          else if (fraction === 0.75) scoopText = "3/4 scoop"
          else scoopText = `${fraction} scoops`
        } else {
          const wholeScoops = Math.floor(scoopsNeeded)
          const fraction = scoopsNeeded - wholeScoops
          let fractionText = ""

          if (fraction < 0.125) fractionText = ""
          else if (fraction < 0.375) fractionText = " and 1/4"
          else if (fraction < 0.625) fractionText = " and 1/2"
          else if (fraction < 0.875) fractionText = " and 3/4"
          else fractionText = " and 1"

          scoopText = `${wholeScoops}${fractionText} scoops`
        }

        manufacturerText = ` (${scoopText})`
      }
    }

    // Update the watering can result with both precise measurement and manufacturer's unit
    wateringCanResult.textContent = `Add ${productBaseQty.toFixed(1)} ${measurementType === "weight" ? "g" : "ml"}${manufacturerText} of ${productNameValue}`

    wateringCanInfo.textContent = `Based on the ratio of ${ratio.toFixed(2)} ${measurementType === "weight" ? "g" : measurementType === "cap" ? "cap" : "ml"} per ${waterUnit === "l" ? "liter" : "gallon"}`

    wateringCanSection.classList.remove("hidden")
  } else {
    wateringCanSection.classList.add("hidden")
  }

  // Update debug info
  debugInfo.textContent = JSON.stringify(debug, null, 2)
}

// Calculate area
function calculateArea() {
  const areaShape = document.querySelector('input[name="area-shape"]:checked').value
  const areaUnit = areaUnitSelect.value

  // Initialize debug info
  const debug = {
    areaShape,
    areaUnit,
  }

  let area = 0

  if (areaShape === "rectangle") {
    const length = Number.parseFloat(lengthInput.value)
    const width = Number.parseFloat(widthInput.value)

    if (isNaN(length) || isNaN(width)) {
      calculatedAreaDiv.classList.add("hidden")
      return
    }

    debug.length = length
    debug.width = width

    area = length * width
  } else if (areaShape === "circle") {
    const diameter = Number.parseFloat(diameterInput.value)

    if (isNaN(diameter)) {
      calculatedAreaDiv.classList.add("hidden")
      return
    }

    debug.diameter = diameter

    const radius = diameter / 2
    area = Math.PI * radius * radius
  }

  debug.area = area

  // Convert to square meters
  const areaInSqM = area * AREA_CONVERSIONS[areaUnit]
  debug.areaInSqM = areaInSqM

  // Update UI
  areaResultText.textContent = `${areaInSqM.toFixed(2)} square meters`
  calculatedAreaDiv.classList.remove("hidden")

  // Update debug info
  areaDebugInfo.textContent = JSON.stringify(debug, null, 2)
}

// Calculate area application
function calculateAreaApplication() {
  // Get area
  const areaInSqM = Number.parseFloat(areaResultText.textContent)

  // Get application rate
  const applicationRate = Number.parseFloat(applicationRateInput.value)
  const rateUnit = rateUnitSelect.value
  const rateAreaUnit = rateAreaUnitSelect.value

  if (isNaN(applicationRate)) {
    alert("Please enter a valid application rate")
    return
  }

  // Initialize debug info
  const debug = {
    areaInSqM,
    applicationRate,
    rateUnit,
    rateAreaUnit,
  }

  // Convert rate to base unit per sq meter
  let rateBasePerSqM = applicationRate

  // First convert the product amount to base units (g or ml)
  if (WEIGHT_CONVERSIONS[rateUnit]) {
    rateBasePerSqM = applicationRate * WEIGHT_CONVERSIONS[rateUnit]
  } else if (VOLUME_CONVERSIONS[rateUnit]) {
    rateBasePerSqM = applicationRate * VOLUME_CONVERSIONS[rateUnit]
  }

  // Then adjust for the area unit in the rate
  rateBasePerSqM = rateBasePerSqM / AREA_CONVERSIONS[rateAreaUnit]

  debug.rateBasePerSqM = rateBasePerSqM

  // Calculate total amount needed
  const totalBaseAmount = areaInSqM * rateBasePerSqM
  debug.totalBaseAmount = totalBaseAmount

  // Format total amount in appropriate units
  let totalAmount = ""
  let alternativeAmount = ""

  if (WEIGHT_CONVERSIONS[rateUnit]) {
    // Weight product
    if (totalBaseAmount >= 1000) {
      totalAmount = `${(totalBaseAmount / 1000).toFixed(2)} kg`
    } else {
      totalAmount = `${totalBaseAmount.toFixed(2)} g`
    }

    // Alternative in imperial
    alternativeAmount = `${(totalBaseAmount / WEIGHT_CONVERSIONS["lb"]).toFixed(2)} lb`
  } else {
    // Volume product
    if (totalBaseAmount >= 1000) {
      totalAmount = `${(totalBaseAmount / 1000).toFixed(2)} l`
    } else {
      totalAmount = `${totalBaseAmount.toFixed(2)} ml`
    }

    // Alternative in imperial
    alternativeAmount = `${(totalBaseAmount / VOLUME_CONVERSIONS["gal_uk"]).toFixed(2)} gal (UK)`
  }

  // Calculate metric rate (g or ml per sq meter)
  const metricRate = `${rateBasePerSqM.toFixed(2)} ${rateUnit === "g" || rateUnit === "kg" ? "g" : "ml"} per sq meter`

  // Calculate imperial rate (oz or fl oz per sq yard)
  let imperialRate = ""
  if (WEIGHT_CONVERSIONS[rateUnit]) {
    // Convert g/sq m to oz/sq yd
    const ozPerSqYd = (rateBasePerSqM / 28.3495) * 0.836127
    imperialRate = `${ozPerSqYd.toFixed(2)} oz per sq yard`
  } else {
    // Convert ml/sq m to fl oz/sq yd
    const flOzPerSqYd = (rateBasePerSqM / 29.5735) * 0.836127
    imperialRate = `${flOzPerSqYd.toFixed(2)} fl oz per sq yard`
  }

  // Update results
  totalAmountResult.textContent = totalAmount
  alternativeAmountResult.textContent = alternativeAmount
  metricRateResult.textContent = metricRate
  imperialRateResult.textContent = imperialRate

  // Update debug info
  debug.totalAmount = totalAmount
  debug.alternativeAmount = alternativeAmount
  debug.metricRate = metricRate
  debug.imperialRate = imperialRate

  areaDebugInfo.textContent = JSON.stringify(debug, null, 2)
}

// Calculate volume
function calculateVolume() {
  const containerShape = document.querySelector('input[name="container-shape"]:checked').value
  const dimensionUnit = dimensionUnitSelect.value

  // Initialize debug info
  const debug = {
    containerShape,
    dimensionUnit,
  }

  // Convert all dimensions to meters first
  const conversionFactor = LENGTH_CONVERSIONS[dimensionUnit]

  let volume = 0

  if (containerShape === "rectangular") {
    const length = Number.parseFloat(containerLengthInput.value)
    const width = Number.parseFloat(containerWidthInput.value)
    const height = Number.parseFloat(containerHeightInput.value)

    if (isNaN(length) || isNaN(width) || isNaN(height)) {
      calculatedVolumeDiv.classList.add("hidden")
      return
    }

    debug.length = length
    debug.width = width
    debug.height = height

    const lengthM = length * conversionFactor
    const widthM = width * conversionFactor
    const heightM = height * conversionFactor

    debug.lengthM = lengthM
    debug.widthM = widthM
    debug.heightM = heightM

    volume = lengthM * widthM * heightM
  } else if (containerShape === "circular") {
    const diameter = Number.parseFloat(containerDiameterInput.value)
    const depth = Number.parseFloat(containerDepthInput.value)

    if (isNaN(diameter) || isNaN(depth)) {
      calculatedVolumeDiv.classList.add("hidden")
      return
    }

    debug.diameter = diameter
    debug.depth = depth

    const diameterM = diameter * conversionFactor
    const depthM = depth * conversionFactor
    const radius = diameterM / 2

    debug.diameterM = diameterM
    debug.depthM = depthM
    debug.radius = radius

    volume = Math.PI * radius * radius * depthM
  }

  debug.volumeCubicMeters = volume

  // Volume in cubic meters = volume in liters
  const volumeInLiters = volume * 1000
  debug.volumeInLiters = volumeInLiters

  // Update UI
  volumeResultText.textContent = `${volumeInLiters.toFixed(2)} liters (${(volumeInLiters / 1000).toFixed(2)} cubic meters)`
  volumeConversionText.textContent = `${(volumeInLiters / VOLUME_CONVERSIONS.gal_uk).toFixed(2)} UK gallons`
  calculatedVolumeDiv.classList.remove("hidden")

  // Update debug info
  waterDebugInfo.textContent = JSON.stringify(debug, null, 2)
}

// Calculate water dosage
function calculateWaterDosage() {
  // Get water volume
  let waterVolumeInLiters = 0

  if (calculatedVolumeDiv.classList.contains("hidden")) {
    // Use manually entered water volume
    const waterVolume = Number.parseFloat(waterVolumeInput.value)
    const waterVolumeUnit = waterVolumeUnitSelect.value

    if (isNaN(waterVolume)) {
      alert("Please enter a valid water volume")
      return
    }

    waterVolumeInLiters = waterVolume * (waterVolumeUnit === "l" ? 1 : VOLUME_CONVERSIONS[waterVolumeUnit] / 1000)
  } else {
    // Use calculated water volume
    waterVolumeInLiters = Number.parseFloat(volumeResultText.textContent) || 0
  }

  // Get dosage amount
  const dosageAmount = Number.parseFloat(dosageAmountInput.value)
  const dosageUnit = dosageUnitSelect.value

  if (isNaN(dosageAmount)) {
    alert("Please enter a valid dosage amount")
    return
  }

  // Initialize debug info
  const debug = {
    waterVolumeInLiters,
    dosageAmount,
    dosageUnit,
  }

  // Calculate dosage per 1000 liters (standard metric reference)
  const dosagePer1000L = dosageAmount
  debug.dosagePer1000L = dosagePer1000L

  // Calculate total amount needed
  const totalDosage = (dosagePer1000L * waterVolumeInLiters) / 1000
  debug.totalDosage = totalDosage

  // Format results
  let totalAmount = ""
  if (dosageUnit === "ml" || dosageUnit === "g") {
    if (totalDosage >= 1000) {
      totalAmount = `${(totalDosage / 1000).toFixed(2)} ${dosageUnit === "ml" ? "l" : "kg"}`
    } else {
      totalAmount = `${totalDosage.toFixed(2)} ${dosageUnit}`
    }
  } else {
    totalAmount = `${totalDosage.toFixed(2)} ${dosageUnit}`
  }

  // Calculate metric dosage (ml or g per liter)
  const metricDosage = `${(dosagePer1000L / 1000).toFixed(2)} ${dosageUnit} per liter`

  // Calculate imperial dosage (fl oz or oz per gallon)
  let imperialDosage = ""
  if (dosageUnit === "ml" || dosageUnit === "tsp" || dosageUnit === "tbsp") {
    // Convert ml/l to fl oz/gal
    const flOzPerGal = (dosagePer1000L / 1000) * (4.54609 / 29.5735)
    imperialDosage = `${flOzPerGal.toFixed(2)} fl oz per gallon`
    debug.flOzPerGal = flOzPerGal
  } else {
    // Convert g/l to oz/gal
    const ozPerGal = (dosagePer1000L / 1000) * (4.54609 / 28.3495)
    imperialDosage = `${ozPerGal.toFixed(2)} oz per gallon`
    debug.ozPerGal = ozPerGal
  }

  // Calculate alternative dosage (for different water volumes)
  const alternativeDosage = `${(dosagePer1000L / 10).toFixed(2)} ${dosageUnit} per 100 liters`

  // Update results
  waterTotalAmountResult.textContent = totalAmount
  waterMetricDosageResult.textContent = metricDosage
  waterImperialDosageResult.textContent = imperialDosage
  waterAlternativeDosageResult.textContent = alternativeDosage

  // Update debug info
  debug.totalAmount = totalAmount
  debug.metricDosage = metricDosage
  debug.imperialDosage = imperialDosage
  debug.alternativeDosage = alternativeDosage

  waterDebugInfo.textContent = JSON.stringify(debug, null, 2)
}
