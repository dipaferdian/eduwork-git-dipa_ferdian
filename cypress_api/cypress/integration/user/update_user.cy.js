/// <reference types="cypress" />


/*
package.json 
"chai-json-schema": "^1.5.1",

plugins/index.js
chai.use(require("chai-json-schema"));
*/

describe('Update user', () => {

    const schema = {
        title: 'Test Schema',
        type: 'object',
        required: ['name', 'job', 'updatedAt'],
        properties: {
          name: {
            type: 'string',
          },
          job: {
            type: 'string',
          },
          updatedAt: {
            type: 'string',
          }
        },
      };

    it('Update existing user', () => {
        var User = {
            "id" : 2,
            "name": 'Oim Trust',
            "job": 'Engineering Manager'
        } 
        const {name, job} = User

        cy.request('PUT', `https:reqres.in/api/users/${User.id}`, {name: name, job: job}).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.name).to.eq(name)

            expect(response.body).to.be.jsonSchema(schema)
        })
    })
})
