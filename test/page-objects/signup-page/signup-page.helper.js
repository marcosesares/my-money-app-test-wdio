import BasePageHelper from "../base-page.helper";
import { SignUpPage } from "./signup-page.po";
import { LoginPageHelper } from "../login-page/login-page.helper";
import { StepLogger } from "../../../core/config/logger/step-logger";
import { EndpointHelper } from "../../../core/misc-utils/endpoint-helper";

export class SignUpPageHelper extends BasePageHelper {
  static _instance;

  constructor() {
    super();
  }

  static getInstance() {
    return this._instance || (this._instance = new this());
  }

  /**
   * Enter Name, Email, Password, ConfirmPassword and click 'Register' button.
   * @param user
   */
  static async fillSignUpFormAndClickRegisterButton(user) {
    await this.fillSignUpForm(user);
    StepLogger.subStep("Click the Register Button.");
    await SignUpPage.form.register.clickButton();
  }

  /**
   * Enter Name, Email, Password, ConfirmPassword.
   * @param user
   */
  static async fillSignUpForm(user) {
    StepLogger.subStep("Click the New User? Register here! Link.");
    await SignUpPage.form.signUpLink.clickButton();
    await LoginPageHelper.fillLoginForm(user);
    StepLogger.subStep("Type the user name.");
    await SignUpPage.form.name.sendKeys(user.name);
    StepLogger.subStep("Type the user confirmation password.");
    await SignUpPage.form.confirmPassword.sendKeys(user.password);
  }

  url() {
    return EndpointHelper.homePage;
  }
}
