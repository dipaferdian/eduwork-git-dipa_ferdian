/// <reference types="cypress" />

var userID = 0;
let userData = {
      name: "syeikh3",
      email: "syeikh3@gmail.com",
      gender: "male",
      status: "active"
}
describe('/public/v2/users', () => {

      beforeEach(()=>{
            window.localStorage.setItem('id', userID)
      })
      it('POST /public/v2/users', () => {

            cy.sendRequest({
                  method: 'POST',
                  endpoint: '/public/v2/users',
                  body: userData
            }).then((response) =>{
                  console.log(response)
                  expect(response.status).equal(201)
                  expect(response.body.name).equal(userData.name)
                  expect(response.body.email).equal(userData.email)
                  expect(response.body.gender).equal(userData.gender)
                  expect(response.body.status).equal(userData.status)

                  userID = response.body.id
            })
      })


      it('GET /public/v2/users/:id', () => {

            let id = parseInt(window.localStorage.getItem('id'))

            cy.sendRequest({
                  method: 'GET',
                  endpoint: `/public/v2/users/${id}`
            }).then((response) =>{
                  console.log(response)
                  expect(response.status).equal(200)
                  expect(response.body.id).equal(id)
                  expect(response.body.name).equal(userData.name)
                  expect(response.body.email).equal(userData.email)
                  expect(response.body.gender).equal(userData.gender)
                  expect(response.body.status).equal(userData.status)
            })
      })

      it('PUT /public/v2/users/:id', () => {

            let userUpdateData = {
                  id: parseInt(window.localStorage.getItem('id')),
                  name: "Ronaldo",
                  email: "ronaldo19@gmail.com",
                  gender: "male",
                  status: "active"
            }

            cy.sendRequest({
                  method: 'PUT',
                  endpoint: `/public/v2/users/${userUpdateData.id}`,
                  body: userUpdateData
            }).then((response) =>{
                  console.log(response)
                  expect(response.status).equal(200)
                  expect(response.body.id).equal(userUpdateData.id)
                  expect(response.body.name).equal(userUpdateData.name)
                  expect(response.body.email).equal(userUpdateData.email)
                  expect(response.body.gender).equal(userUpdateData.gender)
                  expect(response.body.status).equal(userUpdateData.status)
            })
      })



      it('DELETE /public/v2/users/:id', () => {

            let id = parseInt(window.localStorage.getItem('id'))

            cy.sendRequest({
                  method: 'DELETE',
                  endpoint: `/public/v2/users/${id}`
            }).then((response) =>{
                  console.log(response)
                  expect(response.status).equal(204)
            })
      })

})