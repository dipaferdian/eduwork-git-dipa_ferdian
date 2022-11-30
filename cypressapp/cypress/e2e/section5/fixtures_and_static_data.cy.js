/// <reference types="cypress" />


const Baseurl = 'https://www.saucedemo.com/';
var key_local_storage = null;
var value_local_storage = null;
var current_username = null;

const Cookie = {
    key: "",
    value: ""
}

function setLocalStorage() {
    window.localStorage.setItem(key_local_storage, value_local_storage);
}

function getLocalStorage(key) {
    key_local_storage = key
    value_local_storage = window.localStorage.getItem(key)
}


before(() => {
    cy.fixture("user").then(user => {

        const username = user.username
        const password = user.password

        Cookie.key = "session-username";
        Cookie.value = username;

        cy.visit(Baseurl, { timeout: 10000 })

        cy.get('#user-name').type(username)
        cy.get('#password').type(password)

        cy.get('#login-button').click()
    })
})

beforeEach(() => {
    cy.setCookie(Cookie.key, Cookie.value);
})

describe('Failed login', () => {

    it('should load saucedemo.com website', () => {
        cy.visit(Baseurl, { timeout: 10000 })
    });

    it('should try login with empty username and password', () => {
        cy.fixture("user").then(user => {

            const username = user.username
            const password = user.password

            cy.get('#user-name').type(username).clear()
            cy.get('#password').type(password).clear()

            cy.get('#login-button').click()

            cy.get('[data-test="error"]').invoke('attr', 'data-test', 'error')
                .should('have.text', 'Epic sadface: Username is required')

            cy.get('.error-button').should('have.class', 'error-button')
        })
    });


    it('should try login with empty username', () => {
        cy.fixture("user").then(user => {

            const username = user.username
            const password = user.password

            cy.get('#user-name').type(username).clear()
            cy.get('#password').type(password)

            cy.get('#login-button').click()

            cy.get('[data-test="error"]').invoke('attr', 'data-test', 'error')
                .should('have.text', 'Epic sadface: Username is required')

            cy.get('.error-button').should('have.class', 'error-button')
        })
    });

    it('should try login with empty password', () => {
        cy.fixture("user").then(user => {

            const username = user.username
            const password = user.password

            cy.get('#user-name').type(username)
            cy.get('#password').type(password).clear()

            cy.get('#login-button').click()

            cy.get('[data-test="error"]').invoke('attr', 'data-test', 'error')
                .should('have.text', 'Epic sadface: Password is required')

            cy.get('.error-button').should('have.class', 'error-button')
        })
    });

    it('should try login with wrong username and password', () => {
        cy.fixture("user").then(user => {

            const username = user.username + 'wrong'
            const password = user.password + 'wrong'

            cy.get('#user-name').type(username)
            cy.get('#password').type(password)

            cy.get('#login-button').click()

            cy.get('[data-test="error"]')
                .invoke('attr', 'data-test', 'error')
                .should('have.text', 'Epic sadface: Username and password do not match any user in this service')
            cy.get('.error-button').should('have.class', 'error-button')
        })
    });

    it('should try login with wrong username', () => {
        cy.fixture("user").then(user => {

            const username = user.username + 'wrong'
            const password = user.password

            cy.get('#user-name').type(username)
            cy.get('#password').type(password)

            cy.get('#login-button').click()

            cy.get('[data-test="error"]')
                .invoke('attr', 'data-test', 'error')
                .should('have.text', 'Epic sadface: Username and password do not match any user in this service')
            cy.get('.error-button').should('have.class', 'error-button')
        })
    });

    it('should try login with wrong password', () => {
        cy.fixture("user").then(user => {

            const username = user.username
            const password = user.password + 'wrong'

            cy.get('#user-name').type(username)
            cy.get('#password').type(password)

            cy.get('#login-button').click()

            cy.get('[data-test="error"]')
                .invoke('attr', 'data-test', 'error')
                .should('have.text', 'Epic sadface: Username and password do not match any user in this service')
            cy.get('.error-button').should('have.class', 'error-button')
        })
    });
})


describe('Checkout Product', () => {

    it.only('should get list of product', () => {
        cy.get('.inventory_list').each((child_item) => {
            cy.wrap(child_item.children('div.inventory_item')).should('have.class', 'inventory_item')
            cy.wrap(child_item.children('div.inventory_item')).should('have.length', 6)

            cy.get('.inventory_item_img').each((child_item) => {
                cy.get('img').should('have.class', 'inventory_item_img')
            })
        })
    });

    it.only('should add product to cart', () => {
        cy.get('button').should('contain', 'Add to cart')

        cy.get('.btn_inventory').click({ multiple: true }).then(() => {
            getLocalStorage('cart-contents')
        })
    });


    it.only('should view product on chart', () => {
        setLocalStorage();
        cy.get('#shopping_cart_container').get('a')
            .invoke('attr', 'id', 'shopping_cart_link')

        cy.get('#shopping_cart_container > a > span')
            .should('have.text', 6)

        cy.get("#shopping_cart_container > a").click()

    });

    it.only('should able to checkout', () => {
        setLocalStorage();
        cy.url().should('include', '/cart.html')

        cy.get('#checkout').should('contain', 'Checkout').click()
    });


    it.only('should able to fill checkout form and click continue, redirect to checkout overview ', () => {
        cy.get('#first-name').type('dipa')
        cy.get('#last-name').type('ferdian')
        cy.get('#postal-code').type('16610')

        cy.get('[value="Continue"]').invoke('attr', 'value', 'Continue')
            .get('#continue').click()

        cy.url().should('include', '/checkout-step-two.html')

        cy.get('#finish').should('contain', 'Finish').click()

        cy.url().should('include', '/checkout-complete.html')


        cy.get('#header_container > div.header_secondary_container > span')
            .invoke('attr', 'class', 'title')
            .should('contain', 'Checkout: Complete!')
            .get('.complete-header')
            .contains('THANK YOU FOR YOUR ORDER')

    })
})