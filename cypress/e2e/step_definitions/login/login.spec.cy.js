/// <reference types="cypress" />

import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../../pages/login/login-page.js"
import DashboardPage from "../../../pages/dashboard/dashboard-page.js";

Given('admin is on login page', () => {
  cy.visit('/')
});

When("admin inputs valid credentials to login", () => {
  LoginPage.fillLoginCredentials("admin@yourstore.com", "admin");
  LoginPage.elements.loginButton().click();
});

Then("admin should be redirected to dashboard page", () => {
  DashboardPage.elements.dashboardTitleHeading().should('have.text', '\nDashboard\n');
});

When("admin wants to logout", () => {
  DashboardPage.elements.logoutLinkText().click({force: true});
});

Then("admin should be redirected to login page", () => {
  LoginPage.elements.loginPageTitle().should('have.text', 'Admin area demo');
});

