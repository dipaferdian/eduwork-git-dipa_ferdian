/// <reference types="cypress" />


describe('Validate content', () => {

    it('should validate content', () => {
        var content = {
            ability: {
                name: "limber",
                url: "https://pokeapi.co/api/v2/ability/7/"
            }
        }

        cy.fixture("pokemon").then(response => {
            response.body.abilities.map((data) => {
                expect(data.ability.name).to.eq(content.ability.name)
            })
        })
    });

})