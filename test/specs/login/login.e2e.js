import { StepLogger } from "../../../core/config/logger/step-logger";
import { CommonPageHelper } from "../../page-objects/common/common-page.helper";
import { LoginPageHelper } from "../../page-objects/login-page/login-page.helper";
import { CredentialsHelper } from "../../../core/misc-utils/credentials-helper";
describe("My Money App login", () => {
  const mcesar = CredentialsHelper.mcesar;
  context("Login", async () => {
    before(async () => {
      StepLogger.feature("Login");
      StepLogger.setCaseId("PreCondition");
      StepLogger.stepId(1);
      StepLogger.step("Open My Money application.");
      await LoginPageHelper.open();
      StepLogger.verification(
        "Verify My Money App Dashboard page Header section label is displayed."
      );
      await CommonPageHelper.verifyMyMoneyAppLogoDisplayedStatus();
    });

    it("Open My Money App and login to application. - [TC001] @smoke", async () => {
      StepLogger.setCaseId("TC001");
      StepLogger.stepId(1);
      StepLogger.step("Enter Login information and click the Login button.");
      await LoginPageHelper.fillLoginFormAndClickLoginButton(mcesar);
      StepLogger.verification("Verify My Money App logo is displayed.");
      await LoginPageHelper.verifyUserLoggedIn();
    });
  });
});
