/// <reference types="cypress" />

import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../../pages/login/login-page.js"
import loadData from "../../lib/base-helper.js";

Given('admin is on login page', () => {
  cy.visit('/')
});

When("admin inputs valid credentials to login", () => {
  LoginPage.fillLoginCredentials("admin@yourstore.com", "admin");
  // const dataUser = new loadData();
  // cy.log(dataUser)
  // LoginPage.fillLoginCredentials(loadData(dataUser.email['email'], dataUser.password))
  LoginPage.elements.loginButton().click();
});

Then("admin should be redirected to login page", () => {
  LoginPage.elements.loginPageTitle().should('have.text', 'Admin area demo');
});
