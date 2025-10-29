const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    watchForFileChanges: false,
    viewportHeight: 1400,
    viewportWidth: 1600,
    baseUrl: "https://www.saucedemo.com/"
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,    
  },
  video: true,
});
