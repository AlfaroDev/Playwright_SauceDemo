Feature: Shopping Cart

  @cart @regression
  Scenario: Remove an item from the cart
    Given I am logged in with valid credentials
    When I select a random item from the inventory
    Then the item detail page should match the inventory info
    When I add the item to the cart
    And I go to the cart
    And I remove the item from the cart
    Then the cart should be empty