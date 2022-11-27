/// <reference types="cypress" />

describe('Add user', () => {
    it('Add a new user', () => {
        var user = {
            "name": 'Fathur Rohim',
            "job": 'Test Engineer'
        } 
        cy.request('POST', 'https:reqres.in/api/users', user).then((response) => {

            const {name, job} = response.body

            expect(response.status).equal(201)
            expect(response.isOkStatusCode).to.be.true
            expect({name: name, job: job}).to.deep.equal({ name: user.name, job: user.job })
        })
    })

})

