# This Is My Sample Project of Web Automation Testing Using Cypress and Cucumber

## Project Information
For this project, i use:
- Cypress (https://www.cypress.io/)
- Cypress Cucumber Preprocessor (https://github.com/badeball/cypress-cucumber-preprocessor)

### Cypress
Fast, easy and reliable testing for anything that runs in a browser. 

### Cypress Cucumber Preprocessor
The cypress-cucumber-preprocessor adds support for using feature files when testing with Cypress. This preprocessor aims to provide a developer experience and behavior similar to that of Cucumber, to Cypress.

## Preparation
- Clone from this repo https://github.com/harisdaniels/cypress-cucumber-web-automation. 
- The steps of cloning Github Repository, can be found [here](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository).
- Or, you can download this repository as ZIP file

### Setup
For windows and mac, you can [download node](https://nodejs.org/en/) and install.

### Package Installation
Before start development and running the test you need to install packages that needed for this simple project. To install them, you need to do these step:

- Go to your project repo directory in your local machine.
- Open your terminal or Git Bash (if you have this)
- Type `npm install` in your terminal and press ENTER on your keyboard to install all dependecies
- Wait, and done

### How to Organize the Test
To learn to organize the test completely, you can learn from [here](https://www.npmjs.com/package/cypress-cucumber-preprocessor)

## Test Structure
- Use Gherkin syntax: a set of special [keywords](https://cucumber.io/docs/gherkin/reference/#keywords) to give structure and meaning to executable specifications.
  Each keyword is translated to many spoken languages; in this reference, Gherkin use English.
  Either spaces or tabs may be used for indentation. The recommended indentation level is two spaces. Here is an example:
  
  ```
  Feature: Login page feature

    Background: Admin should be able to open web login page
      Given admin is on login page
  
    # npx cypress run -e TAGS="@login" --headed --browser chrome
    @smoke-test @login @login-with-valid-credentials @p0
    Scenario: Admin should be able to login with valid credentials
      When admin inputs credentials to login
      Then admin should be redirected to dashboard page
      And admin wants to logout
      Then admin should be redirected to login page
  ```

- Use Page Object Model (POM): Page objects are intended to make end-to-end tests readable and easy to maintain. Instead of ad-hoc interactions with a page, a test controls the page using an instance that represents the page user interface. This is a Design Pattern that has become popular in test automation for enhancing test maintenance and reducing code duplication.

  ```
    class LoginPage {
    
      elements = {
        loginPageTitle: () => cy.get('div h1'),
        inputEmailField: () => cy.get('#Email'),
        inputPasswordField: () => cy.get('#Password'),
        rememberMeCheckbox: () => cy.get('#RememberMe'),
        loginButton: () => cy.get('button.login-button'),
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
    }
  
    module.exports = new LoginPage();
  ```


- Use Step Definition is a method with an [expression](https://cucumber.io/docs/cucumber/step-definitions/#expressions) that links it to one or more Gherkin steps. 
  When Cucumber executes a Gherkin step in a scenario, it will look for a matching step definition to execute.
  To illustrate how this works, look at the following Gherkin Scenario step definition:
  
  ```
   /// <reference types="cypress" />
  
  import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
  import LoginPage from "../../../pages/login/login-page.js"
  import { generateEmailFormat, generateText } from "../../../lib/utilities/utilities.js"
  import { LOGIN_DATA } from "../../../lib/data/data.js";
  
  
  Given('admin is on login page', () => {
    cy.visit('/');
    LoginPage.elements.inputEmailField().should('be.visible');
    LoginPage.elements.inputPasswordField().should('be.visible');
    LoginPage.elements.rememberMeCheckbox().should('be.visible');
    LoginPage.elements.loginButton().should('be.visible');
  });
  ```

## Run Test
To run the test, you need to follow these steps
- First, open terminal in your Code Editor by clicking ctrl + `
- Then type `npx cypress open` and press ENTER on your keyboard
  
- Wait until Cypress Test Runner open up
- Then, click the `.feature` file to run the test
- Or, to run all feature files at once, you can type `npx cypress run --headed --spec 'cypress/integration/*.feature'` and press ENTER

## Run Test through Github Actions
- Go to `Actions` tab on the top of Github page
- Choose `Web Automation` workflow
- Click `Run Workflow` dropdown on the right side of the page
- Click `Run Workflow` button
