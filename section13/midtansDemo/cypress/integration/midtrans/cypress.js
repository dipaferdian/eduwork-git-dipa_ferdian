
class Cypress {

      constructor() {
            this.multiple = false;
            this.force = false;
            this.number_element = 0;
            this.url = '';
            this.text = '';
            this.interval = 50000;
            this.type_element = '';
            this.number = 0;
            this.value = '';
      }


      static options() {
            return {
                  multiple: this.multiple,
                  force: this.force,
                  number_element: this.number_element,
                  url: this.url,
                  text: this.text,
                  interval: this.interval,
                  type_element: this.type_element,
                  number: this.number,
                  value: this.value
            }
      }

      static state() {
            localStorage.setItem('setName', this.options.setName)
      }

      /*
            BaseURL Component
      */
      static visit() {
            cy.baseUrl()
      }

      /*
            Check URL Component
      */
      static check_url_with_url_and_should() {
            cy.url().should('include', this.options.url)
      }

      /*
            Check text Component
      */
      static check_text_with_get_and_should_have_text(element) {
            cy.get(element, { timeout: this.options.timeout }).should('have.text', this.options.text)
      }

      static check_text_with_contains() {
            cy.contains(this.options.text, { timeout: this.options.timeout })
      }

      static check_text_with_javascript_costum(element) {
            cy.get(element).then(cy.wrap).then((element) => {

                  cy.get(element.children('#app').prevObject.prevObject[0].body.querySelector("#snap-midtrans").contentWindow.document.body.children.app.children).should('contain', this.options.text)
            })
      }

      static check_text_with_javascript_costum_2(element) {
            cy.get(element).then(cy.wrap).then((element) => {
                  cy.get(element.children('#app').prevObject.prevObject[0].body.querySelector("#snap-midtrans").contentWindow.document).then((res) => {
                        cy.wrap(res.selector.body).should('contain', this.options.text)
                  })
            })
      }

      static check_text_with_javascript_costum_3(element) {
            cy.get(element).then(cy.wrap).then((element) => {
                  cy.get(element.children('#app').prevObject.prevObject[0].body.querySelector("#snap-midtrans").contentWindow.document).then((res) => {
                        cy.wrap(res.selector.body.children.app.children.application.children[1].children[0].children[0].children[2].children[1].children[0]).should('be.visible');
                  })
            })
      }

      static check_text_with_javascript_costum_4(element) {
            cy.get(element).then(cy.wrap).then((element) => {
                  cy.get(element.children('#app').prevObject.prevObject[0].body.querySelector("#snap-midtrans").contentWindow.document).then((res) => {
                        cy.wrap(res.selector.body).should('contain', this.options.text);
                  })
            })
      }

      /*
            Check value Component
      */
      static check_value_with_get_and_should_have_value(element) {
            cy.get(element).should('have.value', this.options.value)
      }

      static check_value_with_get_contains_and_should_be_visible(element) {
            cy.get(element).contains(this.options.type_element, this.options.value).should('be.visible')
      }

      static check_value_with_get_and_should_not_be_empty(element) {
            cy.get(element).should('not.be.empty')
      }

      static check_value_is_character_only(element) {
            cy.get(element).contains('match', /^.*[a-zA-Z]/)
      }

      static check_value_is_numeric_only(element) {
            cy.get(element).contains('match', /^.*\d+/)
      }


      /*
            Check Button Component
      */
      static check_button_with_get_and_should_contain(elemment) {
            cy.get(elemment, { timeout: this.options.timeout }).should('contain', this.options.text)
      }


      /*
            Click Button Component
      */
      static click_button_with_get_eq_and_click(element) {
            cy.get(element).eq(this.options.number_element).click()
      }

      static click_button_with_contains_and_click(element) {
            cy.contains(element, this.options.text).click()
      }

      static click_button_with_javascript_costum(element) {
            cy.get(element).then(cy.wrap).then((element) => {

                  cy.get(element.children('#app').prevObject.prevObject[0].body.querySelector("#snap-midtrans").contentWindow.document.body.children.app.children).should('contain', this.options.text).click()
            })
      }

      static click_button_with_javascript_costum_2(element) {
            cy.get(element).then(cy.wrap).then((element) => {
                  cy.get(element.children('#app').prevObject.prevObject[0].body.querySelector("#snap-midtrans").contentWindow.document).then((res) => {
                        cy.wrap(res.selector.body).contains(this.options.text).click()
                  })
            })
      }


      static click_button_with_javascript_costum_3(element) {
            cy.get(element).then(cy.wrap).then((element) => {
                  cy.get(element.children('#app').prevObject.prevObject[0].body.querySelector("#snap-midtrans").contentWindow.document).then((res) => {
                        cy.wrap(res.selector.body.children.app.children.application.children[1].children[0].children[1]).click()
                  })
            })
      }

      /*
          Visit Url Component
      */

      static visit_with_contains_and_visit(element) {
            cy.contains(element, this.options.text).visit(this.options.url)
      }

      /*
            Check Total Element Component
      */
      static check_total_element_with_get_find_and_should_have_length(element) {
            cy.get(element).find(this.options.type_element).should('have.length', this.options.number)
      }

      /*
            Type Input Component
      */

      static type_input_with_get_and_type_value(element) {
            cy.get(element).type(this.options.value)
      }

      /*
           Clear Value Component
      */

      static clear_input_with_get_and_clear(element) {
            cy.get(element).clear()
      }

      static clear_input_with_get_async_and_val(element) {
            cy.get(element).then(elem => {
                  elem.val('');
            });
      }
}



export default Cypress