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

    @regression @smoke @positive
    Scenario: Checkout Product
        And I click buy now button
        Then I should see checkout section
        Then I should see shopping cart section
        Then I should see input field and input text
        Then I should see quantity product
        Then I should see amount product
        Then I should see total amount product
        Then I should able type input field name
        Then I should change input name with empty value
        Then I should able type input field email
        Then I should able type input field phone number
        Then I should change input phone number with empty value
        Then I should able type input field city
        Then I should change input city with empty value
        Then I should able type input field address
        Then I should change input address with empty value
        Then I should able type input field postal code
        Then I should able click checkout button
        Then I should see popup payment method

    @regression @smoke @negative
    Scenario: Checkout Product
        And I click buy now button
        Then I should able change input amount
        Then I should change input name with all numeric value
        Then I should change input email with all numeric value
        Then I should change input change input phone number with character value
        Then I should change input city with all numeric value
        Then I should change input addresses with all numeric value
        Then I should change postal code with character value
        Then I should not to able checkout with invalid input data

    @regression @smoke
    Scenario: Payment Product
        And I click checkout button
        Then I can see list payment method
        Then I can see total payment amount
        Then I able to click bank transfer button
        Then I can see list of bank transfer

    @regression @smoke
    Scenario: BCA
        And I click checkout button
        Then I able to click bank transfer button
        Then I able to click bca payment
        Then I can see how to pay text field
        Then I able to click how to pay
        Then I able to see step to payment
        Then I able to see virtual account number
        Then I able to see back to merchant text field
        Then I able to click back to merchant button

    @regression @smoke
    Scenario: Mandiri
        And I click checkout button
        Then I able to click bank transfer button
        Then I able to click madiri payment
        Then I can see how to pay text field
        Then I able to click how to pay
        Then I able to see company code text field
        Then I able to see back to merchant text field
        Then I able to click back to merchant button

    @regression @smoke
    Scenario: Permata
        And I click checkout button
        Then I able to click bank transfer button
        Then I able to click permata payment
        Then I can see how to pay text field
        Then I able to click how to pay
        Then I able to see company code text field
        Then I able to see back to merchant text field
        Then I able to click back to merchant button

    @regression @smoke
    Scenario: BRI
        And I click checkout button
        Then I able to click bank transfer button
        Then I able to click bri payment
        Then I can see how to pay text field
        Then I able to click how to pay
        Then I able to see company code text field
        Then I able to see back to merchant text field
        Then I able to click back to merchant button

    @regression @smoke
    Scenario: BNI
        And I click checkout button
        Then I able to click bank transfer button
        Then I able to click bni payment
        Then I can see how to pay text field
        Then I able to click how to pay
        Then I able to see company code text field
        Then I able to see back to merchant text field
        Then I able to click back to merchant button
