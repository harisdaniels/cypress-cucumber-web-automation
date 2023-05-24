/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../../pages/login/login-page.js"


Given('admin is on login page', () => {
  cy.visit('/')
});

When("admin inputs credentials to login", () => {
  if (globalThis.scenario.includes("not")) {
    cy.fixture('login-data.json').then((user) => {
      LoginPage.fillEmail(user[1].email);
      LoginPage.fillPassword(user[1].password);
    });
  } else {
    cy.fixture('login-data.json').then((user) => {
      LoginPage.fillEmail(user[0].email);
      LoginPage.fillPassword(user[0].password);
    });
  }
  LoginPage.elements.rememberMeCheckbox().click();
  LoginPage.elements.loginButton().click();
});

Then("admin should be redirected to login page", () => {
  (globalThis.scenario.includes("not")) && LoginPage.elements.errorMessage().should('contain.text', 'Login was unsuccessful');
  LoginPage.elements.loginPageTitle().should('have.text', 'Admin area demo');
});
