/// <reference types="cypress" />



describe('Searchbox Test', ()=>{

    before(()=>{
        cy.visit('http://zero.webappsecurity.com/')
    })

    it('should type into searchbox and submit', () => {
        cy.get('#searchTerm').type('online{enter}')
    });

    it('Should show search result page', () => {
        cy.get('h2').contains('Search Results:')
    });
})