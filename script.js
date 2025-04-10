// ===== START OF SCRIPT.JS PART 1 =====
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
// ===== END OF SCRIPT.JS PART 1 =====
// ===== START OF PART TWO =====

// Test Circle Area Calculation
async testCircleAreaCalculation(product) {
  return new Promise((resolve) => {
    // Set circle shape
    const circleRadio = document.querySelector('input[name="area-shape"][value="circle"]')
    if (circleRadio) {
      circleRadio.checked = true
      circleRadio.dispatchEvent(new Event("change"))
    }

    // Set dimensions
    document.getElementById("diameter").value = "4"
    document.getElementById("circle-unit").value = "m"

    // Click calculate
    document.getElementById("calculate-btn").click()

    setTimeout(() => {
      const totalAmountResult = document.getElementById("total-amount-result").textContent
      const area = Math.PI * 2 * 2 // π × r²
      const expectedAmount = product.defaultDosage * area

      // Check if the result is approximately correct (within 5%)
      const resultNumber = Number.parseFloat(totalAmountResult.replace(/[^\d.-]/g, ""))
      const percentDifference = Math.abs((resultNumber - expectedAmount) / expectedAmount)
      const passed = percentDifference < 0.05

      resolve({
        passed,
        message: `Expected ~${expectedAmount.toFixed(1)} ${product.defaultDosageUnit}, Got: ${totalAmountResult}`,
      })
    }, 300)
  })
},

// Test Rectangular Container Calculation
async testRectangularContainerCalculation(product) {
  return new Promise((resolve) => {
    // Set rectangular shape
    const rectangularRadio = document.querySelector('input[name="container-shape"][value="rectangular"]')
    if (rectangularRadio) {
      rectangularRadio.checked = true
      rectangularRadio.dispatchEvent(new Event("change"))
    }

    // Set dimensions
    document.getElementById("dimension-unit").value = "m"
    document.getElementById("container-length").value = "2"
    document.getElementById("container-width").value = "1"
    document.getElementById("container-height").value = "0.5"

    // Click calculate
    document.getElementById("calculate-btn").click()

    setTimeout(() => {
      const volumeResult = document.getElementById("volume-result").textContent
      const totalAmountResult = document.getElementById("water-total-amount-result").textContent

      const expectedVolume = 2 * 1 * 0.5 * 1000 // 1000 liters
      const expectedAmount = (product.defaultDosage * expectedVolume) / 1000

      // Extract numbers from the results
      const volumeNumber = Number.parseFloat(volumeResult.replace(/[^\d.-]/g, ""))
      const amountNumber = Number.parseFloat(totalAmountResult.replace(/[^\d.-]/g, ""))

      const volumePassed = Math.abs(volumeNumber - expectedVolume) / expectedVolume < 0.05
      const amountPassed = Math.abs(amountNumber - expectedAmount) / expectedAmount < 0.05

      resolve({
        passed: volumePassed && amountPassed,
        message: `Volume: ${volumeResult}, Amount: ${totalAmountResult}`,
      })
    }, 300)
  })
},

// Test Circular Container Calculation
async testCircularCalculation(product) {
  return new Promise((resolve) => {
    // Set circular shape
    const circularRadio = document.querySelector('input[name="container-shape"][value="circular"]')
    if (circularRadio) {
      circularRadio.checked = true
      circularRadio.dispatchEvent(new Event("change"))
    }

    // Set dimensions
    document.getElementById("dimension-unit").value = "m"
    document.getElementById("container-diameter").value = "2"
    document.getElementById("container-depth").value = "0.5"

    // Click calculate
    document.getElementById("calculate-btn").click()

    setTimeout(() => {
      const volumeResult = document.getElementById("volume-result").textContent
      const totalAmountResult = document.getElementById("water-total-amount-result").textContent

      const expectedVolume = Math.PI * 1 * 1 * 0.5 * 1000 // π × r² × h × 1000
      const expectedAmount = (product.defaultDosage * expectedVolume) / 1000

      // Extract numbers from the results
      const volumeNumber = Number.parseFloat(volumeResult.replace(/[^\d.-]/g, ""))
      const amountNumber = Number.parseFloat(totalAmountResult.replace(/[^\d.-]/g, ""))

      // Check if results are approximately correct (within 5%)
      const volumePercentDiff = Math.abs((volumeNumber - expectedVolume) / expectedVolume)
      const volumePassed = volumePercentDiff < 0.05

      const amountPercentDiff = Math.abs((amountNumber - expectedAmount) / expectedAmount)
      const amountPassed = amountPercentDiff < 0.05

      resolve({
        passed: volumePassed && amountPassed,
        message: `Volume: ${volumeResult}, Amount: ${totalAmountResult}`,
      })
    }, 300)
  })
},

// Test Manual Volume Entry
async testManualVolumeEntry(product) {
  return new Promise((resolve) => {
    // First, make sure we're not using a container shape
    const noneRadio = document.createElement("input")
    noneRadio.type = "radio"
    noneRadio.name = "container-shape"
    noneRadio.value = "none"
    noneRadio.checked = true
    document.body.appendChild(noneRadio)
    noneRadio.dispatchEvent(new Event("change"))

    // Set manual volume
    document.getElementById("water-volume").value = "2000"
    document.getElementById("water-volume-unit").value = "l"

    // Click calculate
    document.getElementById("calculate-btn").click()

    setTimeout(() => {
      const totalAmountResult = document.getElementById("water-total-amount-result").textContent
      const expectedAmount = (product.defaultDosage * 2000) / 1000

      // Extract number from the result
      const resultNumber = Number.parseFloat(totalAmountResult.replace(/[^\d.-]/g, ""))
      const passed = Math.abs(resultNumber - expectedAmount) / expectedAmount < 0.05

      // Clean up the temporary radio button
      document.body.removeChild(noneRadio)

      resolve({
        passed,
        message: `Expected: ${expectedAmount} ${product.defaultDosageUnit}, Got: ${totalAmountResult}`,
      })
    }, 500)
  })
},

// Helper function to log test results
logTestResult(testName, passed, message) {
  this.results.total++

  const testResults = document.getElementById("test-results")

  if (passed) {
    this.results.passed++
    if (testResults) {
      testResults.textContent += `  ✓ PASSED: ${testName}\n`
      if (message) {
        testResults.textContent += `    ${message}\n`
      }
    }
  } else {
    this.results.failed++
    if (testResults) {
      testResults.textContent += `  ✗ FAILED: ${testName}\n`
      if (message) {
        testResults.textContent += `    ${message}\n`
      }
    }
  }

  // Store test details
  this.results.testDetails.push({
    name: testName,
    passed,
    message,
  })

  // Scroll to bottom of test results
  if (testResults) {
    testResults.scrollTop = testResults.scrollHeight
  }
},

// Report final results
reportResults() {
  const passRate = ((this.results.passed / this.results.total) * 100).toFixed(2)
  const duration = (this.results.endTime - this.results.startTime) / 1000

  const testResults = document.getElementById("test-results")
  if (testResults) {
    testResults.textContent += "\n📊 TEST RESULTS SUMMARY 📊\n\n"
    testResults.textContent += `Total Tests: ${this.results.total}\n`
    testResults.textContent += `Passed Tests: ${this.results.passed}\n`
    testResults.textContent += `Failed Tests: ${this.results.failed}\n`
    testResults.textContent += `Pass Rate: ${passRate}%\n`
    testResults.textContent += `Products Tested: ${this.results.productsTested}\n`
    testResults.textContent += `Test Duration: ${duration.toFixed(2)} seconds\n\n`

    testResults.textContent += "Products by Category:\n"
    for (const [category, count] of Object.entries(this.results.productsByCategory)) {
      testResults.textContent += `  ${category}: ${count}\n`
    }

    testResults.textContent += "\nTest Completed at: " + new Date().toLocaleString()

    // Scroll to bottom of test results
    testResults.scrollTop = testResults.scrollHeight
  }
},
}

// ===== END OF PART TWO =====