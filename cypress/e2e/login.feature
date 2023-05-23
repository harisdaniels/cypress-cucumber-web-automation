Feature: Login page feature

 Background: User should be able to open web login page
    Given admin is on login page

  @smoke-test @login @p0
  Scenario: Admin should be able to login with valid credentials
    When admin inputs credentials to login
    Then admin should be redirected to dashboard page
    And admin wants to logout
    Then admin should be redirected to login page