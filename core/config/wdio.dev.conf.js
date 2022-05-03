import { config as baseConfig } from "../../wdio.conf.js";
export const config = Object.assign(baseConfig, {
  userName: process.env.USER_NAME,
  userEmail: process.env.USER_EMAIL,
  userPassword: process.env.USER_PASSWORD,
  environment: "Dev",
});
