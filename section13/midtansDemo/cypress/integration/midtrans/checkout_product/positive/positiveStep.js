import { And, Then } from 'cypress-cucumber-preprocessor/steps';
import PositiveCase from "./positiveCase";



class PositiveStep extends PositiveCase{

      static Step(){

            And('I click buy now button', ()=>{
                  this.click_button_with_contains_and_click('.btn.buy', 
                        this.options.text = 'BUY NOW'
                  )

                  this.options.text = ''
            })

            Then('I should see checkout section', ()=>{
                  this.check_button_with_get('.cart-checkout', ()=>{
                        this.options.text = 'CHECKOUT'
                  })
            })


            Then('I should see shopping cart section', ()=>{
                  this.view_text_with_contains(this.options.text = 'Shopping Cart')
            })

            Then('I should see input field and input text', ()=>{
                  this.view_text_with_contains(this.options.text = 'Midtrans Pillow')
                  this.view_text_with_contains(this.options.text = 'Name')
                  this.view_text_with_contains(this.options.text = 'Customer Details')
                  this.view_text_with_contains(this.options.text = 'Email')
                  this.view_text_with_contains(this.options.text = 'Phone no')
                  this.view_text_with_contains(this.options.text = 'City')
                  this.view_text_with_contains(this.options.text = 'Address')
                  this.view_text_with_contains(this.options.text = 'Postal Code')
                  this.check_total_element('.table',
                        this.options.type_element = 'input',
                        this.options.number = 6
                  )
            })
      }

}

export default PositiveStep