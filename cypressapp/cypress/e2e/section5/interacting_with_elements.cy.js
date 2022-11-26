/// <reference types="cypress" />

describe('Keep me signed in', ()=>{

    it('should load zero.webappsecurity.com website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html', { timeout: 10000 })
        cy.url().should('include', 'login.html')

        // Get an input, type into it and verify that the value has been updated
        cy.get('#user_login')
        .type('dipa_ferdian')
        .should('have.value', 'dipa_ferdian')

        cy.get('#user_password')
        .type('lionel_messi_is_the_best')
        .should('have.value', 'lionel_messi_is_the_best')

        cy.contains('label', 'Keep me signed in')
            .invoke('attr', 'for')
            .should('equal', 'user_remember_me')
        
        cy.get('input[type="checkbox"]').should('have.attr', 'id', 'user_remember_me').click()

    });

})