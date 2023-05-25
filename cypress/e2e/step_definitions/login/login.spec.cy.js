/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../../pages/login/login-page.js"
import { generateEmailFormat, generateText } from "../../../lib/utilities/utilities.js"


Given('admin is on login page', () => {
  cy.visit('/')
});

When("admin inputs credentials to login", () => {
  const scenarios = globalThis.scenario;
  if (scenarios.includes("invalid")) {
    LoginPage.fillEmail(generateEmailFormat());
    LoginPage.fillPassword(generateText());
  } else if (scenarios.includes("with wrong email")) {
    cy.fixture('login-data.json').then((user) => {
      LoginPage.fillEmail(generateEmailFormat());
      LoginPage.fillPassword(user.password);
    });
  } else if (scenarios.includes("with wrong password")) {
    cy.fixture('login-data.json').then((user) => {
      LoginPage.fillEmail(user.email);
      LoginPage.fillPassword(generateText());
    });
  } else if (scenarios.includes("without entering password")) {
    cy.fixture('login-data.json').then((user) => {
      LoginPage.fillEmail(user.email);
      LoginPage.cleardPasswordField();
    });
  } else {
    cy.fixture('login-data.json').then((user) => {
      LoginPage.fillEmail(user.email);
      LoginPage.fillPassword(user.password);
    });
  }
  LoginPage.elements.rememberMeCheckbox().click();
  LoginPage.elements.loginButton().click();
});

Then("admin should be redirected to login page", () => {
  globalThis.scenario.includes("not be able to login") 
    && LoginPage.elements.errorMessage().should('contain.text', 'Login was unsuccessful');
  LoginPage.elements.loginPageTitle().should('have.text', 'Admin area demo');
});
