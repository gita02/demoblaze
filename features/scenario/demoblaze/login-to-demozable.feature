Feature: Log in to homepage

    Scenario: As a user, I want to be able to logged in
        Given user is on the demoblaze login page
        When user is on the demoblaze with correct credential
        Then user should see home page demoblaze