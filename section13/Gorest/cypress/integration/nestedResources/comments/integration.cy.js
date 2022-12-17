/// <reference types="cypress" />

var uniqueID = Math.floor(Math.random() * 1000)

var postID = 32;
var usernName = `syeikh${uniqueID}`;
var userEmail = `syeikh${uniqueID}@gmail.com`;
let userComment = {
      name: usernName,
      email: userEmail,
      body: "Hello QA"
}

describe('/public/v2/posts/32/comments', () => {

      beforeEach(() => {
            window.localStorage.setItem('name', usernName)
            window.localStorage.setItem('email', userEmail)
      })

      it('POST /public/v2/posts/32/comments', () => {

            cy.sendRequest({
                  method: 'POST',
                  endpoint: '/public/v2/posts/32/comments',
                  body: userComment
            }).then((response) => {
                  console.log(response)
                  expect(response.status).equal(201)
                  expect(response.body.id).to.exist
                  expect(response.body.post_id).to.exist
                  expect(response.body.name).to.exist
                  expect(response.body.email).to.exist
                  expect(response.body.body).to.exist

                  expect(response.body.post_id).equal(postID)
                  expect(response.body.name).equal(userComment.name)
                  expect(response.body.email).equal(userComment.email)
                  expect(response.body.body).equal(userComment.body)

                  usernName = response.body.name
                  userEmail = response.body.email
            })
      })

      it('GET /public/v2/posts/32/comments', () => {

            let userCommentName = window.localStorage.getItem('name')
            let userCommentEmail = window.localStorage.getItem('email')

            cy.sendRequest({
                  method: 'GET',
                  endpoint: '/public/v2/posts/32/comments'
            }).then((response) => {
                  expect(response.status).equal(200)

                  response.body.map((comment) => {
                        
                        if ( comment.name == userCommentName && comment.email == userCommentEmail) {
                              expect(comment.post_id).equal(postID)
                              expect(comment.name).equal(userComment.name)
                              expect(comment.email).equal(userComment.email)
                              expect(comment.body).equal(userComment.body)
                        }
                        
                        expect(comment.id).to.exist
                        expect(comment.post_id).to.exist
                        expect(comment.name).to.exist
                        expect(comment.email).to.exist
                        expect(comment.body).to.exist
                  })
            })
      })
})