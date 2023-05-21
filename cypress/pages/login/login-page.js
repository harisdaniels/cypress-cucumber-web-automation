class LoginPage {

  elements = {
    loginPageTitle: () => cy.get('div h1'),
    inputEmailField: () => cy.get('#Email'),
    inputPasswordField: () => cy.get('#Password'),
    loginButton: () => cy.get('button.login-button'),
  }

  fillLoginCredentials(email, password) {
    this.elements.inputEmailField().click().clear().type(email);
    this.elements.inputPasswordField().click().clear().type(password);
  }
}

module.exports = new LoginPage();