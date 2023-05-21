const { defineConfig } = require("cypress");

const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
require('dotenv').config();

async function setupNodeEvents(on, config) {
  // implement node event listeners here
  const bundler = createBundler({
    plugins: [createEsbuildPlugin(config)],
  });
  on("file:preprocessor", bundler);
  await addCucumberPreprocessorPlugin(on, config);
 
  return config;
}

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL,
    defaultCommandTimeout: parseInt(process.env.DEFAULT_TIMEOUT),
    specPattern: '**/*.feature',
    supportFile: 'cypress/support/hooks.js',
    setupNodeEvents
  },
});