Feature: Access page feature

  Background: Admin already login to the website
    Given admin already login

  @smoke-test @access
  Scenario: Admin should be able access customer page
    When admin access customer page

  @smoke-test @access
  Scenario: Admin should be able access sales page
    When admin access sales page
