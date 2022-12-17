/// <reference types="cypress" />

var uniqueID = Math.floor(Math.random() * 1000)

var userID = 32;
var userTitle = `syeikh${uniqueID}`;
let userPost = {
      title: userTitle,
      body: "Hello QA"
}

describe('/public/v2/users/32/posts', () => {

      beforeEach(() => {
            window.localStorage.setItem('title', userTitle)
      })

      it('POST /public/v2/users/32/posts', () => {

            cy.sendRequest({
                  method: 'POST',
                  endpoint: '/public/v2/users/32/posts',
                  body: userPost
            }).then((response) => {
                  console.log(response)
                  expect(response.status).equal(201)
                  expect(response.body.id).to.exist
                  expect(response.body.user_id).to.exist
                  expect(response.body.title).to.exist
                  expect(response.body.body).to.exist

                  expect(response.body.user_id).equal(userID)
                  expect(response.body.title).equal(userPost.title)
                  expect(response.body.body).equal(userPost.body)

                  userTitle = response.body.title
            })
      })

      it('GET /public/v2/users/32/posts', () => {

            let userPostTitle = window.localStorage.getItem('title')

            cy.sendRequest({
                  method: 'GET',
                  endpoint: '/public/v2/users/32/posts'
            }).then((response) => {
                  expect(response.status).equal(200)

                  response.body.map((post) => {
                        if (post.title == userPostTitle) {
                              expect(post.title).equal(userPost.title)
                              expect(post.body).equal(userPost.body)
                        }

                        expect(post.id).to.exist
                        expect(post.user_id).to.exist
                        expect(post.title).to.exist
                        expect(post.body).to.exist
                  })
            })
      })
})