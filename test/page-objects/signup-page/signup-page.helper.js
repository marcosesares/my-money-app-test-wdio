import BasePageHelper from "../base-page.helper";
import { SignUpPage } from "./signup-page.po";
import { LoginPageHelper } from "../login-page/login-page.helper";
import { EndpointHelper } from "../../../core/misc-utils/endpoint-helper";
import { ElementHelper } from "../../../core/helper/element-helper";
import { SignUpPageConstant } from "./signup-page.constants";

const {
  attributes: { labels },
} = SignUpPageConstant;

export class SignUpPageHelper extends BasePageHelper {
  /**
   * Enter Name, Email, Password, ConfirmPassword and click 'Register' button.
   * @param user
   */
  static async fillSignUpFormAndClickRegisterButton(user) {
    await this.fillSignUpForm(user);
    await SignUpPageHelper.clickTheRegisterButton();
  }

  static async clickTheRegisterButton() {
    await ElementHelper.actionClick(SignUpPage.form.register, labels.register);
  }

  /**
   * Enter Name, Email, Password, ConfirmPassword.
   * @param user
   */
  static async fillSignUpForm(user) {
    await SignUpPageHelper.clickTheRegisterHereLink();
    await LoginPageHelper.fillLoginForm(user);
    await SignUpPageHelper.setTheUserName(user);
    await SignUpPageHelper.setTheConfirmationPassword(user);
  }

  static async setTheConfirmationPassword(user) {
    await ElementHelper.setValue(
      SignUpPage.form.confirmPassword,
      labels.confirmPassword,
      user.password
    );
  }

  static async setTheUserName(user) {
    await ElementHelper.setValue(SignUpPage.form.name, labels.name, user.name);
  }

  static async clickTheRegisterHereLink() {
    await ElementHelper.actionClick(
      SignUpPage.form.signUpLink,
      labels.signUpLink
    );
  }

  url() {
    return EndpointHelper.homePage;
  }
}
