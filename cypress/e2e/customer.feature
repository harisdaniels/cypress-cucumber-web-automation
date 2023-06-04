Feature: Access page feature

  Background: Admin alrerady login to the website
    Given admin already login

  @access
  Scenario: Admin should be able access customer page
    When admin access customer page
  @access
  Scenario: Admin should be able access sales page
    When admin access sales page
