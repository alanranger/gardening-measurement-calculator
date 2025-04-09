// This script will run after the page loads and directly populate the product dropdown
;(() => {
  console.log("Product fixer script running")

  // Wait for the DOM to be fully loaded
  document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded, initializing product fixer")
    initProductFixer()
  })

  // If the page is already loaded, run immediately
  if (document.readyState === "complete" || document.readyState === "interactive") {
    console.log("Page already loaded, initializing product fixer immediately")
    initProductFixer()
  }

  function initProductFixer() {
    // Define product types and their hints
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

    // Sample products for each type
    const SAMPLE_PRODUCTS = {
      liquid_fertilizer: [
        { id: "miracle-gro", name: "Miracle-Gro All Purpose" },
        { id: "baby-bio", name: "Baby Bio Houseplant Food" },
        { id: "tomorite", name: "Levington Tomorite" },
      ],
      granular_fertilizer: [
        { id: "miracle-gro-soluble", name: "Miracle-Gro Water Soluble" },
        { id: "phostrogen", name: "Phostrogen All Purpose" },
      ],
      lawn_fertilizer: [
        { id: "evergreen", name: "Evergreen Complete 4-in-1" },
        { id: "miracle-gro-lawn", name: "Miracle-Gro Lawn Food" },
      ],
      weed_killer: [
        { id: "roundup", name: "Roundup Fast Action" },
        { id: "weedol", name: "Weedol Lawn Weedkiller" },
      ],
      pond_treatment: [
        { id: "tetra-pond", name: "TetraPond AlgoRem" },
        { id: "blagdon", name: "Blagdon Clear Pond" },
      ],
      algaecide: [
        { id: "api-algaefix", name: "API PondCare Algaefix" },
        { id: "tetrapond-algofin", name: "TetraPond AlgoFin" },
      ],
      water_clarifier: [
        { id: "tetra-aquasafe", name: "Tetra AquaSafe" },
        { id: "api-stress-coat", name: "API Stress Coat" },
      ],
    }

    // Get DOM elements
    const productTypeSelect = document.getElementById("product-type")
    const productNameSelect = document.getElementById("product-name-select")
    const productTypeHint = document.getElementById("product-type-hint")

    if (!productTypeSelect || !productNameSelect) {
      console.error("Required product selection elements not found")
      return
    }

    console.log("Product selection elements found")

    // Function to update product dropdown
    function updateProductDropdown() {
      const selectedType = productTypeSelect.value
      console.log("Updating products for type:", selectedType)

      // Update hint text
      if (productTypeHint) {
        productTypeHint.textContent = PRODUCT_TYPE_HINTS[selectedType] || ""
      }

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

      // Get products for the selected type
      const products = SAMPLE_PRODUCTS[selectedType] || []
      console.log(`Found ${products.length} products for type ${selectedType}`)

      // Add products to dropdown
      products.forEach((product) => {
        const option = document.createElement("option")
        option.value = product.id
        option.textContent = product.name
        productNameSelect.appendChild(option)
      })
    }

    // Add event listener to product type select
    productTypeSelect.addEventListener("change", updateProductDropdown)

    // Initial update
    console.log("Performing initial product dropdown update")
    updateProductDropdown()

    console.log("Product fixer initialization complete")
  }
})()
