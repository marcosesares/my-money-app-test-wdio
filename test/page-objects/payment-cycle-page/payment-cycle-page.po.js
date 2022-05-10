import BasePage from "../base-page.po";
import { PaymentCyclePageConstant } from "./payment-cycle-page.constants";

const {
  attributes: { selectors, labels },
} = PaymentCyclePageConstant;

class PaymentCyclePage extends BasePage {
  get paymentCycleHeader() {
    return labels.paymentCycleHeader;
  }
  get list() {
    return $(selectors.list);
  }
  get add() {
    return $(selectors.add);
  }
  get nameColumn() {
    return $(selectors.nameColumn);
  }
  get monthColumn() {
    return $(selectors.monthColumn);
  }
  get yearColumn() {
    return $(selectors.yearColumn);
  }
  get actionsColumn() {
    return $(selectors.actionsColumn);
  }
  get nameTextbox() {
    return $(selectors.nameTextbox);
  }
  get monthTextbox() {
    return $(selectors.monthTextbox);
  }
  get yearTextbox() {
    return $(selectors.yearTextbox);
  }
  get save() {
    return $(selectors.save);
  }
  get cancel() {
    return $(selectors.cancel);
  }

  getListTableCell(column, value) {
    return $(
      `//div[@id='tabList']
         //td[count(//table/thead/tr/th[.='${column}']/preceding-sibling::th)+1][normalize-space()='${value}']`
    );
  }

  getCreditAddButton(row) {
    return $(
      `//div[fieldset[legend[normalize-space()='Credits']]]
         //input[@name='credits[${row}].name']/parent::td/parent::tr//button[contains(@class, 'btn-success')]`
    );
  }

  getCreditCopyButton(row) {
    return $(
      `//div[fieldset[legend[normalize-space()='Credits']]]
         //input[@name='credits[${row}].name']/parent::td/parent::tr//button[contains(@class, 'btn-warning')]`
    );
  }

  getCreditDeleteButton(row) {
    return $(
      `//div[fieldset[legend[normalize-space()='Credits']]]
         //input[@name='credits[${row}].name']/parent::td/parent::tr//button[contains(@class, 'btn-danger')]`
    );
  }

  getCreditValueTextbox(row) {
    return $(
      `//div[fieldset[legend[normalize-space()='Credits']]]
         //input[@name='credits[${row}].value']`
    );
  }

  getCreditNameTextbox(row) {
    return $(
      `//div[fieldset[legend[normalize-space()='Credits']]]
         //input[@name='credits[${row}].name']`
    );
  }

  getDebitAddButton(row) {
    return $(
      `//div[fieldset[legend[normalize-space()='Debits']]]
        //input[@name='debts[${row}].name']/parent::td/parent::tr//button[contains(@class, 'btn-success')]`
    );
  }

  getDebitCopyButton(row) {
    return $(
      `//div[fieldset[legend[normalize-space()='Debits']]]
        //input[@name='debts[${row}].name']/parent::td/parent::tr//button[contains(@class, 'btn-warning')]`
    );
  }

  getDebitDeleteButton(row) {
    return $(
      `//div[fieldset[legend[normalize-space()='Debits']]]
        //input[@name='debts[${row}].name']/parent::td/parent::tr//button[contains(@class, 'btn-danger')]`
    );
  }

  getDebitValueTextbox(row) {
    return $(
      `//div[fieldset[legend[normalize-space()='Debits']]]
        //input[@name='debts[${row}].value']`
    );
  }

  getDebitNameTextbox(row) {
    return $(
      `//div[fieldset[legend[normalize-space()='Debits']]]
        //input[@name='debts[${row}].name']`
    );
  }

  getDebitStatusTextbox(row) {
    return $(
      `//div[fieldset[legend[normalize-space()='Debits']]]
         //input[@name='debts[${row}].status']`
    );
  }
}

export default new PaymentCyclePage();
