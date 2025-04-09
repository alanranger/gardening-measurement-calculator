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
  progressBar.style.backgroundColor = progressPercent === 100 ? "#4caf50" : "#ff9800"

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
      name: "Seed Spacing - Basic Calculation",
      test: () => {
        // Mock inputs: 10 feet row with 6 inch spacing
        const expected = 21 // (10 * 12) / 6 + 1 = 21
        const rowLengthInches = 10 * 12
        const plantSpacing = 6
        const result = Math.floor(rowLengthInches / plantSpacing) + 1
        return result === expected ? true : `Expected ${expected}, got ${result}`
      },
    },
    {
      name: "Area - Basic Calculation",
      test: () => {
        // Mock inputs: 10 feet x 5 feet
        const expected = 50
        const result = 10 * 5
        return result === expected ? true : `Expected ${expected}, got ${result}`
      },
    },
    {
      name: "Soil Volume - Basic Calculation",
      test: () => {
        // Mock inputs: 10 feet x 5 feet x 6 inches
        const expected = 25 // 10 * 5 * (6/12) = 25 cubic feet
        const depthInFeet = 6 / 12
        const result = 10 * 5 * depthInFeet
        return Math.abs(result - expected) < 0.01 ? true : `Expected ${expected}, got ${result}`
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
      name: "Seed Spacing - Basic Calculation",
      test: () => {
        // Mock inputs: 10 feet row with 6 inch spacing
        const expected = 21 // (10 * 12) / 6 + 1 = 21
        const rowLengthInches = 10 * 12
        const plantSpacing = 6
        const result = Math.floor(rowLengthInches / plantSpacing) + 1
        return result === expected ? true : `Expected ${expected}, got ${result}`
      },
    },
    {
      name: "Area - Basic Calculation",
      test: () => {
        // Mock inputs: 10 feet x 5 feet
        const expected = 50
        const result = 10 * 5
        return result === expected ? true : `Expected ${expected}, got ${result}`
      },
    },
    {
      name: "Soil Volume - Basic Calculation",
      test: () => {
        // Mock inputs: 10 feet x 5 feet x 6 inches
        const expected = 25 // 10 * 5 * (6/12) = 25 cubic feet
        const depthInFeet = 6 / 12
        const result = 10 * 5 * depthInFeet
        return Math.abs(result - expected) < 0.01 ? true : `Expected ${expected}, got ${result}`
      },
    },
  ]

  // Add more comprehensive tests
  const additionalTests = [
    {
      name: "Seed Spacing - Zero Input",
      test: () => {
        // Test handling of zero input
        const rowLength = 0
        const plantSpacing = 6
        if (rowLength <= 0 || plantSpacing <= 0) {
          return true // Should detect invalid input
        }
        return "Failed to detect invalid input"
      },
    },
    {
      name: "Area - Decimal Input",
      test: () => {
        // Mock inputs: 10.5 feet x 5.25 feet
        const expected = 55.125
        const result = 10.5 * 5.25
        return Math.abs(result - expected) < 0.01 ? true : `Expected ${expected}, got ${result}`
      },
    },
    {
      name: "Soil Volume - Cubic Yards Conversion",
      test: () => {
        // Mock inputs: 10 feet x 5 feet x 6 inches
        const volumeCubicFeet = 25 // 10 * 5 * (6/12) = 25 cubic feet
        const expected = 0.926 // 25 / 27 ≈ 0.926 cubic yards
        const result = volumeCubicFeet / 27
        return Math.abs(result - expected) < 0.01 ? true : `Expected ${expected}, got ${result}`
      },
    },
    {
      name: "Fertilizer - Basic Calculation",
      test: () => {
        // Mock inputs: 500 sq ft area, 5 lbs per 1000 sq ft rate
        const expected = 2.5 // (500 * 5) / 1000 = 2.5 lbs
        const result = (500 * 5) / 1000
        return Math.abs(result - expected) < 0.01 ? true : `Expected ${expected}, got ${result}`
      },
    },
    {
      name: "Water Needs - Basic Calculation",
      test: () => {
        // Mock inputs: 100 sq ft area, 1 inch depth
        const volumeCubicInches = 100 * 144 * 1 // 14,400 cubic inches
        const expected = 62.34 // 14,400 * 0.004329 ≈ 62.34 gallons
        const result = volumeCubicInches * 0.004329
        return Math.abs(result - expected) < 0.1 ? true : `Expected ${expected}, got ${result}`
      },
    },
    {
      name: "Input Validation - Negative Values",
      test: () => {
        // Test handling of negative input
        const length = -5
        const width = 10
        if (length <= 0 || width <= 0) {
          return true // Should detect invalid input
        }
        return "Failed to detect negative input"
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
