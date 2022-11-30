const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    experimentalSessionAndOrigin: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }
});
