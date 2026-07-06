Feature: Inventory Filters

  @filters @regression
  Scenario: Filter items alphabetically A to Z
    Given I am logged in with valid credentials
    When I filter the inventory by "az"
    Then the items should be sorted alphabetically A to Z

  @filters @regression
  Scenario: Filter items alphabetically Z to A
    Given I am logged in with valid credentials
    When I filter the inventory by "za"
    Then the items should be sorted alphabetically Z to A

  @filters @regression
  Scenario: Filter items by price low to high
    Given I am logged in with valid credentials
    When I filter the inventory by "lohi"
    Then the items should be sorted by price low to high

  @filters @regression
  Scenario: Filter items by price high to low
    Given I am logged in with valid credentials
    When I filter the inventory by "hilo"
    Then the items should be sorted by price high to low