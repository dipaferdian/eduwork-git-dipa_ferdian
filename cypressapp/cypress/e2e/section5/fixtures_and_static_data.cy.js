/// <reference types="cypress" />

const Baseurl = 'https://www.saucedemo.com/';

describe('Login with fixtures data', ()=>{
      
    it('should try login', () => {
        cy.visit(Baseurl, { timeout: 10000 })

        cy.fixture("user").then(user =>{

            const username = user.username
            const password = user.password

            cy.get('#user-name').type(username)
            cy.get('#password').type(password)

            cy.get('#login-button').click()

            cy.url().should('include', '/inventory.html')
        })
    });
})

describe('Failed login', ()=>{

    it('should load saucedemo.com website', () => {
        cy.visit(Baseurl, { timeout: 10000 }) 
    });

    it('should try login with empty username and password', () => {
        cy.fixture("user").then(user =>{

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
        cy.fixture("user").then(user =>{

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
        cy.fixture("user").then(user =>{

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
        cy.fixture("user").then(user =>{

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
        cy.fixture("user").then(user =>{

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
        cy.fixture("user").then(user =>{

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


describe('List Product', ()=>{

    beforeEach(() => {
        cy.visit(Baseurl, { timeout: 10000 }) 
    })

    it('should get list of product', () => {
        cy.fixture("user").then(user =>{

            const username = user.username
            const password = user.password

            cy.get('#user-name').type(username)
            cy.get('#password').type(password)

            cy.get('#login-button').click()

            cy.get('.inventory_list').each((child_item)=>{
                cy.wrap(child_item.children('div.inventory_item')).should('have.class', 'inventory_item')
                cy.wrap(child_item.children('div.inventory_item')).should('have.length', 6)
                
                cy.get('.inventory_item_img').each((child_item)=>{
                    cy.get('img').should('have.class', 'inventory_item_img')
                })
            })
        })
    });

    it('should add product to cart', () => {
        cy.fixture("user").then(user =>{

            const username = user.username
            const password = user.password

            cy.get('#user-name').type(username)
            cy.get('#password').type(password)

            cy.get('#login-button').click()

            cy.get('button').should('contain', 'Add to cart')

            cy.get('.btn_inventory').click({multiple: true})
        })
    });


    it('should view product on chart', () => {
        cy.fixture("user").then(user =>{

            const username = user.username
            const password = user.password

            cy.get('#user-name').type(username)
            cy.get('#password').type(password)

            cy.get('#login-button').click()

            cy.get('button').should('contain', 'Add to cart')
            cy.get('.btn_inventory').click({multiple: true})


            cy.get('#shopping_cart_container').get('a')
              .invoke('attr', 'id', 'shopping_cart_link')
              
            cy.get('#shopping_cart_container > a > span')
              .should('have.text', 6)
              .click()
        })
    });

    it('should able to checkout', () => {
        cy.fixture("user").then(user =>{

            const username = user.username
            const password = user.password

            cy.get('#user-name').type(username)
            cy.get('#password').type(password)

            cy.get('#login-button').click()

            cy.get('button').should('contain', 'Add to cart')
            cy.get('.btn_inventory').click({multiple: true})


            cy.get('#shopping_cart_container').get('a')
              .invoke('attr', 'id', 'shopping_cart_link')
              
            cy.get('#shopping_cart_container > a > span')
              .should('have.text', 6)
              .click()

              cy.url().should('include', '/cart.html')


            cy.get('#checkout').should('contain', 'Checkout').click()
        })
    });


    it('should able to fill checkout form and click continue, redirect to checkout overview ', () => {
        cy.fixture("user").then(user =>{

            const username = user.username
            const password = user.password

            cy.get('#user-name').type(username)
            cy.get('#password').type(password)

            cy.get('#login-button').click()

            cy.get('button').should('contain', 'Add to cart')
            cy.get('.btn_inventory').click({multiple: true})


            cy.get('#shopping_cart_container').get('a')
              .invoke('attr', 'id', 'shopping_cart_link')
              
            cy.get('#shopping_cart_container > a > span')
              .should('have.text', 6)
              .click()

              cy.url().should('include', '/cart.html')


            cy.get('#checkout').should('contain', 'Checkout').click()

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
    });
})