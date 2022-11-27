/// <reference types="cypress" />


function Navbar(){
    cy.get('ul#pages-nav > li')
    .each(function($element, index, $list){
      cy.wrap($element).get('#homeMenu').contains('Home')
      cy.wrap($element).get('#onlineBankingMenu').contains('Online Banking')
      cy.wrap($element).get('#feedback').contains('Feedback')
    })
}

describe('Navbar test', function(){

    before(()=>{
        cy.visit('http://zero.webappsecurity.com/index.html')
    })


    it('Should display online banking content', () => {
        
        cy.contains('Online Banking').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')
          .get('p').should('be.visible')
          .contains('Pay bills easily')
        Navbar()
    });


    it('Should display feedback content', () => {
        
        cy.contains('Feedback').click()
        cy.url().should('include', 'feedback.html')

        cy.get('form').should('be.visible')
           .get('form[action="/sendFeedback.html"]')
           .get('[method="post"]')
           .should('be.exist')

        cy.get('.signin-controls.form-inputs')
           .get('.control-group')
           .get('.controls.pictured')
           .get('input[id="name"]')
           .should('be.exist')

    });

    it('Should display homepage content', () => {
        
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')

        Navbar()
    });
})