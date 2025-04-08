// Simple script to fix tab functionality
document.addEventListener("DOMContentLoaded", () => {
  console.log("Tab fix script loaded")

  // Get all tab buttons and panels
  const tabButtons = document.querySelectorAll(".tab-button")
  const tabPanels = document.querySelectorAll(".tab-panel")

  console.log(`Found ${tabButtons.length} tab buttons and ${tabPanels.length} tab panels`)

  // Initialize tabs - hide all panels except the first one
  tabPanels.forEach((panel, index) => {
    if (index === 0) {
      panel.style.display = "block"
      panel.classList.add("active")
    } else {
      panel.style.display = "none"
      panel.classList.remove("active")
    }
  })

  // Add click event listeners to tab buttons
  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab")
      console.log(`Tab clicked: ${tabId}`)

      // Remove active class from all buttons
      tabButtons.forEach((btn) => btn.classList.remove("active"))

      // Add active class to clicked button
      this.classList.add("active")

      // Hide all tab panels
      tabPanels.forEach((panel) => {
        panel.style.display = "none"
        panel.classList.remove("active")
      })

      // Show the selected tab panel
      const targetPanel = document.getElementById(`${tabId}-panel`)
      if (targetPanel) {
        targetPanel.style.display = "block"
        targetPanel.classList.add("active")
        console.log(`Activated panel: ${targetPanel.id}, display: ${targetPanel.style.display}`)
      } else {
        console.error(`Panel not found: ${tabId}-panel`)
      }
    })
  })

  // Initialize guide tabs
  const guideTabs = document.querySelectorAll(".guide-tab")
  const guideTabPanels = document.querySelectorAll(".guide-tab-panel")

  console.log(`Found ${guideTabs.length} guide tabs and ${guideTabPanels.length} guide tab panels`)

  // Initialize guide tabs - hide all panels except the first one
  guideTabPanels.forEach((panel, index) => {
    if (index === 0) {
      panel.style.display = "block"
      panel.classList.add("active")
    } else {
      panel.style.display = "none"
      panel.classList.remove("active")
    }
  })

  // Add click event listeners to guide tabs
  guideTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const tabId = this.getAttribute("data-guide-tab")
      console.log(`Guide tab clicked: ${tabId}`)

      // Remove active class from all guide tabs
      guideTabs.forEach((t) => t.classList.remove("active"))

      // Add active class to clicked guide tab
      this.classList.add("active")

      // Hide all guide tab panels
      guideTabPanels.forEach((panel) => {
        panel.style.display = "none"
        panel.classList.remove("active")
      })

      // Show the selected guide tab panel
      const targetPanel = document.getElementById(`${tabId}-panel`)
      if (targetPanel) {
        targetPanel.style.display = "block"
        targetPanel.classList.add("active")
        console.log(`Activated guide panel: ${targetPanel.id}, display: ${targetPanel.style.display}`)
      } else {
        console.error(`Guide panel not found: ${tabId}-panel`)
      }
    })
  })

  // Initialize accordion
  const accordionTriggers = document.querySelectorAll(".accordion-trigger")
  console.log(`Found ${accordionTriggers.length} accordion triggers`)

  accordionTriggers.forEach((trigger) => {
    trigger.addEventListener("click", function () {
      const accordionItem = this.parentElement
      accordionItem.classList.toggle("active")

      const content = this.nextElementSibling
      if (content) {
        if (accordionItem.classList.contains("active")) {
          content.style.display = "block"
        } else {
          content.style.display = "none"
        }
      }
    })
  })

  // Log the final state of all panels
  console.log("Final tab panel display states:")
  tabPanels.forEach((panel) => {
    console.log(`${panel.id}: display=${panel.style.display}, visibility=${window.getComputedStyle(panel).visibility}`)
  })
})
