/// <reference types="cypress" />

import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given('Admin opens URL', () => {
  cy.visit('/')
});
