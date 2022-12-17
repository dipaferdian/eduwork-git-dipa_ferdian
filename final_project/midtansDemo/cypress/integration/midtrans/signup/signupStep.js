import { And, Then } from 'cypress-cucumber-preprocessor/steps';
import SignUpPage from './signupPage';


class SignUpStep extends SignUpPage {

      static Step() {

            And('I can see sign up button view', () => {
                  this.check_button_with_get_and_should_contain('a[href*="https://account.midtrans.com/register"]', 'SIGN UP')
            })

            Then('I should able click sign up button', () => {
                  this.visit_with_contains_and_visit('a[href*="https://account.midtrans.com/register"]',
                        this.options.text = 'SIGN UP',
                        this.options.url = 'https://dashboard.midtrans.com/register'
                  )

                  this.check_url_with_url_and_should(
                        this.options.url = 'https://dashboard.midtrans.com/register'
                  )
            })

            Then('I should able register page', ()=>{
                  this.check_url_with_url_and_should(
                        this.options.url = 'https://dashboard.midtrans.com/register'
                  )
            })

      }
}

export default SignUpStep