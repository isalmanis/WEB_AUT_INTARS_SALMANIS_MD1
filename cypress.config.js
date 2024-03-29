const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    siteBaseUrl: "https://demoqa.com/",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
