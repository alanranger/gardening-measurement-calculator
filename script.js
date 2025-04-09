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

  // Debug panel toggle
  const debugTrigger = document.getElementById("debug-trigger")
  const debugContent = document.getElementById("debug-content")

  if (debugTrigger && debugContent) {
    debugTrigger.addEventListener("click", function () {
      debugContent.classList.toggle("hidden")
      const icon = this.querySelector(".icon")
      if (icon) {
        icon.textContent = debugContent.classList.contains("hidden") ? "▼" : "▲"
      }
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

  // Also add event listeners to update the ratio when water units change
  // Add this to the setupEventListeners function:

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

  // Initial setup
  showAppropriateCalculator(applicationMethodSelect.value)
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
    if (product.capSize && product.capSize.fullCapML) {
      document.getElementById("cap-size").value = product.capSize.fullCapML
    }
  } else {
    document.getElementById("cap-size-group").classList.add("hidden")
  }

  // Set scoop information if available
  const hasScoopRadios = document.querySelectorAll('input[name="has-scoop"]')
  if (product.hasScoop) {
    hasScoopRadios[0].checked = true // Yes
    document.getElementById("scoop-size-group").classList.remove("hidden")
    document.getElementById("scoop-size").value = product.scoopSize || 5
    const scoopUnitSelect = document.getElementById("scoop-unit")
    if (scoopUnitSelect) {
      for (let i = 0; i < scoopUnitSelect.options.length; i++) {
        if (scoopUnitSelect.options[i].value === product.scoopUnit) {
          scoopUnitSelect.selectedIndex = i
          break
        }
      }
    }
  } else {
    hasScoopRadios[1].checked = true // No
    document.getElementById("scoop-size-group").classList.add("hidden")
  }

  // Set default dosage and water amount based on application method
  if (product.applicationMethod === "water_mixing") {
    // Set product amount
    document.getElementById("product-amount").value = product.defaultDosage
    const productUnitSelect = document.getElementById("product-unit")
    if (productUnitSelect) {
      for (let i = 0; i < productUnitSelect.options.length; i++) {
        if (productUnitSelect.options[i].value === product.defaultDosageUnit) {
          productUnitSelect.selectedIndex = i
          break
        }
      }
    }

    // Set water amount
    document.getElementById("water-amount").value = product.defaultWaterAmount
    const waterUnitSelect = document.getElementById("water-unit")
    if (waterUnitSelect) {
      for (let i = 0; i < waterUnitSelect.options.length; i++) {
        if (waterUnitSelect.options[i].value === product.defaultWaterUnit) {
          waterUnitSelect.selectedIndex = i
          break
        }
      }
    }

    // Set ratio fields based on product's default dosage and water amount
    if (product.applicationMethod === "water_mixing") {
      // Calculate the ratio based on product's default values
      const defaultRatio = product.defaultDosage / product.defaultWaterAmount

      // Set ratio for water_to_product mode
      const ratioField = document.getElementById("ratio")
      if (ratioField) {
        // Convert ratio to match the selected water unit
        let convertedRatio = defaultRatio
        const waterUnit2 = document.getElementById("water-unit-2").value

        if (waterUnit2 === "gal_uk" && product.defaultWaterUnit === "l") {
          convertedRatio = defaultRatio * 4.55 // Convert from per liter to per gallon
        } else if (waterUnit2 === "l" && product.defaultWaterUnit === "gal_uk") {
          convertedRatio = defaultRatio / 4.55 // Convert from per gallon to per liter
        } else if (waterUnit2 === "ml" && product.defaultWaterUnit === "l") {
          convertedRatio = defaultRatio / 1000 // Convert from per liter to per ml
        }

        ratioField.value = convertedRatio.toFixed(2)
      }

      // Set ratio for ratio_based mode
      const ratioField2 = document.getElementById("ratio-2")
      if (ratioField2) {
        // Convert ratio to match the selected water unit
        let convertedRatio = defaultRatio
        const targetUnit = document.getElementById("target-unit").value

        if (targetUnit === "gal_uk" && product.defaultWaterUnit === "l") {
          convertedRatio = defaultRatio * 4.55 // Convert from per liter to per gallon
        } else if (targetUnit === "l" && product.defaultWaterUnit === "gal_uk") {
          convertedRatio = defaultRatio / 4.55 // Convert from per gallon to per liter
        } else if (targetUnit === "ml" && product.defaultWaterUnit === "l") {
          convertedRatio = defaultRatio / 1000 // Convert from per liter to per ml
        }

        ratioField2.value = convertedRatio.toFixed(2)
      }
    }
  } else if (product.applicationMethod === "direct_application") {
    // Set application rate
    document.getElementById("application-rate").value = product.defaultDosage
    const rateUnitSelect = document.getElementById("rate-unit")
    if (rateUnitSelect) {
      for (let i = 0; i < rateUnitSelect.options.length; i++) {
        if (rateUnitSelect.options[i].value === product.defaultDosageUnit) {
          rateUnitSelect.selectedIndex = i
          break
        }
      }
    }

    // Set area unit
    const rateAreaUnitSelect = document.getElementById("rate-area-unit")
    if (rateAreaUnitSelect) {
      for (let i = 0; i < rateAreaUnitSelect.options.length; i++) {
        if (rateAreaUnitSelect.options[i].value === product.defaultWaterUnit) {
          rateAreaUnitSelect.selectedIndex = i
          break
        }
      }
    }
  } else if (product.applicationMethod === "water_treatment") {
    // Set dosage amount
    document.getElementById("dosage-amount").value = product.defaultDosage
    const dosageUnitSelect = document.getElementById("dosage-unit")
    if (dosageUnitSelect) {
      for (let i = 0; i < dosageUnitSelect.options.length; i++) {
        if (dosageUnitSelect.options[i].value === product.defaultDosageUnit) {
          dosageUnitSelect.selectedIndex = i
          break
        }
      }
    }
  }
}

// Function to perform calculation based on selected application method
function performCalculation() {
  console.log("Performing calculation")

  // Get the selected application method
  const applicationMethod = document.getElementById("application-method").value

  // Perform the appropriate calculation
  if (applicationMethod === "water_mixing") {
    calculateWaterMixing()
  } else if (applicationMethod === "direct_application") {
    calculateDirectApplication()
  } else if (applicationMethod === "water_treatment") {
    calculateWaterTreatment()
  }

  // Update debug info
  updateDebugInfo()
}

// Function to calculate water mixing
function calculateWaterMixing() {
  console.log("Calculating water mixing")

  // Get calculation mode
  const calculationMode = document.querySelector('input[name="calculation-mode"]:checked').value

  // Get measurement type
  const measurementType = document.querySelector('input[name="measurement-type"]:checked').value

  // Initialize capSize variable at the top of the function
  let capSize = 10 // Default value
  if (measurementType === "cap") {
    capSize = Number.parseFloat(document.getElementById("cap-size").value)
  }

  // Get values based on calculation mode
  let productAmount, productUnit, waterAmount, waterUnit, ratio

  if (calculationMode === "product_to_water") {
    productAmount = Number.parseFloat(document.getElementById("product-amount").value)
    productUnit = document.getElementById("product-unit").value
    waterAmount = Number.parseFloat(document.getElementById("water-amount").value)
    waterUnit = document.getElementById("water-unit").value

    // Calculate ratio (product per unit of water)
    ratio = productAmount / waterAmount
  } else if (calculationMode === "water_to_product") {
    waterAmount = Number.parseFloat(document.getElementById("water-amount-2").value)
    waterUnit = document.getElementById("water-unit-2").value
    ratio = Number.parseFloat(document.getElementById("ratio").value)

    // Calculate product amount based on ratio and water amount
    // The ratio is specified in the units selected (per liter or per gallon)
    // Convert water amount to the base unit (liters) for calculation
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

    // Calculate product amount based on ratio per liter and water amount in liters
    productAmount = ratioPerLiter * waterAmountInLiters
    productUnit = measurementType === "weight" ? "g" : measurementType === "cap" ? "cap" : "ml"
  } else if (calculationMode === "ratio_based") {
    ratio = Number.parseFloat(document.getElementById("ratio-2").value)
    waterAmount = Number.parseFloat(document.getElementById("target-amount").value)
    waterUnit = document.getElementById("target-unit").value

    // Calculate product amount based on ratio and water amount
    // Convert water amount to the base unit (liters) for calculation
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

    // Calculate product amount based on ratio per liter and water amount in liters
    productAmount = ratioPerLiter * waterAmountInLiters
    productUnit = measurementType === "weight" ? "g" : measurementType === "cap" ? "cap" : "ml"
  }

  // Calculate results
  let metricResult, imperialResult, alternativeResult

  if (measurementType === "weight") {
    // Weight-based calculation
    metricResult = `${productAmount.toFixed(2)} ${productUnit} for ${waterAmount} ${waterUnit}`
    imperialResult = `${convertMetricToImperial(productAmount, productUnit).toFixed(2)} ${getImperialUnit(productUnit)} for ${convertMetricToImperial(waterAmount, waterUnit).toFixed(2)} ${getImperialUnit(waterUnit)}`
    alternativeResult = `${convertToTeaspoons(productAmount, productUnit).toFixed(2)} teaspoons for ${waterAmount} ${waterUnit}`
  } else if (measurementType === "volume") {
    // Volume-based calculation
    metricResult = `${productAmount.toFixed(2)} ${productUnit} for ${waterAmount} ${waterUnit}`
    imperialResult = `${convertMetricToImperial(productAmount, productUnit).toFixed(2)} ${getImperialUnit(productUnit)} for ${convertMetricToImperial(waterAmount, waterUnit).toFixed(2)} ${getImperialUnit(waterUnit)}`
    alternativeResult = `${convertToTeaspoons(productAmount, productUnit).toFixed(2)} teaspoons for ${waterAmount} ${waterUnit}`
  } else if (measurementType === "cap") {
    // Cap-based calculation
    const mlAmount = productAmount * capSize

    metricResult = `${productAmount.toFixed(2)} caps (${mlAmount.toFixed(2)} ml) for ${waterAmount} ${waterUnit}`
    imperialResult = `${productAmount.toFixed(2)} caps (${convertMetricToImperial(mlAmount, "ml").toFixed(2)} fl oz) for ${convertMetricToImperial(waterAmount, waterUnit).toFixed(2)} ${getImperialUnit(waterUnit)}`
    alternativeResult = `${convertToTeaspoons(mlAmount, "ml").toFixed(2)} teaspoons for ${waterAmount} ${waterUnit}`

    // Update cap result
    document.getElementById("cap-result").textContent = `${productAmount.toFixed(2)} caps (${mlAmount.toFixed(2)} ml)`
    document.getElementById("cap-result-card").classList.remove("hidden")
  }

  // Check if product has a scoop
  const hasScoop = document.querySelector('input[name="has-scoop"]:checked').value === "yes"
  if (hasScoop) {
    const scoopSize = Number.parseFloat(document.getElementById("scoop-size").value)
    const scoopUnit = document.getElementById("scoop-unit").value
    const scoopAmount = productAmount / scoopSize

    document.getElementById("scoop-result").textContent =
      `${scoopAmount.toFixed(2)} scoops (${productAmount.toFixed(2)} ${productUnit})`
    document.getElementById("scoop-result-card").classList.remove("hidden")
  } else {
    document.getElementById("scoop-result-card").classList.add("hidden")
  }

  // Calculate for standard watering can (8-10 litres)
  const wateringCanSize = 9 // Average 9 litres
  let wateringCanAmount

  // Calculate the amount needed for a watering can based on the ratio
  // Convert to a consistent unit (liters) for calculation
  let ratioPerLiter
  if (waterUnit === "l") {
    ratioPerLiter = ratio
  } else if (waterUnit === "ml") {
    ratioPerLiter = ratio * 1000 // Convert from per ml to per liter
  } else if (waterUnit === "gal_uk") {
    ratioPerLiter = ratio / 4.55 // Convert from per gallon to per liter
  }

  wateringCanAmount = ratioPerLiter * wateringCanSize

  // Format the watering can result based on measurement type
  let wateringCanResult
  if (measurementType === "cap") {
    wateringCanResult = `${wateringCanAmount.toFixed(2)} caps (${(wateringCanAmount * capSize).toFixed(2)} ml)`
  } else {
    wateringCanResult = `${wateringCanAmount.toFixed(2)} ${productUnit}`
  }

  document.getElementById("watering-can-title").textContent = `For a ${wateringCanSize} litre watering can:`
  document.getElementById("watering-can-result").textContent = wateringCanResult
  document.getElementById("watering-can-info").textContent =
    `Based on the ratio of ${ratioPerLiter.toFixed(2)} ${productUnit} per litre`
  document.getElementById("watering-can-section").classList.remove("hidden")

  // Add a warning if the ratio significantly differs from the product's recommended ratio
  if (calculationMode === "water_to_product" || calculationMode === "ratio_based") {
    // Get the current product
    const productNameSelect = document.getElementById("product-name-select")
    const selectedId = productNameSelect.value

    if (selectedId) {
      // Find the selected product
      const allProducts = [...COMMON_PRODUCTS, ...AREA_TREATMENT_PRODUCTS, ...WATER_TREATMENT_PRODUCTS]
      const selectedProduct = allProducts.find((p) => p.id === selectedId)

      if (selectedProduct) {
        // Calculate the recommended ratio based on product's default values
        const recommendedRatio = selectedProduct.defaultDosage / selectedProduct.defaultWaterAmount

        // Convert to the same unit for comparison
        let recommendedRatioPerLiter = recommendedRatio
        if (selectedProduct.defaultWaterUnit === "gal_uk") {
          recommendedRatioPerLiter = recommendedRatio / 4.55 // Convert from per gallon to per liter
        } else if (selectedProduct.defaultWaterUnit === "ml") {
          recommendedRatioPerLiter = recommendedRatio * 1000 // Convert from per ml to per liter
        }

        // Compare with the current ratio
        const difference = Math.abs(ratioPerLiter - recommendedRatioPerLiter) / recommendedRatioPerLiter

        if (difference > 0.2) {
          // If more than 20% difference
          // Create or update warning message
          let warningElement = document.getElementById("ratio-warning")
          if (!warningElement) {
            warningElement = document.createElement("div")
            warningElement.id = "ratio-warning"
            warningElement.className = "beta-warning"
            const resultsContainer = document.querySelector("#water-mixing-results .results")
            resultsContainer.insertBefore(warningElement, resultsContainer.firstChild)
          }

          warningElement.innerHTML = `
            <p><strong>Warning:</strong> The ratio you entered (${ratioPerLiter.toFixed(2)} ${productUnit} per liter) 
            differs significantly from the recommended ratio (${recommendedRatioPerLiter.toFixed(2)} ${productUnit} per liter) 
            for this product. Please check the product instructions.</p>
          `
        } else {
          // Remove warning if it exists
          const warningElement = document.getElementById("ratio-warning")
          if (warningElement) {
            warningElement.remove()
          }
        }
      }
    }
  }

  // Update results
  document.getElementById("metric-result").textContent = metricResult
  document.getElementById("imperial-result").textContent = imperialResult
  document.getElementById("alternative-result").textContent = alternativeResult

  // Add a result card that matches exactly what the user requested
  const userRequestedResult = document.createElement("div")
  userRequestedResult.className = "result-card"
  userRequestedResult.innerHTML = `
    <h3>Your Requested Amount</h3>
    <p>${productAmount.toFixed(2)} ${productUnit} for ${waterAmount} ${waterUnit}</p>
    <p class="hint">Based on ${ratio} ${productUnit} per ${waterUnit}</p>
  `

  // Find the results container and add the new card
  const resultsContainer = document.querySelector("#water-mixing-results .results")
  // Remove any previous "Your Requested Amount" cards
  const existingRequestedCards = resultsContainer.querySelectorAll(".result-card h3")
  existingRequestedCards.forEach((h3) => {
    if (h3.textContent === "Your Requested Amount") {
      h3.parentElement.remove()
    }
  })
  resultsContainer.appendChild(userRequestedResult)
}

// Function to calculate direct application
function calculateDirectApplication() {
  console.log("Calculating direct application")

  // Get area shape
  const areaShape = document.querySelector('input[name="area-shape"]:checked').value

  // Get application rate
  const applicationRate = Number.parseFloat(document.getElementById("application-rate").value)
  const rateUnit = document.getElementById("rate-unit").value
  const rateAreaUnit = document.getElementById("rate-area-unit").value

  // Get area dimensions
  let area
  if (areaShape === "rectangle") {
    const length = Number.parseFloat(document.getElementById("length").value)
    const width = Number.parseFloat(document.getElementById("width").value)
    area = length * width
  } else if (areaShape === "circle") {
    const diameter = Number.parseFloat(document.getElementById("diameter").value)
    const radius = diameter / 2
    area = Math.PI * radius * radius
  }

  // Calculate product amount
  let productAmount
  if (rateAreaUnit === "sq_m") {
    productAmount = applicationRate * area
  } else if (rateAreaUnit === "sq_ft") {
    productAmount = applicationRate * area
  } else if (rateAreaUnit === "sq_yd") {
    productAmount = applicationRate * area
  } else if (rateAreaUnit === "plant") {
    productAmount = applicationRate * area // Assuming area represents number of plants
  }

  // Calculate results
  const metricResult = `${productAmount.toFixed(2)} ${rateUnit} for ${area.toFixed(2)} sq metres`
  const imperialResult = `${convertMetricToImperial(productAmount, rateUnit).toFixed(2)} ${getImperialUnit(rateUnit)} for ${convertMetricToImperial(area, "sq_m").toFixed(2)} sq ft`
  const alternativeResult = `${convertToTeaspoons(productAmount, rateUnit).toFixed(2)} teaspoons for ${area.toFixed(2)} sq metres`

  // Update results
  document.getElementById("total-amount-result").textContent = `${productAmount.toFixed(2)} ${rateUnit}`
  document.getElementById("alternative-amount-result").textContent = alternativeResult
  document.getElementById("metric-rate-result").textContent = `${applicationRate.toFixed(2)} ${rateUnit} per sq metre`
  document.getElementById("imperial-rate-result").textContent =
    `${convertMetricToImperial(applicationRate, rateUnit).toFixed(2)} ${getImperialUnit(rateUnit)} per sq foot`
}

// Function to calculate water treatment
function calculateWaterTreatment() {
  console.log("Calculating water treatment")

  // Get container shape
  const containerShape = document.querySelector('input[name="container-shape"]:checked').value

  // Get dimension unit
  const dimensionUnit = document.getElementById("dimension-unit").value
  let conversionFactor = 1

  // Set conversion factor based on dimension unit
  if (dimensionUnit === "cm") {
    conversionFactor = 0.01 // cm to m
  } else if (dimensionUnit === "in") {
    conversionFactor = 0.0254 // inches to m
  } else if (dimensionUnit === "ft") {
    conversionFactor = 0.3048 // feet to m
  }

  // Get dosage amount
  const dosageAmount = Number.parseFloat(document.getElementById("dosage-amount").value)
  const dosageUnit = document.getElementById("dosage-unit").value

  // Get container dimensions and calculate volume
  let volume
  if (containerShape === "rectangular") {
    const length = Number.parseFloat(document.getElementById("container-length").value) * conversionFactor
    const width = Number.parseFloat(document.getElementById("container-width").value) * conversionFactor
    const height = Number.parseFloat(document.getElementById("container-height").value) * conversionFactor
    volume = length * width * height // Result in cubic meters
    volume *= 1000 // Convert cubic meters to liters
  } else if (containerShape === "circular") {
    const diameter = Number.parseFloat(document.getElementById("container-diameter").value) * conversionFactor
    const radius = diameter / 2
    const depth = Number.parseFloat(document.getElementById("container-depth").value) * conversionFactor
    volume = Math.PI * radius * radius * depth // Result in cubic meters
    volume *= 1000 // Convert cubic meters to liters
  }

  // Get water volume (if manually entered)
  const manualWaterVolume = Number.parseFloat(document.getElementById("water-volume").value)
  const waterVolumeUnit = document.getElementById("water-volume-unit").value

  // Determine which volume to use
  let finalVolume
  if (containerShape === "rectangular" || containerShape === "circular") {
    finalVolume = volume
    // Update the calculated volume display
    document.getElementById("volume-result").textContent = `${volume.toFixed(2)} litres`
    document.getElementById("volume-conversion").textContent =
      `(${(volume / 1000).toFixed(2)} cubic meters, ${(volume * 0.22).toFixed(2)} gallons UK)`
    document.getElementById("calculated-volume").classList.remove("hidden")
  } else {
    // Convert manual water volume to liters if needed
    if (waterVolumeUnit === "ml") {
      finalVolume = manualWaterVolume / 1000
    } else if (waterVolumeUnit === "gal_uk") {
      finalVolume = manualWaterVolume * 4.55
    } else {
      finalVolume = manualWaterVolume
    }
  }

  // Calculate product amount (dosage is per 1000 liters)
  const productAmount = (dosageAmount * finalVolume) / 1000

  // Calculate results
  const metricResult = `${productAmount.toFixed(2)} ${dosageUnit} for ${finalVolume.toFixed(2)} litres`
  const imperialResult = `${convertMetricToImperial(productAmount, dosageUnit).toFixed(2)} ${getImperialUnit(dosageUnit)} for ${(finalVolume * 0.22).toFixed(2)} gallons (UK)`
  const alternativeResult = `${convertToTeaspoons(productAmount, dosageUnit).toFixed(2)} teaspoons for ${finalVolume.toFixed(2)} litres`

  // Update results
  document.getElementById("water-total-amount-result").textContent = `${productAmount.toFixed(2)} ${dosageUnit}`
  document.getElementById("water-metric-dosage-result").textContent =
    `${dosageAmount.toFixed(2)} ${dosageUnit} per 1000 litres`
  document.getElementById("water-imperial-dosage-result").textContent =
    `${(dosageAmount * 4.55).toFixed(2)} ${dosageUnit} per 1000 gallons (UK)`
  document.getElementById("water-alternative-dosage-result").textContent = alternativeResult
}

// Function to convert metric to imperial units
function convertMetricToImperial(value, unit) {
  if (unit === "g") {
    return value * 0.035274 // grams to ounces
  } else if (unit === "kg") {
    return value * 2.20462 // kilograms to pounds
  } else if (unit === "ml") {
    return value * 0.033814 // millilitres to fluid ounces
  } else if (unit === "l") {
    return value * 0.219969 // litres to gallons (UK)
  } else if (unit === "sq_m") {
    return value * 10.764 // square metres to square feet
  }
  return value
}

// Function to get imperial unit
function getImperialUnit(unit) {
  if (unit === "g") {
    return "oz"
  } else if (unit === "kg") {
    return "lb"
  } else if (unit === "ml") {
    return "fl oz"
  } else if (unit === "l") {
    return "gallons (UK)"
  } else if (unit === "sq_m") {
    return "sq ft"
  }
  return unit
}

// Function to convert to teaspoons
function convertToTeaspoons(value, unit) {
  if (unit === "g") {
    return value * 0.202884 // grams to teaspoons
  } else if (unit === "ml") {
    return value * 0.202884 // millilitres to teaspoons
  }
  return value
}

// Function to update debug info
function updateDebugInfo() {
  const debugInfo = document.getElementById("debug-info")
  if (debugInfo) {
    // Get application method
    const applicationMethod = document.getElementById("application-method").value

    // Get calculation mode
    const calculationMode = document.querySelector('input[name="calculation-mode"]:checked')?.value || "N/A"

    // Get measurement type
    const measurementType = document.querySelector('input[name="measurement-type"]:checked')?.value || "N/A"

    // Get product info
    const productType = document.getElementById("product-type").value
    const productName = document.getElementById("product-name-select").value

    // Get values based on calculation mode
    let productAmount, productUnit, waterAmount, waterUnit, ratio, ratioPerLiter

    if (calculationMode === "product_to_water") {
      productAmount = document.getElementById("product-amount").value
      productUnit = document.getElementById("product-unit").value
      waterAmount = document.getElementById("water-amount").value
      waterUnit = document.getElementById("water-unit").value
      ratio = productAmount / waterAmount

      // Calculate ratio per liter for consistent reporting
      if (waterUnit === "l") {
        ratioPerLiter = ratio
      } else if (waterUnit === "ml") {
        ratioPerLiter = ratio * 1000 // Convert from per ml to per liter
      } else if (waterUnit === "gal_uk") {
        ratioPerLiter = ratio / 4.55 // Convert from per gallon to per liter
      }
    } else if (calculationMode === "water_to_product") {
      waterAmount = document.getElementById("water-amount-2").value
      waterUnit = document.getElementById("water-unit-2").value
      ratio = document.getElementById("ratio").value

      // Calculate ratio per liter for consistent reporting
      if (waterUnit === "l") {
        ratioPerLiter = ratio
      } else if (waterUnit === "ml") {
        ratioPerLiter = ratio * 1000 // Convert from per ml to per liter
      } else if (waterUnit === "gal_uk") {
        ratioPerLiter = ratio / 4.55 // Convert from per gallon to per liter
      }

      // Convert water amount to liters for calculation
      let waterAmountInLiters = waterAmount
      if (waterUnit === "gal_uk") {
        waterAmountInLiters = waterAmount * 4.55 // Convert UK gallons to liters
      } else if (waterUnit === "ml") {
        waterAmountInLiters = waterAmount / 1000 // Convert ml to liters
      }

      productAmount = ratioPerLiter * waterAmountInLiters
      productUnit = measurementType === "weight" ? "g" : measurementType === "cap" ? "cap" : "ml"
    } else if (calculationMode === "ratio_based") {
      ratio = document.getElementById("ratio-2").value
      waterAmount = document.getElementById("target-amount").value
      waterUnit = document.getElementById("target-unit").value

      // Calculate ratio per liter for consistent reporting
      if (waterUnit === "l") {
        ratioPerLiter = ratio
      } else if (waterUnit === "ml") {
        ratioPerLiter = ratio * 1000 // Convert from per ml to per liter
      } else if (waterUnit === "gal_uk") {
        ratioPerLiter = ratio / 4.55 // Convert from per gallon to per liter
      }

      // Convert water amount to liters for calculation
      let waterAmountInLiters = waterAmount
      if (waterUnit === "gal_uk") {
        waterAmountInLiters = waterAmount * 4.55 // Convert UK gallons to liters
      } else if (waterUnit === "ml") {
        waterAmountInLiters = waterAmount / 1000 // Convert ml to liters
      }

      productAmount = ratioPerLiter * waterAmountInLiters
      productUnit = measurementType === "weight" ? "g" : measurementType === "cap" ? "cap" : "ml"
    }

    // Build debug string
    let debugString = `
      Application Method: ${applicationMethod}
      Product Type: ${productType}
      Product Name: ${productName}
      Calculation Mode: ${calculationMode}
      Measurement Type: ${measurementType}
      
      Product Amount: ${productAmount} ${productUnit}
      Water Amount: ${waterAmount} ${waterUnit}
      Ratio: ${ratio} ${productUnit} per ${waterUnit}
      Ratio (standardized): ${ratioPerLiter?.toFixed(4)} ${productUnit} per liter
    `

    // Add measurement-specific debug info
    if (measurementType === "cap") {
      const capSize = document.getElementById("cap-size").value
      debugString += `\n    Cap Size: ${capSize} ml`
    }

    // Add scoop-specific debug info
    const hasScoop = document.querySelector('input[name="has-scoop"]:checked')?.value === "yes"
    if (hasScoop) {
      const scoopSize = document.getElementById("scoop-size").value
      const scoopUnit = document.getElementById("scoop-unit").value
      debugString += `\n    Scoop Size: ${scoopSize} ${scoopUnit}`
    }

    // Add calculation summary with unit conversions
    let waterAmountInLiters = waterAmount
    if (waterUnit === "gal_uk") {
      waterAmountInLiters = waterAmount * 4.55 // Convert UK gallons to liters
    } else if (waterUnit === "ml") {
      waterAmountInLiters = waterAmount / 1000 // Convert ml to liters
    }

    debugString += `\n\nCalculation Summary:
      - User requested: ${waterAmount} ${waterUnit} (${waterAmountInLiters.toFixed(2)} liters)
      - Using ratio: ${ratio} ${productUnit} per ${waterUnit} (${ratioPerLiter?.toFixed(4)} ${productUnit} per liter)
      - Calculation: ${ratioPerLiter?.toFixed(4)} × ${waterAmountInLiters.toFixed(2)} = ${productAmount} ${productUnit}`

    debugInfo.textContent = debugString
  }
}
