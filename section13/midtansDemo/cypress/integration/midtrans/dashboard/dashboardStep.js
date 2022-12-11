import { Given, And, Before, After } from 'cypress-cucumber-preprocessor/steps';
import DashboarPage from './dashboardPage';


class DashboardStep extends DashboarPage {

      static Step() {

            Given("I am on the dashboard midtrans page", () => {
                  this.visit()
            })

            And("I can see dasboard page", () => {
                  this.check_url_with_url_and_should(this.options.url = 'demo.midtrans.com')
            })
      }
}

export default DashboardStep