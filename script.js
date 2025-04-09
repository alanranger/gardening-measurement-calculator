// Seed Spacing Calculator
function calculateSeeds() {
  const rowLength = Number.parseFloat(document.getElementById("row-length").value)
  const plantSpacing = Number.parseFloat(document.getElementById("plant-spacing").value)
  const resultElement = document.getElementById("seed-result")

  if (isNaN(rowLength) || isNaN(plantSpacing) || rowLength <= 0 || plantSpacing <= 0) {
    resultElement.textContent = "Please enter valid positive numbers."
    return
  }

  // Convert row length from feet to inches
  const rowLengthInches = rowLength * 12
  // Calculate number of plants
  const numberOfPlants = Math.floor(rowLengthInches / plantSpacing) + 1

  resultElement.textContent = `You will need approximately ${numberOfPlants} plants for your row.`
}

// Area Calculator
function calculateArea() {
  const length = Number.parseFloat(document.getElementById("length").value)
  const width = Number.parseFloat(document.getElementById("width").value)
  const resultElement = document.getElementById("area-result")

  if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
    resultElement.textContent = "Please enter valid positive numbers."
    return
  }

  const area = length * width
  resultElement.textContent = `The area is ${area.toFixed(2)} square feet.`
}

// Soil Volume Calculator
function calculateSoilVolume() {
  const length = Number.parseFloat(document.getElementById("soil-length").value)
  const width = Number.parseFloat(document.getElementById("soil-width").value)
  const depth = Number.parseFloat(document.getElementById("soil-depth").value)
  const resultElement = document.getElementById("soil-result")

  if (isNaN(length) || isNaN(width) || isNaN(depth) || length <= 0 || width <= 0 || depth <= 0) {
    resultElement.textContent = "Please enter valid positive numbers."
    return
  }

  // Convert depth from inches to feet
  const depthInFeet = depth / 12
  // Calculate volume in cubic feet
  const volumeCubicFeet = length * width * depthInFeet
  // Convert to cubic yards
  const volumeCubicYards = volumeCubicFeet / 27

  resultElement.textContent = `You need ${volumeCubicFeet.toFixed(2)} cubic feet (${volumeCubicYards.toFixed(2)} cubic yards) of soil.`
}

// Fertilizer Calculator
function calculateFertilizer() {
  const area = Number.parseFloat(document.getElementById("fert-area").value)
  const rate = Number.parseFloat(document.getElementById("fert-rate").value)
  const resultElement = document.getElementById("fert-result")

  if (isNaN(area) || isNaN(rate) || area <= 0 || rate <= 0) {
    resultElement.textContent = "Please enter valid positive numbers."
    return
  }

  const fertilizer = (area * rate) / 1000
  resultElement.textContent = `You need ${fertilizer.toFixed(2)} pounds of fertilizer.`
}

// Water Needs Calculator
function calculateWater() {
  const area = Number.parseFloat(document.getElementById("water-area").value)
  const depth = Number.parseFloat(document.getElementById("water-depth").value)
  const resultElement = document.getElementById("water-result")

  if (isNaN(area) || isNaN(depth) || area <= 0 || depth <= 0) {
    resultElement.textContent = "Please enter valid positive numbers."
    return
  }

  // Calculate water volume in cubic inches
  const volumeCubicInches = area * 144 * depth // 1 sq ft = 144 sq inches
  // Convert to gallons (1 cubic inch = 0.004329 gallons)
  const volumeGallons = volumeCubicInches * 0.004329

  resultElement.textContent = `You need ${volumeGallons.toFixed(2)} gallons of water.`
}

// Main Calculator Functions
document.addEventListener("DOMContentLoaded", () => {
  // Initialize the calculator
  initializeCalculator()

  // Set up event listeners
  setupEventListeners()
})

function initializeCalculator() {
  // Set default calculator type
  const calculatorType = document.getElementById("calculator-type")
  if (calculatorType) {
    calculatorType.value = "product-dosage"
    calculatorType.dispatchEvent(new Event("change"))
  }

  // Initialize product dropdown
  populateProductDropdown()
}

function setupEventListeners() {
  // Calculator type change
  const calculatorType = document.getElementById("calculator-type")
  if (calculatorType) {
    calculatorType.addEventListener("change", function () {
      updateCalculatorView(this.value)
    })
  }

  // Calculate button
  const calculateBtn = document.getElementById("calculate-btn")
  if (calculateBtn) {
    calculateBtn.addEventListener("click", () => {
      calculateProduct()
    })
  }

  // Find product button
  const findProductBtn = document.getElementById("find-product-btn")
  if (findProductBtn) {
    findProductBtn.addEventListener("click", () => {
      showFindProductDialog()
    })
  }

  // Saved products button
  const savedProductsBtn = document.getElementById("saved-products-btn")
  if (savedProductsBtn) {
    savedProductsBtn.addEventListener("click", () => {
      showSavedProductsDialog()
    })
  }

  // Product selection change
  const productSelect = document.getElementById("product-select")
  if (productSelect) {
    productSelect.addEventListener("change", function () {
      loadProductDetails(this.value)
    })
  }

  // Calculation mode change
  const calculationModes = document.querySelectorAll('input[name="calculation-mode"]')
  calculationModes.forEach((mode) => {
    mode.addEventListener("change", function () {
      updateCalculationFields(this.value)
    })
  })
}

function updateCalculatorView(calculatorType) {
  // Hide all calculator sections
  const calculatorSections = document.querySelectorAll(".calculator-section")
  calculatorSections.forEach((section) => {
    if (!section.classList.contains("test-panel")) {
      section.style.display = "none"
    }
  })

  // Show the selected calculator
  switch (calculatorType) {
    case "product-dosage":
      document.querySelector(".product-calculator").style.display = "block"
      break
    case "seed-spacing":
      // Show seed spacing calculator (if implemented)
      break
    case "area":
      // Show area calculator (if implemented)
      break
    case "soil-volume":
      // Show soil volume calculator (if implemented)
      break
    case "fertilizer":
      // Show fertilizer calculator (if implemented)
      break
    case "water-needs":
      // Show water needs calculator (if implemented)
      break
  }
}

function populateProductDropdown() {
  // This would typically load products from a database or local storage
  // For now, we'll just add a placeholder
  const productSelect = document.getElementById("product-select")
  if (productSelect) {
    productSelect.innerHTML = '<option value="">-- Select a product --</option>'

    // Add some example products
    const exampleProducts = [
      { id: "product1", name: "Miracle-Gro All Purpose" },
      { id: "product2", name: "Tomato Feed" },
      { id: "product3", name: "Rose Food" },
    ]

    exampleProducts.forEach((product) => {
      const option = document.createElement("option")
      option.value = product.id
      option.textContent = product.name
      productSelect.appendChild(option)
    })
  }
}

function loadProductDetails(productId) {
  // This would typically load product details from a database
  // For now, we'll just simulate it
  if (productId) {
    // Set product type and name based on selection
    document.getElementById("product-type").value = "liquid-fertilizer"
    document.getElementById("product-name").value = document.querySelector(`option[value="${productId}"]`).textContent
  }
}

function updateCalculationFields(calculationMode) {
  const productAmountSection = document.querySelector(".product-amount")
  const waterAmountSection = document.querySelector(".water-amount")

  switch (calculationMode) {
    case "product-to-water":
      productAmountSection.style.display = "block"
      waterAmountSection.style.display = "block"
      break
    case "water-to-product":
      productAmountSection.style.display = "block"
      waterAmountSection.style.display = "block"
      break
    case "ratio-based":
      productAmountSection.style.display = "block"
      waterAmountSection.style.display = "block"
      break
  }
}

function calculateProduct() {
  // Get input values
  const productAmount = Number.parseFloat(document.getElementById("product-amount").value)
  const productUnit = document.getElementById("product-unit").value
  const waterAmount = Number.parseFloat(document.getElementById("water-amount").value)
  const waterUnit = document.getElementById("water-unit").value
  const calculationMode = document.querySelector('input[name="calculation-mode"]:checked').value

  // Validate inputs
  if (isNaN(productAmount) || isNaN(waterAmount)) {
    showResult("Please enter valid numbers for product and water amounts.")
    return
  }

  // Perform calculation based on mode
  let result = ""
  switch (calculationMode) {
    case "product-to-water":
      result = `Add ${productAmount} ${productUnit} of product to ${waterAmount} ${waterUnit} of water.`
      break
    case "water-to-product":
      result = `Add ${waterAmount} ${waterUnit} of water to ${productAmount} ${productUnit} of product.`
      break
    case "ratio-based":
      const ratio = (productAmount / waterAmount).toFixed(3)
      result = `The ratio is ${ratio} ${productUnit} of product per ${waterUnit} of water.`
      break
  }

  showResult(result)
}

function showResult(message) {
  const resultElement = document.getElementById("calculation-result")
  if (resultElement) {
    resultElement.textContent = message
  }
}

function showFindProductDialog() {
  // This would open a dialog to search for products
  alert("Find Product feature will be available in a future update.")
}

function showSavedProductsDialog() {
  // This would open a dialog to view saved products
  alert("Saved Products feature will be available in a future update.")
}

// Test Functions
function runTest(testName, testFunction) {
  try {
    const result = testFunction()
    if (result === true) {
      return { name: testName, passed: true, message: "Test passed" }
    } else {
      return { name: testName, passed: false, message: result || "Test failed" }
    }
  } catch (error) {
    return { name: testName, passed: false, message: error.message }
  }
}

function updateTestResults(results) {
  const totalTests = results.length
  const passedTests = results.filter((r) => r.passed).length

  document.getElementById("tests-total").textContent = totalTests
  document.getElementById("tests-passed").textContent = passedTests

  const progressBar = document.getElementById("test-progress")
  const progressPercent = totalTests > 0 ? (passedTests / totalTests) * 100 : 0
  progressBar.style.width = `${progressPercent}%`
  progressBar.style.backgroundColor = progressPercent === 100 ? "#4a7c40" : "#ff9800"

  const detailsElement = document.getElementById("test-details")
  detailsElement.innerHTML = ""

  results.forEach((result) => {
    const resultElement = document.createElement("div")
    resultElement.className = result.passed ? "test-pass" : "test-fail"
    resultElement.textContent = `${result.passed ? "✓" : "✗"} ${result.name}: ${result.message}`
    detailsElement.appendChild(resultElement)
  })
}

// Quick Tests - Basic functionality tests
function runQuickTests() {
  const tests = [
    {
      name: "Product Calculator - Basic Validation",
      test: () => {
        // Test that product calculator exists
        const productCalculator = document.querySelector(".product-calculator")
        return productCalculator ? true : "Product calculator not found"
      },
    },
    {
      name: "Calculator Type Selection",
      test: () => {
        // Test that calculator type selection exists
        const calculatorTypeSelect = document.getElementById("calculator-type")
        return calculatorTypeSelect ? true : "Calculator type selection not found"
      },
    },
    {
      name: "Version Display",
      test: () => {
        // Test that version is displayed
        const versionElement = document.querySelector(".version")
        return versionElement ? true : "Version display not found"
      },
    },
  ]

  const results = tests.map((test) => runTest(test.name, test.test))
  updateTestResults(results)
}

// Full Tests - Comprehensive test suite
function runFullTests() {
  // Start with quick tests
  const quickTests = [
    {
      name: "Product Calculator - Basic Validation",
      test: () => {
        // Test that product calculator exists
        const productCalculator = document.querySelector(".product-calculator")
        return productCalculator ? true : "Product calculator not found"
      },
    },
    {
      name: "Calculator Type Selection",
      test: () => {
        // Test that calculator type selection exists
        const calculatorTypeSelect = document.getElementById("calculator-type")
        return calculatorTypeSelect ? true : "Calculator type selection not found"
      },
    },
    {
      name: "Version Display",
      test: () => {
        // Test that version is displayed
        const versionElement = document.querySelector(".version")
        return versionElement ? true : "Version display not found"
      },
    },
  ]

  // Add more comprehensive tests
  const additionalTests = [
    {
      name: "Product Selection",
      test: () => {
        // Test product selection dropdown
        const productSelect = document.getElementById("product-select")
        return productSelect ? true : "Product selection dropdown not found"
      },
    },
    {
      name: "Measurement Type Options",
      test: () => {
        // Test measurement type radio buttons
        const measurementOptions = document.querySelectorAll('input[name="measurement-type"]')
        return measurementOptions.length > 0 ? true : "Measurement type options not found"
      },
    },
    {
      name: "Calculation Mode Options",
      test: () => {
        // Test calculation mode radio buttons
        const calculationModes = document.querySelectorAll('input[name="calculation-mode"]')
        return calculationModes.length > 0 ? true : "Calculation mode options not found"
      },
    },
    {
      name: "Product Amount Input",
      test: () => {
        // Test product amount input field
        const productAmount = document.getElementById("product-amount")
        return productAmount ? true : "Product amount input not found"
      },
    },
    {
      name: "Water Amount Input",
      test: () => {
        // Test water amount input field
        const waterAmount = document.getElementById("water-amount")
        return waterAmount ? true : "Water amount input not found"
      },
    },
    {
      name: "Calculate Button",
      test: () => {
        // Test calculate button
        const calculateBtn = document.getElementById("calculate-btn")
        return calculateBtn ? true : "Calculate button not found"
      },
    },
    {
      name: "Result Display",
      test: () => {
        // Test result display area
        const resultDisplay = document.getElementById("calculation-result")
        return resultDisplay ? true : "Result display not found"
      },
    },
    {
      name: "Product Type Selection",
      test: () => {
        // Test product type dropdown
        const productType = document.getElementById("product-type")
        return productType ? true : "Product type selection not found"
      },
    },
    {
      name: "Product Name Input",
      test: () => {
        // Test product name input
        const productName = document.getElementById("product-name")
        return productName ? true : "Product name input not found"
      },
    },
  ]

  // Combine all tests
  const allTests = [...quickTests, ...additionalTests]

  // Run tests in batches to avoid UI freezing
  const batchSize = 3
  const results = []
  let currentBatch = 0

  function runBatch() {
    const startIndex = currentBatch * batchSize
    const endIndex = Math.min(startIndex + batchSize, allTests.length)
    const batch = allTests.slice(startIndex, endIndex)

    batch.forEach((test) => {
      results.push(runTest(test.name, test.test))
    })

    updateTestResults(results)

    currentBatch++
    if (currentBatch * batchSize < allTests.length) {
      setTimeout(runBatch, 100) // Run next batch after a short delay
    }
  }

  runBatch()
}
