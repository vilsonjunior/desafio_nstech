const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
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
