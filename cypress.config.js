const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'tccvwh',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    specPattern:"cypress/integration/*/*.js",
    supportFile:"cypress/support/e2e.js",
    defaultCommandTimeout: 8000,
    env : {
      url: "https://rahulshettyacademy.com/angularpractice/"
    },
    reporter: "mochawesome",
    retries: {
        // Configure retry attempts for `cypress run`
        // Default is 0
        "runMode": 1,
        // Configure retry attempts for `cypress open`
        // Default is 0
        "openMode": 0
      }
  }
});
