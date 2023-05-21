class DashboardPage {

  elements = {
    dashboardTitleHeading: () => cy.get('.content-header h1'),
    logoutLinkText: () => cy.get('a[href="/logout"]')
  }


}

module.exports = new DashboardPage();