class DashboardPage {

  elements = {
    dashboardTitleHeading: () => cy.get('.content-header h1')
  }

}

module.exports = new DashboardPage();