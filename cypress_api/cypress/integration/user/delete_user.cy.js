/// <reference types="cypress" />


describe('Delete user', () => {

    it('Delete existing user', () => {

        cy.request('DELETE', 'https:reqres.in/api/users/2').then((response) => {

            expect(response.status).equal(204)
        })
    })
})