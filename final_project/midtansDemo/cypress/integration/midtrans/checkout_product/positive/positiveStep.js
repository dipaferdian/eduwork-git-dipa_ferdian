import { And, Then } from 'cypress-cucumber-preprocessor/steps';
import PositiveCase from "./positiveCase";



class PositiveStep extends PositiveCase {

      static Step() {

            And('I click buy now button', () => {
                  this.click_button_with_contains_and_click('.btn.buy',
                        this.options.text = 'BUY NOW'
                  )

                  this.options.text = ''
            })

            Then('I should see checkout section', () => {
                  this.check_button_with_get_and_should_contain('.cart-checkout', () => {
                        this.options.text = 'CHECKOUT'
                  })
            })


            Then('I should see shopping cart section', () => {
                  this.check_text_with_contains(this.options.text = 'Shopping Cart')
            })

            Then('I should see input field and input text', () => {
                  this.check_text_with_contains(this.options.text = 'Midtrans Pillow')
                  this.check_text_with_contains(this.options.text = 'Name')
                  this.check_text_with_contains(this.options.text = 'Customer Details')
                  this.check_text_with_contains(this.options.text = 'Email')
                  this.check_text_with_contains(this.options.text = 'Phone no')
                  this.check_text_with_contains(this.options.text = 'City')
                  this.check_text_with_contains(this.options.text = 'Address')
                  this.check_text_with_contains(this.options.text = 'Postal Code')
                  this.check_total_element_with_get_find_and_should_have_length('.table',
                        this.options.type_element = 'input',
                        this.options.number = 6
                  )
            })

            Then('I should see quantity product', () => {
                  this.check_value_with_get_contains_and_should_be_visible('.table',
                        this.options.type_element = 'td',
                        this.options.value = '1'
                  )
            })

            Then('I should see amount product', () => {
                  this.check_value_with_get_and_should_have_value('[data-reactid=".0.0.1.0.1.0.1.0:$1.2.0"]',
                        this.options.value = '20000'
                  )
            })

            Then('I should see total amount product', () => {
                  this.check_text_with_contains(this.options.text = '20,000')
            })

            Then('I should able type input field name', () => {
                  this.clear_input_with_get_and_clear('[data-reactid=".0.0.1.0.3.0.0.0.1.0"]')
                  this.type_input_with_get_and_type_value('[data-reactid=".0.0.1.0.3.0.0.0.1.0"]',
                        this.options.value = 'Dipa Ferdian'
                  )
            })

            Then('I should change input name with empty value', () => {
                  this.clear_input_with_get_async_and_val('[data-reactid=".0.0.1.0.3.0.0.0.1.0"]')
            })

            Then('I should able type input field email', () => {
                  this.clear_input_with_get_and_clear('[data-reactid=".0.0.1.0.3.0.0.1.1.0"]')
                  this.type_input_with_get_and_type_value('[data-reactid=".0.0.1.0.3.0.0.1.1.0"]',
                        this.options.value = 'dipaferdian2@gmail.com'
                  )
            })

            Then('I should able type input field phone number', () => {
                  this.clear_input_with_get_and_clear('[data-reactid=".0.0.1.0.3.0.0.2.1.0"]')
                  this.type_input_with_get_and_type_value('[data-reactid=".0.0.1.0.3.0.0.2.1.0"]',
                        this.options.value = '082129627860'
                  )
            })


            Then('I should change input phone number with empty value', () => {
                  this.clear_input_with_get_and_clear('[data-reactid=".0.0.1.0.3.0.0.2.1.0"]')
            })

            Then('I should able type input field city', () => {
                  this.clear_input_with_get_and_clear('[data-reactid=".0.0.1.0.3.0.0.3.1.0"]')
                  this.type_input_with_get_and_type_value('[data-reactid=".0.0.1.0.3.0.0.3.1.0"]',
                        this.options.value = 'Kota Bogor'
                  )
            })


            Then('I should change input city with empty value', () => {
                  this.clear_input_with_get_and_clear('[data-reactid=".0.0.1.0.3.0.0.3.1.0"]')
            })

            Then('I should able type input field address', () => {
                  this.clear_input_with_get_and_clear('[data-reactid=".0.0.1.0.3.0.0.4.1.0"]')
                  this.type_input_with_get_and_type_value('[data-reactid=".0.0.1.0.3.0.0.4.1.0"]',
                        this.options.value = 'Kp. Kabandungan 2'
                  )
            })

            Then('I should change input address with empty value', () => {
                  this.clear_input_with_get_and_clear('[data-reactid=".0.0.1.0.3.0.0.4.1.0"]')
            })

            Then('I should able type input field postal code', () => {
                  this.clear_input_with_get_and_clear('[data-reactid=".0.0.1.0.3.0.0.5.1.0"]')
                  this.type_input_with_get_and_type_value('[data-reactid=".0.0.1.0.3.0.0.5.1.0"]',
                        this.options.value = '16610'
                  )
            })

            Then('I should able click checkout button', () => {
                  this.click_button_with_contains_and_click('.cart-checkout',
                        this.options.text = 'CHECKOUT'
                  )
            })

            Then('I should see popup payment method', () => {
                  this.check_text_with_javascript_costum('#snap-midtrans',
                        this.options.text = 'Credit/debit card',
                        this.options.timeout = 30000
                  )

                  this.check_text_with_javascript_costum('#snap-midtrans',
                        this.options.text = 'Bank transfer',
                        this.options.timeout = 30000
                  )

                  this.check_text_with_javascript_costum('#snap-midtrans',
                        this.options.text = 'GoPay/other e-Wallets',
                        this.options.timeout = 30000
                  )


                  this.check_text_with_javascript_costum('#snap-midtrans',
                        this.options.text = 'KlikBCA',
                        this.options.timeout = 30000
                  )


                  this.check_text_with_javascript_costum('#snap-midtrans',
                        this.options.text = 'BCA KlikPay',
                        this.options.timeout = 30000
                  )

                  this.check_text_with_javascript_costum('#snap-midtrans',
                        this.options.text = 'OCTO Clicks',
                        this.options.timeout = 30000
                  )

                  this.check_text_with_javascript_costum('#snap-midtrans',
                        this.options.text = 'Danamon Online Banking',
                        this.options.timeout = 30000
                  )

                  this.check_text_with_javascript_costum('#snap-midtrans',
                        this.options.text = 'BRImo',
                        this.options.timeout = 30000
                  )

                  this.check_text_with_javascript_costum('#snap-midtrans',
                        this.options.text = 'Indomaret',
                        this.options.timeout = 30000
                  )

                  this.check_text_with_javascript_costum('#snap-midtrans',
                        this.options.text = 'Alfa Group',
                        this.options.timeout = 30000
                  )

                  this.check_text_with_javascript_costum('#snap-midtrans',
                        this.options.text = 'Kredivo',
                        this.options.timeout = 30000
                  )

                  this.check_text_with_javascript_costum('#snap-midtrans',
                        this.options.text = 'Akulaku PayLater',
                        this.options.timeout = 30000
                  )

                  this.check_text_with_javascript_costum('#snap-midtrans',
                        this.options.text = 'UOB EZ Pay',
                        this.options.timeout = 30000
                  )
            })
      }

}

export default PositiveStep