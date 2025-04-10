// This is a standalone script to fix the test button
// You can run this in your browser console to make the test button work

;(() => {
  console.log("Applying test button fix")

  const testTrigger = document.getElementById("test-trigger")
  const testContent = document.getElementById("test-content")

  if (testTrigger && testContent) {
    console.log("Found test button and content panel")

    // Remove any existing event listeners
    testTrigger.replaceWith(testTrigger.cloneNode(true))

    // Get the fresh reference
    const newTestTrigger = document.getElementById("test-trigger")

    // Add direct onclick handler
    newTestTrigger.onclick = () => {
      console.log("Test button clicked!")

      // Toggle visibility
      if (testContent.classList.contains("hidden")) {
        testContent.classList.remove("hidden")
        console.log("Test panel opened")

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
          console.log("Test results cleared")
        }

        // Run tests after a short delay
        setTimeout(() => {
          console.log("Starting test execution")
          try {
            // Assuming TestRunner is available globally or defined elsewhere.
            // If not, you'll need to import or define it here.
            // Example:
            // const TestRunner = window.TestRunner; // If it's a global variable
            if (typeof TestRunner !== "undefined") {
              TestRunner.runAllTests()
            } else {
              throw new Error("TestRunner is not defined. Ensure it is loaded before running tests.")
            }
          } catch (error) {
            console.error("Error running tests:", error)
            if (testResults) {
              testResults.textContent += `\nError running tests: ${error.message}\n`
            }
          }
        }, 100)
      } else {
        testContent.classList.add("hidden")
        console.log("Test panel closed")
      }
    }

    console.log("Test button handler successfully attached")
  } else {
    console.error("Test button or content not found")
  }
})()
