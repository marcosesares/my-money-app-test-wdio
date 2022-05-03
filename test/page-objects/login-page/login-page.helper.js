import BasePageHelper from "../base-page.helper";
import { EndpointHelper } from "../../../core/misc-utils/endpoint-helper";
import { CommonPageHelper } from "../common/common-page.helper";
import { ElementHelper } from "../../../core/helper/element-helper";
import { LoginPageConstant } from "./login-page.constants";
import LoginPage from "./login-page.po";

const {
  attributes: { labels },
} = LoginPageConstant;

export class LoginPageHelper extends BasePageHelper {
  /**
   * Enter Email, Password and click 'LogIn' button
   * @param user
   */
  static async fillLoginFormAndClickLoginButton(user) {
    await this.fillLoginForm(user);
    await this.clickLoginButton();
  }

  static async clickLoginButton() {
    await ElementHelper.actionClick(LoginPage.logIn, labels.logIn);
  }

  /**
   * Enter Email, Password
   * @param user
   */
  static async fillLoginForm(user) {
    await this.setEmail(user);
    await this.setPassword(user);
  }

  /**
   * Verify My Money App Header section is displayed.
   */
  static async verifyHeaderSectionLabelDisplayedStatus() {
    await CommonPageHelper.verifyHeaderSectionLabelDisplayedStatus();
  }

  /**
   * Verify My Money App logo is displayed.
   */
  static async verifyMyMoneyAppLogoDisplayedStatus() {
    await CommonPageHelper.verifyMyMoneyAppLogoDisplayedStatus();
  }

  /**
   * Verify User is able to login.
   */
  static async verifyUserLoggedIn() {
    await this.verifyMyMoneyAppLogoDisplayedStatus();
    await this.verifyHeaderSectionLabelDisplayedStatus();
  }

  static async setEmail(user) {
    await ElementHelper.setValue(LoginPage.email, labels.email, user.email);
  }

  static async setPassword(user) {
    await ElementHelper.setPasswordValue(
      LoginPage.password,
      labels.password,
      user.password
    );
  }

  static async open() {
    await super.open(this.url());
  }

  static url() {
    return EndpointHelper.loginPage;
  }
}
