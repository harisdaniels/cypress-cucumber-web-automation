/// <reference types="cypress" />

import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import DashboardPage from "../../../pages/dashboard/dashboard-page.js";


Then("admin should be redirected to dashboard page", () => {
  DashboardPage.elements.dashboardTitleHeading().should('have.text', '\nDashboard\n');
});

When("admin wants to logout", () => {
  DashboardPage.elements.logoutLinkText().click({force: true});
});