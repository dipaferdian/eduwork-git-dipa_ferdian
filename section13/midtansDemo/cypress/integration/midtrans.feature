@userflow
Feature: Dashboard Page, View Section, SignUp Account, Checkout Product

    Background:
        Given I am on the dashboard midtrans page
        And I can see dasboard page

    @regression @smoke
    Scenario: As a user I able to see sign up button and text description
        And I can see some title and description
        And I can see buy now button view
        Then I can see sign up button and text description

    @regression @smoke
    Scenario: As a user I able to click sign up button and redirect to register page
        And I can see sign up button view
        Then I should able click sign up button
        Then I should able register page


    @regression @smoke @positive
    Scenario: As a user I able to click buy now button
        And I click buy now button

    @regression @smoke @positive
    Scenario: As a user I able to view checkout section
        And I click buy now button
        Then I should see checkout section

    @regression @smoke @positive
    Scenario: As a user I able to see shopping cart text
        And I click buy now button
        Then I should see shopping cart section

@focus     @regression @smoke @positive
    Scenario: As a user I able to see input field and input text
        And I click buy now button
        Then I should see input field and input text