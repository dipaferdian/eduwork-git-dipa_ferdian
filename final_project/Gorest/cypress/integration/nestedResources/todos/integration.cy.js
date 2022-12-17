/// <reference types="cypress" />

var statuses = ['pending', 'completed']
var uniqueID = Math.floor(Math.random() * 1000)
var due_on = new Date().toISOString()

var userID = 32
var userTitle = `syeikh${uniqueID}`
var userStatus = statuses[Math.floor(Math.random() * statuses.length)]  
var userDueOn = due_on;

let userTodo = {
      title: userTitle,
      status: userStatus,
      due_on: userDueOn
}

function convertTime(value){
      return new Date(value).toDateString()
}

describe('/public/v2/users/32/todos', () => {

      beforeEach(() => {
            window.localStorage.setItem('title', userTitle)
            window.localStorage.setItem('status', userStatus)
            window.localStorage.setItem('due_on', userDueOn)
      })

      it('POST /public/v2/users/32/todos', () => {

            cy.sendRequest({
                  method: 'POST',
                  endpoint: '/public/v2/users/32/todos',
                  body: userTodo
            }).then((response) => {
                  console.log(response)
                  expect(response.status).equal(201)
                  expect(response.body.id).to.exist
                  expect(response.body.user_id).to.exist
                  expect(response.body.title).to.exist
                  expect(response.body.due_on).to.exist
                  expect(response.body.status).to.exist

                  expect(response.body.user_id).equal(userID)
                  expect(response.body.title).equal(userTodo.title)
                  expect(convertTime(response.body.due_on)).equal(convertTime(userTodo.due_on))
                  expect(response.body.status).equal(userTodo.status)

                  userTitle = response.body.title
                  userStatus = response.body.status
                  userDueOn = response.body.due_on
            })
      })

      it('GET /public/v2/users/32/todos', () => {

            let userTodoTitle = window.localStorage.getItem('title')
            let userTodoStatus = window.localStorage.getItem('status')
            let userTodoDueOn = window.localStorage.getItem('due_on')

            cy.sendRequest({
                  method: 'GET',
                  endpoint: '/public/v2/users/32/todos'
            }).then((response) => {
                  expect(response.status).equal(200)

                  response.body.map((todo) => {

                        if (todo.title == userTodoTitle && todo.status == userTodoStatus && convertTime(todo.due_on) == convertTime(userTodoDueOn)) {
                              console.log('helooo')
                              expect(todo.title).equal(userTodo.title)
                              expect(todo.status).equal(userTodo.status)
                              expect(convertTime(todo.due_on)).equal(convertTime(userTodo.due_on))
                        }

                        if (todo.due_on == null) {
                              expect(todo.due_on).to.be.null
                        }

                        if (todo.due_on != null) {
                              expect(todo.due_on).to.exist
                        }
                        
                        expect(todo.id).to.exist
                        expect(todo.user_id).to.exist
                        expect(todo.title).to.exist
                        expect(todo.status).to.exist
                  })
            })
      })
})