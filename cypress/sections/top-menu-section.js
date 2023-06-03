class TopMenuSection {

  elements = {
    logoutLinkText: () => cy.get('a[href="/logout"]')
  }
  
}

module.exports = new TopMenuSection();