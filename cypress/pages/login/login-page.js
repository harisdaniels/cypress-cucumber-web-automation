class LoginPage {

  elements = {
    loginPageTitle: () => cy.get('div h1'),
    inputEmailField: () => cy.get('#Email'),
    inputPasswordField: () => cy.get('#Password'),
    rememberMeCheckbox: () => cy.get('#RememberMe'),
    loginButton: () => cy.get('button.login-button'),
    // loginButtonXpath: () => cy.xpath("//button[text()='Log in']"),
    // loginButtonXpathContainsText: () => cy.xpath("//button[contains(text(),'Log in')]"),
    errorMessage: () => cy.get('div.message-error.validation-summary-errors'),
    emailErrorMessage: () => cy.get('span.field-validation-error span#Email-error')
  }

  cleardEmailField() {
    this.elements.inputEmailField().click().clear();
  }

  cleardPasswordField() {
    this.elements.inputPasswordField().click().clear();
  }

  fillEmail(email) {
    this.elements.inputEmailField().click().clear().invoke('val', email);
  }
  fillPassword(password) {
    this.elements.inputPasswordField().click().clear().invoke('val', password);
  }

  fillLoginCredentials(email, password) {
    this.elements.inputEmailField().should('be.visible').click().clear().should('not.have.value').type(email).should('have.value', email);
    this.elements.inputPasswordField().should('be.visible').click().clear().should('not.have.value').type(password).should('have.value', password);
    this.elements.rememberMeCheckbox().should('be.visible').click();
    this.elements.loginButton().should('be.visible').click();
  }
}

module.exports = new LoginPage();