import { SignUpPageConstant } from "./signup-page.constants";

const {
  attributes: { selectors, labels },
} = SignUpPageConstant;

export class SignUpPage {
  static get form() {
    return {
      get confirmPassword() {
        return $(selectors.confirmPassword);
      },
      get register() {
        return $(selectors.register);
      },
      get signUpLink() {
        return $(selectors.signUpLink);
      },
      get name() {
        return $(selectors.name);
      },
    };
  }
}
