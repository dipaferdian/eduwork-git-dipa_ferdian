import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';


Given("I'm open dasboard page", ()=>{
    cy.visit('http://zero.webappsecurity.com/index.html')
})

When("I input field data on search box", ()=>{
    cy.get('#searchTerm').type('online{enter}')
})

Then("I should see the results", ()=>{
    cy.get('h2').contains('Search Results:')
})