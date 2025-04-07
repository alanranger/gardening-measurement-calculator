// Simple script to fix tab functionality
document.addEventListener("DOMContentLoaded", () => {
  console.log("Tab fix script loaded")

  // Direct tab functionality - no dependencies on other code
  const tabButtons = document.querySelectorAll(".tab-button")

  tabButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault() // Prevent any default behavior

      const tabId = this.getAttribute("data-tab")
      console.log("Tab clicked:", tabId)

      // Remove active class from all buttons
      document.querySelectorAll(".tab-button").forEach((btn) => {
        btn.classList.remove("active")
      })

      // Add active class to clicked button
      this.classList.add("active")

      // Hide all tab panels
      document.querySelectorAll(".tab-panel").forEach((panel) => {
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
        // Log all available panels for debugging
        console.log("Available panels:")
        document.querySelectorAll(".tab-panel").forEach((p) => {
          console.log(p.id)
        })
      }
    })
  })

  // Also fix guide tabs
  const guideTabs = document.querySelectorAll(".guide-tab")

  guideTabs.forEach((tab) => {
    tab.addEventListener("click", function (e) {
      e.preventDefault()

      const tabId = this.getAttribute("data-guide-tab")
      console.log("Guide tab clicked:", tabId)

      // Remove active class from all guide tabs
      document.querySelectorAll(".guide-tab").forEach((t) => {
        t.classList.remove("active")
      })

      // Add active class to clicked guide tab
      this.classList.add("active")

      // Hide all guide tab panels
      document.querySelectorAll(".guide-tab-panel").forEach((panel) => {
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

  console.log("Tab fix script completed setup")
})
