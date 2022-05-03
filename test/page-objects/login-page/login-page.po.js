import BasePage from "../base-page.po";
import { LoginPageConstant } from "./login-page.constants";

const {
  attributes: { selectors, labels },
} = LoginPageConstant;

class LoginPage extends BasePage {
  constructor() {
    super();
  }
  get loginBoxMsg() {
    return $(selectors.loginBoxMsg);
  }
  get email() {
    return $(selectors.email);
  }
  get password() {
    return $(selectors.password);
  }
  get logIn() {
    return $(selectors.logIn);
  }
  get loginLink() {
    return $(selectors.loginLink);
  }
}

export default new LoginPage();
