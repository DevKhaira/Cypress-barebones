Feature: Post Code check
 
  I want to be able to search post code
  
  Scenario: Opening the app and logging in
    Given I am on the homepage
    Then I should see the header
    And I should see the search bar

  Scenario Outline: Invalid postcodes
    Given I am on the homepage
    When I enter in postcode: "<postcode>"
    Then I should see the word: "<message>"

    Examples:
    |postcode|message             |            
    |B99 9AA |Postcode not found! |
    |EC1A 1BB|Postcode not valid. |
  
  Scenario: Valid post codes
    Given I am on the homepage
    When I enter in postcode: "W6 0NW"
    Then I should see time, weather and humidity
    And I should see all other properties with values
    And I should see the time format correctly