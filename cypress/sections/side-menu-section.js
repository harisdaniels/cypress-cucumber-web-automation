class SideMenuSection {

    elements = {
      nopSideBarPusher: () => cy.get('#nopSideBarPusher'),
      customersDropdown: () => cy.xpath("(//li[@class='nav-item has-treeview'])[4]"),
      salesDropdown: () => cy.xpath("(//li[@class='nav-item has-treeview'])[3]"),
      customersList: () => cy.get('li a[href="/Admin/Customer/List"]'),
      orderList: () => cy.get('li a[href="/Admin/Order/List"]'),
      // registrationFromButton:() => cy.get('#SearchRegistrationDateFrom ~span')
      registrationFromButton:() => cy.xpath(`(//span[@class='k-select'])[1]`)
    }

    visitCustomerPage() {
      cy.visit('/Customer/List"')
    }

    visitOrderPage() {
      cy.visit('/Order/List"')
    }
    
}

module.exports = new SideMenuSection();