import { And, Then } from 'cypress-cucumber-preprocessor/steps';
import PaymentSection from "./payamentSection";


class PaymentStep extends PaymentSection {

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

            Then('I can see list payment method', () => {

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

            Then('I can see total payment amount', () => {

                  this.check_text_with_javascript_costum_2('#snap-midtrans',
                        this.options.text = 'Rp20.000',
                        this.options.timeout = 30000
                  )
            })

            Then('I able to click bank transfer button', () => {
                  this.click_button_with_javascript_costum('#snap-midtrans',
                        this.options.text = 'Bank transfer',
                        this.options.timeout = 30000
                  )
            })

            Then('I can see list of bank transfer', () => {
                  this.check_text_with_javascript_costum_2('#snap-midtrans',
                        this.options.text = 'BCA',
                        this.options.timeout = 30000
                  )

                  this.check_text_with_javascript_costum_2('#snap-midtrans',
                        this.options.text = 'Mandiri',
                        this.options.timeout = 30000
                  )

                  this.check_text_with_javascript_costum_2('#snap-midtrans',
                        this.options.text = 'BNI',
                        this.options.timeout = 30000
                  )

                  this.check_text_with_javascript_costum_2('#snap-midtrans',
                        this.options.text = 'PERMATA',
                        this.options.timeout = 30000
                  )

                  this.check_text_with_javascript_costum_2('#snap-midtrans',
                        this.options.text = 'BRI',
                        this.options.timeout = 30000
                  )

                  this.check_text_with_javascript_costum_2('#snap-midtrans',
                        this.options.text = 'Other Bank',
                        this.options.timeout = 30000
                  )
            })
      }


}



export default PaymentStep