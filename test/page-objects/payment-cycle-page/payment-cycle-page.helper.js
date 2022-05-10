import { CommonPage } from "../common/common.po";
import { CommonPageHelper } from "../common/common-page.helper";
import faker from "@faker-js/faker";
import { ElementHelper } from "../../../core/helper/element-helper";
import PaymentCyclePage from "./payment-cycle-page.po";
import { PaymentCyclePageConstant } from "./payment-cycle-page.constants";
import BasePageHelper from "../base-page.helper";
import { EndpointHelper } from "../../../core/misc-utils/endpoint-helper";
import { CoreConstants } from "../../../core/core-constants";
import { CommonPageConstant } from "./../common/common-page.constant";

const { INITIAL_DATE, END_DATE } = CoreConstants;
const {
  attributes: { labels },
} = PaymentCyclePageConstant;

class PaymentCycleHelper extends BasePageHelper {
  async navigateToPaymentCyclesPage() {
    await this.clickTheRegisterMenuLink();
    await this.clickThePaymentCyclesMenuLink();
  }

  async clickThePaymentCyclesMenuLink() {
    await ElementHelper.actionClick(
      CommonPage.sideMenu.paymentCyclesMenuLink,
      CommonPageConstant.attributes.labels.paymentCyclesMenuLink
    );
  }

  async clickTheRegisterMenuLink() {
    await ElementHelper.actionClick(
      CommonPage.sideMenu.registerMenuLink,
      CommonPageConstant.attributes.labels.registerMenuLink
    );
  }

  async verifyPaymentCycleSectionLabel() {
    await CommonPageHelper.verifyHeaderSectionLabelDisplayedStatus();
    await CommonPageHelper.verifyHeaderSectionHasText(
      PaymentCyclePage.paymentCycleHeader
    );
  }

  async clickAddButton() {
    await ElementHelper.actionClick(PaymentCyclePage.add, labels.add);
  }

  async verifyPaymentCycleDisplayed(paymentCycle) {
    await this.verifyPaymentCycleSectionLabel();
    await ElementHelper.verifyElementTextEqualTo(
      PaymentCyclePage.getListTableCell("Name", paymentCycle.name),
      `Name cell under ${paymentCycle.name} column`,
      paymentCycle.name
    );
    let month = `${paymentCycle.month}`;
    await ElementHelper.verifyElementTextEqualTo(
      PaymentCyclePage.getListTableCell("Month", month),
      `Month cell under ${month} column`,
      month
    );
    let year = `${paymentCycle.year}`;
    await ElementHelper.verifyElementTextEqualTo(
      PaymentCyclePage.getListTableCell("Year", year),
      `Year cell under ${year} column`,
      year
    );
  }

  async verifyAddPaymentCycleFormDisplayed() {
    await ElementHelper.verifyElementDisplayedStatus(
      PaymentCyclePage.nameTextbox,
      labels.nameTextbox
    );
    await ElementHelper.verifyElementDisplayedStatus(
      PaymentCyclePage.monthTextbox,
      labels.monthTextbox
    );
    await ElementHelper.verifyElementDisplayedStatus(
      PaymentCyclePage.yearTextbox,
      labels.yearTextbox
    );
  }

  getPaymentCycle() {
    const date = faker.date.between(INITIAL_DATE, END_DATE);
    const credits = [
      { name: faker.name.findName(), value: String(date.getMonth() + 1) },
    ];
    let debits = [
      {
        name: faker.name.findName(),
        value: String(date.getMonth() + 1),
        status: "AGENDADO",
      },
    ];
    let paymentCycle = {
      name: faker.name.findName(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
      credits,
      debits,
    };
    return paymentCycle;
  }

  async fillPaymentCycleFormAndClickSaveButton(paymentCycle) {
    await ElementHelper.setValue(
      PaymentCyclePage.nameTextbox,
      labels.nameTextbox,
      paymentCycle.name
    );
    await ElementHelper.setValue(
      PaymentCyclePage.monthTextbox,
      labels.monthTextbox,
      `${paymentCycle.month}`
    );
    await ElementHelper.setValue(
      PaymentCyclePage.yearTextbox,
      labels.yearTextbox,
      `${paymentCycle.year}`
    );
    await this.addPaymentCredit(paymentCycle);
    await this.addPaymentDebit(paymentCycle);
    await ElementHelper.scrollIntoView(PaymentCyclePage.save, labels.save);
    await ElementHelper.actionClick(PaymentCyclePage.save, labels.save);
  }

  async addPaymentCredit(paymentCycle) {
    for (let i = 0; i < paymentCycle.credits.length; i++) {
      let credit = paymentCycle.credits[i];
      await ElementHelper.setValue(
        PaymentCyclePage.getCreditNameTextbox(i),
        `Credit Name Textbox for row index: ${i}`,
        credit.name
      );
      await ElementHelper.setValue(
        PaymentCyclePage.getCreditValueTextbox(i),
        `Credit Value Textbox for row index: ${i}`,
        credit.value
      );
      if (i + 1 < paymentCycle.credits.length) {
        await ElementHelper.actionClick(
          PaymentCyclePage.getCreditAddButton(i),
          `Credit Add Button for row index: ${i}`
        );
      }
    }
  }

  async addPaymentDebit(paymentCycle) {
    for (let i = 0; i < paymentCycle.debits.length; i++) {
      let debit = paymentCycle.debits[i];
      await ElementHelper.setValue(
        PaymentCyclePage.getDebitNameTextbox(i),
        `Debit Name Textbox for row index: ${i}`,
        debit.name
      );
      await ElementHelper.setValue(
        PaymentCyclePage.getDebitValueTextbox(i),
        `Debit Value Textbox for row index: ${i}`,
        debit.value
      );
      await ElementHelper.setValue(
        PaymentCyclePage.getDebitStatusTextbox(i),
        `Debit Status Textbox for row index: ${i}`,
        debit.status
      );
      if (i + 1 < paymentCycle.debits.length) {
        await ElementHelper.actionClick(
          PaymentCyclePage.getDebitAddButton(i),
          `Debit Add Button for row index: ${i}`
        );
      }
    }
  }

  url() {
    return EndpointHelper.homePage;
  }
}

export default new PaymentCycleHelper();
