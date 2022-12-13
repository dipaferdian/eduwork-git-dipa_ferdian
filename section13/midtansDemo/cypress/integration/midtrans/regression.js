import BcaStep from "./bca/bcaStep"
import NegativeStep from "./checkout_product/negative/negativeStep"
import PositiveStep from "./checkout_product/positive/positiveStep"
import DashboardStep from "./dashboard/dashboardStep"
import PaymentStep from "./payment_product/paymentStep"
import ViewSectionStep from "./section/viewSectionStep"
import SignUpStep from "./signup/signupStep"

class Regression{

      static Start(){
            DashboardStep.Step()
            ViewSectionStep.Step()
            SignUpStep.Step()
            PositiveStep.Step()
            NegativeStep.Step()
            PaymentStep.Step()
            BcaStep.Step()
      }
}


export default Regression