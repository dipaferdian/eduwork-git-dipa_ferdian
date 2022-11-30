// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

Cypress.Commands.add('login', (user_object) => {

    const { username, password } = user_object

    cy.clearCookies()
    cy.clearLocalStorage()

    cy.get('#user_login').type(username)
    cy.get('#user_password').type(password)
    cy.contains('Sign in').click()

 })

Cypress.Commands.add('payment', (payment_object) => {

    const { payee, account, amount, date, description } = payment_object

    cy.intercept('POST', 'http://zero.webappsecurity.com/bank/pay-bills-saved-payee.html').as('post')

    cy.get('select')
        .get('#sp_payee')
        .select(payee)

    cy.get('select')
        .get('#sp_account')
        .select(account)

    cy.get('#sp_amount')
        .type(amount)


    cy.get('#sp_date')
        .type(date)
        .click()
    
    cy.get('#sp_description')
        .type(description, { force: true })

    cy.get('[value="Pay"]').invoke('attr', 'value', 'Pay')
        .get('#pay_saved_payees').click()

    
    return cy.wait('@post')

})

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })