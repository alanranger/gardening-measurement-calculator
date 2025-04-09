// Product Database
const COMMON_PRODUCTS = [
  // Liquid Fertilizers
  {
    id: "miracle-gro-all-purpose",
    name: "Miracle-Gro All Purpose Liquid Plant Food",
    type: "liquid_fertilizer",
    applicationMethod: "water_mixing",
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
    id: "baby-bio-houseplant",
    name: "Baby Bio Houseplant Food",
    type: "liquid_fertilizer",
    applicationMethod: "water_mixing",
    measurementType: "cap",
    defaultDosage: 0.5,
    defaultDosageUnit: "cap",
    defaultWaterAmount: 1,
    defaultWaterUnit: "l",
    instructions: "Add 5-10 drops to 500ml of water. Apply every watering during growing season.",
    capSize: {
      fullCapML: 5,
      markings: { half: 2.5, full: 5 },
    },
  },
  {
    id: "tomorite",
    name: "Levington Tomorite Tomato Food",
    type: "liquid_fertilizer",
    applicationMethod: "water_mixing",
    measurementType: "volume",
    defaultDosage: 20,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 4.5,
    defaultWaterUnit: "l",
    instructions: "Add 20ml to 4.5 litres (1 gallon) of water. Apply twice a week when plants are in flower/fruit.",
  },
  {
    id: "phostrogen-liquid",
    name: "Phostrogen Liquid Plant Food",
    type: "liquid_fertilizer",
    applicationMethod: "water_mixing",
    measurementType: "volume",
    defaultDosage: 10,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 4.5,
    defaultWaterUnit: "l",
    instructions: "Add 10ml to 4.5 litres (1 gallon) of water. Apply weekly during growing season.",
  },
  {
    id: "westland-liquid-seaweed",
    name: "Westland Liquid Seaweed Plant Food",
    type: "liquid_fertilizer",
    applicationMethod: "water_mixing",
    measurementType: "volume",
    defaultDosage: 20,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 4.5,
    defaultWaterUnit: "l",
    instructions: "Add 20ml to 4.5 litres (1 gallon) of water. Apply every 2 weeks.",
  },
  {
    id: "chilli-focus",
    name: "Growth Technology Chilli Focus",
    type: "liquid_fertilizer",
    applicationMethod: "water_mixing",
    measurementType: "volume",
    defaultDosage: 5,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1,
    defaultWaterUnit: "l",
    instructions: "Add 5ml per litre of water. Apply with every watering during growing season.",
  },
  {
    id: "miracle-gro-pour-feed",
    name: "Miracle-Gro Pour & Feed Ready-to-Use",
    type: "liquid_fertilizer",
    applicationMethod: "direct_application",
    measurementType: "volume",
    defaultDosage: 1000,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1,
    defaultWaterUnit: "plant",
    instructions: "Pour 1 litre around the base of each plant every 1-2 weeks. No dilution required.",
  },
  {
    id: "maxicrop-seaweed-extract",
    name: "Maxicrop Seaweed Extract",
    type: "liquid_fertilizer",
    applicationMethod: "water_mixing",
    measurementType: "volume",
    defaultDosage: 15,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 4.5,
    defaultWaterUnit: "l",
    instructions: "Add 15ml to 4.5 litres (1 gallon) of water. Apply every 2 weeks during growing season.",
  },
  {
    id: "biobizz-bio-grow",
    name: "BioBizz Bio-Grow Organic Fertilizer",
    type: "liquid_fertilizer",
    applicationMethod: "water_mixing",
    measurementType: "volume",
    defaultDosage: 4,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1,
    defaultWaterUnit: "l",
    instructions: "Add 4ml per litre of water. Apply during vegetative growth phase.",
  },
  {
    id: "biobizz-bio-bloom",
    name: "BioBizz Bio-Bloom Organic Fertilizer",
    type: "liquid_fertilizer",
    applicationMethod: "water_mixing",
    measurementType: "volume",
    defaultDosage: 4,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1,
    defaultWaterUnit: "l",
    instructions: "Add 4ml per litre of water. Apply during flowering and fruiting phase.",
  },
  {
    id: "canna-terra-vega",
    name: "CANNA Terra Vega",
    type: "liquid_fertilizer",
    applicationMethod: "water_mixing",
    measurementType: "volume",
    defaultDosage: 5,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1,
    defaultWaterUnit: "l",
    instructions: "Add 5ml per litre of water. Apply during vegetative growth phase.",
  },
  {
    id: "canna-terra-flores",
    name: "CANNA Terra Flores",
    type: "liquid_fertilizer",
    applicationMethod: "water_mixing",
    measurementType: "volume",
    defaultDosage: 5,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1,
    defaultWaterUnit: "l",
    instructions: "Add 5ml per litre of water. Apply during flowering and fruiting phase.",
  },
  {
    id: "plant-magic-old-timer-grow",
    name: "Plant Magic Old Timer Grow",
    type: "liquid_fertilizer",
    applicationMethod: "water_mixing",
    measurementType: "volume",
    defaultDosage: 4,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1,
    defaultWaterUnit: "l",
    instructions: "Add 4ml per litre of water. Apply during vegetative growth phase.",
  },
  {
    id: "plant-magic-old-timer-bloom",
    name: "Plant Magic Old Timer Bloom",
    type: "liquid_fertilizer",
    applicationMethod: "water_mixing",
    measurementType: "volume",
    defaultDosage: 4,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1,
    defaultWaterUnit: "l",
    instructions: "Add 4ml per litre of water. Apply during flowering and fruiting phase.",
  },
  {
    id: "westland-orchid-feed",
    name: "Westland Orchid Feed",
    type: "liquid_fertilizer",
    applicationMethod: "water_mixing",
    measurementType: "volume",
    defaultDosage: 5,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1,
    defaultWaterUnit: "l",
    instructions: "Add 5ml per litre of water. Apply every 2 weeks during growing season.",
  },
  {
    id: "westland-citrus-feed",
    name: "Westland Citrus Feed",
    type: "liquid_fertilizer",
    applicationMethod: "water_mixing",
    measurementType: "volume",
    defaultDosage: 5,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1,
    defaultWaterUnit: "l",
    instructions: "Add 5ml per litre of water. Apply every 2 weeks during growing season.",
  },

  // Water-Soluble Granular Fertilizers (that are mixed with water)
  {
    id: "miracle-gro-water-soluble",
    name: "Miracle-Gro Water Soluble Plant Food",
    type: "granular_fertilizer",
    applicationMethod: "water_mixing",
    measurementType: "weight",
    defaultDosage: 7,
    defaultDosageUnit: "g",
    defaultWaterAmount: 4.5,
    defaultWaterUnit: "l",
    instructions: "Dissolve 7g (one scoop) in 4.5 litres (1 gallon) of water. Apply every 1-2 weeks.",
    hasScoop: true,
    scoopSize: 7,
    scoopUnit: "g",
  },
  {
    id: "phostrogen-all-purpose",
    name: "Phostrogen All Purpose Plant Food",
    type: "granular_fertilizer",
    applicationMethod: "water_mixing",
    measurementType: "weight",
    defaultDosage: 8,
    defaultDosageUnit: "g",
    defaultWaterAmount: 4.5,
    defaultWaterUnit: "l",
    instructions: "Dissolve 8g (one scoop) in 4.5 litres (1 gallon) of water. Apply every 10-14 days.",
    hasScoop: true,
    scoopSize: 8,
    scoopUnit: "g",
  },
  {
    id: "westland-feed-all",
    name: "Westland Feed All Plant Food",
    type: "granular_fertilizer",
    applicationMethod: "water_mixing",
    measurementType: "weight",
    defaultDosage: 10,
    defaultDosageUnit: "g",
    defaultWaterAmount: 4.5,
    defaultWaterUnit: "l",
    instructions: "Dissolve 10g in 4.5 litres (1 gallon) of water. Apply every 7-14 days.",
  },
  {
    id: "chempak-formula-3",
    name: "Chempak Formula 3 High Potash Feed",
    type: "granular_fertilizer",
    applicationMethod: "water_mixing",
    measurementType: "weight",
    defaultDosage: 8,
    defaultDosageUnit: "g",
    defaultWaterAmount: 4.5,
    defaultWaterUnit: "l",
    instructions: "Dissolve 8g in 4.5 litres (1 gallon) of water. Apply every 10-14 days during flowering.",
  },
  {
    id: "chempak-formula-2",
    name: "Chempak Formula 2 High Nitrogen Feed",
    type: "granular_fertilizer",
    applicationMethod: "water_mixing",
    measurementType: "weight",
    defaultDosage: 8,
    defaultDosageUnit: "g",
    defaultWaterAmount: 4.5,
    defaultWaterUnit: "l",
    instructions: "Dissolve 8g in 4.5 litres (1 gallon) of water. Apply every 10-14 days during vegetative growth.",
  },
  {
    id: "miracle-gro-azalea-feed",
    name: "Miracle-Gro Azalea, Camellia & Rhododendron Feed",
    type: "granular_fertilizer",
    applicationMethod: "water_mixing",
    measurementType: "weight",
    defaultDosage: 7,
    defaultDosageUnit: "g",
    defaultWaterAmount: 4.5,
    defaultWaterUnit: "l",
    instructions: "Dissolve 7g in 4.5 litres (1 gallon) of water. Apply every 1-2 weeks during growing season.",
    hasScoop: true,
    scoopSize: 7,
    scoopUnit: "g",
  },
  {
    id: "miracle-gro-rose-feed",
    name: "Miracle-Gro Rose & Shrub Feed",
    type: "granular_fertilizer",
    applicationMethod: "water_mixing",
    measurementType: "weight",
    defaultDosage: 7,
    defaultDosageUnit: "g",
    defaultWaterAmount: 4.5,
    defaultWaterUnit: "l",
    instructions: "Dissolve 7g in 4.5 litres (1 gallon) of water. Apply every 1-2 weeks during growing season.",
    hasScoop: true,
    scoopSize: 7,
    scoopUnit: "g",
  },
  {
    id: "westland-tomato-food",
    name: "Westland Tomato Feed Granules",
    type: "granular_fertilizer",
    applicationMethod: "water_mixing",
    measurementType: "weight",
    defaultDosage: 10,
    defaultDosageUnit: "g",
    defaultWaterAmount: 4.5,
    defaultWaterUnit: "l",
    instructions: "Dissolve 10g in 4.5 litres (1 gallon) of water. Apply twice weekly when plants are in flower/fruit.",
  },

  // Weed Killers
  {
    id: "roundup-fast-action",
    name: "Roundup Fast Action Weedkiller",
    type: "weed_killer",
    applicationMethod: "water_mixing",
    measurementType: "volume",
    defaultDosage: 25,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1,
    defaultWaterUnit: "l",
    instructions: "Dilute 25ml in 1 litre of water. Apply when weeds are actively growing.",
  },
  {
    id: "weedol-lawn-weedkiller",
    name: "Weedol Lawn Weedkiller Concentrate",
    type: "weed_killer",
    applicationMethod: "water_mixing",
    measurementType: "volume",
    defaultDosage: 10,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1,
    defaultWaterUnit: "l",
    instructions: "Dilute 10ml in 1 litre of water. Apply when weeds are actively growing.",
  },
  {
    id: "resolva-24h",
    name: "Resolva 24H Concentrate Weedkiller",
    type: "weed_killer",
    applicationMethod: "water_mixing",
    measurementType: "volume",
    defaultDosage: 20,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1,
    defaultWaterUnit: "l",
    instructions: "Dilute 20ml in 1 litre of water. Apply when weeds are actively growing.",
  },
  {
    id: "doff-glyphosate",
    name: "Doff Glyphosate Weedkiller",
    type: "weed_killer",
    applicationMethod: "water_mixing",
    measurementType: "volume",
    defaultDosage: 15,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1,
    defaultWaterUnit: "l",
    instructions: "Dilute 15ml in 1 litre of water. Apply when weeds are actively growing in dry conditions.",
  },
  {
    id: "roundup-tough",
    name: "Roundup Tough Weedkiller",
    type: "weed_killer",
    applicationMethod: "water_mixing",
    measurementType: "volume",
    defaultDosage: 30,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1,
    defaultWaterUnit: "l",
    instructions: "Dilute 30ml in 1 litre of water. Apply when weeds are actively growing. For tough weeds.",
  },
  {
    id: "resolva-pro",
    name: "Resolva Pro Weedkiller Concentrate",
    type: "weed_killer",
    applicationMethod: "water_mixing",
    measurementType: "volume",
    defaultDosage: 25,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1,
    defaultWaterUnit: "l",
    instructions: "Dilute 25ml in 1 litre of water. Apply when weeds are actively growing. Kills roots and all.",
  },
  {
    id: "weedol-rootkill-plus",
    name: "Weedol Rootkill Plus",
    type: "weed_killer",
    applicationMethod: "water_mixing",
    measurementType: "volume",
    defaultDosage: 20,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1,
    defaultWaterUnit: "l",
    instructions: "Dilute 20ml in 1 litre of water. Apply when weeds are actively growing. Kills down to the roots.",
  },
  {
    id: "roundup-path",
    name: "Roundup Path & Drive Weedkiller",
    type: "weed_killer",
    applicationMethod: "water_mixing",
    measurementType: "volume",
    defaultDosage: 25,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1,
    defaultWaterUnit: "l",
    instructions: "Dilute 25ml in 1 litre of water. Apply to weeds on paths, drives and patios.",
  },
  {
    id: "vitax-sh-weedkiller",
    name: "Vitax SBK Brushwood Killer",
    type: "weed_killer",
    applicationMethod: "water_mixing",
    measurementType: "volume",
    defaultDosage: 10,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1,
    defaultWaterUnit: "l",
    instructions: "Dilute 10ml in 1 litre of water. For control of woody weeds, brambles and brushwood.",
  },
]

// Area Treatment Products
const AREA_TREATMENT_PRODUCTS = [
  // Lawn Fertilizers
  {
    id: "evergreen-complete-4in1",
    name: "Evergreen Complete 4-in-1 Lawn Feed",
    type: "lawn_fertilizer",
    applicationMethod: "direct_application",
    measurementType: "weight",
    defaultDosage: 35,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions: "Apply 35g per square metre using a spreader. Water in if no rain falls within 48 hours.",
  },
  {
    id: "miracle-gro-evergreen-complete",
    name: "Miracle-Gro EverGreen Complete Lawn Food",
    type: "lawn_fertilizer",
    applicationMethod: "direct_application",
    measurementType: "weight",
    defaultDosage: 35,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions: "Apply 35g per square metre using a spreader. Best applied between April and September.",
  },
  {
    id: "westland-safelawn",
    name: "Westland SafeLawn Natural Lawn Feed",
    type: "lawn_fertilizer",
    applicationMethod: "direct_application",
    measurementType: "weight",
    defaultDosage: 70,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions: "Apply 70g per square metre. Water thoroughly after application.",
  },
  {
    id: "miracle-gro-lawn-food",
    name: "Miracle-Gro Water Soluble Lawn Food",
    type: "lawn_fertilizer",
    applicationMethod: "water_mixing",
    measurementType: "weight",
    defaultDosage: 15,
    defaultDosageUnit: "g",
    defaultWaterAmount: 10,
    defaultWaterUnit: "sq_m",
    instructions: "Dissolve 15g in a watering can (4.5L) and apply to 10 square metres of lawn.",
  },
  {
    id: "evergreen-autumn",
    name: "Evergreen Autumn Lawn Care",
    type: "lawn_fertilizer",
    applicationMethod: "direct_application",
    measurementType: "weight",
    defaultDosage: 35,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions: "Apply 35g per square metre using a spreader. Best applied in autumn to prepare lawn for winter.",
  },
  {
    id: "miracle-gro-patch-magic",
    name: "Miracle-Gro Patch Magic",
    type: "lawn_fertilizer",
    applicationMethod: "direct_application",
    measurementType: "weight",
    defaultDosage: 30,
    defaultDosageUnit: "g",
    defaultWaterAmount: 0.1,
    defaultWaterUnit: "sq_m",
    instructions: "Apply 30g per 0.1 square metre (10cm x 10cm patch). Water thoroughly after application.",
  },
  {
    id: "westland-aftercut-all-in-one",
    name: "Westland Aftercut All In One",
    type: "lawn_fertilizer",
    applicationMethod: "direct_application",
    measurementType: "weight",
    defaultDosage: 35,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions: "Apply 35g per square metre using a spreader. Apply after mowing when grass is dry.",
  },
  {
    id: "scotts-lawn-builder",
    name: "Scotts Lawn Builder Lawn Food",
    type: "lawn_fertilizer",
    applicationMethod: "direct_application",
    measurementType: "weight",
    defaultDosage: 30,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions: "Apply 30g per square metre using a spreader. Water in if no rain falls within 48 hours.",
  },
  {
    id: "evergreen-no-rake-moss-control",
    name: "Evergreen No Rake Moss Control",
    type: "lawn_fertilizer",
    applicationMethod: "direct_application",
    measurementType: "weight",
    defaultDosage: 35,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions: "Apply 35g per square metre using a spreader. Apply when moss is actively growing.",
  },
  {
    id: "miracle-gro-liquid-lawn-feed",
    name: "Miracle-Gro Liquid Lawn Feed",
    type: "lawn_fertilizer",
    applicationMethod: "water_mixing",
    measurementType: "volume",
    defaultDosage: 15,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions: "Dilute 15ml in a watering can (4.5L) and apply to 1 square metre of lawn.",
  },

  // Granular Fertilizers (for direct soil application)
  {
    id: "growmore-granular",
    name: "Growmore Granular Garden Fertilizer",
    type: "granular_fertilizer",
    applicationMethod: "direct_application",
    measurementType: "weight",
    defaultDosage: 70,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions: "Apply 70g per square meter and work into the soil. Apply every 4-6 weeks during growing season.",
  },
  {
    id: "miracle-gro-shake-n-feed",
    name: "Miracle-Gro Shake 'n' Feed All Purpose",
    type: "granular_fertilizer",
    applicationMethod: "direct_application",
    measurementType: "weight",
    defaultDosage: 50,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions: "Apply 50g per square metre. Work into the soil surface. Feeds for up to 3 months.",
  },
  {
    id: "westland-gro-sure",
    name: "Westland Gro-Sure All Purpose Plant Food",
    type: "granular_fertilizer",
    applicationMethod: "direct_application",
    measurementType: "weight",
    defaultDosage: 100,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions: "Apply 100g per square metre. Lightly work into the soil surface and water in well.",
  },
  {
    id: "vitax-q4",
    name: "Vitax Q4 Fertilizer",
    type: "granular_fertilizer",
    applicationMethod: "direct_application",
    measurementType: "weight",
    defaultDosage: 70,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions:
      "Apply 70g per square metre. Rake into the soil surface before planting or around established plants.",
  },
  {
    id: "blood-fish-bone",
    name: "Blood, Fish & Bone Organic Fertilizer",
    type: "granular_fertilizer",
    applicationMethod: "direct_application",
    measurementType: "weight",
    defaultDosage: 80,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions: "Apply 80g per square metre. Fork lightly into the soil surface and water in well.",
  },
  {
    id: "westland-bone-meal",
    name: "Westland Bone Meal Root Builder",
    type: "granular_fertilizer",
    applicationMethod: "direct_application",
    measurementType: "weight",
    defaultDosage: 100,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions:
      "Apply 100g per square metre. Mix into soil before planting or apply to surface for established plants.",
  },
  {
    id: "westland-fish-blood-bone",
    name: "Westland Fish, Blood & Bone",
    type: "granular_fertilizer",
    applicationMethod: "direct_application",
    measurementType: "weight",
    defaultDosage: 70,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions: "Apply 70g per square metre. Fork lightly into the soil surface and water in well.",
  },
  {
    id: "miracle-gro-slow-release",
    name: "Miracle-Gro Slow Release Plant Food",
    type: "granular_fertilizer",
    applicationMethod: "direct_application",
    measurementType: "weight",
    defaultDosage: 30,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions: "Apply 30g per square metre. Lightly work into the soil surface. Feeds for up to 6 months.",
  },
  {
    id: "chicken-manure-pellets",
    name: "Chicken Manure Pellets",
    type: "granular_fertilizer",
    applicationMethod: "direct_application",
    measurementType: "weight",
    defaultDosage: 100,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions: "Apply 100g per square metre. Fork lightly into the soil surface and water in well.",
  },
  {
    id: "westland-rose-food-granular",
    name: "Westland Rose Food Granular",
    type: "granular_fertilizer",
    applicationMethod: "direct_application",
    measurementType: "weight",
    defaultDosage: 100,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions: "Apply 100g per square metre around roses. Water in well after application.",
  },
  {
    id: "westland-rose-food",
    name: "Westland Rose Food",
    type: "granular_fertilizer",
    applicationMethod: "direct_application",
    measurementType: "weight",
    defaultDosage: 35,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "plant",
    instructions: "Apply 35g per rose bush. Work into the soil surface and water in well. Apply in spring and summer.",
  },
  {
    id: "osmocote-controlled-release",
    name: "Osmocote Controlled Release Plant Food",
    type: "granular_fertilizer",
    applicationMethod: "direct_application",
    measurementType: "weight",
    defaultDosage: 5,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "plant",
    instructions: "Apply 5g around each plant or 75g per square meter. Lasts up to 6 months.",
  },
]

// Water Treatment Products
const WATER_TREATMENT_PRODUCTS = [
  // Pond Treatments
  {
    id: "tetra-pond-algae",
    name: "TetraPond AlgoRem",
    type: "pond_treatment",
    applicationMethod: "water_treatment",
    measurementType: "volume",
    defaultDosage: 50,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1000,
    defaultWaterUnit: "l",
    instructions: "Add 50ml per 1000 litres of pond water. Repeat after 2-3 weeks if necessary.",
  },
  {
    id: "blagdon-clear-pond",
    name: "Blagdon Clear Pond Treatment",
    type: "pond_treatment",
    applicationMethod: "water_treatment",
    measurementType: "volume",
    defaultDosage: 25,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1000,
    defaultWaterUnit: "l",
    instructions: "Add 25ml per 1000 litres of pond water. Repeat weekly as necessary.",
  },
  {
    id: "interpet-pond-clear",
    name: "Interpet Pond Clear Solution",
    type: "pond_treatment",
    applicationMethod: "water_treatment",
    measurementType: "volume",
    defaultDosage: 100,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1000,
    defaultWaterUnit: "l",
    instructions: "Add 100ml per 1000 litres of pond water. Repeat after 7 days if necessary.",
  },
  {
    id: "pondxpert-sludge-away",
    name: "PondXpert Sludge Away",
    type: "pond_treatment",
    applicationMethod: "water_treatment",
    measurementType: "volume",
    defaultDosage: 100,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1000,
    defaultWaterUnit: "l",
    instructions:
      "Add 100ml per 1000 litres of pond water. Breaks down sludge and organic waste at the bottom of the pond.",
  },
  {
    id: "oase-aquaactiv-phosless",
    name: "Oase AquaActiv PhosLess",
    type: "pond_treatment",
    applicationMethod: "water_treatment",
    measurementType: "weight",
    defaultDosage: 500,
    defaultDosageUnit: "g",
    defaultWaterAmount: 10000,
    defaultWaterUnit: "l",
    instructions: "Add 500g per 10,000 litres of pond water. Place in filter system or area with good water flow.",
  },
  {
    id: "nishikoi-pond-treatment",
    name: "Nishikoi Health Guard Pond Treatment",
    type: "pond_treatment",
    applicationMethod: "water_treatment",
    measurementType: "volume",
    defaultDosage: 25,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1000,
    defaultWaterUnit: "l",
    instructions: "Add 25ml per 1000 litres of pond water. Helps maintain healthy fish and plants.",
  },
  {
    id: "tetra-pond-crystal-water",
    name: "TetraPond Crystal Water",
    type: "pond_treatment",
    applicationMethod: "water_treatment",
    measurementType: "volume",
    defaultDosage: 50,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1000,
    defaultWaterUnit: "l",
    instructions: "Add 50ml per 1000 litres of pond water. Clears cloudy water within 24 hours.",
  },

  // Algaecides
  {
    id: "api-pond-algaefix",
    name: "API Pond Algaefix",
    type: "pond_treatment",
    applicationMethod: "water_treatment",
    measurementType: "volume",
    defaultDosage: 5,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 40,
    defaultWaterUnit: "l",
    instructions: "Add 5ml per 40 litres of pond water. Control algae growth in ponds and fountains.",
  },
]

// Application method descriptions
const APPLICATION_METHOD_DESCRIPTIONS = {
  water_mixing: "Products that need to be mixed with water before application",
  direct_application: "Products that are applied directly to soil or plants",
  water_treatment: "Products that are added directly to water bodies like ponds",
}

// Product type hints
const PRODUCT_TYPE_HINTS = {
  liquid_fertilizer: "Typical usage: 5-10ml per litre of water",
  granular_fertilizer: "Typical usage: 1-2g per litre of water or 30-60g per sq metre",
  lawn_fertilizer: "Typical usage: 35g per square metre",
  weed_killer: "Typical usage: 10ml per litre of water",
  pond_treatment: "Typical usage: 50ml per 1000 litres of water",
  custom: "Enter your own measurements for a custom product",
}

// Function to get formatted unit display
function getFormattedUnitDisplay(unit) {
  switch (unit) {
    case "l":
      return "litre"
    case "ml":
      return "millilitre"
    case "g":
      return "gram"
    case "kg":
      return "kilogram"
    case "oz":
      return "ounce"
    case "lb":
      return "pound"
    case "gal_uk":
      return "gallon (UK)"
    case "sq_m":
      return "square metre"
    case "sq_ft":
      return "square foot"
    case "sq_yd":
      return "square yard"
    case "plant":
      return "plant"
    case "cap":
      return "cap"
    case "tsp":
      return "teaspoon"
    case "tbsp":
      return "tablespoon"
    default:
      return unit
  }
}

// Function to determine appropriate decimal precision based on value
function getDecimalPrecision(value) {
  if (value < 0.1) {
    return 4 // Very small values need more precision
  } else if (value < 1) {
    return 3 // Small values need more precision
  } else if (value < 10) {
    return 2 // Medium values
  } else {
    return 1 // Large values
  }
}

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed")

  // Initialize application method dropdown
  initializeApplicationMethodDropdown()

  // Initialize accordion functionality
  initializeAccordion()

  // Add other initialization code here
  setupEventListeners()
})

// Function to initialize application method dropdown
function initializeApplicationMethodDropdown() {
  console.log("Initializing application method dropdown")

  const applicationMethodSelect = document.getElementById("application-method")
  const productTypeSelect = document.getElementById("product-type")
  const productNameSelect = document.getElementById("product-name-select")

  if (!applicationMethodSelect || !productTypeSelect || !productNameSelect) {
    console.error("Required selection elements not found")
    return
  }

  // Function to update product type options based on selected application method
  function updateProductTypeOptions() {
    const selectedMethod = applicationMethodSelect.value
    console.log("Updating product types for application method:", selectedMethod)

    // Clear existing options
    while (productTypeSelect.options.length > 0) {
      productTypeSelect.remove(0)
    }

    // Get unique product types for the selected application method
    const productTypes = new Set()

    // Combine all product arrays
    const allProducts = [...COMMON_PRODUCTS, ...AREA_TREATMENT_PRODUCTS, ...WATER_TREATMENT_PRODUCTS]

    // Filter products by application method and collect unique types
    allProducts
      .filter((product) => product.applicationMethod === selectedMethod)
      .forEach((product) => productTypes.add(product.type))

    console.log(`Found ${productTypes.size} product types for application method ${selectedMethod}`)

    // Add options for each product type
    productTypes.forEach((type) => {
      const option = document.createElement("option")
      option.value = type

      // Format the type name for display (convert snake_case to Title Case)
      const displayName = type
        .split("_")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")

      option.textContent = displayName
      productTypeSelect.appendChild(option)
    })

    // Add custom option
    const customOption = document.createElement("option")
    customOption.value = "custom"
    customOption.textContent = "Custom Product"
    productTypeSelect.appendChild(customOption)

    // Update product names based on the first product type
    if (productTypeSelect.options.length > 0) {
      productTypeSelect.selectedIndex = 0
      updateProductNameOptions()
    }
  }

  // Function to update product name options based on selected product type and application method
  function updateProductNameOptions() {
    const selectedMethod = applicationMethodSelect.value
    const selectedType = productTypeSelect.value
    console.log(`Updating product names for type: ${selectedType} and method: ${selectedMethod}`)

    // Clear existing options except the first one
    while (productNameSelect.options.length > 1) {
      productNameSelect.remove(1)
    }

    // If custom type is selected, hide the dropdown
    if (selectedType === "custom") {
      document.getElementById("common-product-section").classList.add("hidden")
      document.getElementById("custom-product-section").classList.remove("hidden")
      document.getElementById("use-custom-product").checked = true
      return
    }

    // Show the dropdown for non-custom types
    document.getElementById("common-product-section").classList.remove("hidden")
    document.getElementById("custom-product-section").classList.add("hidden")
    document.getElementById("use-custom-product").checked = false

    // Combine all product arrays
    const allProducts = [...COMMON_PRODUCTS, ...AREA_TREATMENT_PRODUCTS, ...WATER_TREATMENT_PRODUCTS]

    // Filter products by application method and type
    const filteredProducts = allProducts.filter(
      (product) => product.applicationMethod === selectedMethod && product.type === selectedType,
    )

    console.log(`Found ${filteredProducts.length} products for type ${selectedType} and method ${selectedMethod}`)

    // Add filtered products to dropdown
    filteredProducts.forEach((product) => {
      const option = document.createElement("option")
      option.value = product.id
      option.textContent = product.name
      productNameSelect.appendChild(option)
    })

    // Update product type hint
    const productTypeHint = document.getElementById("product-type-hint")
    if (productTypeHint) {
      productTypeHint.textContent = PRODUCT_TYPE_HINTS[selectedType] || ""
    }
  }

  // Add event listeners
  applicationMethodSelect.addEventListener("change", updateProductTypeOptions)
  productTypeSelect.addEventListener("change", updateProductNameOptions)

  // Initial population
  updateProductTypeOptions()
}

// Function to initialize accordion functionality
function initializeAccordion() {
  console.log("Initializing accordion functionality")

  const accordionItems = document.querySelectorAll(".accordion-item")

  accordionItems.forEach((item) => {
    const trigger = item.querySelector(".accordion-trigger")
    const content = item.querySelector(".accordion-content")

    if (trigger && content) {
      trigger.addEventListener("click", () => {
        // Toggle active class
        item.classList.toggle("active")

        // Update icon
        const icon = trigger.querySelector(".icon")
        if (icon) {
          icon.textContent = item.classList.contains("active") ? "▲" : "▼"
        }
      })
    }
  })
}

// Function to set up other event listeners
function setupEventListeners() {
  console.log("Setting up event listeners")

  // Initialize product type dropdown based on application method
  const applicationMethodSelect = document.getElementById("application-method")
  let productNameSelect = document.getElementById("product-name-select")
  const productTypeHint = document.getElementById("product-type-hint")

  if (productNameSelect) {
    console.log("Product selection elements found, initializing dropdowns")

    // Initial population of product types based on default application method
    updateProductTypeOptions(applicationMethodSelect.value)
  }

  // Custom product toggle
  const useCustomProduct = document.getElementById("use-custom-product")
  if (useCustomProduct) {
    useCustomProduct.addEventListener("change", function () {
      if (this.checked) {
        document.getElementById("common-product-section").classList.add("hidden")
        document.getElementById("custom-product-section").classList.remove("hidden")
      } else {
        document.getElementById("common-product-section").classList.remove("hidden")
        document.getElementById("custom-product-section").classList.add("hidden")
      }
    })
  }

  // Product selection change
  productNameSelect = document.getElementById("product-name-select")
  if (productNameSelect) {
    productNameSelect.addEventListener("change", function () {
      const selectedId = this.value
      if (!selectedId) return

      // Find the selected product
      const allProducts = [...COMMON_PRODUCTS, ...AREA_TREATMENT_PRODUCTS, ...WATER_TREATMENT_PRODUCTS]
      const selectedProduct = allProducts.find((p) => p.id === selectedId)

      if (selectedProduct) {
        // Display product instructions
        const instructionsPanel = document.getElementById("product-instructions")
        const instructionsText = document.getElementById("instructions-text")

        if (instructionsPanel && instructionsText) {
          instructionsText.textContent = selectedProduct.instructions
          instructionsPanel.classList.remove("hidden")
        }

        // Set default values based on product
        updateCalculatorInputs(selectedProduct)
      }
    })
  }

  // Application method change
  if (applicationMethodSelect) {
    applicationMethodSelect.addEventListener("change", function () {
      const selectedMethod = this.value

      // Show the appropriate calculator inputs based on application method
      showAppropriateCalculator(selectedMethod)

      // Update product type options based on the selected application method
      updateProductTypeOptions(selectedMethod)
    })
  }

  // Product type change
  const productTypeSelectEl = document.getElementById("product-type")
  if (productTypeSelectEl) {
    productTypeSelectEl.addEventListener("change", () => {
      updateProductNameOptions()
    })
  }

  // Calculate button click
  const calculateBtn = document.getElementById("calculate-btn")
  if (calculateBtn) {
    calculateBtn.addEventListener("click", () => {
      performCalculation()
    })
  }

  // Test panel toggle
  const testTrigger = document.getElementById("test-trigger")
  const testContent = document.getElementById("test-content")

  if (testTrigger && testContent) {
    testTrigger.addEventListener("click", function () {
      testContent.classList.toggle("hidden")
      const icon = this.querySelector(".icon")
      if (icon) {
        icon.textContent = testContent.classList.contains("hidden") ? "▼" : "▲"
      }
    })
  }

  // Add event listeners for quick test and full test buttons
  const quickTestBtn = document.getElementById("quick-test-btn")
  const fullTestBtn = document.getElementById("full-test-btn")

  if (quickTestBtn) {
    quickTestBtn.addEventListener("click", () => {
      // Reset progress bar
      const progressBar = document.getElementById("test-progress-bar")
      const progressText = document.getElementById("test-progress-text")
      if (progressBar && progressText) {
        progressBar.style.width = "0%"
        progressText.textContent = "0%"
      }

      // Run quick test (sample of products)
      TestRunner.runAllTests(false)
    })
  }

  if (fullTestBtn) {
    fullTestBtn.addEventListener("click", () => {
      // Reset progress bar
      const progressBar = document.getElementById("test-progress-bar")
      const progressText = document.getElementById("test-progress-text")
      if (progressBar && progressText) {
        progressBar.style.width = "0%"
        progressText.textContent = "0%"
      }

      // Run full test (all products)
      TestRunner.runAllTests(true)
    })
  }

  // Copy debug info button
  const copyDebugBtn = document.getElementById("copy-debug-btn")
  if (copyDebugBtn) {
    copyDebugBtn.addEventListener("click", () => {
      const debugInfo = document.getElementById("debug-info")
      if (debugInfo) {
        navigator.clipboard
          .writeText(debugInfo.textContent)
          .then(() => {
            alert("Debug info copied to clipboard!")
          })
          .catch((err) => {
            console.error("Could not copy text: ", err)
          })
      }
    })
  }

  // Area shape change
  const areaShapeRadios = document.querySelectorAll('input[name="area-shape"]')
  areaShapeRadios.forEach((radio) => {
    radio.addEventListener("change", function () {
      if (this.value === "rectangle") {
        document.getElementById("rectangle-inputs").classList.remove("hidden")
        document.getElementById("circle-inputs").classList.add("hidden")
      } else if (this.value === "circle") {
        document.getElementById("rectangle-inputs").classList.add("hidden")
        document.getElementById("circle-inputs").classList.remove("hidden")
      }
    })
  })

  // Container shape change
  const containerShapeRadios = document.querySelectorAll('input[name="container-shape"]')
  containerShapeRadios.forEach((radio) => {
    radio.addEventListener("change", function () {
      if (this.value === "rectangular") {
        document.getElementById("rectangular-inputs").classList.remove("hidden")
        document.getElementById("circular-inputs").classList.add("hidden")
      } else if (this.value === "circular") {
        document.getElementById("rectangular-inputs").classList.add("hidden")
        document.getElementById("circular-inputs").classList.remove("hidden")
      }
    })
  })

  // Calculation mode change
  const calculationModeRadios = document.querySelectorAll('input[name="calculation-mode"]')
  calculationModeRadios.forEach((radio) => {
    radio.addEventListener("change", function () {
      // Hide all panels
      document.getElementById("product_to_water-panel").classList.add("hidden")
      document.getElementById("water_to_product-panel").classList.add("hidden")
      document.getElementById("ratio_based-panel").classList.add("hidden")

      // Show the selected panel
      document.getElementById(`${this.value}-panel`).classList.remove("hidden")
    })
  })

  // Measurement type change
  const measurementTypeRadios = document.querySelectorAll('input[name="measurement-type"]')
  measurementTypeRadios.forEach((radio) => {
    radio.addEventListener("change", function () {
      if (this.value === "cap") {
        document.getElementById("cap-size-group").classList.remove("hidden")
      } else {
        document.getElementById("cap-size-group").classList.add("hidden")
      }
    })
  })

  // Has scoop change
  const hasScoopRadios = document.querySelectorAll('input[name="has-scoop"]')
  hasScoopRadios.forEach((radio) => {
    radio.addEventListener("change", function () {
      if (this.value === "yes") {
        document.getElementById("scoop-size-group").classList.remove("hidden")
      } else {
        document.getElementById("scoop-size-group").classList.add("hidden")
      }
    })
  })

  // Add water unit change listeners to update ratios
  const waterUnit2Select = document.getElementById("water-unit-2")
  if (waterUnit2Select) {
    waterUnit2Select.addEventListener("change", function () {
      // Get the current product
      const productNameSelect = document.getElementById("product-name-select")
      const selectedId = productNameSelect.value
      if (!selectedId) return

      // Find the selected product
      const allProducts = [...COMMON_PRODUCTS, ...AREA_TREATMENT_PRODUCTS, ...WATER_TREATMENT_PRODUCTS]
      const selectedProduct = allProducts.find((p) => p.id === selectedId)

      if (selectedProduct) {
        // Calculate the ratio based on product's default values
        const defaultRatio = selectedProduct.defaultDosage / selectedProduct.defaultWaterAmount

        // Convert ratio to match the selected water unit
        let convertedRatio = defaultRatio
        const waterUnit2 = this.value

        if (waterUnit2 === "gal_uk" && selectedProduct.defaultWaterUnit === "l") {
          convertedRatio = defaultRatio * 4.55 // Convert from per liter to per gallon
        } else if (waterUnit2 === "l" && selectedProduct.defaultWaterUnit === "gal_uk") {
          convertedRatio = defaultRatio / 4.55 // Convert from per gallon to per liter
        } else if (waterUnit2 === "ml" && selectedProduct.defaultWaterUnit === "l") {
          convertedRatio = defaultRatio / 1000 // Convert from per liter to per ml
        }

        // Update the ratio field
        const ratioField = document.getElementById("ratio")
        if (ratioField) {
          ratioField.value = convertedRatio.toFixed(2)
        }
      }
    })
  }

  const targetUnitSelect = document.getElementById("target-unit")
  if (targetUnitSelect) {
    targetUnitSelect.addEventListener("change", function () {
      // Get the current product
      const productNameSelect = document.getElementById("product-name-select")
      const selectedId = productNameSelect.value
      if (!selectedId) return

      // Find the selected product
      const allProducts = [...COMMON_PRODUCTS, ...AREA_TREATMENT_PRODUCTS, ...WATER_TREATMENT_PRODUCTS]
      const selectedProduct = allProducts.find((p) => p.id === selectedId)

      if (selectedProduct) {
        // Calculate the ratio based on product's default values
        const defaultRatio = selectedProduct.defaultDosage / selectedProduct.defaultWaterAmount

        // Convert ratio to match the selected water unit
        let convertedRatio = defaultRatio
        const targetUnit = this.value

        if (targetUnit === "gal_uk" && selectedProduct.defaultWaterUnit === "l") {
          convertedRatio = defaultRatio * 4.55 // Convert from per liter to per gallon
        } else if (targetUnit === "l" && selectedProduct.defaultWaterUnit === "gal_uk") {
          convertedRatio = defaultRatio / 4.55 // Convert from per gallon to per liter
        } else if (targetUnit === "ml" && selectedProduct.defaultWaterUnit === "l") {
          convertedRatio = defaultRatio / 1000 // Convert from per liter to per ml
        }

        // Update the ratio field
        const ratioField2 = document.getElementById("ratio-2")
        if (ratioField2) {
          ratioField2.value = convertedRatio.toFixed(2)
        }
      }
    })
  }

  // Add event listeners for water unit changes in product_to_water mode
  const waterUnitSelect = document.getElementById("water-unit")
  if (waterUnitSelect) {
    waterUnitSelect.addEventListener("change", function () {
      // Get the current product
      const productNameSelect = document.getElementById("product-name-select")
      const selectedId = productNameSelect.value
      if (!selectedId) return

      // Find the selected product
      const allProducts = [...COMMON_PRODUCTS, ...AREA_TREATMENT_PRODUCTS, ...WATER_TREATMENT_PRODUCTS]
      const selectedProduct = allProducts.find((p) => p.id === selectedId)

      if (selectedProduct) {
        // Get current values
        const productAmount = Number.parseFloat(document.getElementById("product-amount").value)
        const oldWaterAmount = Number.parseFloat(document.getElementById("water-amount").value)
        const oldWaterUnit = document.getElementById("water-unit").value
        const newWaterUnit = this.value

        // Convert water amount to the new unit
        let newWaterAmount = oldWaterAmount

        // Convert from old unit to liters first
        let waterAmountInLiters = oldWaterAmount
        if (oldWaterUnit === "gal_uk") {
          waterAmountInLiters = oldWaterAmount * 4.55 // Convert UK gallons to liters
        } else if (oldWaterUnit === "ml") {
          waterAmountInLiters = oldWaterAmount / 1000 // Convert ml to liters
        }

        // Then convert from liters to new unit
        if (newWaterUnit === "gal_uk") {
          newWaterAmount = waterAmountInLiters / 4.55 // Convert liters to UK gallons
        } else if (newWaterUnit === "ml") {
          newWaterAmount = waterAmountInLiters * 1000 // Convert liters to ml
        } else {
          newWaterAmount = waterAmountInLiters // Already in liters
        }

        // Update the water amount field
        document.getElementById("water-amount").value = newWaterAmount.toFixed(2)

        // Also update the ratio fields to maintain consistency
        const ratio = productAmount / newWaterAmount

        // Update ratio for water_to_product mode
        const ratioField = document.getElementById("ratio")
        if (ratioField) {
          ratioField.value = ratio.toFixed(2)
        }

        // Update ratio for ratio_based mode
        const ratioField2 = document.getElementById("ratio-2")
        if (ratioField2) {
          ratioField2.value = ratio.toFixed(2)
        }
      }
    })
  }

  // Add event listeners for product unit changes
  const productUnitSelect = document.getElementById("product-unit")
  if (productUnitSelect) {
    productUnitSelect.addEventListener("change", function () {
      // Get the current product
      const productNameSelect = document.getElementById("product-name-select")
      const selectedId = productNameSelect.value
      if (!selectedId) return

      // Find the selected product
      const allProducts = [...COMMON_PRODUCTS, ...AREA_TREATMENT_PRODUCTS, ...WATER_TREATMENT_PRODUCTS]
      const selectedProduct = allProducts.find((p) => p.id === selectedId)

      if (selectedProduct) {
        // Get current values
        const oldProductAmount = Number.parseFloat(document.getElementById("product-amount").value)
        const oldProductUnit = document.getElementById("product-unit").value
        const newProductUnit = this.value
        const waterAmount = Number.parseFloat(document.getElementById("water-amount").value)

        // Convert product amount to the new unit
        let newProductAmount = oldProductAmount

        // Handle unit conversions
        if (oldProductUnit === "g" && newProductUnit === "kg") {
          newProductAmount = oldProductAmount / 1000 // g to kg
        } else if (oldProductUnit === "kg" && newProductUnit === "g") {
          newProductAmount = oldProductAmount * 1000 // kg to g
        } else if (oldProductUnit === "ml" && newProductUnit === "l") {
          newProductAmount = oldProductAmount / 1000 // ml to l
        } else if (oldProductUnit === "l" && newProductUnit === "ml") {
          newProductAmount = oldProductAmount * 1000 // l to ml
        } else if (oldProductUnit === "g" && newProductUnit === "oz") {
          newProductAmount = oldProductAmount * 0.035274 // g to oz
        } else if (oldProductUnit === "oz" && newProductUnit === "g") {
          newProductAmount = oldProductAmount / 0.035274 // oz to g
        } else if (oldProductUnit === "ml" && newProductUnit === "fl_oz") {
          newProductAmount = oldProductAmount * 0.033814 // ml to fl oz
        } else if (oldProductUnit === "fl_oz" && newProductUnit === "ml") {
          newProductAmount = oldProductAmount / 0.033814 // fl oz to ml
        }

        // Update the product amount field
        document.getElementById("product-amount").value = newProductAmount.toFixed(2)

        // Also update the ratio fields to maintain consistency
        const ratio = newProductAmount / waterAmount

        // Update ratio for water_to_product mode
        const ratioField = document.getElementById("ratio")
        if (ratioField) {
          ratioField.value = ratio.toFixed(2)
        }

        // Update ratio for ratio_based mode
        const ratioField2 = document.getElementById("ratio-2")
        if (ratioField2) {
          ratioField2.value = ratio.toFixed(2)
        }
      }
    })
  }

  // Enhance the water-amount-2 change event to update the water_to_product calculation
  const waterAmount2Input = document.getElementById("water-amount-2")
  if (waterAmount2Input) {
    waterAmount2Input.addEventListener("change", function () {
      // Get the current ratio
      const ratio = Number.parseFloat(document.getElementById("ratio").value)
      const waterUnit = document.getElementById("water-unit-2").value
      const waterAmount = Number.parseFloat(this.value)

      // Calculate product amount based on ratio and water amount
      // Convert water amount to liters for calculation
      let waterAmountInLiters = waterAmount
      if (waterUnit === "gal_uk") {
        waterAmountInLiters = waterAmount * 4.55 // Convert UK gallons to liters
      } else if (waterUnit === "ml") {
        waterAmountInLiters = waterAmount / 1000 // Convert ml to liters
      }

      // If ratio is specified per gallon, convert it to per liter
      let ratioPerLiter = ratio
      if (waterUnit === "gal_uk") {
        ratioPerLiter = ratio / 4.55 // Convert ratio from per gallon to per liter
      } else if (waterUnit === "ml") {
        ratioPerLiter = ratio * 1000 // Convert ratio from per ml to per liter
      }

      // Update the target amount in ratio_based mode to match
      document.getElementById("target-amount").value = waterAmount
      document.getElementById("target-unit").value = waterUnit
    })
  }

  // Enhance the target-amount change event to update the ratio_based calculation
  const targetAmountInput = document.getElementById("target-amount")
  if (targetAmountInput) {
    targetAmountInput.addEventListener("change", function () {
      // Get the current ratio
      const ratio = Number.parseFloat(document.getElementById("ratio-2").value)
      const targetUnit = document.getElementById("target-unit").value
      const targetAmount = Number.parseFloat(this.value)

      // Update the water amount in water_to_product mode to match
      document.getElementById("water-amount-2").value = targetAmount
      document.getElementById("water-unit-2").value = targetUnit
    })
  }

  // Initial setup
  showAppropriateCalculator(applicationMethodSelect.value)

  // Update ratio labels when water units change
  if (document.getElementById("water-unit-2")) {
    document.getElementById("water-unit-2").addEventListener("change", function () {
      const productUnit =
        document.querySelector('input[name="measurement-type"]:checked').value === "weight"
          ? "g"
          : document.querySelector('input[name="measurement-type"]:checked').value === "cap"
            ? "cap"
            : "ml"
      updateRatioLabels(productUnit, this.value)
    })
  }

  if (document.getElementById("target-unit")) {
    document.getElementById("target-unit").addEventListener("change", function () {
      const productUnit =
        document.querySelector('input[name="measurement-type"]:checked').value === "weight"
          ? "g"
          : document.querySelector('input[name="measurement-type"]:checked').value === "cap"
            ? "cap"
            : "ml"
      updateRatioLabels(productUnit, this.value, true)
    })
  }

  // Update ratio labels when measurement type changes
  document.querySelectorAll('input[name="measurement-type"]').forEach((radio) => {
    radio.addEventListener("change", function () {
      const productUnit = this.value === "weight" ? "g" : this.value === "cap" ? "cap" : "ml"
      if (document.getElementById("water-unit-2")) {
        updateRatioLabels(productUnit, document.getElementById("water-unit-2").value)
      }
      if (document.getElementById("target-unit")) {
        updateRatioLabels(productUnit, document.getElementById("target-unit").value, true)
      }
    })
  })

  // Test panel toggle
  const testTrigger = document.getElementById("test-trigger")

  // Copy test results button
  const copyTestBtn = document.getElementById("copy-test-btn")
  if (copyTestBtn) {
    copyTestBtn.addEventListener("click", () => {
      const testResults = document.getElementById("test-results")
      if (testResults) {
        navigator.clipboard
          .writeText(testResults.textContent)
          .then(() => {
            alert("Test results copied to clipboard!")
          })
          .catch((err) => {
            console.error("Could not copy text: ", err)
          })
      }
    })
  }
}

// Function to update product type options based on selected application method
function updateProductTypeOptions(selectedMethod) {
  const productTypeSelect = document.getElementById("product-type")
  const productTypeHint = document.getElementById("product-type-hint")

  console.log("Updating product types for application method:", selectedMethod)

  // Clear existing options
  while (productTypeSelect.options.length > 0) {
    productTypeSelect.remove(0)
  }

  // Get unique product types for the selected application method
  const productTypes = new Set()

  // Combine all product arrays
  const allProducts = [...COMMON_PRODUCTS, ...AREA_TREATMENT_PRODUCTS, ...WATER_TREATMENT_PRODUCTS]

  // Filter products by application method and collect unique types
  allProducts
    .filter((product) => product.applicationMethod === selectedMethod)
    .forEach((product) => productTypes.add(product.type))

  console.log(`Found ${productTypes.size} product types for application method ${selectedMethod}`)

  // Add options for each product type
  productTypes.forEach((type) => {
    const option = document.createElement("option")
    option.value = type

    // Format the type name for display (convert snake_case to Title Case)
    const displayName = type
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")

    option.textContent = displayName
    productTypeSelect.appendChild(option)
  })

  // Add custom option
  const customOption = document.createElement("option")
  customOption.value = "custom"
  customOption.textContent = "Custom Product"
  productTypeSelect.appendChild(customOption)

  // Update product names based on the first product type
  if (productTypeSelect.options.length > 0) {
    productTypeSelect.selectedIndex = 0
    updateProductNameOptions()
  }

  // Update product type hint
  if (productTypeHint && productTypeSelect.value) {
    productTypeHint.textContent = PRODUCT_TYPE_HINTS[productTypeSelect.value] || ""
  }
}

// Function to update product name options based on selected product type and application method
function updateProductNameOptions() {
  const applicationMethodSelect = document.getElementById("application-method")
  const productTypeSelect = document.getElementById("product-type")
  const productNameSelect = document.getElementById("product-name-select")

  const selectedMethod = applicationMethodSelect.value
  const selectedType = productTypeSelect.value
  console.log(`Updating product names for type: ${selectedType} and method: ${selectedMethod}`)

  // Clear existing options except the first one
  while (productNameSelect.options.length > 1) {
    productNameSelect.remove(1)
  }

  // If custom type is selected, hide the dropdown
  if (selectedType === "custom") {
    document.getElementById("common-product-section").classList.add("hidden")
    document.getElementById("custom-product-section").classList.remove("hidden")
    document.getElementById("use-custom-product").checked = true
    return
  }

  // Show the dropdown for non-custom types
  document.getElementById("common-product-section").classList.remove("hidden")
  document.getElementById("custom-product-section").classList.add("hidden")
  document.getElementById("use-custom-product").checked = false

  // Combine all product arrays
  const allProducts = [...COMMON_PRODUCTS, ...AREA_TREATMENT_PRODUCTS, ...WATER_TREATMENT_PRODUCTS]

  // Filter products by application method and type
  const filteredProducts = allProducts.filter(
    (product) => product.applicationMethod === selectedMethod && product.type === selectedType,
  )

  console.log(`Found ${filteredProducts.length} products for type ${selectedType} and method ${selectedMethod}`)

  // Add filtered products to dropdown
  filteredProducts.forEach((product) => {
    const option = document.createElement("option")
    option.value = product.id
    option.textContent = product.name
    productNameSelect.appendChild(option)
  })
}

// Function to show the appropriate calculator based on application method
function showAppropriateCalculator(applicationMethod) {
  // Hide all calculator inputs
  document.getElementById("water-mixing-calculator").classList.add("hidden")
  document.getElementById("direct-application-calculator").classList.add("hidden")
  document.getElementById("water-treatment-calculator").classList.add("hidden")

  // Hide all calculator results
  document.getElementById("water-mixing-results").classList.add("hidden")
  document.getElementById("direct-application-results").classList.add("hidden")
  document.getElementById("water-treatment-results").classList.add("hidden")

  // Show the appropriate calculator inputs and results
  if (applicationMethod === "water_mixing") {
    document.getElementById("water-mixing-calculator").classList.remove("hidden")
    document.getElementById("water-mixing-results").classList.remove("hidden")
  } else if (applicationMethod === "direct_application") {
    document.getElementById("direct-application-calculator").classList.remove("hidden")
    document.getElementById("direct-application-results").classList.remove("hidden")
  } else if (applicationMethod === "water_treatment") {
    document.getElementById("water-treatment-calculator").classList.remove("hidden")
    document.getElementById("water-treatment-results").classList.remove("hidden")
  }
}

// Function to update ratio labels based on selected units
function updateRatioLabels(productUnit, waterUnit, isSecondLabel = false) {
  const labelId = isSecondLabel ? "ratio-label-2" : "ratio-label"
  const ratioLabel = document.getElementById(labelId)

  if (ratioLabel) {
    let waterUnitDisplay = waterUnit
    if (waterUnit === "l") {
      waterUnitDisplay = "litre"
    } else if (waterUnit === "gal_uk") {
      waterUnitDisplay = "gallon (UK)"
    }

    ratioLabel.textContent = `${productUnit} per ${waterUnitDisplay}`
  }
}

// Function to update calculator inputs based on selected product
function updateCalculatorInputs(product) {
  console.log("Updating calculator inputs for product:", product.name)

  // Set measurement type
  const measurementTypeRadios = document.querySelectorAll('input[name="measurement-type"]')
  measurementTypeRadios.forEach((radio) => {
    if (radio.value === product.measurementType) {
      radio.checked = true
    }
  })

  // Show/hide cap size input if needed
  if (product.measurementType === "cap") {
    document.getElementById("cap-size-group").classList.remove("hidden")
  } else {
    document.getElementById("cap-size-group").classList.add("hidden")
  }

  // Set has scoop
  const hasScoopRadios = document.querySelectorAll('input[name="has-scoop"]')
  if (hasScoopRadios.length > 0) {
    if (product.hasScoop) {
      document.getElementById("has-scoop-yes").checked = true
      document.getElementById("has-scoop-no").checked = false
      document.getElementById("scoop-size-group").classList.remove("hidden")
    } else {
      document.getElementById("has-scoop-yes").checked = false
      document.getElementById("has-scoop-no").checked = true
      document.getElementById("scoop-size-group").classList.add("hidden")
    }
  }

  // Set default dosage and water amount
  document.getElementById("product-amount").value = product.defaultDosage
  document.getElementById("water-amount").value = product.defaultWaterAmount

  // Set product and water units
  document.getElementById("product-unit").value = product.defaultDosageUnit
  document.getElementById("water-unit").value = product.defaultWaterUnit

  // Update ratio labels
  updateRatioLabels(product.defaultDosageUnit, product.defaultWaterUnit)

  // Update ratio fields
  const ratio = product.defaultDosage / product.defaultWaterAmount
  document.getElementById("ratio").value = ratio.toFixed(2)
  document.getElementById("ratio-2").value = ratio.toFixed(2)

  // Set cap size if available
  if (product.capSize) {
    document.getElementById("cap-size").value = product.capSize.fullCapML
  }

  // Set scoop size if available
  if (product.scoopSize) {
    document.getElementById("scoop-size").value = product.scoopSize
  }
}

// Function to perform the calculation
function performCalculation() {
  console.log("Performing calculation")

  // Get selected application method
  const applicationMethod = document.getElementById("application-method").value

  // Perform calculation based on application method
  if (applicationMethod === "water_mixing") {
    calculateWaterMixing()
  } else if (applicationMethod === "direct_application") {
    calculateDirectApplication()
  } else if (applicationMethod === "water_treatment") {
    calculateWaterTreatment()
  }
}

// Function to calculate water mixing
function calculateWaterMixing() {
  console.log("Calculating water mixing")

  // Get values from input fields
  const productAmount = Number.parseFloat(document.getElementById("product-amount").value)
  const waterAmount = Number.parseFloat(document.getElementById("water-amount").value)
  const productUnit = document.getElementById("product-unit").value
  const waterUnit = document.getElementById("water-unit").value

  // Perform calculation
  const ratio = productAmount / waterAmount

  // Display results
  document.getElementById("water-mixing-result").textContent =
    `Use ${productAmount} ${productUnit} per ${waterAmount} ${waterUnit} (Ratio: 1:${ratio.toFixed(2)})`
}

// Function to calculate direct application
function calculateDirectApplication() {
  console.log("Calculating direct application")

  // Get values from input fields
  const areaWidth = Number.parseFloat(document.getElementById("area-width").value)
  const areaLength = Number.parseFloat(document.getElementById("area-length").value)
  const areaRadius = Number.parseFloat(document.getElementById("area-radius").value)
  const productDosage = Number.parseFloat(document.getElementById("product-dosage").value)
  const dosageUnit = document.getElementById("dosage-unit").value

  // Calculate area
  let area = 0
  if (document.getElementById("area-shape-rectangle").checked) {
    area = areaWidth * areaLength
  } else if (document.getElementById("area-shape-circle").checked) {
    area = Math.PI * areaRadius * areaRadius
  }

  // Calculate product amount
  const productAmount = area * productDosage

  // Display results
  document.getElementById("direct-application-result").textContent =
    `Apply ${productAmount.toFixed(2)} ${dosageUnit} over ${area.toFixed(2)} square metres`
}

// Function to calculate water treatment
function calculateWaterTreatment() {
  console.log("Calculating water treatment")

  // Get values from input fields
  const containerWidth = Number.parseFloat(document.getElementById("container-width").value)
  const containerLength = Number.parseFloat(document.getElementById("container-length").value)
  const containerDepth = Number.parseFloat(document.getElementById("container-depth").value)
  const containerRadius = Number.parseFloat(document.getElementById("container-radius").value)
  const containerDepthCircular = Number.parseFloat(document.getElementById("container-depth-circular").value)
  const productDosage = Number.parseFloat(document.getElementById("product-dosage-water").value)
  const dosageUnit = document.getElementById("dosage-unit-water").value

  // Calculate volume
  let volume = 0
  if (document.getElementById("container-shape-rectangular").checked) {
    volume = containerWidth * containerLength * containerDepth
  } else if (document.getElementById("container-shape-circular").checked) {
    volume = Math.PI * containerRadius * containerRadius * containerDepthCircular
  }

  // Calculate product amount
  const productAmount = volume * productDosage

  // Display results
  document.getElementById("water-treatment-result").textContent =
    `Add ${productAmount.toFixed(2)} ${dosageUnit} to ${volume.toFixed(2)} cubic metres of water`
}

// Test Runner
const TestRunner = {
  runAllTests: function (runFullTest) {
    console.log("Running all tests")

    // Get all products
    const allProducts = [...COMMON_PRODUCTS, ...AREA_TREATMENT_PRODUCTS, ...WATER_TREATMENT_PRODUCTS]

    // Filter products for quick test
    const productsToTest = runFullTest ? allProducts : this.getSampleProducts(allProducts, 5)

    // Initialize test results
    let testResults = ""
    let passedCount = 0
    let failedCount = 0

    // Get progress bar elements
    const progressBar = document.getElementById("test-progress-bar")
    const progressText = document.getElementById("test-progress-text")

    // Loop through products and run tests
    for (let i = 0; i < productsToTest.length; i++) {
      const product = productsToTest[i]

      // Run tests for the product
      const result = this.runTestsForProduct(product)

      // Update test results
      testResults += result.message + "\n"

      // Update counts
      if (result.passed) {
        passedCount++
      } else {
        failedCount++
      }

      // Update progress bar
      const progress = ((i + 1) / productsToTest.length) * 100
      if (progressBar && progressText) {
        progressBar.style.width = progress + "%"
        progressText.textContent = progress.toFixed(0) + "%"
      }
    }

    // Display test results
    testResults += `\nTotal Passed: ${passedCount}, Total Failed: ${failedCount}`
    document.getElementById("test-results").textContent = testResults
  },

  getSampleProducts: (products, sampleSize) => {
    const shuffled = products.sort(() => 0.5 - Math.random())
    return shuffled.slice(0, sampleSize)
  },

  runTestsForProduct: (product) => {
    console.log(`Running tests for product: ${product.name}`)

    // Initialize test result
    const testResult = {
      passed: true,
      message: `Testing product: ${product.name}`,
    }

    // Test cases
    try {
      // Test case 1: Check if default dosage and water amount are numbers
      if (typeof product.defaultDosage !== "number" || typeof product.defaultWaterAmount !== "number") {
        testResult.passed = false
        testResult.message += "\n- Test Case 1 Failed: Default dosage and water amount must be numbers"
      }

      // Test case 2: Check if default dosage and water amount are positive
      if (product.defaultDosage <= 0 || product.defaultWaterAmount <= 0) {
        testResult.passed = false
        testResult.message += "\n- Test Case 2 Failed: Default dosage and water amount must be positive"
      }

      // Test case 3: Check if measurement type is valid
      const validMeasurementTypes = ["volume", "weight", "cap"]
      if (!validMeasurementTypes.includes(product.measurementType)) {
        testResult.passed = false
        testResult.message += "\n- Test Case 3 Failed: Invalid measurement type"
      }

      // Test case 4: Check if application method is valid
      const validApplicationMethods = ["water_mixing", "direct_application", "water_treatment"]
      if (!validApplicationMethods.includes(product.applicationMethod)) {
        testResult.passed = false
        testResult.message += "\n- Test Case 4 Failed: Invalid application method"
      }

      // Test case 5: Check if dosage unit is valid
      const validDosageUnits = ["ml", "l", "g", "kg", "oz", "lb", "cap"]
      if (!validDosageUnits.includes(product.defaultDosageUnit)) {
        testResult.passed = false
        testResult.message += "\n- Test Case 5 Failed: Invalid dosage unit"
      }

      // Test case 6: Check if water unit is valid
      const validWaterUnits = ["ml", "l", "gal_uk", "sq_m", "sq_ft", "sq_yd", "plant"]
      if (!validWaterUnits.includes(product.defaultWaterUnit)) {
        testResult.passed = false
        testResult.message += "\n- Test Case 6 Failed: Invalid water unit"
      }

      // Test case 7: Check if instructions are not empty
      if (!product.instructions) {
        testResult.passed = false
        testResult.message += "\n- Test Case 7 Failed: Instructions cannot be empty"
      }

      // Test case 8: Check if product name is not empty
      if (!product.name) {
        testResult.passed = false
        testResult.message += "\n- Test Case 8 Failed: Product name cannot be empty"
      }

      // Test case 9: Check if product type is not empty
      if (!product.type) {
        testResult.passed = false
        testResult.message += "\n- Test Case 9 Failed: Product type cannot be empty"
      }

      // Test case 10: Check if product id is not empty
      if (!product.id) {
        testResult.passed = false
        testResult.message += "\n- Test Case 10 Failed: Product id cannot be empty"
      }
    } catch (error) {
      testResult.passed = false
      testResult.message += `\n- An error occurred during testing: ${error.message}`
    }

    // If all tests passed, update message
    if (testResult.passed) {
      testResult.message += "\n- All tests passed!"
    }

    return testResult
  },
}

// Enhanced Test Runner
const EnhancedTestRunner = {
  runAllTests: function (runFullTest) {
    console.log("Running all tests")

    // Get all products
    const allProducts = [...COMMON_PRODUCTS, ...AREA_TREATMENT_PRODUCTS, ...WATER_TREATMENT_PRODUCTS]

    // Filter products for quick test
    const productsToTest = runFullTest ? allProducts : this.getSampleProducts(allProducts, 5)

    // Initialize test results
    let testResults = ""
    let passedCount = 0
    let failedCount = 0

    // Get progress bar elements
    const progressBar = document.getElementById("test-progress-bar")
    const progressText = document.getElementById("test-progress-text")

    // Loop through products and run tests
    for (let i = 0; i < productsToTest.length; i++) {
      const product = productsToTest[i]

      // Run tests for the product
      const result = this.runTestsForProduct(product)

      // Update test results
      testResults += result.message + "\n"

      // Update counts
      if (result.passed) {
        passedCount++
      } else {
        failedCount++
      }

      // Update progress bar
      const progress = ((i + 1) / productsToTest.length) * 100
      if (progressBar && progressText) {
        progressBar.style.width = progress + "%"
        progressText.textContent = progress.toFixed(0) + "%"
      }
    }

    // Display test results
    testResults += `\nTotal Passed: ${passedCount}, Total Failed: ${failedCount}`
    document.getElementById("test-results").textContent = testResults
  },

  getSampleProducts: (products, sampleSize) => {
    const shuffled = products.sort(() => 0.5 - Math.random())
    return shuffled.slice(0, sampleSize)
  },

  runTestsForProduct: (product) => {
    console.log(`Running tests for product: ${product.name}`)

    // Initialize test result
    const testResult = {
      passed: true,
      message: `Testing product: ${product.name}`,
    }

    // Test cases
    try {
      // Test case 1: Check if default dosage and water amount are numbers
      if (typeof product.defaultDosage !== "number" || typeof product.defaultWaterAmount !== "number") {
        testResult.passed = false
        testResult.message += "\n- Test Case 1 Failed: Default dosage and water amount must be numbers"
      }

      // Test case 2: Check if default dosage and water amount are positive
      if (product.defaultDosage <= 0 || product.defaultWaterAmount <= 0) {
        testResult.passed = false
        testResult.message += "\n- Test Case 2 Failed: Default dosage and water amount must be positive"
      }

      // Test case 3: Check if measurement type is valid
      const validMeasurementTypes = ["volume", "weight", "cap"]
      if (!validMeasurementTypes.includes(product.measurementType)) {
        testResult.passed = false
        testResult.message += "\n- Test Case 3 Failed: Invalid measurement type"
      }

      // Test case 4: Check if application method is valid
      const validApplicationMethods = ["water_mixing", "direct_application", "water_treatment"]
      if (!validApplicationMethods.includes(product.applicationMethod)) {
        testResult.passed = false
        testResult.message += "\n- Test Case 4 Failed: Invalid application method"
      }

      // Test case 5: Check if dosage unit is valid
      const validDosageUnits = ["ml", "l", "g", "kg", "oz", "lb", "cap"]
      if (!validDosageUnits.includes(product.defaultDosageUnit)) {
        testResult.passed = false
        testResult.message += "\n- Test Case 5 Failed: Invalid dosage unit"
      }

      // Test case 6: Check if water unit is valid
      const validWaterUnits = ["ml", "l", "gal_uk", "sq_m", "sq_ft", "sq_yd", "plant"]
      if (!validWaterUnits.includes(product.defaultWaterUnit)) {
        testResult.passed = false
        testResult.message += "\n- Test Case 6 Failed: Invalid water unit"
      }

      // Test case 7: Check if instructions are not empty
      if (!product.instructions) {
        testResult.passed = false
        testResult.message += "\n- Test Case 7 Failed: Instructions cannot be empty"
      }

      // Test case 8: Check if product name is not empty
      if (!product.name) {
        testResult.passed = false
        testResult.message += "\n- Test Case 8 Failed: Product name cannot be empty"
      }

      // Test case 9: Check if product type is not empty
      if (!product.type) {
        testResult.passed = false
        testResult.message += "\n- Test Case 9 Failed: Product type cannot be empty"
      }

      // Test case 10: Check if product id is not empty
      if (!product.id) {
        testResult.passed = false
        testResult.message += "\n- Test Case 10 Failed: Product id cannot be empty"
      }
    } catch (error) {
      testResult.passed = false
      testResult.message += `\n- An error occurred during testing: ${error.message}`
    }

    // If all tests passed, update message
    if (testResult.passed) {
      testResult.message += "\n- All tests passed!"
    }

    return testResult
  },
}
