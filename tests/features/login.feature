Feature: Login

  @login @regression
  Scenario: Failed login with locked out user
    Given I am on the login page
    When I login with invalid credentials
    Then I should see a login error message