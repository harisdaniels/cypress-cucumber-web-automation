/// <reference types="cypress" />

import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import DashboardPage from "../../../pages/dashboard/dashboard-page.js";
import TopMenuSection from "../../../sections/top-menu-section.js";


Then("admin should be redirected to dashboard page", () => {
  DashboardPage.elements.dashboardTitleHeading().should('have.text', '\nDashboard\n');
});

When("admin wants to logout", () => {
  TopMenuSection.elements.logoutLinkText().click({force: true});
});