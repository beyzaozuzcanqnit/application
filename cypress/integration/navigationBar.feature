Feature: navigationBar test
    I'm validating the functionality of the navigationBar

    Background:
        Given I should be in the magnolia homepage

    Scenario: Validate the Tours index and dropdown
        Then I click on the "tours" index navigation bar
        Then I validate if all the "tours" buttons are visible
        And I click on the "tours" dropdown buttons and validate user landing webpage
    

        
        
        #at element ".navbar-right .nav.navbar-nav .dropdown:nth-child(1)" and validate the dropdown elements
        #Then I click on the tours dropdown elements button and check if they allow user to land on correct webpage
    

    Scenario: Validate the Destination index and dropdown
        Then I click on the "destinations" index navigation bar
        Then I validate if all the "destinations" buttons are visible
        And I click on the "destinations" dropdown buttons and validate user landing webpage

        # Then I click on the destinations index at element ".navbar-right .nav.navbar-nav .dropdown:nth-child(2)" and validate the dropdown elements
        # Then I click on the destinations dropdown at elements and check if all the buttons are visible
        # Then I click on the destinations dropdown elements button and check if they allow user to land on correct webpage


    Scenario Outline: Validate navigation buttons on the index
       Then I click on the "<element>" index navigation bar
      # Then Then I click on the destinations index at element "<element>"
       And I validate user landing webpage
       
       Examples:
            |element|
            |stories|
            |about|
            |contact|
            |members|


