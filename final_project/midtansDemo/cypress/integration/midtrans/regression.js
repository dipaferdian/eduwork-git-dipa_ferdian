import BcaStep from "./bca/bcaStep"
import BniStep from "./bni/bniStep"
import BriStep from "./bri/briStep"
import NegativeStep from "./checkout_product/negative/negativeStep"
import PositiveStep from "./checkout_product/positive/positiveStep"
import DashboardStep from "./dashboard/dashboardStep"
import MandiriStep from "./mandiri/mandiriStep"
import PaymentStep from "./payment_product/paymentStep"
import PermataStep from "./permata/permataStep"
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
            MandiriStep.Step()
            PermataStep.Step()
            BriStep.Step()
            BniStep.Step()
      }
}


export default Regression