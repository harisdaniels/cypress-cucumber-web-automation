/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../../pages/login/login-page.js"
import { generateEmailFormat, generateText } from "../../../lib/utilities/utilities.js"
import { LOGIN_DATA } from "../../../lib/data/data.js";


Given('admin is on login page', () => {
  cy.visit('/');
  LoginPage.elements.inputEmailField().should('be.visible');
  LoginPage.elements.inputPasswordField().should('be.visible');
  LoginPage.elements.rememberMeCheckbox().should('be.visible');
  LoginPage.elements.loginButton().should('be.visible');
});

When("admin inputs credentials to login", () => {
  const scenarios = globalThis.scenario;
  if (scenarios.includes("invalid")) {
    LoginPage.fillEmail(generateEmailFormat());
    LoginPage.fillPassword(generateText());
  } else if (scenarios.includes("with wrong email")) {
    LoginPage.fillEmail(generateEmailFormat());
    LoginPage.fillPassword(LOGIN_DATA.password);
  } else if (scenarios.includes("with wrong password")) {
    LoginPage.fillEmail(LOGIN_DATA.email);
    LoginPage.fillPassword(generateText());
  } else if (scenarios.includes("without entering password")) {
    LoginPage.fillEmail(LOGIN_DATA.email);
    LoginPage.cleardPasswordField();
  } else {
    LoginPage.fillEmail(LOGIN_DATA.email);
    LoginPage.fillPassword(LOGIN_DATA.password);
  }
  LoginPage.elements.rememberMeCheckbox().click();
  LoginPage.elements.loginButton().click();
});

Then("admin should be redirected to login page", () => {
  globalThis.scenario.includes("not be able to login") 
    && LoginPage.elements.errorMessage().should('contain.text', 'Login was unsuccessful');
  LoginPage.elements.loginPageTitle().should('have.text', 'Admin area demo');
});
