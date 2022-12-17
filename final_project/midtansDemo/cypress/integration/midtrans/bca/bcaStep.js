import { And, Then } from 'cypress-cucumber-preprocessor/steps';
import BcaSection from "./bcaSection";



class BcaStep extends BcaSection {

      static Step() {

            And('I click checkout button', () => {
                  this.click_button_with_contains_and_click('.btn.buy',
                        this.options.text = 'BUY NOW'
                  )

                  this.options.text = ''

                  this.click_button_with_contains_and_click('.cart-checkout',
                        this.options.text = 'CHECKOUT'
                  )
            })


            Then('I able to click bank transfer button', () => {
                  this.click_button_with_javascript_costum('#snap-midtrans',
                        this.options.text = 'Bank transfer',
                        this.options.timeout = 30000
                  )
            })

            Then('I able to click bca payment', () => {
                  this.click_button_with_javascript_costum_2('#snap-midtrans',
                        this.options.text = 'BCA',
                        this.options.timeout = 30000
                  )
            })

            Then('I can see how to pay text field', ()=>{
                  this.check_text_with_javascript_costum_2('#snap-midtrans',
                        this.options.text = 'How to pay',
                        this.options.timeout = 30000
                  )
            })

            Then('I able to click how to pay', () => {
                  this.click_button_with_javascript_costum_2('#snap-midtrans',
                        this.options.text = 'How to pay',
                        this.options.timeout = 30000
                  )
            })

            Then('I able to see step to payment', () => {
                  this.check_text_with_javascript_costum_2('#snap-midtrans',
                        this.options.text = 'on the main menu.',
                        this.options.timeout = 30000
                  )
            })

            Then('I able to see virtual account number', () => {
                  this.check_text_with_javascript_costum_3('#snap-midtrans',
                        this.options.timeout = 30000
                  )
            })

            Then('I able to see back to merchant text field', () => {
                  this.check_text_with_javascript_costum_4('#snap-midtrans',
                        this.options.value = 'Back to merchant',
                        this.options.timeout = 30000
                  )
            })

            Then('I able to click back to merchant button', () => {
                  this. click_button_with_javascript_costum_3('#snap-midtrans',
                        this.options.value = 'Back to merchant',
                        this.options.timeout = 30000,
                        this.options.force = true
                  )
            })
      }
}


export default BcaStep