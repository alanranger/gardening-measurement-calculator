document.addEventListener("DOMContentLoaded", () => {
  console.log("Fix script loaded")

  // PART 1: Fix tabs
  function fixTabs() {
    console.log("Fixing tabs")

    // Get all tab buttons and panels
    const tabButtons = document.querySelectorAll(".tab-button")
    const tabPanels = document.querySelectorAll(".tab-panel")

    console.log("Found tab buttons:", tabButtons.length)
    console.log("Found tab panels:", tabPanels.length)

    // Force display style on all panels (hide them first)
    tabPanels.forEach((panel) => {
      panel.style.display = "none"
      panel.classList.remove("active")
    })

    // Remove active class from all buttons
    tabButtons.forEach((btn) => {
      btn.classList.remove("active")
    })

    // Set first tab as active
    if (tabButtons.length > 0 && tabPanels.length > 0) {
      tabButtons[0].classList.add("active")
      const firstPanelId = tabButtons[0].getAttribute("data-tab") + "-panel"
      const firstPanel = document.getElementById(firstPanelId)

      if (firstPanel) {
        firstPanel.classList.add("active")
        firstPanel.style.display = "block"
        console.log("Set first tab as active:", firstPanelId)
      }
    }

    // Add direct click handlers to tab buttons
    tabButtons.forEach((button) => {
      // Remove any existing click handlers
      const newButton = button.cloneNode(true)
      button.parentNode.replaceChild(newButton, button)

      newButton.addEventListener("click", function (e) {
        e.preventDefault()
        const tabId = this.getAttribute("data-tab")
        console.log("Tab clicked:", tabId)

        // Remove active class from all buttons
        tabButtons.forEach((btn) => {
          btn.classList.remove("active")
        })

        // Add active class to clicked button
        this.classList.add("active")

        // Hide all tab panels
        tabPanels.forEach((panel) => {
          panel.classList.remove("active")
          panel.style.display = "none"
        })

        // Show the selected tab panel
        const targetPanel = document.getElementById(tabId + "-panel")
        if (targetPanel) {
          targetPanel.classList.add("active")
          targetPanel.style.display = "block"
          console.log("Activated panel:", targetPanel.id)
        } else {
          console.error("Panel not found:", tabId + "-panel")
        }
      })
    })

    // Also fix guide tabs
    const guideTabs = document.querySelectorAll(".guide-tab")
    const guideTabPanels = document.querySelectorAll(".guide-tab-panel")

    console.log("Found guide tabs:", guideTabs.length)
    console.log("Found guide tab panels:", guideTabPanels.length)

    // Force display style on all guide panels (hide them first)
    guideTabPanels.forEach((panel) => {
      panel.style.display = "none"
      panel.classList.remove("active")
    })

    // Remove active class from all guide tabs
    guideTabs.forEach((tab) => {
      tab.classList.remove("active")
    })

    // Set first guide tab as active
    if (guideTabs.length > 0 && guideTabPanels.length > 0) {
      guideTabs[0].classList.add("active")
      const firstPanelId = guideTabs[0].getAttribute("data-guide-tab") + "-panel"
      const firstPanel = document.getElementById(firstPanelId)

      if (firstPanel) {
        firstPanel.classList.add("active")
        firstPanel.style.display = "block"
        console.log("Set first guide tab as active:", firstPanelId)
      }
    }

    // Add direct click handlers to guide tabs
    guideTabs.forEach((tab) => {
      // Remove any existing click handlers
      const newTab = tab.cloneNode(true)
      tab.parentNode.replaceChild(newTab, tab)

      newTab.addEventListener("click", function (e) {
        e.preventDefault()
        const tabId = this.getAttribute("data-guide-tab")
        console.log("Guide tab clicked:", tabId)

        // Remove active class from all guide tabs
        guideTabs.forEach((t) => {
          t.classList.remove("active")
        })

        // Add active class to clicked guide tab
        this.classList.add("active")

        // Hide all guide tab panels
        guideTabPanels.forEach((panel) => {
          panel.classList.remove("active")
          panel.style.display = "none"
        })

        // Show the selected guide tab panel
        const targetPanel = document.getElementById(tabId + "-panel")
        if (targetPanel) {
          targetPanel.classList.add("active")
          targetPanel.style.display = "block"
          console.log("Activated guide panel:", targetPanel.id)
        } else {
          console.error("Guide panel not found:", tabId + "-panel")
        }
      })
    })
  }

  // PART 2: Fix product dropdowns
  function fixProductDropdowns() {
    console.log("Fixing product dropdowns")

    // Define product arrays directly
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
      // Add more products as needed
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
    ]

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
    ]

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
    ]

    // Populate product dropdowns
    const productDropdown = document.getElementById("product-dropdown")
    const areaProductDropdown = document.getElementById("area-product-dropdown")
    const waterProductDropdown = document.getElementById("water-product-dropdown")

    // Populate main product dropdown
    if (productDropdown) {
      console.log("Populating product dropdown")

      // Clear existing options except the first one
      while (productDropdown.options.length > 1) {
        productDropdown.remove(1)
      }

      // Create optgroups
      const liquidFertilizerGroup = document.createElement("optgroup")
      liquidFertilizerGroup.label = "Liquid Fertilizers"

      const granularFertilizerGroup = document.createElement("optgroup")
      granularFertilizerGroup.label = "Granular Fertilizers"

      // Add products to appropriate groups
      COMMON_PRODUCTS.forEach((product) => {
        const option = document.createElement("option")
        option.value = product.id
        option.textContent = product.name

        if (product.type === "liquid_fertilizer") {
          liquidFertilizerGroup.appendChild(option)
        } else if (product.type === "granular_fertilizer") {
          granularFertilizerGroup.appendChild(option)
        }
      })

      // Add optgroups to dropdown
      if (liquidFertilizerGroup.children.length > 0) {
        productDropdown.appendChild(liquidFertilizerGroup)
      }
      if (granularFertilizerGroup.children.length > 0) {
        productDropdown.appendChild(granularFertilizerGroup)
      }
    }

    // Populate area product dropdown
    if (areaProductDropdown) {
      console.log("Populating area product dropdown")

      // Clear existing options except the first one
      while (areaProductDropdown.options.length > 1) {
        areaProductDropdown.remove(1)
      }

      // Create optgroups
      const lawnFertilizerGroup = document.createElement("optgroup")
      lawnFertilizerGroup.label = "Lawn Fertilizers"

      // Add products to appropriate groups
      AREA_TREATMENT_PRODUCTS.forEach((product) => {
        const option = document.createElement("option")
        option.value = product.id
        option.textContent = product.name

        if (product.type === "lawn_fertilizer") {
          lawnFertilizerGroup.appendChild(option)
        }
      })

      // Add optgroups to dropdown
      if (lawnFertilizerGroup.children.length > 0) {
        areaProductDropdown.appendChild(lawnFertilizerGroup)
      }
    }

    // Populate water product dropdown
    if (waterProductDropdown) {
      console.log("Populating water product dropdown")

      // Clear existing options except the first one
      while (waterProductDropdown.options.length > 1) {
        waterProductDropdown.remove(1)
      }

      // Create optgroups
      const pondTreatmentGroup = document.createElement("optgroup")
      pondTreatmentGroup.label = "Pond Treatments"

      const algaecideGroup = document.createElement("optgroup")
      algaecideGroup.label = "Algaecides"

      // Add products to appropriate groups
      WATER_TREATMENT_PRODUCTS.forEach((product) => {
        const option = document.createElement("option")
        option.value = product.id
        option.textContent = product.name

        if (product.type === "pond_treatment") {
          pondTreatmentGroup.appendChild(option)
        } else if (product.type === "algaecide") {
          algaecideGroup.appendChild(option)
        }
      })

      // Add optgroups to dropdown
      if (pondTreatmentGroup.children.length > 0) {
        waterProductDropdown.appendChild(pondTreatmentGroup)
      }
      if (algaecideGroup.children.length > 0) {
        waterProductDropdown.appendChild(algaecideGroup)
      }
    }
  }

  // Run both fixes
  fixTabs()
  fixProductDropdowns()

  console.log("Fix script completed")
})
