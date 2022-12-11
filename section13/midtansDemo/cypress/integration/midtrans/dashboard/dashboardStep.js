import { Given, And } from 'cypress-cucumber-preprocessor/steps';
import DashboarPage from './dashboardPage';


class DashboardStep extends DashboarPage {

      static Step() {

            Given("I am on the dashboard midtrans page", () => {
                  this.visit()
            })

            And("I can see dasboard page", () => {
                  this.view_url_with_url(this.options.url = 'demo.midtrans.com')
            })
      }
}

export default DashboardStep