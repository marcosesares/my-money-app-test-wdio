import { StepLogger } from "../../../core/config/logger/step-logger";
import { CommonPageHelper } from "../../page-objects/common/common-page.helper";
import { LoginPageHelper } from "../../page-objects/login-page/login-page.helper";
import PaymentCycleHelper from "../../page-objects/payment-cycle-page/payment-cycle-page.helper";
import { CredentialsHelper } from "./../../../core/misc-utils/credentials-helper";

describe("My Money App", () => {
  const mcesar = CredentialsHelper.mcesar;
  context("Payment Cycle", async () => {
    before(async () => {
      StepLogger.feature("Payment Cycle");
      StepLogger.setCaseId("PreCondition");
      StepLogger.step("Open My Money application.");
      await LoginPageHelper.open();
      StepLogger.verification(
        "Verify My Money App Dashboard page Header section label is displayed."
      );
      await CommonPageHelper.verifyMyMoneyAppLogoDisplayedStatus();
    });

    beforeEach(async () => {
      StepLogger.setCaseId("PreCondition");
      StepLogger.step("Enter Login information and click the Login button.");
      await LoginPageHelper.fillLoginFormAndClickLoginButton(mcesar);
      StepLogger.verification("Verify My Money App logo is displayed.");
      await LoginPageHelper.verifyUserLoggedIn();
    });

    it("Add a Payment Cycle. - [TC004] @test", async () => {
      StepLogger.setCaseId("TC004");
      const paymentCycle = PaymentCycleHelper.getPaymentCycle();

      StepLogger.stepId(1);
      StepLogger.step("Navigate to Payment Cycles page.");
      await PaymentCycleHelper.navigateToPaymentCyclesPage();
      StepLogger.verification("Verify Payment Cycles page is displayed.");
      PaymentCycleHelper.verifyPaymentCycleSectionLabel();

      StepLogger.stepId(2);
      StepLogger.step("Click the Add a Payment Cycle button.");
      await PaymentCycleHelper.clickAddButton();
      StepLogger.verification("Verify Add a Payment Cycle form is displayed.");
      await PaymentCycleHelper.verifyAddPaymentCycleFormDisplayed();

      StepLogger.stepId(3);
      StepLogger.step("Add a Payment Cycle.");
      await PaymentCycleHelper.fillPaymentCycleFormAndClickSaveButton(
        paymentCycle
      );
      StepLogger.verification("Verify the Payment Cycle is displayed.");
      await PaymentCycleHelper.verifyPaymentCycleDisplayed(paymentCycle);
    });
  });
});
