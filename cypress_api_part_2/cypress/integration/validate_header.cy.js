/// <reference types="cypress" />



describe('Validate body and header', () => {

    it.only('Validate Header', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
            .should('include', 'application/json; charset=utf-8')

        cy.get('@pokemon')
        .its('body.abilities')
        .should('deep')
        .should('deep.equal', [
            {
                "ability": {
                    "name": "limber",
                    "url": "https://pokeapi.co/api/v2/ability/7/"
                },
                "is_hidden": false,
                "slot": 1
            },
            {
                "ability": {
                    "name": "imposter",
                    "url": "https://pokeapi.co/api/v2/ability/150/"
                },
                "is_hidden": true,
                "slot": 3
            }
        ])


        cy.get('@pokemon')
          .its('body.base_experience')
          .should('eq', 101)
    });
})
