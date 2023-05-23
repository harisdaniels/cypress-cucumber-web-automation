/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../../pages/login/login-page.js"


Given('admin is on login page', () => {
  cy.visit('/')
});

When("admin inputs credentials to login", () => {
  cy.fixture('login-data.json').then((user) => {
    LoginPage.fillEmail(user.email);
    LoginPage.fillPassword(user.password);
  });
  LoginPage.elements.rememberMeCheckbox().click();
  LoginPage.elements.loginButton().click();
});

Then("admin should be redirected to login page", () => {
  LoginPage.elements.loginPageTitle().should('have.text', 'Admin area demo');
});
