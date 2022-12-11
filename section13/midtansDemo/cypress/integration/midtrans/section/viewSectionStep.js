import { And, Then } from 'cypress-cucumber-preprocessor/steps';
import ViewSection from './viewSection';

class ViewSectionStep extends ViewSection {

      static Step() {

            And("I can see some title and description", () => {
                  this.text_element_get(".title",
                        this.options.text = 'Midtrans Pillow'
                  )
                  this.view_text_with_contains(
                        this.options.text = 'Disclaimer: This is not a real transaction.No funds will be transfered out of your account. You should sleep with a proper pillow to refrain yourself from injury.'
                  )
                  this.view_text_with_contains(
                        this.options.text = 'Get cozy with our new pillow!'
                  )
            })

            And("I can see buy now button view", () => {
                  this.check_button_with_get(".btn.buy",
                        this.options.text = 'BUY NOW'
                  )
            })

            Then('I can see sign up button and text description', () => {
                  this.text_element_get(".desc-cta",
                        this.options.text = 'Ready to integrate SNAP?'
                  )
                  this.check_button_with_get('.btn.btn-signup',
                        this.options.text = 'SIGN UP'
                  )
            })
      }
}

export default ViewSectionStep