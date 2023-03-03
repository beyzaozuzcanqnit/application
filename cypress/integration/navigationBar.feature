Feature: navigationBar test
    I'm validating the functionality of the navigationBar

    Background:
        Given I should be in the magnolia homepage

    Scenario: Validate the Tours index
        Then I click on the toursindex at element ".navbar-right .nav.navbar-nav li:nth-child(1)" and validate the dropdown elements
        Then I click on the dropdown elements and check if the buttons are functioning as expected
    

    # Scenario Outline: Validate the Destination index

    # Scenario Outline: Validate the rest of the navigation buttons on the index
