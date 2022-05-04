import { ElementHelper } from "../../../core/helper/element-helper";
import { ExpectationHelper } from "../../../core/helper/expectation-helper";
import { EndpointHelper } from "../../../core/misc-utils/endpoint-helper";
import BasePageHelper from "../base-page.helper";
import { CommonPageHelper } from "../common/common-page.helper";
import { DashboardPageConstant } from "./dashboard-page.constants";
import DashboardPage from "./dashboard-page.po";

const {
  attributes: { labels },
} = DashboardPageConstant;

export class DashboardPageHelper extends BasePageHelper {
  /**
   * Verify My Money App Dashboard page Header section label is displayed.
   */
  static async verifyDashboardSectionDisplayedStatus() {
    await CommonPageHelper.verifyHeaderSectionLabelDisplayedStatus();
  }

  /**
   * Verify Logged in User label is displayed.
   */
  static async verifyUserNameLabelDisplayedStatus() {
    await CommonPageHelper.verifyUserNameLabelDisplayedStatus();
  }

  static async verifyDashboardLabels() {
    await DashboardPageHelper.verifyTotalCreditsLabelText();
    await DashboardPageHelper.verifyTotalDebitsLabelText();
    await DashboardPageHelper.verifyConsolidatedLabelText();
    await DashboardPageHelper.verifyConsolidatedValue();
  }

  /**
   * Verify Total Credits section label is displayed.
   */
  static async verifyTotalCreditsLabelText() {
    await ElementHelper.verifyElementDisplayedStatus(
      DashboardPage.totalCredits,
      labels.totalCredits
    );
    await ElementHelper.verifyElementTextEqualTo(
      DashboardPage.totalCredits,
      labels.totalCredits,
      labels.totalCredits
    );
  }

  /**
   * Verify Total Debits section label is displayed.
   */
  static async verifyTotalDebitsLabelText() {
    await ElementHelper.verifyElementDisplayedStatus(
      DashboardPage.totalDebits,
      labels.totalDebits
    );
    await ElementHelper.verifyElementTextEqualTo(
      DashboardPage.totalDebits,
      labels.totalDebits,
      labels.totalDebits
    );
  }

  /**
   * Verify Total Consolidated section label is displayed.
   */
  static async verifyConsolidatedLabelText() {
    await ElementHelper.verifyElementDisplayedStatus(
      DashboardPage.consolidated,
      labels.consolidated
    );
    await ElementHelper.verifyElementTextEqualTo(
      DashboardPage.consolidated,
      labels.consolidated,
      labels.consolidated
    );
  }

  /**
   * Verify Total Consolidated value calculation.
   */
  static async verifyConsolidatedValue() {
    const credits = +(await DashboardPage.totalCreditsValue.getText()).slice(1);
    const debits = +(await DashboardPage.totalDebitsValue.getText()).slice(1);
    const consolidated = +(
      await DashboardPage.consolidatedValue.getText()
    ).slice(1);
    const total = credits - debits;
    await ExpectationHelper.verifyNumberValueEqualTo(
      DashboardPage.consolidatedValue,
      consolidated,
      total
    );
  }

  url() {
    return EndpointHelper.homePage;
  }
}
