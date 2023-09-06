const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video: false,
    viewportWidth: 1280,
    viewportHeight: 800,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
        require('cypress-mochawesome-reporter/plugin')(on);
    },

    specPattern: "cypress/e2e/**/*.spec.{ts,tsx}",
  },
});
