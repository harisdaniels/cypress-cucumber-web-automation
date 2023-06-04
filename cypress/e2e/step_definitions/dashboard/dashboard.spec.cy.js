/// <reference types="cypress" />

import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import DashboardPage from "../../../pages/dashboard/dashboard-page.js";
import TopMenuSection from "../../../sections/top-menu-section.js";
import SideMenuSection from "../../../sections/side-menu-section.js";


Then("admin should be redirected to dashboard page", () => {
  DashboardPage.elements.dashboardTitleHeading().should('have.text', '\nDashboard\n');
});

When("admin wants to logout", () => {
  TopMenuSection.elements.logoutLinkText().click({force: true});
});

When("admin access customer page", () => {
  SideMenuSection.elements.nopSideBarPusher().click();
  SideMenuSection.elements.customersDropdown().click();
  SideMenuSection.elements.customersList().click();
});

When("admin access sales page", () => {
  SideMenuSection.elements.nopSideBarPusher().click();
  SideMenuSection.elements.salesDropdown().click();
  SideMenuSection.elements.orderList().click();
});