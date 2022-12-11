

class Cypress {

      constructor() {
            this.multiple = false,
            this.force = false,
            this.number_element = 0;
            this.url = '';
            this.text ='',
            this.interval = 50000,
            this.type_element = '';
            this.number = 0;
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
                  number: this.number
            }
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
      static view_url_with_url() {
            cy.url().should('include', this.options.url)
      }

      /*
            Check text Component
      */
      static text_element_get(element) {
            cy.get(element).should('have.text', this.options.text)
      }

      /*
            Check Button Component
      */
      static view_text_with_contains() {
            cy.contains(this.options.text)
      }

      /*
            Check Button Component
      */
      static check_button_with_get(elemment) {
            cy.get(elemment, { timeout: this.options.timeout }).should('contain', this.options.text)
      }


      /*
            Click Button Component
      */
      static click_button_with_get(element) {
            cy.get(element).eq(this.options.number_element).click()
      }

      static click_button_with_contains_and_click(element) {
            cy.contains(element, this.options.text).click()
      }

      static click_button_with_contains_and_visit(element) {
            cy.contains(element, this.options.text).visit(this.options.url)
      }


      /*
            Checnk Total Element Component
      */
      static check_total_element(element){
            cy.get(element).find(this.options.type_element).should('have.length', this.options.number)
      }
}



export default Cypress