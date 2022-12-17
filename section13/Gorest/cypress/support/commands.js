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
// Cypress.Commands.add("login", (email, password) => { ... })


Cypress.Commands.add('sendRequest', (options) => {

      let request_headers = {
            'Authorization': `Bearer ${Cypress.env('token')}`,
      }

      // var with_formdata = new FormData();
      // with_formdata.append("client_id", Cypress.env("client_id"));
      // with_formdata.append("client_secret", Cypress.env("client_secret"));
      // with_formdata.append("grant_type", Cypress.env("grant_type"));

      const { method, endpoint, body, form } = options

      cy.request(
            {
                  method: method,
                  // form: form != undefined ? form : true,
                  url: Cypress.env('baseUrl') + endpoint,
                  failOnStatusCode: false,
                  headers: {
                        'Authorization': `Bearer ${Cypress.env('token')}`,
                  },
                  body: body != undefined ? body : null
            }
      )
})


// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
