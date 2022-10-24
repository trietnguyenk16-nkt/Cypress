const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    specPattern:"cypress/integration/*/*.js",
    supportFile:"cypress/support/e2e.js",
    defaultCommandTimeout: 8000,
    env : {
      url: "https://rahulshettyacademy.com/angularpractice/"
    }
  }
});
