Feature: User Login page
    I'm validating the User login page with various scenarios.

    Background:
        Then I should be in the magnolia "loginPage_url" page

    Scenario Outline: Validate login functionality of application using valid credentials

        Then Enter login email "<userName>" and password "<password>"
        And I click on "logIn" at element "form[action method=post] button", indexed at "0"
        And Do the XHR success validations
        Then I should be in the magnolia "magnoliaHomePage" page
        And I Logout from application

        Examples:
            | userName  | password  |
            | superuser | superuser |

    Scenario Outline: Validate login functionality using wrong credentials

        Then Enter login email "<userName>" and password "<password>"
        And I click on "logIn" at element "form[action method=post] button", indexed at "0"
        And Do the XHR failure validations
        Then I should see warning message "Error during login. Please try again." at element "#validation-bubble"
        And I should be in the magnolia "magnoliaLoginPage" page

        Examples:
            | userName     | password     |
            | superuser    | superuser123 |
            | superuser123 | superuser123 |
            | superuser123 | superuser    |
