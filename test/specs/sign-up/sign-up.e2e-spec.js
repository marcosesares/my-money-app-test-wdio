import faker from "@faker-js/faker";
import { StepLogger } from "../../../core/config/logger/step-logger";
import { CoreConstants } from "../../../core/core-constants";
import { CommonPageHelper } from "../../page-objects/common/common-page.helper";
import { DashboardPageHelper } from "../../page-objects/dashboard-page/dashboard-page.helper";
import { LoginPageHelper } from "../../page-objects/login-page/login-page.helper";
import { SignUpPageHelper } from "../../page-objects/signup-page/signup-page.helper";

describe("My Money App", () => {
  context("Signup", async () => {
    before(async () => {
      StepLogger.feature("Signup");
      StepLogger.setCaseId("PreCondition");
      StepLogger.step("Open My Money application.");
      await LoginPageHelper.open();
      StepLogger.verification(
        "Verify My Money App Dashboard page Header section label is displayed."
      );
      await CommonPageHelper.verifyMyMoneyAppLogoDisplayedStatus();
    });

    it("User Open My Money App and Sign up to application. - [TC002] @smoke", async () => {
      let user = {
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: `${faker.helpers.replaceSymbols(
          CoreConstants.PASSWORD_REGEX
        )}`,
      };
      StepLogger.setCaseId("TC002");
      StepLogger.stepId(1);
      StepLogger.step("User signs up to My Money App.");
      await SignUpPageHelper.fillSignUpFormAndClickRegisterButton(user);
      StepLogger.verification("Verify Dashboard is displayed.");
      await DashboardPageHelper.verifyDashboardSectionDisplayedStatus();
    });
  });
});
