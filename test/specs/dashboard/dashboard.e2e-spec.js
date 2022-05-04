import { StepLogger } from "../../../core/config/logger/step-logger";
import { CommonPageHelper } from "../../page-objects/common/common-page.helper";
import { LoginPageHelper } from "./../../page-objects/login-page/login-page.helper";
import { DashboardPageHelper } from "./../../page-objects/dashboard-page/dashboard-page.helper";
import { CredentialsHelper } from "./../../../core/misc-utils/credentials-helper";

describe("My Money App", () => {
  const mcesar = CredentialsHelper.mcesar;

  context("Dashboard", async () => {
    before(async () => {
      StepLogger.feature("Dashboard");
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

    it("Dashboard Consolidated value check. - [TC003] @smoke", async () => {
      StepLogger.setCaseId("TC003");
      StepLogger.stepId(1);
      StepLogger.step("Dashboard Consolidated value check.");
      StepLogger.verification(
        "Verify Total Credits, Debits, Consolidated Labels."
      );
      await DashboardPageHelper.verifyDashboardLabels();
    });
  });
});
