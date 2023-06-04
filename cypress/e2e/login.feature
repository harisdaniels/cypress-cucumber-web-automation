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

  @smoke-test @login @login-with-invalid-credentials @p0
  Scenario: Admin should not be able to login with invalid credentials
    When admin inputs credentials to login
    Then admin should be redirected to login page

  @smoke-test @login @login-with-invalid-email @p0
  Scenario: Admin should not be able to login with wrong email
    When admin inputs credentials to login
    Then admin should be redirected to login page

  @smoke-test @login @login-with-invalid-password @p0
  Scenario: Admin should not be able to login with wrong password
    When admin inputs credentials to login
    Then admin should be redirected to login page

  @smoke-test @login @login-without-inputing-password @p0
  Scenario: Admin should not be able to login without entering password
    When admin inputs credentials to login
    Then admin should be redirected to login page