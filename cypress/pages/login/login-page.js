class LoginPage {

  elements = {
    loginPageTitle: () => cy.get('div h1'),
    inputEmailField: () => cy.get('#Email'),
    inputPasswordField: () => cy.get('#Password'),
    rememberMeCheckbox: () => cy.get('#RememberMe'),
    loginButton: () => cy.get('button.login-button'),
    errorMessage: () => cy.get('div.message-error.validation-summary-errors')
  }

  fillEmail(email) {
    this.elements.inputEmailField().click().clear().invoke('val', email);
  }
  fillPassword(password) {
    this.elements.inputPasswordField().click().clear().invoke('val', password);
  }

  fillLoginCredentials(email, password) {
    this.elements.inputEmailField().click().clear().type(email);
    this.elements.inputPasswordField().click().clear().type(password);
  }
}

module.exports = new LoginPage();