/// <reference types="cypress" />

const Baseurl = 'http://zero.webappsecurity.com/bank/pay-bills.html';



const type_account = {
    Savings: 1,
    Checking: 2
}

const {Savings, Checking} = type_account

const payment_object = {
    payee: "Apple",
    account: Savings,
    amount: "20.000",
    date: "2022-11-21",
    description: "from lionel messi"
}

const user = {
    username: "username",
    password: "password"
}

describe('Checkout Payment', ()=>{

    beforeEach(()=>{
        cy.visit('http://zero.webappsecurity.com/login.html', { timeout: 10000 }) 
        cy.url().should('include', '/login.html')

        cy.login(user)
    })

    it('should try payment ', () => {

        cy.visit(Baseurl)
        cy.url().should('include', '/bank/pay-bills.html')

        cy.payment(payment_object).then((data) =>{
            assert.equal(data.response.statusCode, 200)
            assert.isOk(data.response.statusMessage, "OK")

            cy.get('#alert_content').contains('The payment was successfully submitted.')
        })
           
    });

});