// This script adds a self-test button to the calculator
document.addEventListener("DOMContentLoaded", () => {
  console.log("Setting up self-test functionality")

  // Create a self-test button
  const selfTestButton = document.createElement("button")
  selfTestButton.id = "self-test-btn"
  selfTestButton.className = "secondary-button"
  selfTestButton.textContent = "Run Self-Test"
  selfTestButton.style.marginLeft = "10px"

  // Add the button next to the calculate button
  const calculateBtn = document.getElementById("calculate-btn")
  if (calculateBtn && calculateBtn.parentNode) {
    calculateBtn.parentNode.appendChild(selfTestButton)
  }

  // Add click handler
  selfTestButton.addEventListener("click", () => {
    // Open the test panel
    const testTrigger = document.getElementById("test-trigger")
    const testContent = document.getElementById("test-content")

    if (testTrigger && testContent) {
      // Make sure test panel is visible
      if (testContent.classList.contains("hidden")) {
        testContent.classList.remove("hidden")
        const icon = testTrigger.querySelector(".icon")
        if (icon) {
          icon.textContent = "▲"
        }
      }

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
        testResults.textContent = "Running self-test...\n\n"
      }

      // Run tests after a short delay
      setTimeout(() => {
        try {
          // Check if TestRunner is defined before using it
          if (typeof TestRunner !== "undefined") {
            TestRunner.runAllTests()
          } else {
            const errorMessage = "TestRunner is not defined. Ensure it is properly imported or declared."
            console.error(errorMessage)
            if (testResults) {
              testResults.textContent += "\n" + errorMessage + "\n"
            }
          }
        } catch (error) {
          console.error("Error running tests:", error)
          if (testResults) {
            testResults.textContent += "\nError running tests: " + error.message + "\n"
          }
        }
      }, 100)
    }
  })

  console.log("Self-test button added")
})
