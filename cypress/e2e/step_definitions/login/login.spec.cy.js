/// <reference types="cypress" />

import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../../pages/login/login-page.js"


Given('admin is on login page', () => {
  cy.visit('/')
});

When("admin inputs valid credentials to login", () => {
  cy.fixture('loginData.json').then((user) => {
    LoginPage.fillLoginCredentials(user.email, user.password);
  });
  LoginPage.elements.loginButton().click();
});

Then("admin should be redirected to login page", () => {
  LoginPage.elements.loginPageTitle().should('have.text', 'Admin area demo');
});
