document.addEventListener("DOMContentLoaded", () => {
  console.log("Tabs script loaded")

  // Get all tab buttons and panels
  const tabButtons = document.querySelectorAll(".tab-button")
  const tabPanels = document.querySelectorAll(".tab-panel")

  console.log("Found tab buttons:", tabButtons.length)
  console.log("Found tab panels:", tabPanels.length)

  // Log all tab buttons and their data-tab attributes
  tabButtons.forEach((button) => {
    console.log("Tab button:", button.textContent.trim(), "data-tab:", button.getAttribute("data-tab"))
  })

  // Log all tab panels and their IDs
  tabPanels.forEach((panel) => {
    console.log("Tab panel ID:", panel.id)
  })

  // Add click event listeners to tab buttons
  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab")
      console.log("Tab clicked:", tabId)

      // Remove active class from all buttons and panels
      tabButtons.forEach((btn) => btn.classList.remove("active"))
      tabPanels.forEach((panel) => panel.classList.remove("active"))

      // Add active class to clicked button
      this.classList.add("active")

      // Find and activate the corresponding panel
      const panel = document.getElementById(tabId + "-panel")
      if (panel) {
        panel.classList.add("active")
        console.log("Activated panel:", panel.id)
      } else {
        console.error("Panel not found for tab:", tabId)
      }
    })
  })

  // Initialize guide tabs
  const guideTabs = document.querySelectorAll(".guide-tab")
  const guideTabPanels = document.querySelectorAll(".guide-tab-panel")

  console.log("Found guide tabs:", guideTabs.length)
  console.log("Found guide tab panels:", guideTabPanels.length)

  guideTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const tabId = this.getAttribute("data-guide-tab")
      console.log("Guide tab clicked:", tabId)

      // Remove active class from all guide tabs and panels
      guideTabs.forEach((t) => t.classList.remove("active"))
      guideTabPanels.forEach((panel) => panel.classList.remove("active"))

      // Add active class to clicked guide tab
      this.classList.add("active")

      // Find and activate the corresponding guide panel
      const panel = document.getElementById(tabId + "-panel")
      if (panel) {
        panel.classList.add("active")
        console.log("Activated guide panel:", panel.id)
      } else {
        console.error("Guide panel not found for tab:", tabId)
      }
    })
  })

  // Force the first tab to be active on page load
  if (tabButtons.length > 0 && tabPanels.length > 0) {
    const firstTabId = tabButtons[0].getAttribute("data-tab")
    const firstPanel = document.getElementById(firstTabId + "-panel")

    tabButtons[0].classList.add("active")
    if (firstPanel) {
      firstPanel.classList.add("active")
      console.log("Initialized first tab:", firstTabId)
    }
  }
})
