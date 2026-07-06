Feature: E2E Purchase
  
  @e2e @regression
  Scenario: Complete purchase with a random item
    Given I am on the login page
    When I login with valid credentials
    And I select a random item from the inventory
    Then the item detail page should match the inventory info
    When I add the item to the cart
    When I go to the cart
    And I proceed to checkout
    And I fill the checkout form with my personal info
    And I finish the order
    Then the purchase should be completed successfully