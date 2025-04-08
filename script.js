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
    id: "baby-bio-houseplant",
    name: "Baby Bio Houseplant Food",
    type: "liquid_fertilizer",
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
    measurementType: "cap",
    defaultDosage: 2,
    defaultDosageUnit: "cap",
    defaultWaterAmount: 4.5,
    defaultWaterUnit: "l",
    instructions: "Add 20ml to 4.5 litres (1 gallon) of water. Apply twice a week when plants are in flower/fruit.",
    capSize: {
      fullCapML: 10,
      markings: { half: 5, full: 10 },
    },
  },
  {
    id: "growmore-granular",
    name: "Growmore Granular Garden Fertilizer",
    type: "granular_fertilizer",
    measurementType: "weight",
    defaultDosage: 70,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions: "Apply 70g per square meter and work into the soil. Apply every 4-6 weeks during growing season.",
  },
  {
    id: "miracle-gro-water-soluble",
    name: "Miracle-Gro Water Soluble Plant Food",
    type: "granular_fertilizer",
    measurementType: "weight",
    defaultDosage: 7,
    defaultDosageUnit: "g",
    defaultWaterAmount: 4.5,
    defaultWaterUnit: "l",
    instructions: "Dissolve 7g (one scoop) in 4.5 litres (1 gallon) of water. Apply every 1-2 weeks.",
  },
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
    id: "weedol-lawn-weedkiller",
    name: "Weedol Lawn Weedkiller Concentrate",
    type: "weed_killer",
    measurementType: "volume",
    defaultDosage: 10,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1,
    defaultWaterUnit: "l",
    instructions: "Dilute 10ml in 1 litre of water. Apply when weeds are actively growing.",
  },
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
    id: "growmore-granular",
    name: "Growmore Granular Garden Fertilizer",
    type: "granular_fertilizer",
    measurementType: "weight",
    defaultDosage: 70,
    defaultDosageUnit: "g",
    defaultWaterAmount: 1,
    defaultWaterUnit: "sq_m",
    instructions: "Apply 70g per square meter and work into the soil. Apply every 4-6 weeks during growing season.",
  },
  {
    id: "weedol-lawn-weedkiller",
    name: "Weedol Lawn Weedkiller Concentrate",
    type: "weed_killer",
    measurementType: "volume",
    defaultDosage: 10,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 1,
    defaultWaterUnit: "l",
    instructions: "Dilute 10ml in 1 litre of water. Apply when weeds are actively growing.",
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
    id: "api-pond-algaefix",
    name: "API Pond AlgaeFix",
    type: "algaecide",
    measurementType: "volume",
    defaultDosage: 5,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 100,
    defaultWaterUnit: "l",
    instructions: "Add 5ml per 100 litres of pond water. Repeat every 3 days until algae is gone.",
  },
  {
    id: "tetra-aquasafe",
    name: "Tetra AquaSafe Water Conditioner",
    type: "water_clarifier",
    measurementType: "volume",
    defaultDosage: 5,
    defaultDosageUnit: "ml",
    defaultWaterAmount: 10,
    defaultWaterUnit: "l",
    instructions: "Add 5ml per 10 litres of water when adding new water to the pond.",
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
  lawn_fertilizer: "Typical usage: 35g per square metre",
  weed_killer: "Typical usage: 10ml per litre of water",
  pond_treatment: "Typical usage: 50ml per 1000 litres of water",
  algaecide: "Typical usage: 5ml per 100 litres of water",
  water_clarifier: "Typical usage: 5ml per 10 litres of water",
  custom: "Enter your own measurements for a custom product",
}

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed")

  // Initialize tab navigation
  initTabs()

  // Initialize calculation mode panels
  initCalculationModePanels()

  // Initialize accordion functionality
  initAccordion()

  // Add event listeners to calculate buttons
  document.getElementById("calculate-btn").addEventListener("click", calculateProductDosage)
  document.getElementById("calculate-area-btn")?.addEventListener("click", calculateAreaApplication)
  document.getElementById("calculate-water-btn")?.addEventListener("click", calculateWaterDosage)

  // Initialize other form elements
  initFormElements()
})

// Initialize tabs
function initTabs() {
  const tabButtons = document.querySelectorAll(".tab-button")
  const tabPanels = document.querySelectorAll(".tab-panel")

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab")

      // Update active tab button
      tabButtons.forEach((btn) => btn.classList.remove("active"))
      this.classList.add("active")

      // Update active tab panel
      tabPanels.forEach((panel) => panel.classList.remove("active"))
      document.getElementById(`${tabId}-tab`).classList.add("active")
    })
  })
}

// Initialize calculation mode panels
function initCalculationModePanels() {
  const calculationModeRadios = document.querySelectorAll('input[name="calculation-mode"]')
  const calculationModePanels = document.querySelectorAll(".calculation-mode-panel")

  calculationModeRadios.forEach((radio) => {
    radio.addEventListener("change", function () {
      // Hide all panels
      calculationModePanels.forEach((panel) => panel.classList.add("hidden"))

      // Show the selected panel
      const selectedPanel = document.getElementById(`${this.value}-panel`)
      if (selectedPanel) {
        selectedPanel.classList.remove("hidden")
      }
    })
  })
}

// Initialize accordion functionality
function initAccordion() {
  const accordionTriggers = document.querySelectorAll(".accordion-trigger")

  accordionTriggers.forEach((trigger) => {
    trigger.addEventListener("click", function () {
      const accordionItem = this.parentElement
      accordionItem.classList.toggle("active")

      const content = accordionItem.querySelector(".accordion-content")
      if (content) {
        if (accordionItem.classList.contains("active")) {
          content.style.maxHeight = content.scrollHeight + "px"
        } else {
          content.style.maxHeight = "0"
        }
      }
    })
  })
}

// Initialize other form elements
function initFormElements() {
  // Measurement type toggle
  const measurementTypeRadios = document.querySelectorAll('input[name="measurement-type"]')
  const capSizeGroup = document.getElementById("cap-size-group")

  measurementTypeRadios.forEach((radio) => {
    radio.addEventListener("change", function () {
      if (this.value === "cap") {
        capSizeGroup.classList.remove("hidden")
      } else {
        capSizeGroup.classList.add("hidden")
      }
      updateRatioLabels()
    })
  })

  // Scoop toggle
  const hasScoopRadios = document.querySelectorAll('input[name="has-scoop"]')
  const scoopSizeGroup = document.getElementById("scoop-size-group")

  hasScoopRadios.forEach((radio) => {
    radio.addEventListener("change", function () {
      if (this.value === "yes") {
        scoopSizeGroup.classList.remove("hidden")
      } else {
        scoopSizeGroup.classList.add("hidden")
      }
    })
  })

  // Area shape toggle
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

  // Container shape toggle
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

  // Update ratio labels when water unit changes
  const waterUnitSelects = [
    document.getElementById("water-unit"),
    document.getElementById("water-unit-2"),
    document.getElementById("target-unit"),
  ]

  waterUnitSelects.forEach((select) => {
    if (select) {
      select.addEventListener("change", updateRatioLabels)
    }
  })

  // Initial update of ratio labels
  updateRatioLabels()
}

// Initialize calculator type selector
function initCalculatorTypeSelector() {
  const calculatorTypeSelect = document.getElementById("calculator-type")

  if (calculatorTypeSelect) {
    calculatorTypeSelect.addEventListener("change", function () {
      const selectedType = this.value
      console.log("Calculator type changed to:", selectedType)

      // Hide all calculator inputs and results
      document.getElementById("product-calculator-inputs").classList.add("hidden")
      document.getElementById("area-calculator-inputs").classList.add("hidden")
      document.getElementById("water-calculator-inputs").classList.add("hidden")
      document.getElementById("product-calculator-results").classList.add("hidden")
      document.getElementById("area-calculator-results").classList.add("hidden")
      document.getElementById("water-calculator-results").classList.add("hidden")
      document.getElementById("conversion-section").classList.add("hidden")

      // Show the selected calculator inputs and results
      if (selectedType === "product") {
        document.getElementById("product-calculator-inputs").classList.remove("hidden")
        document.getElementById("product-calculator-results").classList.remove("hidden")
      } else if (selectedType === "area") {
        document.getElementById("area-calculator-inputs").classList.remove("hidden")
        document.getElementById("area-calculator-results").classList.remove("hidden")
      } else if (selectedType === "water") {
        document.getElementById("water-calculator-inputs").classList.remove("hidden")
        document.getElementById("water-calculator-results").classList.remove("hidden")
      } else if (selectedType === "conversion") {
        document.getElementById("conversion-section").classList.remove("hidden")
      }

      // Update product type options based on calculator type
      updateProductTypeOptions(selectedType)
    })

    // Set initial state
    calculatorTypeSelect.dispatchEvent(new Event("change"))
  }
}

// Update product type options based on calculator type
function updateProductTypeOptions(calculatorType) {
  const productTypeSelect = document.getElementById("product-type")

  if (!productTypeSelect) return

  // Clear existing options
  while (productTypeSelect.options.length > 0) {
    productTypeSelect.remove(0)
  }

  // Add appropriate options based on calculator type
  if (calculatorType === "product") {
    addOption(productTypeSelect, "liquid_fertilizer", "Liquid Fertilizer")
    addOption(productTypeSelect, "granular_fertilizer", "Granular Fertilizer")
    addOption(productTypeSelect, "weed_killer", "Weed Killer")
    addOption(productTypeSelect, "custom", "Custom Product")
  } else if (calculatorType === "area") {
    addOption(productTypeSelect, "lawn_fertilizer", "Lawn Fertilizer")
    addOption(productTypeSelect, "granular_fertilizer", "Granular Fertilizer")
    addOption(productTypeSelect, "custom", "Custom Product")
  } else if (calculatorType === "water") {
    addOption(productTypeSelect, "pond_treatment", "Pond Treatment")
    addOption(productTypeSelect, "algaecide", "Algaecide")
    addOption(productTypeSelect, "water_clarifier", "Water Clarifier")
    addOption(productTypeSelect, "custom", "Custom Product")
  }

  // Trigger change event to update product name dropdown
  productTypeSelect.dispatchEvent(new Event("change"))
}

// Helper function to add option to select element
function addOption(selectElement, value, text) {
  const option = document.createElement("option")
  option.value = value
  option.textContent = text
  selectElement.appendChild(option)
}

// Initialize product calculator
function initProductCalculator() {
  console.log("Initializing product calculator...")

  // Get DOM elements with error checking
  const productTypeSelect = document.getElementById("product-type")
  console.log("productTypeSelect:", productTypeSelect)

  const productTypeHint = document.getElementById("product-type-hint")
  const productNameSelect = document.getElementById("product-name-select")
  const useCustomProductCheckbox = document.getElementById("use-custom-product")
  const customProductSection = document.getElementById("custom-product-section")
  const commonProductSection = document.getElementById("common-product-section")
  const measurementTypeRadios = document.querySelectorAll('input[name="measurement-type"]')
  const capSizeGroup = document.getElementById("cap-size-group")
  const capSizeInput = document.getElementById("cap-size")
  const hasScoopRadios = document.querySelectorAll('input[name="has-scoop"]')
  const scoopSizeGroup = document.getElementById("scoop-size-group")
  const calculationModeRadios = document.querySelectorAll('input[name="calculation-mode"]')
  const calculationModePanels = document.querySelectorAll(".calculation-mode-panel")
  const productNameInput = document.getElementById("product-name")
  const customInstructionsInput = document.getElementById("custom-instructions")
  const productInstructions = document.getElementById("product-instructions")
  const instructionsText = document.getElementById("instructions-text")
  const ratioLabel = document.getElementById("ratio-label")
  const ratioLabel2 = document.getElementById("ratio-label-2")
  const savePresetBtn = document.getElementById("save-preset-btn")
  const calculateBtn = document.getElementById("calculate-btn")
  const myPresetsBtn = document.getElementById("my-presets-btn")
  const presetsPanel = document.getElementById("presets-panel")
  const presetsList = document.getElementById("presets-list")

  // Update product type hint
  if (productTypeSelect && productTypeHint) {
    productTypeSelect.addEventListener("change", () => {
      const selectedType = productTypeSelect.value
      productTypeHint.textContent = PRODUCT_TYPE_HINTS[selectedType] || ""

      // Update product name dropdown based on selected type
      updateProductNameDropdown(selectedType)

      // Show/hide custom product section based on selection
      if (selectedType === "custom") {
        if (useCustomProductCheckbox) useCustomProductCheckbox.checked = true
        if (customProductSection) customProductSection.classList.remove("hidden")
        if (commonProductSection) commonProductSection.classList.add("hidden")
      } else {
        if (useCustomProductCheckbox) useCustomProductCheckbox.checked = false
        if (customProductSection) customProductSection.classList.add("hidden")
        if (commonProductSection) commonProductSection.classList.remove("hidden")
      }
    })

    // Initial update of product name dropdown
    updateProductNameDropdown(productTypeSelect.value)
  }

  // Toggle custom product section
  if (useCustomProductCheckbox && customProductSection && commonProductSection) {
    useCustomProductCheckbox.addEventListener("change", () => {
      if (useCustomProductCheckbox.checked) {
        customProductSection.classList.remove("hidden")
        commonProductSection.classList.add("hidden")
      } else {
        customProductSection.classList.add("hidden")
        commonProductSection.classList.remove("hidden")
      }
    })
  }

  // Add event listener to the product name select
  if (productNameSelect) {
    productNameSelect.addEventListener("change", function () {
      const selectedProductId = this.value
      if (selectedProductId) {
        const product = COMMON_PRODUCTS.find((p) => p.id === selectedProductId)
        if (product) {
          handleProductSelect(product)
        }
      }
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

  // Toggle presets panel
  if (myPresetsBtn && presetsPanel) {
    myPresetsBtn.addEventListener("click", () => {
      if (presetsPanel.classList.contains("hidden")) {
        presetsPanel.classList.remove("hidden")
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
      const calculatorType = document.getElementById("calculator-type").value
      if (calculatorType === "product") {
        calculateProductDosage()
      } else if (calculatorType === "area") {
        calculateAreaApplication()
      } else if (calculatorType === "water") {
        calculateWaterDosage()
      }
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

// Function to update product name dropdown based on selected product type
function updateProductNameDropdown(selectedType) {
  const productNameSelect = document.getElementById("product-name-select")
  if (!productNameSelect) return

  // Clear existing options except the first one
  while (productNameSelect.options.length > 1) {
    productNameSelect.remove(1)
  }

  // Get the current calculator type
  const calculatorType = document.getElementById("calculator-type").value

  // Choose the appropriate product list based on calculator type
  let productList = COMMON_PRODUCTS
  if (calculatorType === "area") {
    productList = AREA_TREATMENT_PRODUCTS
  } else if (calculatorType === "water") {
    productList = WATER_TREATMENT_PRODUCTS
  }

  // Filter products by selected type
  const filteredProducts = productList.filter((product) => product.type === selectedType)

  // Add filtered products to dropdown
  filteredProducts.forEach((product) => {
    const option = document.createElement("option")
    option.value = product.id
    option.textContent = product.name
    productNameSelect.appendChild(option)
  })

  // Show/hide the dropdown based on whether there are products
  const commonProductSection = document.getElementById("common-product-section")
  if (commonProductSection) {
    if (filteredProducts.length === 0 && selectedType !== "custom") {
      commonProductSection.classList.add("hidden")
      // Show the custom product section if no products are available
      const customProductSection = document.getElementById("custom-product-section")
      const useCustomProductCheckbox = document.getElementById("use-custom-product")
      if (customProductSection) customProductSection.classList.remove("hidden")
      if (useCustomProductCheckbox) useCustomProductCheckbox.checked = true
    } else if (selectedType !== "custom") {
      commonProductSection.classList.remove("hidden")
    }
  }
}

// Initialize area calculator
function initAreaCalculator() {
  console.log("Initializing area calculator...")

  // Basic initialization to ensure the tab works
  const areaShapeRadios = document.querySelectorAll('input[name="area-shape"]')
  if (areaShapeRadios && areaShapeRadios.length > 0) {
    areaShapeRadios.forEach((radio) => {
      if (radio) {
        radio.addEventListener("change", function () {
          const shape = this.value
          console.log("Area shape changed to:", shape)

          // Toggle appropriate inputs
          if (shape === "rectangle") {
            document.getElementById("rectangle-inputs")?.classList.remove("hidden")
            document.getElementById("circle-inputs")?.classList.add("hidden")
          } else if (shape === "circle") {
            document.getElementById("rectangle-inputs")?.classList.add("hidden")
            document.getElementById("circle-inputs")?.classList.remove("hidden")
          }
        })
      }
    })
  }

  // Calculate area when inputs change
  const areaInputs = [
    document.getElementById("length"),
    document.getElementById("width"),
    document.getElementById("area-unit"),
    document.getElementById("diameter"),
    document.getElementById("circle-unit"),
  ]

  areaInputs.forEach((input) => {
    if (input) {
      input.addEventListener("change", calculateArea)
      input.addEventListener("input", calculateArea)
    }
  })
}

// Initialize water calculator
function initWaterCalculator() {
  console.log("Initializing water calculator...")

  // Basic initialization to ensure the tab works
  const containerShapeRadios = document.querySelectorAll('input[name="container-shape"]')
  if (containerShapeRadios && containerShapeRadios.length > 0) {
    containerShapeRadios.forEach((radio) => {
      if (radio) {
        radio.addEventListener("change", function () {
          const shape = this.value
          console.log("Container shape changed to:", shape)

          // Toggle appropriate inputs
          if (shape === "rectangular") {
            document.getElementById("rectangular-inputs")?.classList.remove("hidden")
            document.getElementById("circular-inputs")?.classList.add("hidden")
          } else if (shape === "circular") {
            document.getElementById("rectangular-inputs")?.classList.add("hidden")
            document.getElementById("circular-inputs")?.classList.remove("hidden")
          }
        })
      }
    })
  }

  // Calculate volume when inputs change
  const volumeInputs = [
    document.getElementById("container-length"),
    document.getElementById("container-width"),
    document.getElementById("container-height"),
    document.getElementById("container-diameter"),
    document.getElementById("container-depth"),
    document.getElementById("dimension-unit"),
  ]

  volumeInputs.forEach((input) => {
    if (input) {
      input.addEventListener("change", calculateVolume)
      input.addEventListener("input", calculateVolume)
    }
  })
}

// Initialize accordion
function initAccordionFunc() {
  console.log("Initializing accordion...")

  const accordionTriggers = document.querySelectorAll(".accordion-trigger")
  console.log("Accordion triggers found:", accordionTriggers.length)

  if (accordionTriggers && accordionTriggers.length > 0) {
    accordionTriggers.forEach((trigger) => {
      if (trigger) {
        trigger.addEventListener("click", function () {
          console.log("Accordion trigger clicked")
          const accordionItem = this.parentElement
          if (accordionItem) {
            accordionItem.classList.toggle("active")

            // Explicitly handle the content visibility
            const content = accordionItem.querySelector(".accordion-content")
            if (content) {
              if (accordionItem.classList.contains("active")) {
                content.style.maxHeight = content.scrollHeight + "px"
              } else {
                content.style.maxHeight = "0"
              }
            }
          }
        })
      }
    })
  }
}

// Update ratio labels based on measurement type and water unit
function updateRatioLabels() {
  const measurementType = document.querySelector('input[name="measurement-type"]:checked')?.value || "weight"
  const waterUnit = document.getElementById("water-unit")?.value || "l"
  const waterUnit2 = document.getElementById("water-unit-2")?.value || "l"
  const targetUnit = document.getElementById("target-unit")?.value || "l"

  const ratioLabel = document.getElementById("ratio-label")
  const ratioLabel2 = document.getElementById("ratio-label-2")

  if (!ratioLabel || !ratioLabel2) return

  let unitText = ""
  if (measurementType === "weight") {
    unitText = "g"
  } else if (measurementType === "volume") {
    unitText = "ml"
  } else if (measurementType === "cap") {
    unitText = "cap"
  }

  const waterUnitText = waterUnit === "l" ? "litre" : waterUnit === "gal_uk" ? "gallon" : waterUnit
  const waterUnit2Text = waterUnit2 === "l" ? "litre" : waterUnit2 === "gal_uk" ? "gallon" : waterUnit2
  const targetUnitText = targetUnit === "l" ? "litre" : targetUnit === "gal_uk" ? "gallon" : targetUnit

  ratioLabel.textContent = `${unitText} per ${waterUnitText}`
  ratioLabel2.textContent = `${unitText} per ${targetUnitText}`
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
  const customInstructionsInput = document.getElementById("custom-instructions")

  // Set product name
  if (productNameInput) productNameInput.value = product.name

  // Set custom instructions if available
  if (customInstructionsInput) customInstructionsInput.value = product.instructions || ""

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

  // Update ratio labels
  updateRatioLabels()
}

// Implementation of preset functionality
function loadPresets(presetType, presetsList, handlePresetSelect) {
  console.log(`Loading presets for ${presetType}...`)

  if (!presetsList) return

  // Clear existing presets
  presetsList.innerHTML = ""

  // Get presets from localStorage
  const presets = JSON.parse(localStorage.getItem(presetType) || "[]")

  if (presets.length === 0) {
    presetsList.innerHTML = '<div class="p-4 text-center">No saved presets found</div>'
    return
  }

  // Create list of presets
  let html = "<ul>"
  presets.forEach((preset, index) => {
    html += `
      <li data-index="${index}">
        <div class="font-medium">${preset.name}</div>
        <div class="hint">${preset.description || "No description"}</div>
      </li>
    `
  })
  html += "</ul>"

  presetsList.innerHTML = html

  // Add click event listeners
  presetsList.querySelectorAll("li").forEach((li) => {
    li.addEventListener("click", () => {
      const index = Number.parseInt(li.getAttribute("data-index") || "0")
      const preset = presets[index]
      if (preset && handlePresetSelect) {
        handlePresetSelect(preset)
      }
    })
  })
}

function handlePresetSelect(preset) {
  console.log("Preset selected:", preset)

  if (!preset) return

  // Set all form values based on the preset
  const productTypeSelect = document.getElementById("product-type")
  if (productTypeSelect) productTypeSelect.value = preset.productType

  // Trigger change event to update product name dropdown
  if (productTypeSelect) {
    const event = new Event("change")
    productTypeSelect.dispatchEvent(event)
  }

  const productNameInput = document.getElementById("product-name")
  if (productNameInput) productNameInput.value = preset.productName

  // Set custom instructions if available
  const customInstructionsInput = document.getElementById("custom-instructions")
  if (customInstructionsInput) customInstructionsInput.value = preset.customInstructions || ""

  // Set measurement type
  const measurementTypeRadios = document.querySelectorAll('input[name="measurement-type"]')
  if (measurementTypeRadios && measurementTypeRadios.length > 0) {
    const radio = Array.from(measurementTypeRadios).find((r) => r.value === preset.measurementType)
    if (radio) radio.checked = true

    // Trigger change event
    if (radio) {
      const event = new Event("change")
      radio.dispatchEvent(event)
    }
  }

  // Set cap size if applicable
  if (preset.measurementType === "cap") {
    const capSizeInput = document.getElementById("cap-size")
    if (capSizeInput) capSizeInput.value = preset.capSize
  }

  // Set has scoop
  const hasScoopRadios = document.querySelectorAll('input[name="has-scoop"]')
  if (hasScoopRadios && hasScoopRadios.length > 0) {
    const radio = Array.from(hasScoopRadios).find((r) => r.value === preset.hasScoop)
    if (radio) radio.checked = true

    // Trigger change
    if (radio) {
      const event = new Event("change")
      radio.dispatchEvent(event)
    }
  }

  // Set scoop size if applicable
  if (preset.hasScoop === "yes") {
    const scoopSizeInput = document.getElementById("scoop-size")
    if (scoopSizeInput) scoopSizeInput.value = preset.scoopSize

    const scoopUnitSelect = document.getElementById("scoop-unit")
    if (scoopUnitSelect) scoopUnitSelect.value = preset.scoopUnit
  }

  // Set calculation mode
  const calculationModeRadios = document.querySelectorAll('input[name="calculation-mode"]')
  if (calculationModeRadios && calculationModeRadios.length > 0) {
    const radio = Array.from(calculationModeRadios).find((r) => r.value === preset.calculationMode)
    if (radio) radio.checked = true

    // Trigger change event
    if (radio) {
      const event = new Event("change")
      radio.dispatchEvent(event)
    }
  }

  // Set values based on calculation mode
  if (preset.calculationMode === "product_to_water") {
    const productAmountInput = document.getElementById("product-amount")
    if (productAmountInput) productAmountInput.value = preset.productAmount

    const productUnitSelect = document.getElementById("product-unit")
    if (productUnitSelect) productUnitSelect.value = preset.productUnit

    const waterAmountInput = document.getElementById("water-amount")
    if (waterAmountInput) waterAmountInput.value = preset.waterAmount

    const waterUnitSelect = document.getElementById("water-unit")
    if (waterUnitSelect) waterUnitSelect.value = preset.waterUnit
  } else if (preset.calculationMode === "water_to_product") {
    const waterAmount2Input = document.getElementById("water-amount-2")
    if (waterAmount2Input) waterAmount2Input.value = preset.waterAmount2

    const waterUnit2Select = document.getElementById("water-unit-2")
    if (waterUnit2Select) waterUnit2Select.value = preset.waterUnit2

    const ratioInput = document.getElementById("ratio")
    if (ratioInput) ratioInput.value = preset.ratio
  } else if (preset.calculationMode === "ratio_based") {
    const ratio2Input = document.getElementById("ratio-2")
    if (ratio2Input) ratio2Input.value = preset.ratio2

    const targetAmountInput = document.getElementById("target-amount")
    if (targetAmountInput) targetAmountInput.value = preset.targetAmount

    const targetUnitSelect = document.getElementById("target-unit")
    if (targetUnitSelect) targetUnitSelect.value = preset.targetUnit
  }

  // Hide presets panel
  const presetsPanel = document.getElementById("presets-panel")
  if (presetsPanel) presetsPanel.classList.add("hidden")

  // Update ratio labels
  updateRatioLabels()
}

function savePreset(presetType) {
  console.log(`Saving preset for ${presetType}...`)

  // Get preset name from user
  const presetName = prompt("Enter a name for this preset:")
  if (!presetName) return // User cancelled

  // Create preset object based on current form values
  const preset = {
    name: presetName,
    description: "",
    timestamp: new Date().toISOString(),
  }

  if (presetType === "gardenerPresets") {
    // Get product calculator values
    preset.productType = document.getElementById("product-type")?.value || ""
    preset.productName = document.getElementById("product-name")?.value || ""
    preset.customInstructions = document.getElementById("custom-instructions")?.value || ""
    preset.measurementType = document.querySelector('input[name="measurement-type"]:checked')?.value || ""
    preset.capSize = document.getElementById("cap-size")?.value || ""
    preset.hasScoop = document.querySelector('input[name="has-scoop"]:checked')?.value || ""
    preset.scoopSize = document.getElementById("scoop-size")?.value || ""
    preset.scoopUnit = document.getElementById("scoop-unit")?.value || ""
    preset.calculationMode = document.querySelector('input[name="calculation-mode"]:checked')?.value || ""

    // Get values based on calculation mode
    if (preset.calculationMode === "product_to_water") {
      preset.productAmount = document.getElementById("product-amount")?.value || ""
      preset.productUnit = document.getElementById("product-unit")?.value || ""
      preset.waterAmount = document.getElementById("water-amount")?.value || ""
      preset.waterUnit = document.getElementById("water-unit")?.value || ""
      preset.description = `${preset.productAmount} ${preset.productUnit} per ${preset.waterAmount} ${preset.waterUnit}`
    } else if (preset.calculationMode === "water_to_product") {
      preset.waterAmount2 = document.getElementById("water-amount-2")?.value || ""
      preset.waterUnit2 = document.getElementById("water-unit-2")?.value || ""
      preset.ratio = document.getElementById("ratio")?.value || ""
      preset.description = `${preset.ratio} ${preset.measurementType} per ${preset.waterAmount2} ${preset.waterUnit2}`
    } else if (preset.calculationMode === "ratio_based") {
      preset.ratio2 = document.getElementById("ratio-2")?.value || ""
      preset.targetAmount = document.getElementById("target-amount")?.value || ""
      preset.targetUnit = document.getElementById("target-unit")?.value || ""
      preset.description = `${preset.ratio2} ${preset.measurementType} per ${preset.targetAmount} ${preset.targetUnit}`
    }
  }

  // Get existing presets from localStorage
  const presets = JSON.parse(localStorage.getItem(presetType) || "[]")

  // Add new preset
  presets.push(preset)

  // Save back to localStorage
  localStorage.setItem(presetType, JSON.stringify(presets))

  // Show confirmation
  alert(`Preset "${presetName}" saved successfully!`)
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

  // Implement calculation logic here
  // This is a placeholder - you would implement the full calculation logic

  // Display sample results
  if (metricResultElement) metricResultElement.textContent = "10g per litre"
  if (imperialResultElement) imperialResultElement.textContent = "0.35oz per gallon"

  if (measurementType === "cap" && capResultElement && capResultCard) {
    capResultElement.textContent = "1 cap per litre"
    capResultCard.classList.remove("hidden")
  } else if (capResultCard) {
    capResultCard.classList.add("hidden")
  }

  if (hasScoop && scoopResultElement && scoopResultCard) {
    scoopResultElement.textContent = "2 scoops per litre"
    scoopResultCard.classList.remove("hidden")
  } else if (scoopResultCard) {
    scoopResultCard.classList.add("hidden")
  }

  if (alternativeResultElement) alternativeResultElement.textContent = "2 teaspoons per litre"

  if (wateringCanSection && wateringCanResult) {
    wateringCanSection.classList.remove("hidden")
    wateringCanResult.textContent = "100g per 10L watering can"
    if (wateringCanInfo) wateringCanInfo.textContent = "Based on your 10L measurement"
  }
}

// Calculate area application
function calculateAreaApplication() {
  console.log("Calculating area application...")

  // Get area shape
  const areaShape = document.querySelector('input[name="area-shape"]:checked')?.value || "rectangle"

  // Get dimensions
  let area = 0
  if (areaShape === "rectangle") {
    const length = Number.parseFloat(document.getElementById("length")?.value || "0")
    const width = Number.parseFloat(document.getElementById("width")?.value || "0")
    area = length * width
  } else if (areaShape === "circle") {
    const diameter = Number.parseFloat(document.getElementById("diameter")?.value || "0")
    const radius = diameter / 2
    area = Math.PI * radius * radius
  }

  // Get application rate
  const applicationRate = Number.parseFloat(document.getElementById("application-rate")?.value || "0")
  const rateUnit = document.getElementById("rate-unit")?.value || "g"

  // Calculate total amount needed
  const totalAmount = applicationRate * area

  // Display results
  document.getElementById("total-amount-result").textContent = `${totalAmount.toFixed(2)} ${rateUnit}`
  document.getElementById("alternative-amount-result").textContent = `${(totalAmount / 28.35).toFixed(2)} oz`
  document.getElementById("metric-rate-result").textContent = `${applicationRate.toFixed(1)} ${rateUnit} per sq m`
  document.getElementById("imperial-rate-result").textContent =
    `${(applicationRate * 0.092903).toFixed(1)} ${rateUnit} per sq ft`

  // Show calculated area
  const calculatedAreaDiv = document.getElementById("calculated-area")
  const areaResultText = document.getElementById("area-result")

  if (calculatedAreaDiv && areaResultText) {
    calculatedAreaDiv.classList.remove("hidden")
    areaResultText.textContent = `${area.toFixed(2)} sq m`
  }
}

// Calculate water dosage
function calculateWaterDosage() {
  console.log("Calculating water dosage...")

  // Get water volume
  const waterVolume = Number.parseFloat(document.getElementById("water-volume")?.value || "0")
  const waterVolumeUnit = document.getElementById("water-volume-unit")?.value || "l"

  // Get dosage amount
  const dosageAmount = Number.parseFloat(document.getElementById("dosage-amount")?.value || "0")
  const dosageUnit = document.getElementById("dosage-unit")?.value || "ml"

  // Calculate total dosage (based on per 1000 litres)
  let waterVolumeLitres = waterVolume
  if (waterVolumeUnit === "ml") {
    waterVolumeLitres = waterVolume / 1000
  } else if (waterVolumeUnit === "gal_uk") {
    waterVolumeLitres = waterVolume * 4.546
  }

  const totalDosage = (dosageAmount * waterVolumeLitres) / 1000

  // Display results
  document.getElementById("water-total-amount-result").textContent = `${totalDosage.toFixed(2)} ${dosageUnit}`
  document.getElementById("water-metric-dosage-result").textContent =
    `${(dosageAmount / 1000).toFixed(2)} ${dosageUnit} per litre`
  document.getElementById("water-imperial-dosage-result").textContent =
    `${((dosageAmount / 1000) * 4.546).toFixed(2)} ${dosageUnit} per gallon`
  document.getElementById("water-alternative-dosage-result").textContent =
    `${(dosageAmount / 1000 / 5).toFixed(1)} teaspoons per litre`
}

// Add debug event listeners to debug triggers
document.addEventListener("DOMContentLoaded", () => {
  const debugTrigger = document.getElementById("debug-trigger")
  const debugContent = document.getElementById("debug-content")

  if (debugTrigger && debugContent) {
    debugTrigger.addEventListener("click", () => {
      debugContent.classList.toggle("hidden")
    })
  }

  // Initialize debug info and copy functionality
  initDebugCopyFunctionality()
})

// Format debug info for copying
function formatDebugInfo(calculatorType) {
  let debugInfo = ""

  // Common header with timestamp
  debugInfo += "Gardener's Measurement Calculator - Debug Info\n"
  debugInfo += "Generated: " + new Date().toLocaleString() + "\n"
  debugInfo += "----------------------------------------\n\n"

  // Get calculator type
  const selectedCalculatorType = document.getElementById("calculator-type").value
  debugInfo += "Calculator Type: " + selectedCalculatorType + "\n\n"

  if (selectedCalculatorType === "product") {
    // Product Calculator Debug Info
    debugInfo += "PRODUCT CALCULATOR SELECTIONS:\n\n"

    // Get all the product calculator inputs
    const productType = document.getElementById("product-type")?.value || "N/A"
    const productName = document.getElementById("product-name")?.value || "N/A"
    const customInstructions = document.getElementById("custom-instructions")?.value || "N/A"
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

    if (customInstructions !== "N/A") {
      debugInfo += "Custom Instructions: " + customInstructions + "\n"
    }

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
  } else if (selectedCalculatorType === "area") {
    // Area Calculator Debug Info
    debugInfo += "AREA CALCULATOR SELECTIONS:\n\n"

    // Get all the area calculator inputs
    const areaShape = document.querySelector('input[name="area-shape"]:checked')?.value || "N/A"
    const length = document.getElementById("length")?.value || "N/A"
    const width = document.getElementById("width")?.value || "N/A"
    const areaUnit = document.getElementById("area-unit")?.value || "N/A"
    const diameter = document.getElementById("diameter")?.value || "N/A"
    const circleUnit = document.getElementById("circle-unit")?.value || "N/A"
    const areaProductType = document.getElementById("product-type")?.value || "N/A"
    const areaProductName = document.getElementById("product-name")?.value || "N/A"
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
  } else if (selectedCalculatorType === "water") {
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
    const waterProductType = document.getElementById("product-type")?.value || "N/A"
    const waterProductName = document.getElementById("product-name")?.value || "N/A"
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
      const calculatorType = document.getElementById("calculator-type").value
      const debugInfo = formatDebugInfo(calculatorType)

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
}

const calculateArea = () => {
  // Get area shape
  const areaShape = document.querySelector('input[name="area-shape"]:checked')?.value || "rectangle"

  // Get dimensions
  let area = 0
  if (areaShape === "rectangle") {
    const length = Number.parseFloat(document.getElementById("length")?.value || "0")
    const width = Number.parseFloat(document.getElementById("width")?.value || "0")
    const areaUnit = document.getElementById("area-unit")?.value || "sq_m"

    // Convert to square meters
    const lengthInMeters = length * LENGTH_CONVERSIONS[areaUnit]
    const widthInMeters = width * LENGTH_CONVERSIONS[areaUnit]

    area = lengthInMeters * widthInMeters
  } else if (areaShape === "circle") {
    const diameter = Number.parseFloat(document.getElementById("diameter")?.value || "0")
    const circleUnit = document.getElementById("circle-unit")?.value || "m"

    // Convert to meters
    const diameterInMeters = diameter * LENGTH_CONVERSIONS[circleUnit]
    const radius = diameterInMeters / 2
    area = Math.PI * radius * radius
  }

  // Display calculated area
  const calculatedAreaDiv = document.getElementById("calculated-area")
  const areaResultText = document.getElementById("area-result")

  if (calculatedAreaDiv && areaResultText) {
    calculatedAreaDiv.classList.remove("hidden")
    areaResultText.textContent = `${area.toFixed(2)} sq m`
  }
}

const calculateVolume = () => {
  // Get container shape
  const containerShape = document.querySelector('input[name="container-shape"]:checked')?.value || "rectangular"

  // Get dimensions
  let volume = 0
  if (containerShape === "rectangular") {
    const length = Number.parseFloat(document.getElementById("container-length")?.value || "0")
    const width = Number.parseFloat(document.getElementById("container-width")?.value || "0")
    const height = Number.parseFloat(document.getElementById("container-height")?.value || "0")
    const dimensionUnit = document.getElementById("dimension-unit")?.value || "m"

    // Convert to meters
    const lengthInMeters = length * LENGTH_CONVERSIONS[dimensionUnit]
    const widthInMeters = width * LENGTH_CONVERSIONS[dimensionUnit]
    const heightInMeters = height * LENGTH_CONVERSIONS[dimensionUnit]

    volume = lengthInMeters * widthInMeters * heightInMeters
  } else if (containerShape === "circular") {
    const diameter = Number.parseFloat(document.getElementById("container-diameter")?.value || "0")
    const depth = Number.parseFloat(document.getElementById("container-depth")?.value || "0")
    const dimensionUnit = document.getElementById("dimension-unit")?.value || "m"

    // Convert to meters
    const diameterInMeters = diameter * LENGTH_CONVERSIONS[dimensionUnit]
    const depthInMeters = depth * LENGTH_CONVERSIONS[dimensionUnit]

    const radius = diameterInMeters / 2
    volume = Math.PI * radius * radius * depthInMeters
  }

  // Display calculated volume
  const volumeResultDiv = document.getElementById("calculated-volume")
  const volumeResultText = document.getElementById("volume-result")

  if (volumeResultDiv && volumeResultText) {
    volumeResultDiv.classList.remove("hidden")
    volumeResultText.textContent = `${volume.toFixed(2)} cubic meters`
  }
}
