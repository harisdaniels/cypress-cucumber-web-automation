class LoginPage {

  elements = {
    loginPageTitle: () => cy.get('div h1'),
    inputEmailField: () => cy.get('#Email'),
    inputPasswordField: () => cy.get('#Password'),
    loginButton: () => cy.get('button.login-button'),
  }

  fillLoginCredentials(username, password){
    this.elements.inputEmailField().type(username);
    this.elements.inputPasswordField().type(password);
  }
}

module.exports = new RakaminLoginPage();