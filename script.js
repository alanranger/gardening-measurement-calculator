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

// DOM Elements - Accordion
const accordionTriggers = document.querySelectorAll(".accordion-trigger")

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  initTabs()
  initGuideTabs()
  initProductCalculator()
  initAreaCalculator()
  initWaterCalculator()
  initAccordion()
})

// Initialize tabs
function initTabs() {
  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const tabId = button.getAttribute("data-tab")

      // Update active tab button
      tabButtons.forEach((btn) => btn.classList.remove("active"))
      button.classList.add("active")

      // Update active tab panel
      tabPanels.forEach((panel) => panel.classList.remove("active"))
      document.getElementById(`${tabId}-panel`).classList.add("active")
    })
  })
}

// Initialize guide tabs
function initGuideTabs() {
  guideTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const tabId = tab.getAttribute("data-guide-tab")

      // Update active guide tab
      guideTabs.forEach((t) => t.classList.remove("active"))
      tab.classList.add("active")

      // Update active guide tab panel
      guideTabPanels.forEach((panel) => panel.classList.remove("active"))
      document.getElementById(`${tabId}-panel`).classList.add("active")
    })
  })
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
    productSearchPanel.classList.toggle("hidden")
    if (!productSearchPanel.classList.contains("hidden")) {
      presetsPanel.classList.add("hidden")
      productSearchInput.focus()
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
    presetsPanel.classList.toggle("hidden")
    if (!presetsPanel.classList.contains("hidden")) {
      productSearchPanel.classList.add("hidden")
      loadPresets("gardenerPresets", presetsList, handlePresetSelect)
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
    areaProductSearchPanel.classList.toggle("hidden")
    if (!areaProductSearchPanel.classList.contains("hidden")) {
      areaPresetsPanel.classList.add("hidden")
      areaProductSearchInput.focus()
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
    areaPresetsPanel.classList.toggle("hidden")
    if (!areaPresetsPanel.classList.contains("hidden")) {
      areaProductSearchPanel.classList.add("hidden")
      loadPresets("gardenerAreaPresets", areaPresetsList, handleAreaPresetSelect)
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
    waterProductSearchPanel.classList.toggle("hidden")
    if (!waterProductSearchPanel.classList.contains("hidden")) {
      waterPresetsPanel.classList.add("hidden")
      waterProductSearchInput.focus()
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
    waterPresetsPanel.classList.toggle("hidden")
    if (!waterPresetsPanel.classList.contains("hidden")) {
      waterProductSearchPanel.classList.add("hidden")
      loadPresets("gardenerWaterPresets", waterPresetsList, handleWaterPresetSelect)
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
  waterVolumeUnitSelect.value = preset.waterUnit

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
    waterUnit: waterVolumeUnitSelect.value,
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
  const totalAmount = ""
  if (dosageUnit === "ml" || dosageUnit === "l") {
  }

