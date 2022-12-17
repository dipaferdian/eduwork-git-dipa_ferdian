import { And, Then } from 'cypress-cucumber-preprocessor/steps';
import NegativeCase from './negativeCase';


class NegativeStep extends NegativeCase {


      static Step() {
            And('I click buy now button', () => {
                  this.click_button_with_contains_and_click('.btn.buy',
                        this.options.text = 'BUY NOW'
                  )

                  this.options.text = ''
            })

            Then('I should able change input amount', () => {
                  this.clear_input_with_get_async_and_val('[data-reactid=".0.0.1.0.1.0.1.0:$1.2.0"]')
                  this.type_input_with_get_and_type_value('[data-reactid=".0.0.1.0.1.0.1.0:$1.2.0"]',
                        this.options.value = '100'
                  )
            })

            Then('I should change input name with all numeric value', () => {
                  this.clear_input_with_get_async_and_val('[data-reactid=".0.0.1.0.3.0.0.0.1.0"]')
                  this.type_input_with_get_and_type_value('[data-reactid=".0.0.1.0.3.0.0.0.1.0"]',
                        this.options.value = '45634878'
                  )
            })

            Then('I should change input email with all numeric value', () => {
                  this.clear_input_with_get_and_clear('[data-reactid=".0.0.1.0.3.0.0.1.1.0"]')
                  this.type_input_with_get_and_type_value('[data-reactid=".0.0.1.0.3.0.0.1.1.0"]',
                        this.options.value = 'sdfdsfds'
                  )
            })

            Then('I should change input change input phone number with character value', () => {
                  this.clear_input_with_get_async_and_val('[data-reactid=".0.0.1.0.3.0.0.2.1.0"]')
                  this.type_input_with_get_and_type_value('[data-reactid=".0.0.1.0.3.0.0.2.1.0"]',
                        this.options.value = 'retergregrgre'
                  )
            })

            Then('I should change input city with all numeric value', () => {
                  this.clear_input_with_get_async_and_val('[data-reactid=".0.0.1.0.3.0.0.3.1.0"]')
                  this.type_input_with_get_and_type_value('[data-reactid=".0.0.1.0.3.0.0.3.1.0"]',
                        this.options.value = '12312321'
                  )
            })

            Then('I should change input addresses with all numeric value', () => {
                  this.clear_input_with_get_async_and_val('[data-reactid=".0.0.1.0.3.0.0.4.1.0"]')
                  this.type_input_with_get_and_type_value('[data-reactid=".0.0.1.0.3.0.0.4.1.0"]',
                        this.options.value = '12312321'
                  )
            })

            Then('I should change postal code with character value', () => {
                  this.clear_input_with_get_async_and_val('[data-reactid=".0.0.1.0.3.0.0.5.1.0"]')
                  this.type_input_with_get_and_type_value('[data-reactid=".0.0.1.0.3.0.0.5.1.0"]',
                        this.options.value = 'wedwedewd'
                  )
            })

            Then('I should not to able checkout with invalid input data', () => {
                  this.click_button_with_contains_and_click('.cart-checkout',
                        this.options.text = 'CHECKOUT'
                  )

                  cy.on('Error', (err, runable)=>{
                        if (err) {
                              this.check_text_with_contains(this.options.text = '.0.0.0.2.0.1.0.0:0')
                        }
                  })
            })

      }
}


export default NegativeStep