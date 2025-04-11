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
  // More products kept in the database...
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
  // More products kept in the database...
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
  // More products kept in the database...
]

// Application method descriptions
const APPLICATION_METHOD_DESCRIPTIONS = {
  water_mixing: "Products that need to be mixed with water before application",
  direct_application: "Products that are applied directly to soil or plants",
  water_treatment: "Products that are added directly to water bodies like ponds",
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

  // Set up event listeners for product changes, application method changes, etc.
  setupProductChangeListeners()
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
  const productNameSelect = document.getElementById("product-name-select")
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
    debugTrigger.onclick = function () {
      debugContent.classList.toggle("hidden")
      const icon = this.querySelector(".icon")
      if (icon) {
        icon.textContent = debugContent.classList.contains("hidden") ? "▼" : "▲"
      }

      // Update debug info when opened
      if (!debugContent.classList.contains("hidden")) {
        updateDebugInfo()
      }
    }
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
      // Get current values
      const productAmount = Number.parseFloat(document.getElementById("product-amount").value || "0")
      const oldWaterAmount = Number.parseFloat(document.getElementById("water-amount").value || "0")
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
    })
  }

  // Add event listeners for product unit changes
  const productUnitSelect = document.getElementById("product-unit")
  if (productUnitSelect) {
    productUnitSelect.addEventListener("change", function () {
      // Get current values
      const oldProductAmount = Number.parseFloat(document.getElementById("product-amount").value || "0")
      const oldProductUnit = document.getElementById("product-unit").value
      const newProductUnit = this.value
      const waterAmount = Number.parseFloat(document.getElementById("water-amount").value || "0")

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
    })
  }

  // Enhance the water-amount-2 change event to update the water_to_product calculation
  const waterAmount2Input = document.getElementById("water-amount-2")
  if (waterAmount2Input) {
    waterAmount2Input.addEventListener("change", function () {
      // Get the current ratio
      const ratio = Number.parseFloat(document.getElementById("ratio").value || "0")
      const waterUnit = document.getElementById("water-unit-2").value
      const waterAmount = Number.parseFloat(this.value || "0")

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
      const ratio = Number.parseFloat(document.getElementById("ratio-2").value || "0")
      const targetUnit = document.getElementById("target-unit").value
      const targetAmount = Number.parseFloat(this.value || "0")

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

  // Test panel toggle - Direct click handler for iframe compatibility
  const testTrigger = document.getElementById("test-trigger")
  const testContent = document.getElementById("test-content")

  if (testTrigger && testContent) {
    testTrigger.onclick = function () {
      testContent.classList.toggle("hidden")
      const icon = this.querySelector(".icon")
      if (icon) {
        icon.textContent = testContent.classList.contains("hidden") ? "▼" : "▲"
      }

      // Run tests if panel is opened
      if (!testContent.classList.contains("hidden")) {
        // Reset progress bar
        const progressBar = document.getElementById("test-progress-bar")
        const progressText = document.getElementById("test-progress-text")
        if (progressBar && progressText) {
          progressBar.style.width = "0%"
          progressText.textContent = "0%"
        }

        // Clear previous test results
        const testResults = document.getElementById("test-results")
        if (testResults) {
          testResults.textContent = "Running tests...\n\n"
        }

        // Declare TestRunner before using it
        let TestRunner

        // Dynamically import the test runner module
        import("./test-runner.js")
          .then((module) => {
            TestRunner = module.default // Assign the default export to TestRunner

            // Run tests after a short delay
            setTimeout(() => {
              try {
                TestRunner.runAllTests()
              } catch (error) {
                console.error("Error running tests:", error)
                if (testResults) {
                  testResults.textContent += "\nError running tests: " + error.message + "\n"
                }
              }
            }, 100)
          })
          .catch((error) => {
            console.error("Error importing test-runner.js:", error)
            const testResults = document.getElementById("test-results")
            if (testResults) {
              testResults.textContent += "\nError importing test-runner.js: " + error.message + "\n"
            }
          })
      }
    }
  }

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

  // Check for debug parameter in URL
  const urlParams = new URLSearchParams(window.location.search)
  const debugMode = urlParams.get("debug") === "true"

  if (debugMode) {
    // Automatically show debug panel
    if (debugContent) {
      debugContent.classList.remove("hidden")
      updateDebugInfo()
    }
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

    // Set water amount for water_to_product mode
    document.getElementById("water-amount-2").value = product.defaultWaterAmount
    const waterUnit2Select = document.getElementById("water-unit-2")
    if (waterUnit2Select) {
      for (let i = 0; i < waterUnit2Select.options.length; i++) {
        if (waterUnit2Select.options[i].value === product.defaultWaterUnit) {
          waterUnit2Select.selectedIndex = i
          break
        }
      }
    }

    // Set target amount for ratio_based mode
    document.getElementById("target-amount").value = product.defaultWaterAmount
    const targetUnitSelect = document.getElementById("target-unit")
    if (targetUnitSelect) {
      for (let i = 0; i < targetUnitSelect.options.length; i++) {
        if (targetUnitSelect.options[i].value === product.defaultWaterUnit) {
          targetUnitSelect.selectedIndex = i
          break
        }
      }
    }

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

    // Update ratio labels to match the selected units
    updateRatioLabels(product.defaultDosageUnit, document.getElementById("water-unit-2").value)
    updateRatioLabels(product.defaultDosageUnit, document.getElementById("target-unit").value, true)
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

// Function to get formatted unit display
function getFormattedUnitDisplay(unit) {
  switch (unit) {
    case "sq_m":
      return "sq metres"
    case "sq_ft":
      return "sq feet"
    case "sq_yd":
      return "sq yards"
    case "gal_uk":
      return "gallons (UK)"
    default:
      return unit
  }
}

// Function to determine appropriate decimal precision based on value
function getDecimalPrecision(number) {
  if (number === null || number === undefined || isNaN(number)) {
    return 2 // Default precision
  }
  if (number < 0.1) {
    return 3
  } else if (number < 1) {
    return 2
  } else {
    return 1
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
    capSize = Number.parseFloat(document.getElementById("cap-size").value || "10")
  }

  // Get values based on calculation mode
  let productAmount, productUnit, waterAmount, waterUnit, ratio

  if (calculationMode === "product_to_water") {
    productAmount = Number.parseFloat(document.getElementById("product-amount").value || "0")
    productUnit = document.getElementById("product-unit").value
    waterAmount = Number.parseFloat(document.getElementById("water-amount").value || "0")
    waterUnit = document.getElementById("water-unit").value

    // Calculate ratio (product per unit of water)
    ratio = productAmount / waterAmount
  } else if (calculationMode === "water_to_product") {
    waterAmount = Number.parseFloat(document.getElementById("water-amount-2").value || "0")
    waterUnit = document.getElementById("water-unit-2").value
    ratio = Number.parseFloat(document.getElementById("ratio").value || "0")

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
    ratio = Number.parseFloat(document.getElementById("ratio-2").value || "0")
    waterAmount = Number.parseFloat(document.getElementById("target-amount").value || "0")
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

  // Check if values are valid before calculation
  if (isNaN(productAmount) || isNaN(waterAmount) || isNaN(ratio) || productAmount <= 0 || waterAmount <= 0) {
    console.warn("Invalid inputs for calculation")
    return
  }

  // Calculate results
  let metricResult, imperialResult, alternativeResult

  if (measurementType === "weight") {
    // Weight-based calculation
    const precision = getDecimalPrecision(productAmount)
    metricResult = `${productAmount.toFixed(precision)} ${getFormattedUnitDisplay(productUnit)} for ${waterAmount} ${getFormattedUnitDisplay(waterUnit)}`
    imperialResult = `${convertMetricToImperial(productAmount, productUnit).toFixed(precision)} ${getImperialUnit(productUnit)} for ${convertMetricToImperial(waterAmount, waterUnit).toFixed(2)} ${getImperialUnit(waterUnit)}`
    alternativeResult = `${convertToTeaspoons(productAmount, productUnit).toFixed(precision)} teaspoons for ${waterAmount} ${getFormattedUnitDisplay(waterUnit)}`
  } else if (measurementType === "volume") {
    // Volume-based calculation
    const precision = getDecimalPrecision(productAmount)
    metricResult = `${productAmount.toFixed(precision)} ${getFormattedUnitDisplay(productUnit)} for ${waterAmount} ${getFormattedUnitDisplay(waterUnit)}`
    imperialResult = `${convertMetricToImperial(productAmount, productUnit).toFixed(precision)} ${getImperialUnit(productUnit)} for ${convertMetricToImperial(waterAmount, waterUnit).toFixed(2)} ${getImperialUnit(waterUnit)}`
    alternativeResult = `${convertToTeaspoons(productAmount, productUnit).toFixed(precision)} teaspoons for ${waterAmount} ${getFormattedUnitDisplay(waterUnit)}`
  } else if (measurementType === "cap") {
    // Cap-based calculation
    const mlAmount = productAmount * capSize
    const precision = getDecimalPrecision(productAmount)
    const mlPrecision = getDecimalPrecision(mlAmount)
    metricResult = `${productAmount.toFixed(precision)} caps (${mlAmount.toFixed(mlPrecision)} ml) for ${waterAmount} ${getFormattedUnitDisplay(waterUnit)}`
    imperialResult = `${productAmount.toFixed(precision)} caps (${convertMetricToImperial(mlAmount, "ml").toFixed(mlPrecision)} fl oz) for ${convertMetricToImperial(waterAmount, waterUnit).toFixed(2)} ${getImperialUnit(waterUnit)}`
    alternativeResult = `${convertToTeaspoons(mlAmount, "ml").toFixed(precision)} teaspoons for ${waterAmount} ${getFormattedUnitDisplay(waterUnit)}`

    // Update cap result
    document.getElementById("cap-result").textContent =
      `${productAmount.toFixed(precision)} caps (${mlAmount.toFixed(mlPrecision)} ml)`
    document.getElementById("cap-result-card").classList.remove("hidden")
  }

  // Check if product has a scoop
  const hasScoop = document.querySelector('input[name="has-scoop"]:checked')?.value === "yes"
  if (hasScoop) {
    const scoopSize = Number.parseFloat(document.getElementById("scoop-size").value || "1")
    const scoopUnit = document.getElementById("scoop-unit").value
    const scoopAmount = productAmount / scoopSize

    document.getElementById("scoop-result").textContent =
      `${scoopAmount.toFixed(2)} scoops (${productAmount.toFixed(2)} ${productUnit})`
    document.getElementById("scoop-result-card").classList.remove("hidden")
  } else {
    document.getElementById("scoop-result-card").classList.add("hidden")
  }

  // Get the user-specified watering can size
  const wateringCanSize = Number.parseFloat(document.getElementById("watering-can-size").value || "9")

  // Calculate for standard watering can (8-10 litres)
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
    <p class="hint">Based on ${ratio.toFixed(3)} ${productUnit} per ${waterUnit}</p>
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
  const applicationRate = Number.parseFloat(document.getElementById("application-rate").value || "0")
  const rateUnit = document.getElementById("rate-unit").value
  const rateAreaUnit = document.getElementById("rate-area-unit").value

  // Get area dimensions
  let area
  if (areaShape === "rectangle") {
    const length = Number.parseFloat(document.getElementById("length").value || "0")
    const width = Number.parseFloat(document.getElementById("width").value || "0")
    area = length * width
  } else if (areaShape === "circle") {
    const diameter = Number.parseFloat(document.getElementById("diameter").value || "0")
    const radius = diameter / 2
    area = Math.PI * radius * radius
  }

  // Check for valid inputs
  if (isNaN(applicationRate) || isNaN(area) || applicationRate <= 0 || area <= 0) {
    console.warn("Invalid inputs for direct application calculation")
    return
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
  const precision = getDecimalPrecision(productAmount)
  const metricResult = `${productAmount.toFixed(precision)} ${getFormattedUnitDisplay(rateUnit)} for ${area.toFixed(2)} sq metres`
  const imperialResult = `${convertMetricToImperial(productAmount, rateUnit).toFixed(precision)} ${getImperialUnit(rateUnit)} for ${convertMetricToImperial(area, "sq_m").toFixed(2)} sq ft`
  const alternativeResult = `${convertToTeaspoons(productAmount, rateUnit).toFixed(precision)} teaspoons for ${area.toFixed(2)} sq metres`

  // Update results
  document.getElementById("total-amount-result").textContent =
    `${productAmount.toFixed(precision)} ${getFormattedUnitDisplay(rateUnit)}`
  document.getElementById("alternative-amount-result").textContent = alternativeResult
  document.getElementById("metric-rate-result").textContent =
    `${applicationRate.toFixed(precision)} ${getFormattedUnitDisplay(rateUnit)} per sq metre`
  document.getElementById("imperial-rate-result").textContent =
    `${convertMetricToImperial(applicationRate, rateUnit).toFixed(precision)} ${getImperialUnit(rateUnit)} per sq foot`
}

// Function to calculate water treatment
function calculateWaterTreatment() {
  console.log("Calculating water treatment")

  // Get container shape
  const containerShape = document.querySelector('input[name="container-shape"]:checked')?.value || "rectangular"

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
  const dosageAmount = Number.parseFloat(document.getElementById("dosage-amount").value || "0")
  const dosageUnit = document.getElementById("dosage-unit").value

  // Check if dosage amount is valid
  if (isNaN(dosageAmount) || dosageAmount <= 0) {
    console.warn("Invalid dosage amount for water treatment calculation")
    return
  }

  // Get container dimensions and calculate volume
  let volume
  try {
    if (containerShape === "rectangular") {
      const length = Number.parseFloat(document.getElementById("container-length").value || "0") * conversionFactor
      const width = Number.parseFloat(document.getElementById("container-width").value || "0") * conversionFactor
      const height = Number.parseFloat(document.getElementById("container-height").value || "0") * conversionFactor
      volume = length * width * height // Result in cubic meters
      volume *= 1000 // Convert cubic meters to liters
    } else if (containerShape === "circular") {
      const diameter = Number.parseFloat(document.getElementById("container-diameter").value || "0") * conversionFactor
      const radius = diameter / 2
      const depth = Number.parseFloat(document.getElementById("container-depth").value || "0") * conversionFactor
      volume = Math.PI * radius * radius * depth // Result in cubic meters
      volume *= 1000 // Convert cubic meters to liters
    }
  } catch (error) {
    console.error("Error calculating volume:", error)
    volume = 0
  }

  // Get water volume (if manually entered)
  const manualWaterVolume = Number.parseFloat(document.getElementById("water-volume").value || "0")
  const waterVolumeUnit = document.getElementById("water-volume-unit").value

  // Determine which volume to use
  let finalVolume
  if ((containerShape === "rectangular" || containerShape === "circular") && volume > 0) {
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
    // Hide the calculated volume display
    document.getElementById("calculated-volume").classList.add("hidden")
  }

  // Check if final volume is valid
  if (isNaN(finalVolume) || finalVolume <= 0) {
    console.warn("Invalid water volume for calculation")
    return
  }

  // Calculate product amount (dosage is per 1000 liters)
  const productAmount = (dosageAmount * finalVolume) / 1000
  const precision = getDecimalPrecision(productAmount)

  // Calculate results
  const metricResult = `${productAmount.toFixed(precision)} ${getFormattedUnitDisplay(dosageUnit)} for ${finalVolume.toFixed(1)} litres`
  const imperialResult = `${convertMetricToImperial(productAmount, dosageUnit).toFixed(precision)} ${getImperialUnit(dosageUnit)} for ${convertMetricToImperial(finalVolume, "l").toFixed(2)} gallons UK`
  const alternativeResult = `${convertToTeaspoons(productAmount, dosageUnit).toFixed(precision)} teaspoons for ${finalVolume.toFixed(1)} litres`

  // Update results
  document.getElementById("water-total-amount-result").textContent =
    `${productAmount.toFixed(precision)} ${getFormattedUnitDisplay(dosageUnit)}`
  document.getElementById("water-metric-dosage-result").textContent =
    `${dosageAmount.toFixed(2)} ${getFormattedUnitDisplay(dosageUnit)} per 1000 litres`
  document.getElementById("water-imperial-dosage-result").textContent =
    `${(dosageAmount * 4.55).toFixed(2)} ${getFormattedUnitDisplay(dosageUnit)} per 1000 gallons (UK)`
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
    return "ounce"
  } else if (unit === "kg") {
    return "pound"
  } else if (unit === "ml") {
    return "fluid ounce"
  } else if (unit === "l") {
    return "gallon (UK)"
  } else if (unit === "sq_m") {
    return "square foot"
  }
  return getFormattedUnitDisplay(unit)
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

// Function to update debug info with structured calculation steps
function updateDebugInfo() {
  const debugInfo = document.getElementById("debug-info")
  if (!debugInfo) return

  // Get application method
  const applicationMethod = document.getElementById("application-method").value
  const applicationMethodDesc = APPLICATION_METHOD_DESCRIPTIONS[applicationMethod] || applicationMethod

  // Get product info
  const productType = document.getElementById("product-type").value
  let productName = "Custom Product"

  const productNameSelect = document.getElementById("product-name-select")
  if (productNameSelect && productNameSelect.value) {
    const selectedOption = productNameSelect.options[productNameSelect.selectedIndex]
    productName = selectedOption ? selectedOption.textContent : "Custom Product"
  } else if (document.getElementById("product-name")) {
    productName = document.getElementById("product-name").value || "Custom Product"
  }

  // Get product instructions
  let instructions = ""
  const instructionsText = document.getElementById("instructions-text")
  if (instructionsText) {
    instructions = instructionsText.textContent
  } else if (document.getElementById("custom-instructions")) {
    instructions = document.getElementById("custom-instructions").value
  }

  // Build structured debug string
  let debugString = `
=== CALCULATION DETAILS ===

STEP 1: APPLICATION METHOD
--------------------------
Method: ${applicationMethodDesc}

STEP 2: PRODUCT SELECTION
------------------------
Product Type: ${productType
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")}
Product Name: ${productName}

STEP 3: PRODUCT INSTRUCTIONS
---------------------------
${instructions || "No instructions available"}

STEP 4: MEASUREMENT REQUIREMENTS
------------------------------
`

  try {
    // Add calculation mode specific details
    if (applicationMethod === "water_mixing") {
      const calculationMode =
        document.querySelector('input[name="calculation-mode"]:checked')?.value || "product_to_water"
      const measurementType = document.querySelector('input[name="measurement-type"]:checked')?.value || "weight"

      debugString += `Calculation Mode: ${calculationMode.replace("_", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
`
      debugString += `Measurement Type: ${measurementType.charAt(0).toUpperCase() + measurementType.slice(1)}

`

      // Get values based on calculation mode
      let productAmount, productUnit, waterAmount, waterUnit, ratio, ratioPerLiter

      if (calculationMode === "product_to_water") {
        productAmount = Number.parseFloat(document.getElementById("product-amount").value || "0")
        productUnit = document.getElementById("product-unit").value
        waterAmount = Number.parseFloat(document.getElementById("water-amount").value || "0")
        waterUnit = document.getElementById("water-unit").value

        if (!isNaN(productAmount) && !isNaN(waterAmount) && waterAmount !== 0) {
          ratio = productAmount / waterAmount

          // Calculate ratio per liter for consistent reporting
          if (waterUnit === "l") {
            ratioPerLiter = ratio
          } else if (waterUnit === "ml") {
            ratioPerLiter = ratio * 1000 // Convert from per ml to per liter
          } else if (waterUnit === "gal_uk") {
            ratioPerLiter = ratio / 4.55 // Convert from per gallon to per liter
          }
        }

        debugString += `Input Values:
`
        debugString += `- Product Amount: ${productAmount} ${getFormattedUnitDisplay(productUnit)}
`
        debugString += `- Water Amount: ${waterAmount} ${getFormattedUnitDisplay(waterUnit)}
`
      } else if (calculationMode === "water_to_product") {
        waterAmount = Number.parseFloat(document.getElementById("water-amount-2").value || "0")
        waterUnit = document.getElementById("water-unit-2").value
        ratio = Number.parseFloat(document.getElementById("ratio").value || "0")

        // Calculate ratio per liter for consistent reporting
        if (waterUnit === "l") {
          ratioPerLiter = ratio
        } else if (waterUnit === "ml") {
          ratioPerLiter = ratio * 1000 // Convert from per ml to per liter
        } else if (waterUnit === "gal_uk") {
          ratioPerLiter = ratio / 4.55 // Convert ratio from per gallon to per liter
        }

        // Convert water amount to liters for calculation
        let waterAmountInLiters = waterAmount
        if (waterUnit === "gal_uk") {
          waterAmountInLiters = waterAmount * 4.55 // Convert UK gallons to liters
        } else if (waterUnit === "ml") {
          waterAmountInLiters = waterAmount / 1000 // Convert ml to liters
        }

        if (!isNaN(ratio) && !isNaN(waterAmountInLiters)) {
          productAmount = ratioPerLiter * waterAmountInLiters
        }
        productUnit = measurementType === "weight" ? "g" : measurementType === "cap" ? "cap" : "ml"

        debugString += `Input Values:
`
        debugString += `- Water Amount: ${waterAmount} ${getFormattedUnitDisplay(waterUnit)}
`
        debugString += `- Ratio: ${ratio} ${productUnit} per ${getFormattedUnitDisplay(waterUnit)}
`
      } else if (calculationMode === "ratio_based") {
        ratio = Number.parseFloat(document.getElementById("ratio-2").value || "0")
        waterAmount = Number.parseFloat(document.getElementById("target-amount").value || "0")
        waterUnit = document.getElementById("target-unit").value

        // Calculate ratio per liter for consistent reporting
        if (waterUnit === "l") {
          ratioPerLiter = ratio
        } else if (waterUnit === "ml") {
          ratioPerLiter = ratio * 1000 // Convert from per ml to per liter
        } else if (waterUnit === "gal_uk") {
          ratioPerLiter = ratio / 4.55 // Convert ratio from per gallon to per liter
        }

        // Convert water amount to liters for calculation
        let waterAmountInLiters = waterAmount
        if (waterUnit === "gal_uk") {
          waterAmountInLiters = waterAmount * 4.55 // Convert UK gallons to liters
        } else if (waterUnit === "ml") {
          waterAmountInLiters = waterAmount / 1000 // Convert ml to liters
        }

        if (!isNaN(ratio) && !isNaN(waterAmountInLiters)) {
          productAmount = ratioPerLiter * waterAmountInLiters
        }
        productUnit = measurementType === "weight" ? "g" : measurementType === "cap" ? "cap" : "ml"

        debugString += `Input Values:
`
        debugString += `- Target Water Amount: ${waterAmount} ${getFormattedUnitDisplay(waterUnit)}
`
        debugString += `- Ratio: ${ratio} ${productUnit} per ${getFormattedUnitDisplay(waterUnit)}
`
      }

      // Add measurement-specific debug info
      if (measurementType === "cap") {
        const capSize = Number.parseFloat(document.getElementById("cap-size").value || "10")
        debugString += `- Cap Size: ${capSize} ml
`
      }

      // Add scoop-specific debug info
      const hasScoop = document.querySelector('input[name="has-scoop"]:checked')?.value === "yes"
      if (hasScoop) {
        const scoopSize = Number.parseFloat(document.getElementById("scoop-size").value || "5")
        const scoopUnit = document.getElementById("scoop-unit").value
        debugString += `- Scoop Size: ${scoopSize} ${scoopUnit}
`
      }

      debugString += `
Calculation:
`
      if (typeof ratio === "number" && !isNaN(ratio)) {
        debugString += `- Ratio: ${ratio.toFixed(4)} ${productUnit} per ${getFormattedUnitDisplay(waterUnit)}
`
      } else {
        debugString += `- Ratio: Invalid ratio
`
      }

      if (typeof ratioPerLiter === "number" && !isNaN(ratioPerLiter)) {
        debugString += `- Standardized Ratio: ${ratioPerLiter.toFixed(4)} ${productUnit} per litre
`
      } else {
        debugString += `- Standardized Ratio: Invalid ratio
`
      }

      // Add water amount in liters for clarity
      let waterAmountInLiters = waterAmount
      if (waterUnit === "gal_uk") {
        waterAmountInLiters = waterAmount * 4.55 // Convert UK gallons to liters
      } else if (waterUnit === "ml") {
        waterAmountInLiters = waterAmount / 1000 // Convert ml to liters
      }

      if (typeof waterAmountInLiters === "number" && !isNaN(waterAmountInLiters)) {
        debugString += `- Water Amount: ${waterAmount} ${getFormattedUnitDisplay(waterUnit)} (${waterAmountInLiters.toFixed(2)} litres)
`
      } else {
        debugString += `- Water Amount: ${waterAmount} ${getFormattedUnitDisplay(waterUnit)} (Invalid conversion)
`
      }

      if (typeof productAmount === "number" && !isNaN(productAmount)) {
        debugString += `- Product Amount: ${productAmount.toFixed(4)} ${getFormattedUnitDisplay(productUnit)}
`
      } else {
        debugString += `- Product Amount: Invalid amount
`
      }

      // Add calculation formula
      if (
        typeof ratioPerLiter === "number" &&
        !isNaN(ratioPerLiter) &&
        typeof waterAmountInLiters === "number" &&
        !isNaN(waterAmountInLiters) &&
        typeof productAmount === "number" &&
        !isNaN(productAmount)
      ) {
        debugString += `- Formula: ${ratioPerLiter.toFixed(4)} × ${waterAmountInLiters.toFixed(2)} = ${productAmount.toFixed(4)} ${getFormattedUnitDisplay(productUnit)}
`
      } else {
        debugString += `- Formula: Invalid calculation
`
      }
    } else if (applicationMethod === "direct_application") {
      const areaShape = document.querySelector('input[name="area-shape"]:checked')?.value || "rectangle"
      const applicationRate = Number.parseFloat(document.getElementById("application-rate").value || "0")
      const rateUnit = document.getElementById("rate-unit").value
      const rateAreaUnit = document.getElementById("rate-area-unit").value

      debugString += `Area Shape: ${areaShape.charAt(0).toUpperCase() + areaShape.slice(1)}
`
      debugString += `Application Rate: ${applicationRate} ${getFormattedUnitDisplay(rateUnit)} per ${getFormattedUnitDisplay(rateAreaUnit)}

`

      // Get area dimensions
      let area, dimensions
      if (areaShape === "rectangle") {
        const length = Number.parseFloat(document.getElementById("length").value || "0")
        const width = Number.parseFloat(document.getElementById("width").value || "0")
        const areaUnit = document.getElementById("area-unit").value
        if (!isNaN(length) && !isNaN(width)) {
          area = length * width
        }
        dimensions = `Length: ${length} ${areaUnit}, Width: ${width} ${areaUnit}`
      } else if (areaShape === "circle") {
        const diameter = Number.parseFloat(document.getElementById("diameter").value || "0")
        const circleUnit = document.getElementById("circle-unit").value
        const radius = diameter / 2
        if (!isNaN(radius)) {
          area = Math.PI * radius * radius
        }
        dimensions = `Diameter: ${diameter} ${circleUnit}, Radius: ${radius} ${circleUnit}`
      }

      debugString += `Dimensions:
- ${dimensions}
`
      if (typeof area === "number" && !isNaN(area)) {
        debugString += `- Calculated Area: ${area.toFixed(2)} square ${document.getElementById(areaShape === "rectangle" ? "area-unit" : "circle-unit").value}

`
      } else {
        debugString += `- Calculated Area: Invalid area

`
      }

      // Calculate product amount
      let productAmount
      if (typeof applicationRate === "number" && !isNaN(applicationRate) && typeof area === "number" && !isNaN(area)) {
        productAmount = applicationRate * area
      }

      debugString += `Calculation:
`
      if (
        typeof applicationRate === "number" &&
        !isNaN(applicationRate) &&
        typeof area === "number" &&
        !isNaN(area) &&
        typeof productAmount === "number" &&
        !isNaN(productAmount)
      ) {
        debugString += `- Formula: ${applicationRate} ${getFormattedUnitDisplay(rateUnit)} × ${area.toFixed(2)} ${getFormattedUnitDisplay(rateAreaUnit)} = ${productAmount.toFixed(2)} ${getFormattedUnitDisplay(rateUnit)}
`
      } else {
        debugString += `- Formula: Invalid calculation
`
      }
    } else if (applicationMethod === "water_treatment") {
      const containerShape = document.querySelector('input[name="container-shape"]:checked')?.value || "rectangular"
      const dimensionUnit = document.getElementById("dimension-unit").value
      const dosageAmount = Number.parseFloat(document.getElementById("dosage-amount").value || "0")
      const dosageUnit = document.getElementById("dosage-unit").value

      debugString += `Container Shape: ${containerShape.charAt(0).toUpperCase() + containerShape.slice(1)}
`
      debugString += `Dosage Rate: ${dosageAmount} ${getFormattedUnitDisplay(dosageUnit)} per 1000 litres

`

      // Get container dimensions and calculate volume
      let volume, dimensions
      let conversionFactor = 1

      // Set conversion factor based on dimension unit
      if (dimensionUnit === "cm") {
        conversionFactor = 0.01 // cm to m
      } else if (dimensionUnit === "in") {
        conversionFactor = 0.0254 // inches to m
      } else if (dimensionUnit === "ft") {
        conversionFactor = 0.3048 // feet to m
      }

      try {
        if (containerShape === "rectangular") {
          const length = Number.parseFloat(document.getElementById("container-length").value || "0")
          const width = Number.parseFloat(document.getElementById("container-width").value || "0")
          const height = Number.parseFloat(document.getElementById("container-height").value || "0")
          if (!isNaN(length) && !isNaN(width) && !isNaN(height)) {
            volume = length * width * height * conversionFactor * conversionFactor * conversionFactor * 1000
          }
          dimensions = `Length: ${length} ${dimensionUnit}, Width: ${width} ${dimensionUnit}, Height: ${height} ${dimensionUnit}`
        } else if (containerShape === "circular") {
          const diameter = Number.parseFloat(document.getElementById("container-diameter").value || "0")
          const depth = Number.parseFloat(document.getElementById("container-depth").value || "0")
          const radius = diameter / 2
          if (!isNaN(radius) && !isNaN(depth)) {
            volume = Math.PI * radius * radius * depth * conversionFactor * conversionFactor * conversionFactor * 1000
          }
          dimensions = `Diameter: ${diameter} ${dimensionUnit}, Depth: ${depth} ${dimensionUnit}`
        }
      } catch (error) {
        console.error("Error calculating volume:", error)
      }

      // Get water volume (if manually entered)
      const manualWaterVolume = Number.parseFloat(document.getElementById("water-volume").value || "0")
      const waterVolumeUnit = document.getElementById("water-volume-unit").value

      // Determine which volume to use
      let finalVolume
      if (
        (containerShape === "rectangular" || containerShape === "circular") &&
        typeof volume === "number" &&
        !isNaN(volume)
      ) {
        finalVolume = volume
        debugString += `Dimensions:
- ${dimensions}
`
        debugString += `- Calculated Volume: ${volume.toFixed(2)} litres (${(volume / 1000).toFixed(2)} cubic meters, ${(volume * 0.22).toFixed(2)} gallons UK)

`
      } else {
        // Convert manual water volume to liters if needed
        if (waterVolumeUnit === "ml") {
          finalVolume = manualWaterVolume / 1000
        } else if (waterVolumeUnit === "gal_uk") {
          finalVolume = manualWaterVolume * 4.55
        } else {
          finalVolume = manualWaterVolume
        }
        debugString += `Manual Water Volume: ${manualWaterVolume} ${getFormattedUnitDisplay(waterVolumeUnit)} (${finalVolume.toFixed(2)} litres)

`
      }

      // Calculate product amount
      let productAmount
      if (
        typeof dosageAmount === "number" &&
        !isNaN(dosageAmount) &&
        typeof finalVolume === "number" &&
        !isNaN(finalVolume)
      ) {
        productAmount = (dosageAmount * finalVolume) / 1000
      }

      debugString += `Calculation:
`
      if (
        typeof dosageAmount === "number" &&
        !isNaN(dosageAmount) &&
        typeof finalVolume === "number" &&
        !isNaN(finalVolume) &&
        typeof productAmount === "number" &&
        !isNaN(productAmount)
      ) {
        debugString += `- Formula: (${dosageAmount} ${getFormattedUnitDisplay(dosageUnit)} × ${finalVolume.toFixed(2)} litres) ÷ 1000 = ${productAmount.toFixed(2)} ${getFormattedUnitDisplay(dosageUnit)}
`
      } else {
        debugString += `- Formula: Invalid calculation
`
      }
    }

    // Add STEP 5: RESULTS section
    debugString += `
STEP 5: RESULTS
--------------
`

    if (applicationMethod === "water_mixing") {
      const metricResult = document.getElementById("metric-result")?.textContent || "Not calculated"
      const imperialResult = document.getElementById("imperial-result")?.textContent || "Not calculated"
      const alternativeResult = document.getElementById("alternative-result")?.textContent || "Not calculated"

      debugString += `Metric: ${metricResult}
`
      debugString += `Imperial: ${imperialResult}
`
      debugString += `Alternative: ${alternativeResult}
`

      // Add cap result if applicable
      const capResultCard = document.getElementById("cap-result-card")
      if (capResultCard && !capResultCard.classList.contains("hidden")) {
        const capResult = document.getElementById("cap-result")?.textContent || "Not calculated"
        debugString += `Cap Measurement: ${capResult}
`
      }

      // Add scoop result if applicable
      const scoopResultCard = document.getElementById("scoop-result-card")
      if (scoopResultCard && !scoopResultCard.classList.contains("hidden")) {
        const scoopResult = document.getElementById("scoop-result")?.textContent || "Not calculated"
        debugString += `Scoop Measurement: ${scoopResult}
`
      }

      // Add watering can result if applicable
      const wateringCanSection = document.getElementById("watering-can-section")
      if (wateringCanSection && !wateringCanSection.classList.contains("hidden")) {
        const wateringCanResult = document.getElementById("watering-can-result")?.textContent || "Not calculated"
        debugString += `Watering Can: ${wateringCanResult}
`
      }
    } else if (applicationMethod === "direct_application") {
      const totalAmountResult = document.getElementById("total-amount-result")?.textContent || "Not calculated"
      const alternativeAmountResult =
        document.getElementById("alternative-amount-result")?.textContent || "Not calculated"
      const metricRateResult = document.getElementById("metric-rate-result")?.textContent || "Not calculated"
      const imperialRateResult = document.getElementById("imperial-rate-result")?.textContent || "Not calculated"

      debugString += `Total Amount: ${totalAmountResult}
`
      debugString += `Alternative: ${alternativeAmountResult}
`
      debugString += `Metric Rate: ${metricRateResult}
`
      debugString += `Imperial Rate: ${imperialRateResult}
`
    } else if (applicationMethod === "water_treatment") {
      const waterTotalAmountResult =
        document.getElementById("water-total-amount-result")?.textContent || "Not calculated"
      const waterMetricDosageResult =
        document.getElementById("water-metric-dosage-result")?.textContent || "Not calculated"
      const waterImperialDosageResult =
        document.getElementById("water-imperial-dosage-result")?.textContent || "Not calculated"
      const waterAlternativeDosageResult =
        document.getElementById("water-alternative-dosage-result")?.textContent || "Not calculated"

      debugString += `Total Amount: ${waterTotalAmountResult}
`
      debugString += `Metric Dosage: ${waterMetricDosageResult}
`
      debugString += `Imperial Dosage: ${waterImperialDosageResult}
`
      debugString += `Alternative: ${waterAlternativeDosageResult}
`
    }
  } catch (error) {
    debugString += `Error generating debug info: ${error.message}
`
    console.error("Error generating debug info:", error)
  }

  debugInfo.textContent = debugString
}

// Function to set up event listeners for product changes
function setupProductChangeListeners() {
  const productNameSelect = document.getElementById("product-name-select")

  if (productNameSelect) {
    productNameSelect.addEventListener("change", function () {
      const selectedId = this.value

      // Find the selected product
      const allProducts = [...COMMON_PRODUCTS, ...AREA_TREATMENT_PRODUCTS, ...WATER_TREATMENT_PRODUCTS]
      const selectedProduct = allProducts.find((p) => p.id === selectedId)

      if (selectedProduct) {
        // Update calculator inputs based on selected product
        updateCalculatorInputs(selectedProduct)
      }
    })
  }
}
