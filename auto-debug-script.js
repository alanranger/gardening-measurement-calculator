// This script automatically shows the debug panel if the debug parameter is present in the URL
document.addEventListener("DOMContentLoaded", () => {
  // Check for debug parameter
  const urlParams = new URLSearchParams(window.location.search)
  const debugMode = urlParams.get("debug") === "true"

  if (debugMode) {
    console.log("Debug mode activated via URL parameter")

    // Automatically show debug panel
    const debugContent = document.getElementById("debug-content")
    const debugTrigger = document.getElementById("debug-trigger")

    if (debugContent) {
      debugContent.classList.remove("hidden")

      // Update icon if present
      if (debugTrigger) {
        const icon = debugTrigger.querySelector(".icon")
        if (icon) {
          icon.textContent = "▲"
        }
      }

      // Update debug info
      // Declare updateDebugInfo as a no-op function if it's not already defined
      if (typeof updateDebugInfo !== "function") {
        window.updateDebugInfo = () => {
          console.warn("updateDebugInfo function is not defined.")
        }
      }
      updateDebugInfo()
    }

    // Add a visual indicator that debug mode is active
    const container = document.querySelector(".container")
    if (container) {
      const debugIndicator = document.createElement("div")
      debugIndicator.className = "debug-indicator"
      debugIndicator.textContent = "Debug Mode Active"
      debugIndicator.style.position = "fixed"
      debugIndicator.style.top = "10px"
      debugIndicator.style.right = "10px"
      debugIndicator.style.backgroundColor = "#ff5722"
      debugIndicator.style.color = "white"
      debugIndicator.style.padding = "5px 10px"
      debugIndicator.style.borderRadius = "4px"
      debugIndicator.style.zIndex = "1000"
      debugIndicator.style.fontSize = "12px"

      container.appendChild(debugIndicator)
    }
  }
})
