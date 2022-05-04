import { DashboardPageConstant } from "./dashboard-page.constants";

const {
  attributes: { selectors },
} = DashboardPageConstant;

class DashboardPage {
  get totalCreditsValue() {
    return $(selectors.totalCreditsValue);
  }
  get totalDebitsValue() {
    return $(selectors.totalDebitsValue);
  }
  get consolidatedValue() {
    return $(selectors.consolidatedValue);
  }
  get totalCredits() {
    return $(selectors.totalCredits);
  }
  get totalDebits() {
    return $(selectors.totalDebits);
  }
  get consolidated() {
    return $(selectors.consolidated);
  }
}

export default new DashboardPage();
