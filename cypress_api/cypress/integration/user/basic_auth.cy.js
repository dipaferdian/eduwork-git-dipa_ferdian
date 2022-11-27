/// <reference types="cypress" />


describe('Basic Auth', () => {
    it('Successfully login by appending username and password', function () {
        cy.loginViaAPI();
    })
})