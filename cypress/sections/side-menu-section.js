class SideMenuSection {

    elements = {
      nopSideBarPusher: () => cy.get('#nopSideBarPusher'),
      customersDropdown: () => cy.xpath("(//li[@class='nav-item has-treeview'])[4]"),
      customersList: () => cy.get('li a[href="/Admin/Customer/List"]'),
      // registrationFromButton:() => cy.get('#SearchRegistrationDateFrom ~span')
      registrationFromButton:() => cy.xpath(`(//span[@class='k-select'])[1]`)
    }
    
}

module.exports = new SideMenuSection();