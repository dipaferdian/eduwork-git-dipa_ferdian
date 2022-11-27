/// <reference types="cypress" />

describe('Login/ Logout test', () => {


    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click()
    })

    it('Should try to login with invalid data', () => {

        cy.get('#login_form').should('be.visible')
        cy.get('#user_login').type('invalid username')
        cy.get('#user_password').type('invalid password')
        cy.contains('Sign in').click()
    });


    it('Should display error message', () => {
        cy.get('.alert-error').should('be.visible').and('contain', 'Login and/or password are wrong')
    });

    it('Should login to application with valid data', () => {

        cy.fixture("user_zero_websecurity").then(user => {

            const username = user.username
            const password = user.password

            cy.get('#user_login').type(username)
            cy.get('#user_password').type(password)

            cy.contains('Sign in').click()

            cy.get('ul.nav-tabs').should('be.visible')
        })
    });

    it('Should logout from the application', () => {

        cy.contains('username').click()

        cy.intercept('GET', 'http://zero.webappsecurity.com/logout.html').as('get')

        cy.get('#logout_link').click()
        cy.wait('@get').then((data) => {

            assert.equal(data.response.statusCode, 302)
            assert.equal(data.response.url, 'http://zero.webappsecurity.com/logout.html')

            cy.get('#signin_button').should('be.visible')
        })
    });
})