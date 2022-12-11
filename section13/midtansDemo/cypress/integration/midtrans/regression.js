import PositiveStep from "./checkout_product/positive/positiveStep"
import DashboardStep from "./dashboard/dashboardStep"
import ViewSectionStep from "./section/viewSectionStep"
import SignUpStep from "./signup/signupStep"

class Regression{

      static Start(){
            DashboardStep.Step()
            ViewSectionStep.Step()
            SignUpStep.Step()
            PositiveStep.Step()
      }
}


export default Regression