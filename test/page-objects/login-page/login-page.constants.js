export class LoginPageConstant {
  static attributes = {
    selectors: {
      email: "input[placeholder='Email']",
      password: "input[placeholder='Password']",
      logIn: "//button[text()='Login']",
      loginLink:
        "//button[normalize-space()='Already registered? Login here!']",
      loginBoxMsg: ".login-box-msg",
    },
    labels: {
      email: "User email",
      password: "User password",
      logIn: "Login Button",
      loginLink: "Already registered? Login here! link",
      loginBoxMsg: "Page Header Label",
    },
  };

  static errorMessages = {
    incorrectLoginPassword: "Invalid User/Password",
  };
}
