const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'pjgihb',
  e2e: {
    baseUrl: 'https://qualeagiria.com.br/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
