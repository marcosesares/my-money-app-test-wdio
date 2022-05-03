import { CommonPage } from "./common.po";
import { ElementHelper } from "./../../../core/helper/element-helper";
import { CommonPageConstant } from "./common-page.constant";

const {
  attributes: { labels },
} = CommonPageConstant;

export class CommonPageHelper {
  /**
   * Click the Register Menu Link
   */
  static async clickRegisterMenuLink() {
    await ElementHelper.actionClick(
      CommonPage.sideMenu.registerMenuLink,
      labels.registerMenuLink
    );
  }

  /**
   * Click the Dashboard Menu Link
   */
  static async clickDashboardMenuLink() {
    await ElementHelper.actionClick(
      CommonPage.sideMenu.dashboardMenuLink,
      labels.dashboardMenuLink
    );
  }

  /**
   * Click the Payment Cycles Menu Link
   */
  static async clickPaymentCyclesMenuLink() {
    await ElementHelper.actionClick(
      CommonPage.sideMenu.paymentCyclesMenuLink,
      labels.paymentCyclesMenuLink
    );
  }

  /**
   * Verify Register Menu Link is displayed.
   */
  static async verifyRegisterMenuLinkDisplayedStatus() {
    await ElementHelper.verifyElementDisplayedStatus(
      CommonPage.sideMenu.registerMenuLink,
      labels.registerMenuLink
    );
  }

  /**
   * Verify Payment Cycles Menu Link is displayed.
   */
  static async verifyPaymentCyclesMenuLinkDisplayedStatus() {
    await ElementHelper.verifyElementDisplayedStatus(
      CommonPage.sideMenu.paymentCyclesMenuLink,
      labels.paymentCyclesMenuLink
    );
  }

  /**
   * Verify Dashboard Menu Link is displayed.
   */
  static async verifyDashboardMenuLinkDisplayedStatus() {
    await ElementHelper.verifyElementDisplayedStatus(
      CommonPage.sideMenu.dashboardMenuLink,
      labels.dashboardMenuLink
    );
  }

  /**
   * Verify My Money App Dashboard page Header section label is displayed.
   */
  static async verifyMyMoneyAppLogoDisplayedStatus() {
    await ElementHelper.verifyElementDisplayedStatus(
      CommonPage.form.appLogo,
      labels.appLogo
    );
  }

  /**
   * Verify My Money App Dashboard page Header section label is displayed.
   */
  static async verifyHeaderSectionLabelDisplayedStatus() {
    await ElementHelper.verifyElementDisplayedStatus(
      CommonPage.form.headerSectionLabel,
      labels.headerSectionLabel
    );
  }

  /**
   * Verify My Money App Dashboard page Header section label has text.
   */
  static async verifyHeaderSectionHasText(text) {
    await ElementHelper.verifyElementTextEqualTo(
      CommonPage.form.headerSectionLabel,
      text,
      text
    );
  }

  /**
   * Verify Logged in User label is displayed.
   */
  static async verifyUserNameLabelDisplayedStatus() {
    await ElementHelper.verifyElementDisplayedStatus(
      CommonPage.form.userNameLabel,
      labels.userNameLabel
    );
  }
}
