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
  // Other products...
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
  // Other area products...
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
  // Other water products...
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
  liquid_fertilizer: "Typical usage: 5-10ml per litre of water",
  granular_fertilizer: "Typical usage: 1-2g per litre of water or 30-60g per sq metre",
  // Other product type hints...
}

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed")

  // Debug tab elements
  const tabButtons = document.querySelectorAll(".tab-button")
  console.log("Tab buttons found:", tabButtons.length)
  tabButtons.forEach((btn) => {
    console.log("Tab button:", btn.getAttribute("data-tab"))
  })

  const tabPanels = document.querySelectorAll(".tab-panel")
  console.log("Tab panels found:", tabPanels.length)
  tabPanels.forEach((panel) => {
    console.log("Tab panel ID:", panel.id)
  })

  // Initialize tabs with direct event listeners
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab")
      console.log("Tab clicked:", tabId)

      // Update active tab button
      document.querySelectorAll(".tab-button").forEach((btn) => {
        btn.classList.remove("active")
      })
      this.classList.add("active")

      // Update active tab panel
      document.querySelectorAll(".tab-panel").forEach((panel) => {
        panel.classList.remove("active")
      })

      const targetPanel = document.getElementById(`${tabId}-panel`)
      if (targetPanel) {
        targetPanel.classList.add("active")
        console.log("Activated panel:", targetPanel.id)
      } else {
        console.error(`Panel with ID ${tabId}-panel not found`)
      }
    })
  })

  // Initialize guide tabs with direct event listeners
  document.querySelectorAll(".guide-tab").forEach((tab) => {
    if (tab) {
      tab.addEventListener("click", function () {
        const tabId = this.getAttribute("data-guide-tab")
        console.log("Guide tab clicked:", tabId)

        // Update active guide tab
        document.querySelectorAll(".guide-tab").forEach((t) => {
          t.classList.remove("active")
        })
        this.classList.add("active")

        // Update active guide tab panel
        document.querySelectorAll(".guide-tab-panel").forEach((panel) => {
          panel.classList.remove("active")
        })

        const targetPanel = document.getElementById(`${tabId}-panel`)
        if (targetPanel) {
          targetPanel.classList.add("active")
          console.log("Activated guide panel:", targetPanel.id)
        } else {
          console.error(`Guide panel with ID ${tabId}-panel not found`)
        }
      })
    }
  })

  // Initialize calculators with error handling
  try {
    initProductCalculator()
    console.log("Product calculator initialized")
  } catch (error) {
    console.error("Error initializing product calculator:", error)
  }

  try {
    initAreaCalculator()
    console.log("Area calculator initialized")
  } catch (error) {
    console.error("Error initializing area calculator:", error)
  }

  try {
    initWaterCalculator()
    console.log("Water calculator initialized")
  } catch (error) {
    console.error("Error initializing water calculator:", error)
  }

  try {
    initAccordion()
    console.log("Accordion initialized")
  } catch (error) {
    console.error("Error initializing accordion:", error)
  }

  // Add version information - only add if it doesn't already exist
  if (!document.querySelector(".version")) {
    const VERSION = "v2.0"
    const VERSION_ELEMENT = document.createElement("div")
    VERSION_ELEMENT.className = "version"
    VERSION_ELEMENT.textContent = VERSION
    document.body.appendChild(VERSION_ELEMENT)
  }
})

// Initialize product calculator
function initProductCalculator() {
  console.log("Initializing product calculator...")

  // Get DOM elements with error checking
  const productTypeSelect = document.getElementById("product-type")
  console.log("productTypeSelect:", productTypeSelect)

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

  // Update product type hint
  if (productTypeSelect && productTypeHint) {
    productTypeSelect.addEventListener("change", () => {
      const selectedType = productTypeSelect.value
      productTypeHint.textContent = PRODUCT_TYPE_HINTS[selectedType] || ""
    })
  }

  // Toggle cap size input based on measurement type
  if (measurementTypeRadios && measurementTypeRadios.length > 0 && capSizeGroup) {
    measurementTypeRadios.forEach((radio) => {
      if (radio) {
        radio.addEventListener("change", () => {
          if (radio.value === "cap") {
            capSizeGroup.classList.remove("hidden")
          } else {
            capSizeGroup.classList.add("hidden")
          }
          updateRatioLabels()
        })
      }
    })
  }

  // Toggle scoop size input based on has scoop selection
  if (hasScoopRadios && hasScoopRadios.length > 0 && scoopSizeGroup) {
    hasScoopRadios.forEach((radio) => {
      if (radio) {
        radio.addEventListener("change", () => {
          if (radio.value === "yes") {
            scoopSizeGroup.classList.remove("hidden")
          } else {
            scoopSizeGroup.classList.add("hidden")
          }
        })
      }
    })
  }

  // Toggle calculation mode panels
  if (calculationModeRadios && calculationModeRadios.length > 0) {
    calculationModeRadios.forEach((radio) => {
      if (radio) {
        radio.addEventListener("change", () => {
          if (calculationModePanels) {
            calculationModePanels.forEach((panel) => {
              if (panel) panel.classList.add("hidden")
            })
          }
          const targetPanel = document.getElementById(`${radio.value}-panel`)
          if (targetPanel) {
            targetPanel.classList.remove("hidden")
          }
        })
      }
    })
  }

  // Toggle product search panel
  if (findProductBtn && productSearchPanel) {
    findProductBtn.addEventListener("click", () => {
      if (productSearchPanel.classList.contains("hidden")) {
        productSearchPanel.classList.remove("hidden")
        if (presetsPanel) presetsPanel.classList.add("hidden")
        if (productSearchInput) productSearchInput.focus()
      } else {
        productSearchPanel.classList.add("hidden")
      }
    })
  }

  // Handle product search
  if (productSearchInput && productSearchResults) {
    productSearchInput.addEventListener("input", () => {
      const searchTerm = productSearchInput.value.toLowerCase()
      const filteredProducts = COMMON_PRODUCTS.filter((product) => product.name.toLowerCase().includes(searchTerm))
      renderProductSearchResults(filteredProducts, productSearchResults, handleProductSelect)
    })
  }

  // Toggle presets panel
  if (myPresetsBtn && presetsPanel) {
    myPresetsBtn.addEventListener("click", () => {
      if (presetsPanel.classList.contains("hidden")) {
        presetsPanel.classList.remove("hidden")
        if (productSearchPanel) productSearchPanel.classList.add("hidden")
        loadPresets("gardenerPresets", presetsList, handlePresetSelect)
      } else {
        presetsPanel.classList.add("hidden")
      }
    })
  }

  // Save preset
  if (savePresetBtn) {
    savePresetBtn.addEventListener("click", () => {
      savePreset("gardenerPresets")
    })
  }

  // Calculate button
  if (calculateBtn) {
    calculateBtn.addEventListener("click", () => {
      calculateProductDosage()
    })
  }

  // Update ratio labels when measurement type or water unit changes
  const waterUnitSelect = document.getElementById("water-unit")
  const waterUnit2Select = document.getElementById("water-unit-2")
  const targetUnitSelect = document.getElementById("target-unit")

  if (waterUnitSelect) {
    waterUnitSelect.addEventListener("change", updateRatioLabels)
  }

  if (waterUnit2Select) {
    waterUnit2Select.addEventListener("change", updateRatioLabels)
  }

  if (targetUnitSelect) {
    targetUnitSelect.addEventListener("change", updateRatioLabels)
  }

  // Initial setup
  updateRatioLabels()

  // Update water unit options to remove pint and quart
  const waterUnitSelects = [
    document.getElementById("water-unit"),
    document.getElementById("water-unit-2"),
    document.getElementById("target-unit"),
    document.getElementById("water-volume-unit"),
  ]

  waterUnitSelects.forEach((select) => {
    if (select) {
      // Remove pint and quart options
      Array.from(select.options).forEach((option) => {
        if (option.value === "pt" || option.value === "qt") {
          select.removeChild(option)
        }
      })
    }
  })
}

// Initialize area calculator
function initAreaCalculator() {
  console.log("Initializing area calculator...")

  // Get DOM elements with error checking
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
  const calculateAreaBtn = document.getElementById("calculate-area-btn")

  // Toggle area shape inputs
  if (areaShapeRadios && areaShapeRadios.length > 0 && rectangleInputs && circleInputs) {
    areaShapeRadios.forEach((radio) => {
      if (radio) {
        radio.addEventListener("change", () => {
          if (radio.value === "rectangle") {
            rectangleInputs.classList.remove("hidden")
            circleInputs.classList.add("hidden")
          } else {
            rectangleInputs.classList.add("hidden")
            circleInputs.classList.remove("hidden")
          }
        })
      }
    })
  }

  // Calculate area when inputs change
  const areaInputs = [lengthInput, widthInput, areaUnitSelect, diameterInput, circleUnitSelect]
  areaInputs.forEach((input) => {
    if (input) {
      input.addEventListener("change", calculateArea)
      input.addEventListener("input", calculateArea)
    }
  })

  // Update product type hint
  if (areaProductTypeSelect && areaProductTypeHint) {
    areaProductTypeSelect.addEventListener("change", () => {
      const selectedType = areaProductTypeSelect.value
      areaProductTypeHint.textContent = PRODUCT_TYPE_HINTS[selectedType] || ""
    })
  }

  // Toggle product search panel
  if (findAreaProductBtn && areaProductSearchPanel) {
    findAreaProductBtn.addEventListener("click", () => {
      if (areaProductSearchPanel.classList.contains("hidden")) {
        areaProductSearchPanel.classList.remove("hidden")
        if (areaPresetsPanel) areaPresetsPanel.classList.add("hidden")
        if (areaProductSearchInput) areaProductSearchInput.focus()
      } else {
        areaProductSearchPanel.classList.add("hidden")
      }
    })
  }

  // Handle product search
  if (areaProductSearchInput && areaProductSearchResults) {
    areaProductSearchInput.addEventListener("input", () => {
      const searchTerm = areaProductSearchInput.value.toLowerCase()
      const filteredProducts = AREA_TREATMENT_PRODUCTS.filter((product) =>
        product.name.toLowerCase().includes(searchTerm),
      )
      renderProductSearchResults(filteredProducts, areaProductSearchResults, handleAreaProductSelect)
    })
  }

  // Toggle presets panel
  if (areaPresetsBtn && areaPresetsPanel) {
    areaPresetsBtn.addEventListener("click", () => {
      if (areaPresetsPanel.classList.contains("hidden")) {
        areaPresetsPanel.classList.remove("hidden")
        if (areaProductSearchPanel) areaProductSearchPanel.classList.add("hidden")
        loadPresets("gardenerAreaPresets", areaPresetsList, handleAreaPresetSelect)
      } else {
        areaPresetsPanel.classList.add("hidden")
      }
    })
  }

  // Calculate button
  if (calculateAreaBtn) {
    calculateAreaBtn.addEventListener("click", () => {
      calculateAreaApplication()
    })
  }
}

// Initialize water calculator
function initWaterCalculator() {
  console.log("Initializing water calculator...")

  // Get DOM elements with error checking
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
  const findWaterProductBtn = document.getElementById("find-water-product-btn")
  const waterProductSearchPanel = document.getElementById("water-product-search-panel")
  const waterProductSearchInput = document.getElementById("water-product-search")
  const waterProductSearchResults = document.getElementById("water-product-search-results")
  const waterPresetsBtn = document.getElementById("water-presets-btn")
  const waterPresetsPanel = document.getElementById("water-presets-panel")
  const waterPresetsList = document.getElementById("water-presets-list")
  const waterProductTypeSelect = document.getElementById("water-product-type")
  const waterProductTypeHint = document.getElementById("water-product-type-hint")
  const calculateWaterBtn = document.getElementById("calculate-water-btn")

  // Toggle container shape inputs
  if (containerShapeRadios && containerShapeRadios.length > 0 && rectangularInputs && circularInputs) {
    containerShapeRadios.forEach((radio) => {
      if (radio) {
        radio.addEventListener("change", () => {
          if (radio.value === "rectangular") {
            rectangularInputs.classList.remove("hidden")
            circularInputs.classList.add("hidden")
          } else {
            rectangularInputs.classList.add("hidden")
            circularInputs.classList.remove("hidden")
          }
        })
      }
    })
  }

  // Calculate volume when inputs change
  const volumeInputs = [
    containerLengthInput,
    containerWidthInput,
    containerHeightInput,
    containerDiameterInput,
    containerDepthInput,
    dimensionUnitSelect,
  ]

  volumeInputs.forEach((input) => {
    if (input) {
      input.addEventListener("change", calculateVolume)
      input.addEventListener("input", calculateVolume)
    }
  })

  // Update product type hint
  if (waterProductTypeSelect && waterProductTypeHint) {
    waterProductTypeSelect.addEventListener("change", () => {
      const selectedType = waterProductTypeSelect.value
      waterProductTypeHint.textContent = PRODUCT_TYPE_HINTS[selectedType] || ""
    })
  }

  // Toggle product search panel
  if (findWaterProductBtn && waterProductSearchPanel) {
    findWaterProductBtn.addEventListener("click", () => {
      if (waterProductSearchPanel.classList.contains("hidden")) {
        waterProductSearchPanel.classList.remove("hidden")
        if (waterPresetsPanel) waterPresetsPanel.classList.add("hidden")
        if (waterProductSearchInput) waterProductSearchInput.focus()
      } else {
        waterProductSearchPanel.classList.add("hidden")
      }
    })
  }

  // Handle product search
  if (waterProductSearchInput && waterProductSearchResults) {
    waterProductSearchInput.addEventListener("input", () => {
      const searchTerm = waterProductSearchInput.value.toLowerCase()
      const filteredProducts = WATER_TREATMENT_PRODUCTS.filter((product) =>
        product.name.toLowerCase().includes(searchTerm),
      )
      renderProductSearchResults(filteredProducts, waterProductSearchResults, handleWaterProductSelect)
    })
  }

  // Toggle presets panel
  if (waterPresetsBtn && waterPresetsPanel) {
    waterPresetsBtn.addEventListener("click", () => {
      if (waterPresetsPanel.classList.contains("hidden")) {
        waterPresetsPanel.classList.remove("hidden")
        if (waterProductSearchPanel) waterProductSearchPanel.classList.add("hidden")
        loadPresets("gardenerWaterPresets", waterPresetsList, handleWaterPresetSelect)
      } else {
        waterPresetsPanel.classList.add("hidden")
      }
    })
  }

  // Calculate button
  if (calculateWaterBtn) {
    calculateWaterBtn.addEventListener("click", () => {
      calculateWaterDosage()
    })
  }
}

// Initialize accordion
function initAccordion() {
  console.log("Initializing accordion...")

  const accordionTriggers = document.querySelectorAll(".accordion-trigger")
  console.log("Accordion triggers found:", accordionTriggers.length)

  if (accordionTriggers && accordionTriggers.length > 0) {
    accordionTriggers.forEach((trigger) => {
      if (trigger) {
        trigger.addEventListener("click", () => {
          const accordionItem = trigger.parentElement
          if (accordionItem) {
            accordionItem.classList.toggle("active")
          }
        })
      }
    })
  }
}

// Update ratio labels based on measurement type and water unit
function updateRatioLabels() {
  const measurementTypeRadio = document.querySelector('input[name="measurement-type"]:checked')
  const waterUnitSelect = document.getElementById("water-unit")
  const waterUnit2Select = document.getElementById("water-unit-2")
  const targetUnitSelect = document.getElementById("target-unit")
  const ratioLabel = document.getElementById("ratio-label")
  const ratioLabel2 = document.getElementById("ratio-label-2")

  if (!measurementTypeRadio || !ratioLabel || !ratioLabel2) return

  const measurementType = measurementTypeRadio.value
  const waterUnit = waterUnitSelect ? waterUnitSelect.value : "l"
  const waterUnit2 = waterUnit2Select ? waterUnit2Select.value : "l"
  const targetUnit = targetUnitSelect ? targetUnitSelect.value : "l"

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
    waterUnitText = "litre"
  } else if (waterUnit === "gal_uk") {
    waterUnitText = "gallon"
  } else {
    waterUnitText = waterUnit
  }

  let waterUnitText2 = ""
  if (waterUnit2 === "l") {
    waterUnitText2 = "litre"
  } else if (waterUnit2 === "gal_uk") {
    waterUnitText2 = "gallon"
  } else {
    waterUnitText2 = waterUnit2
  }

  let targetUnitText = ""
  if (targetUnit === "l") {
    targetUnitText = "litre"
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
  if (!resultsElement) return

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
      if (product && selectHandler) {
        selectHandler(product)
      }
    })
  })
}

// Handle product selection
function handleProductSelect(product) {
  if (!product) return

  // Get DOM elements
  const productNameInput = document.getElementById("product-name")
  const productTypeSelect = document.getElementById("product-type")
  const productTypeHint = document.getElementById("product-type-hint")
  const measurementTypeRadios = document.querySelectorAll('input[name="measurement-type"]')
  const capSizeGroup = document.getElementById("cap-size-group")
  const capSizeInput = document.getElementById("cap-size")
  const productAmountInput = document.getElementById("product-amount")
  const productUnitSelect = document.getElementById("product-unit")
  const waterAmountInput = document.getElementById("water-amount")
  const waterUnitSelect = document.getElementById("water-unit")
  const ratioInput = document.getElementById("ratio")
  const waterAmount2Input = document.getElementById("water-amount-2")
  const waterUnit2Select = document.getElementById("water-unit-2")
  const instructionsText = document.getElementById("instructions-text")
  const productInstructions = document.getElementById("product-instructions")
  const productSearchPanel = document.getElementById("product-search-panel")

  // Set product name
  if (productNameInput) productNameInput.value = product.name

  // Set product type
  if (productTypeSelect) {
    productTypeSelect.value = product.type
    if (productTypeHint) {
      productTypeHint.textContent = PRODUCT_TYPE_HINTS[product.type] || ""
    }
  }

  // Set measurement type
  if (measurementTypeRadios && measurementTypeRadios.length > 0) {
    const radio = Array.from(measurementTypeRadios).find((r) => r.value === product.measurementType)
    if (radio) radio.checked = true

    if (product.measurementType === "cap" && capSizeGroup && capSizeInput) {
      capSizeGroup.classList.remove("hidden")
      capSizeInput.value = product.capSize?.fullCapML || 10
    } else if (capSizeGroup) {
      capSizeGroup.classList.add("hidden")
    }
  }

  // Set product amount and unit
  if (productAmountInput) productAmountInput.value = product.defaultDosage
  if (productUnitSelect) productUnitSelect.value = product.defaultDosageUnit

  // Set water amount and unit
  if (waterAmountInput) waterAmountInput.value = product.defaultWaterAmount
  if (waterUnitSelect) waterUnitSelect.value = product.defaultWaterUnit

  // Set ratio
  if (ratioInput) ratioInput.value = product.defaultDosage

  // Set water amount for water to product mode
  if (waterAmount2Input) waterAmount2Input.value = product.defaultWaterAmount
  if (waterUnit2Select) waterUnit2Select.value = product.defaultWaterUnit

  // Show product instructions
  if (instructionsText) instructionsText.textContent = product.instructions
  if (productInstructions) productInstructions.classList.remove("hidden")

  // Hide search panel
  if (productSearchPanel) productSearchPanel.classList.add("hidden")

  // Update ratio labels
  updateRatioLabels()
}

// Dummy implementations to resolve undeclared variable errors
function loadPresets(presetType, presetsList, handlePresetSelect) {
  console.log(`Loading presets for ${presetType}...`)
  // Implementation would go here in a real application
}

function handlePresetSelect(preset) {
  console.log("Preset selected:", preset)
  // Implementation would go here in a real application
}

function savePreset(presetType) {
  console.log(`Saving preset for ${presetType}...`)
  // Implementation would go here in a real application
}

function calculateProductDosage() {
  console.log("Calculating product dosage...")

  // Get input values
  const measurementType = document.querySelector('input[name="measurement-type"]:checked')?.value || "weight"
  const calculationMode = document.querySelector('input[name="calculation-mode"]:checked')?.value || "product_to_water"
  const hasScoop = document.querySelector('input[name="has-scoop"]:checked')?.value === "yes"

  // Get result elements
  const metricResultElement = document.getElementById("metric-result")
  const imperialResultElement = document.getElementById("imperial-result")
  const capResultElement = document.getElementById("cap-result")
  const capResultCard = document.getElementById("cap-result-card")
  const scoopResultElement = document.getElementById("scoop-result")
  const scoopResultCard = document.getElementById("scoop-result-card")
  const alternativeResultElement = document.getElementById("alternative-result")
  const wateringCanSection = document.getElementById("watering-can-section")
  const wateringCanResult = document.getElementById("watering-can-result")
  const wateringCanInfo = document.getElementById("watering-can-info")
  const wateringCanTitle = document.getElementById("watering-can-title")

  // Get debug info element
  const debugInfoElement = document.getElementById("debug-info")

  // Initialize variables for calculation
  let productAmount, productUnit, waterAmount, waterUnit, ratio, targetAmount, targetUnit

  // Get values based on calculation mode
  if (calculationMode === "product_to_water") {
    productAmount = Number.parseFloat(document.getElementById("product-amount")?.value || "0")
    productUnit = document.getElementById("product-unit")?.value || "g"
    waterAmount = Number.parseFloat(document.getElementById("water-amount")?.value || "0")
    waterUnit = document.getElementById("water-unit")?.value || "l"
  } else if (calculationMode === "water_to_product") {
    waterAmount = Number.parseFloat(document.getElementById("water-amount-2")?.value || "0")
    waterUnit = document.getElementById("water-unit-2")?.value || "l"
    ratio = Number.parseFloat(document.getElementById("ratio")?.value || "0")
    productUnit = measurementType === "weight" ? "g" : measurementType === "volume" ? "ml" : "cap"
  } else if (calculationMode === "ratio_based") {
    ratio = Number.parseFloat(document.getElementById("ratio-2")?.value || "0")
    targetAmount = Number.parseFloat(document.getElementById("target-amount")?.value || "0")
    targetUnit = document.getElementById("target-unit")?.value || "l"
    productUnit = measurementType === "weight" ? "g" : measurementType === "volume" ? "ml" : "cap"
  }

  // Get cap size if using cap measurement
  const capSize = measurementType === "cap" ? Number.parseFloat(document.getElementById("cap-size")?.value || "10") : 10

  // Get scoop size if using scoop
  const scoopSize = hasScoop ? Number.parseFloat(document.getElementById("scoop-size")?.value || "5") : 5
  const scoopUnit = hasScoop ? document.getElementById("scoop-unit")?.value || "g" : "g"

  // Calculate product amount in standard units (g or ml)
  let standardProductAmount = 0
  let standardWaterAmount = 0

  if (calculationMode === "product_to_water") {
    // Convert product amount to standard units
    if (productUnit === "g" || productUnit === "ml") {
      standardProductAmount = productAmount
    } else if (productUnit === "kg") {
      standardProductAmount = productAmount * 1000 // kg to g
    } else if (productUnit === "l") {
      standardProductAmount = productAmount * 1000 // l to ml
    } else if (productUnit === "oz") {
      standardProductAmount = productAmount * 28.35 // oz to g
    } else if (productUnit === "lb") {
      standardProductAmount = productAmount * 453.59 // lb to g
    } else if (productUnit === "tsp") {
      standardProductAmount = productAmount * 5 // tsp to ml (approximate)
    } else if (productUnit === "tbsp") {
      standardProductAmount = productAmount * 15 // tbsp to ml (approximate)
    } else if (productUnit === "cap") {
      standardProductAmount = productAmount * capSize // cap to ml
    }

    // Convert water amount to standard units (litres)
    if (waterUnit === "l") {
      standardWaterAmount = waterAmount
    } else if (waterUnit === "ml") {
      standardWaterAmount = waterAmount / 1000 // ml to l
    } else if (waterUnit === "gal_uk") {
      standardWaterAmount = waterAmount * 4.546 // UK gallon to l
    }
  } else if (calculationMode === "water_to_product") {
    // Convert water amount to standard units (litres)
    if (waterUnit === "l") {
      standardWaterAmount = waterAmount
    } else if (waterUnit === "ml") {
      standardWaterAmount = waterAmount / 1000 // ml to l
    } else if (waterUnit === "gal_uk") {
      standardWaterAmount = waterAmount * 4.546 // UK gallon to l
    }

    // Calculate product amount based on ratio
    if (measurementType === "cap") {
      // For cap measurement, we need to convert the ratio to ml first
      standardProductAmount = ratio * capSize * standardWaterAmount
    } else {
      standardProductAmount = ratio * standardWaterAmount
    }
  } else if (calculationMode === "ratio_based") {
    // Convert target amount to standard units (litres)
    if (targetUnit === "l") {
      standardWaterAmount = targetAmount
    } else if (targetUnit === "ml") {
      standardWaterAmount = targetAmount / 1000 // ml to l
    } else if (targetUnit === "gal_uk") {
      standardWaterAmount = targetAmount * 4.546 // UK gallon to l
    }

    // Calculate product amount based on ratio
    if (measurementType === "cap") {
      // If using cap measurement, convert ratio to ml first
      standardProductAmount = (ratio * capSize * standardWaterAmount) / (targetUnit === "gal_uk" ? 4.546 : 1)
    } else {
      standardProductAmount = (ratio * standardWaterAmount) / (targetUnit === "gal_uk" ? 4.546 : 1)
    }
  }

  // Format results
  let metricResult, imperialResult, capResult, scoopResult, alternativeResult

  if (measurementType === "weight") {
    // Metric result (g or kg)
    if (standardProductAmount < 1000) {
      metricResult = `${standardProductAmount.toFixed(1)}g per ${standardWaterAmount.toFixed(1)} litres`
    } else {
      metricResult = `${(standardProductAmount / 1000).toFixed(2)}kg per ${standardWaterAmount.toFixed(1)} litres`
    }

    // Imperial result (oz or lb)
    const ozAmount = standardProductAmount / 28.35
    if (ozAmount < 16) {
      imperialResult = `${ozAmount.toFixed(1)}oz per ${(standardWaterAmount / 4.546).toFixed(1)} gallons`
    } else {
      imperialResult = `${(ozAmount / 16).toFixed(2)}lb per ${(standardWaterAmount / 4.546).toFixed(1)} gallons`
    }

    // Alternative result (teaspoons/tablespoons)
    if (standardProductAmount < 15) {
      alternativeResult = `${(standardProductAmount / 5).toFixed(1)} teaspoons per ${standardWaterAmount.toFixed(1)} litres`
    } else {
      alternativeResult = `${(standardProductAmount / 15).toFixed(1)} tablespoons per ${standardWaterAmount.toFixed(1)} litres`
    }
  } else if (measurementType === "volume") {
    // Metric result (ml or l)
    if (standardProductAmount < 1000) {
      metricResult = `${standardProductAmount.toFixed(1)}ml per ${standardWaterAmount.toFixed(1)} litres`
    } else {
      metricResult = `${(standardProductAmount / 1000).toFixed(2)}l per ${standardWaterAmount.toFixed(1)} litres`
    }

    // Imperial result (fl oz)
    const flOzAmount = standardProductAmount / 28.41
    imperialResult = `${flOzAmount.toFixed(1)}fl oz per ${(standardWaterAmount / 4.546).toFixed(1)} gallons`

    // Alternative result (teaspoons/tablespoons)
    if (standardProductAmount < 15) {
      alternativeResult = `${(standardProductAmount / 5).toFixed(1)} teaspoons per ${standardWaterAmount.toFixed(1)} litres`
    } else {
      alternativeResult = `${(standardProductAmount / 15).toFixed(1)} tablespoons per ${standardWaterAmount.toFixed(1)} litres`
    }
  } else if (measurementType === "cap") {
    // Metric result (ml)
    metricResult = `${standardProductAmount.toFixed(1)}ml per ${standardWaterAmount.toFixed(1)} litres`

    // Imperial result (fl oz)
    const flOzAmount = standardProductAmount / 28.41
    imperialResult = `${flOzAmount.toFixed(1)}fl oz per ${(standardWaterAmount / 4.546).toFixed(1)} gallons`

    // Cap result
    capResult = `${(standardProductAmount / capSize).toFixed(1)} caps per ${standardWaterAmount.toFixed(1)} litres`

    // Alternative result (teaspoons/tablespoons)
    if (standardProductAmount < 15) {
      alternativeResult = `${(standardProductAmount / 5).toFixed(1)} teaspoons per ${standardWaterAmount.toFixed(1)} litres`
    } else {
      alternativeResult = `${(standardProductAmount / 15).toFixed(1)} tablespoons per ${standardWaterAmount.toFixed(1)} litres`
    }
  }

  // Scoop result if using scoop
  if (hasScoop) {
    const scoopConversionFactor = scoopUnit === "g" ? 1 : scoopUnit === "ml" ? 1 : 1
    scoopResult = `${(standardProductAmount / (scoopSize * scoopConversionFactor)).toFixed(1)} scoops per ${standardWaterAmount.toFixed(1)} litres`
  }

  // Watering can calculation - use the same unit the user selected
  let wateringCanResultText

  if (waterUnit === "gal_uk") {
    // For UK gallons, show the result for the exact amount the user entered
    if (measurementType === "cap") {
      // Calculate caps directly: ratio * water amount
      const capsNeeded = ratio * waterAmount
      wateringCanResultText = `${capsNeeded.toFixed(1)} caps per ${waterAmount} gallon watering can`
    } else if (measurementType === "weight") {
      const productAmountForCan = ratio * waterAmount
      if (productAmountForCan < 1000) {
        wateringCanResultText = `${productAmountForCan.toFixed(1)}g per ${waterAmount} gallon watering can`
      } else {
        wateringCanResultText = `${(productAmountForCan / 1000).toFixed(2)}kg per ${waterAmount} gallon watering can`
      }
    } else if (measurementType === "volume") {
      const productAmountForCan = ratio * waterAmount
      if (productAmountForCan < 1000) {
        wateringCanResultText = `${productAmountForCan.toFixed(1)}ml per ${waterAmount} gallon watering can`
      } else {
        wateringCanResultText = `${(productAmountForCan / 1000).toFixed(2)}L per ${waterAmount} gallon watering can`
      }
    }
  } else {
    // For litres or ml, calculate based on the ratio
    if (measurementType === "cap") {
      // Calculate caps directly: ratio * water amount
      const capsNeeded = ratio * waterAmount
      wateringCanResultText = `${capsNeeded.toFixed(1)} caps per ${waterAmount}${waterUnit === "l" ? "L" : "ml"} watering can`
    } else if (measurementType === "weight") {
      const productAmountForCan = ratio * waterAmount
      if (productAmountForCan < 1000) {
        wateringCanResultText = `${productAmountForCan.toFixed(1)}g per ${waterAmount}${waterUnit === "l" ? "L" : "ml"} watering can`
      } else {
        wateringCanResultText = `${(productAmountForCan / 1000).toFixed(2)}kg per ${waterAmount}${waterUnit === "l" ? "L" : "ml"} watering can`
      }
    } else if (measurementType === "volume") {
      const productAmountForCan = ratio * waterAmount
      if (productAmountForCan < 1000) {
        wateringCanResultText = `${productAmountForCan.toFixed(1)}ml per ${waterAmount}${waterUnit === "l" ? "L" : "ml"} watering can`
      } else {
        wateringCanResultText = `${(productAmountForCan / 1000).toFixed(2)}L per ${waterAmount}${waterUnit === "l" ? "L" : "ml"} watering can`
      }
    }
  }

  // Update result elements
  if (metricResultElement) metricResultElement.textContent = metricResult || "-"
  if (imperialResultElement) imperialResultElement.textContent = imperialResult || "-"

  if (measurementType === "cap" && capResultElement && capResultCard) {
    capResultElement.textContent = capResult || "-"
    capResultCard.classList.remove("hidden")
  } else if (capResultCard) {
    capResultCard.classList.add("hidden")
  }

  if (hasScoop && scoopResultElement && scoopResultCard) {
    scoopResultElement.textContent = scoopResult || "-"
    scoopResultCard.classList.remove("hidden")
  } else if (scoopResultCard) {
    scoopResultCard.classList.add("hidden")
  }

  if (alternativeResultElement) alternativeResultElement.textContent = alternativeResult || "-"

  // Show watering can section
  if (wateringCanSection && wateringCanResult) {
    wateringCanSection.classList.remove("hidden")
    wateringCanResult.textContent = wateringCanResultText || "-"

    if (wateringCanInfo) {
      if (waterUnit === "gal_uk") {
        wateringCanInfo.textContent = `Based on your ${waterAmount} gallon measurement`
      } else {
        wateringCanInfo.textContent = "Based on a standard 10L watering can"
      }
    }

    if (wateringCanTitle) {
      if (waterUnit === "gal_uk") {
        wateringCanTitle.textContent = "For your watering can:"
      } else {
        wateringCanTitle.textContent = "For a standard watering can:"
      }
    }
  }

  // Update debug info
  if (debugInfoElement) {
    debugInfoElement.textContent = formatDebugInfo("product")
  }
}

function calculateArea() {
  console.log("Calculating area...")
  // Implementation would go here in a real application
}

function handleAreaProductSelect(product) {
  console.log("Area product selected:", product)
  // Implementation would go here in a real application
}

function handleAreaPresetSelect(preset) {
  console.log("Area preset selected:", preset)
  // Implementation would go here in a real application
}

function calculateAreaApplication() {
  console.log("Calculating area application...")
  // Implementation would go here in a real application
}

function calculateVolume() {
  console.log("Calculating volume...")
  // Implementation would go here in a real application
}

function handleWaterProductSelect(product) {
  console.log("Water product selected:", product)
  // Implementation would go here in a real application
}

function handleWaterPresetSelect(preset) {
  console.log("Preset selected:", preset)
  // Implementation would go here in a real application
}

function calculateWaterDosage() {
  console.log("Calculating water dosage...")
  // Implementation would go here in a real application
}

// Add debug event listeners to debug triggers
document.addEventListener("DOMContentLoaded", () => {
  const debugTrigger = document.getElementById("debug-trigger")
  const debugContent = document.getElementById("debug-content")
  const areaDebugTrigger = document.getElementById("area-debug-trigger")
  const areaDebugContent = document.getElementById("area-debug-content")
  const waterDebugTrigger = document.getElementById("water-debug-trigger")
  const waterDebugContent = document.getElementById("water-debug-content")

  if (debugTrigger && debugContent) {
    debugTrigger.addEventListener("click", () => {
      debugContent.classList.toggle("hidden")
    })
  }

  if (areaDebugTrigger && areaDebugContent) {
    areaDebugTrigger.addEventListener("click", () => {
      areaDebugContent.classList.toggle("hidden")
    })
  }

  if (waterDebugTrigger && waterDebugContent) {
    waterDebugTrigger.addEventListener("click", () => {
      waterDebugContent.classList.toggle("hidden")
    })
  }

  // Initialize debug info and copy functionality
  initDebugCopyFunctionality()
})

// Add this function to format debug info for copying
function formatDebugInfo(calculatorType) {
  let debugInfo = ""

  // Common header with timestamp
  debugInfo += "Gardener's Measurement Calculator - Debug Info\n"
  debugInfo += "Generated: " + new Date().toLocaleString() + "\n"
  debugInfo += "----------------------------------------\n\n"

  if (calculatorType === "product") {
    // Product Calculator Debug Info
    debugInfo += "PRODUCT CALCULATOR SELECTIONS:\n\n"

    // Get all the product calculator inputs
    const productType = document.getElementById("product-type")?.value || "N/A"
    const productName = document.getElementById("product-name")?.value || "N/A"
    const measurementType = document.querySelector('input[name="measurement-type"]:checked')?.value || "N/A"
    const capSize = document.getElementById("cap-size")?.value || "N/A"
    const hasScoop = document.querySelector('input[name="has-scoop"]:checked')?.value || "N/A"
    const scoopSize = document.getElementById("scoop-size")?.value || "N/A"
    const scoopUnit = document.getElementById("scoop-unit")?.value || "N/A"
    const calculationMode = document.querySelector('input[name="calculation-mode"]:checked')?.value || "N/A"

    // Product to Water mode
    const productAmount = document.getElementById("product-amount")?.value || "N/A"
    const productUnit = document.getElementById("product-unit")?.value || "N/A"
    const waterAmount = document.getElementById("water-amount")?.value || "N/A"
    const waterUnit = document.getElementById("water-unit")?.value || "N/A"

    // Water to Product mode
    const waterAmount2 = document.getElementById("water-amount-2")?.value || "N/A"
    const waterUnit2 = document.getElementById("water-unit-2")?.value || "N/A"
    const ratio = document.getElementById("ratio")?.value || "N/A"

    // Ratio Based mode
    const ratio2 = document.getElementById("ratio-2")?.value || "N/A"
    const targetAmount = document.getElementById("target-amount")?.value || "N/A"
    const targetUnit = document.getElementById("target-unit")?.value || "N/A"

    // Format the debug info
    debugInfo += "Product Type: " + productType + "\n"
    debugInfo += "Product Name: " + productName + "\n"
    debugInfo += "Measurement Type: " + measurementType + "\n"

    if (measurementType === "cap") {
      debugInfo += "Cap Size (ml): " + capSize + "\n"
    }

    debugInfo += "Has Scoop: " + hasScoop + "\n"

    if (hasScoop === "yes") {
      debugInfo += "Scoop Size: " + scoopSize + " " + scoopUnit + "\n"
    }

    debugInfo += "Calculation Mode: " + calculationMode + "\n\n"

    if (calculationMode === "product_to_water") {
      debugInfo += "Product Amount: " + productAmount + " " + productUnit + "\n"
      debugInfo += "Water Amount: " + waterAmount + " " + waterUnit + "\n"
    } else if (calculationMode === "water_to_product") {
      debugInfo += "Water Amount: " + waterAmount2 + " " + waterUnit2 + "\n"
      debugInfo += "Ratio: " + ratio + " " + (productUnit || "g") + " per " + (waterUnit2 || "litre") + "\n"
    } else if (calculationMode === "ratio_based") {
      debugInfo += "Ratio: " + ratio2 + " " + (productUnit || "g") + " per " + (targetUnit || "litre") + "\n"
      debugInfo += "Target Amount: " + targetAmount + " " + targetUnit + "\n"
    }

    // Add results if available
    const metricResult = document.getElementById("metric-result")?.textContent || "N/A"
    const imperialResult = document.getElementById("imperial-result")?.textContent || "N/A"
    const capResult = document.getElementById("cap-result")?.textContent || "N/A"
    const scoopResult = document.getElementById("scoop-result")?.textContent || "N/A"
    const alternativeResult = document.getElementById("alternative-result")?.textContent || "N/A"

    debugInfo += "\nRESULTS:\n"
    debugInfo += "Metric Result: " + metricResult + "\n"
    debugInfo += "Imperial Result: " + imperialResult + "\n"

    if (!document.getElementById("cap-result-card")?.classList.contains("hidden")) {
      debugInfo += "Cap Measurement: " + capResult + "\n"
    }

    if (!document.getElementById("scoop-result-card")?.classList.contains("hidden")) {
      debugInfo += "Scoop Measurement: " + scoopResult + "\n"
    }

    debugInfo += "Alternative Measurement: " + alternativeResult + "\n"
  } else if (calculatorType === "area") {
    // Area Calculator Debug Info
    debugInfo += "AREA CALCULATOR SELECTIONS:\n\n"

    // Get all the area calculator inputs
    const areaShape = document.querySelector('input[name="area-shape"]:checked')?.value || "N/A"
    const length = document.getElementById("length")?.value || "N/A"
    const width = document.getElementById("width")?.value || "N/A"
    const areaUnit = document.getElementById("area-unit")?.value || "N/A"
    const diameter = document.getElementById("diameter")?.value || "N/A"
    const circleUnit = document.getElementById("circle-unit")?.value || "N/A"
    const areaProductType = document.getElementById("area-product-type")?.value || "N/A"
    const areaProductName = document.getElementById("area-product-name")?.value || "N/A"
    const applicationRate = document.getElementById("application-rate")?.value || "N/A"
    const rateUnit = document.getElementById("rate-unit")?.value || "N/A"
    const rateAreaUnit = document.getElementById("rate-area-unit")?.value || "N/A"

    // Format the debug info
    debugInfo += "Area Shape: " + areaShape + "\n"

    if (areaShape === "rectangle") {
      debugInfo += "Length: " + length + " " + areaUnit + "\n"
      debugInfo += "Width: " + width + " " + areaUnit + "\n"
    } else if (areaShape === "circle") {
      debugInfo += "Diameter: " + diameter + " " + circleUnit + "\n"
    }

    const areaResult = document.getElementById("area-result")?.textContent || "N/A"
    if (areaResult !== "N/A" && areaResult !== "-") {
      debugInfo += "Calculated Area: " + areaResult + "\n"
    }

    debugInfo += "Product Type: " + areaProductType + "\n"
    debugInfo += "Product Name: " + areaProductName + "\n"
    debugInfo += "Application Rate: " + applicationRate + " " + rateUnit + " per " + rateAreaUnit + "\n\n"

    // Add results if available
    const totalAmountResult = document.getElementById("total-amount-result")?.textContent || "N/A"
    const alternativeAmountResult = document.getElementById("alternative-amount-result")?.textContent || "N/A"
    const metricRateResult = document.getElementById("metric-rate-result")?.textContent || "N/A"
    const imperialRateResult = document.getElementById("imperial-rate-result")?.textContent || "N/A"

    debugInfo += "RESULTS:\n"
    debugInfo += "Total Amount Needed: " + totalAmountResult + "\n"
    debugInfo += "Alternative Measurement: " + alternativeAmountResult + "\n"
    debugInfo += "Metric Rate: " + metricRateResult + "\n"
    debugInfo += "Imperial Rate: " + imperialRateResult + "\n"
  } else if (calculatorType === "water") {
    // Water Calculator Debug Info
    debugInfo += "WATER CALCULATOR SELECTIONS:\n\n"

    // Get all the water calculator inputs
    const containerShape = document.querySelector('input[name="container-shape"]:checked')?.value || "N/A"
    const dimensionUnit = document.getElementById("dimension-unit")?.value || "N/A"
    const containerLength = document.getElementById("container-length")?.value || "N/A"
    const containerWidth = document.getElementById("container-width")?.value || "N/A"
    const containerHeight = document.getElementById("container-height")?.value || "N/A"
    const containerDiameter = document.getElementById("container-diameter")?.value || "N/A"
    const containerDepth = document.getElementById("container-depth")?.value || "N/A"
    const waterVolume = document.getElementById("water-volume")?.value || "N/A"
    const waterVolumeUnit = document.getElementById("water-volume-unit")?.value || "N/A"
    const waterProductType = document.getElementById("water-product-type")?.value || "N/A"
    const waterProductName = document.getElementById("water-product-name")?.value || "N/A"
    const dosageAmount = document.getElementById("dosage-amount")?.value || "N/A"
    const dosageUnit = document.getElementById("dosage-unit")?.value || "N/A"

    // Format the debug info
    debugInfo += "Container Shape: " + containerShape + "\n"
    debugInfo += "Dimension Unit: " + dimensionUnit + "\n"

    if (containerShape === "rectangular") {
      debugInfo += "Length: " + containerLength + " " + dimensionUnit + "\n"
      debugInfo += "Width: " + containerWidth + " " + dimensionUnit + "\n"
      debugInfo += "Height: " + containerHeight + " " + dimensionUnit + "\n"
    } else if (containerShape === "circular") {
      debugInfo += "Diameter: " + containerDiameter + " " + dimensionUnit + "\n"
      debugInfo += "Depth: " + containerDepth + " " + dimensionUnit + "\n"
    }

    const volumeResult = document.getElementById("volume-result")?.textContent || "N/A"
    if (volumeResult !== "N/A" && volumeResult !== "-") {
      debugInfo += "Calculated Volume: " + volumeResult + "\n"
    }

    debugInfo += "Water Volume: " + waterVolume + " " + waterVolumeUnit + "\n"
    debugInfo += "Product Type: " + waterProductType + "\n"
    debugInfo += "Product Name: " + waterProductName + "\n"
    debugInfo += "Dosage Amount: " + dosageAmount + " " + dosageUnit + " per 1000 litres\n\n"

    // Add results if available
    const waterTotalAmountResult = document.getElementById("water-total-amount-result")?.textContent || "N/A"
    const waterMetricDosageResult = document.getElementById("water-metric-dosage-result")?.textContent || "N/A"
    const waterImperialDosageResult = document.getElementById("water-imperial-dosage-result")?.textContent || "N/A"
    const waterAlternativeDosageResult =
      document.getElementById("water-alternative-dosage-result")?.textContent || "N/A"

    debugInfo += "RESULTS:\n"
    debugInfo += "Total Amount Needed: " + waterTotalAmountResult + "\n"
    debugInfo += "Metric Dosage: " + waterMetricDosageResult + "\n"
    debugInfo += "Imperial Dosage: " + waterImperialDosageResult + "\n"
    debugInfo += "Alternative Dosage: " + waterAlternativeDosageResult + "\n"
  }

  return debugInfo
}

// Function to copy text to clipboard
function copyToClipboard(text) {
  // Create a temporary textarea element
  const textarea = document.createElement("textarea")
  textarea.value = text
  document.body.appendChild(textarea)

  // Select and copy the text
  textarea.select()
  document.execCommand("copy")

  // Remove the temporary textarea
  document.body.removeChild(textarea)

  // Return true to indicate success
  return true
}

// Initialize debug copy functionality
function initDebugCopyFunctionality() {
  // Product calculator copy debug button
  const copyDebugBtn = document.getElementById("copy-debug-btn")
  if (copyDebugBtn) {
    copyDebugBtn.addEventListener("click", () => {
      const debugInfo = formatDebugInfo("product")

      // Update the debug info display
      const debugInfoElement = document.getElementById("debug-info")
      if (debugInfoElement) {
        debugInfoElement.textContent = debugInfo
      }

      // Copy to clipboard
      if (copyToClipboard(debugInfo)) {
        copyDebugBtn.textContent = "Copied!"
        setTimeout(() => {
          copyDebugBtn.textContent = "Copy Debug Info"
        }, 2000)
      }
    })
  }

  // Area calculator copy debug button
  const copyAreaDebugBtn = document.getElementById("copy-area-debug-btn")
  if (copyAreaDebugBtn) {
    copyAreaDebugBtn.addEventListener("click", () => {
      const debugInfo = formatDebugInfo("area")

      // Update the debug info display
      const areaDebugInfoElement = document.getElementById("area-debug-info")
      if (areaDebugInfoElement) {
        areaDebugInfoElement.textContent = debugInfo
      }

      // Copy to clipboard
      if (copyToClipboard(debugInfo)) {
        copyAreaDebugBtn.textContent = "Copied!"
        setTimeout(() => {
          copyAreaDebugBtn.textContent = "Copy Debug Info"
        }, 2000)
      }
    })
  }

  // Water calculator copy debug button
  const copyWaterDebugBtn = document.getElementById("copy-water-debug-btn")
  if (copyWaterDebugBtn) {
    copyWaterDebugBtn.addEventListener("click", () => {
      const debugInfo = formatDebugInfo("water")

      // Update the debug info display
      const waterDebugInfoElement = document.getElementById("water-debug-info")
      if (waterDebugInfoElement) {
        waterDebugInfoElement.textContent = debugInfo
      }

      // Copy to clipboard
      if (copyToClipboard(debugInfo)) {
        copyWaterDebugBtn.textContent = "Copied!"
        setTimeout(() => {
          copyWaterDebugBtn.textContent = "Copy Debug Info"
        }, 2000)
      }
    })
  }
}
