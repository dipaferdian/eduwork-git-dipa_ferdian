@userflow
Feature: Dashboard Page, View Section, SignUp Account, Checkout Product

    Background: As a user I want to view dashboard page
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

@focus   @regression @smoke @positive
    Scenario: Checkout Product
        And I click buy now button
        Then I should see checkout section
        Then I should see shopping cart section
        Then I should see input field and input text
        Then I should see quantity product
        Then I should see amount product
        Then I should see total amount product
        Then I should able type input field name
        Then I should able type input field email
        Then I should able type input field phone number
        Then I should able type input field city
        Then I should able type input field address
        Then I should able type input field postal code
        Then I should able click checkout button