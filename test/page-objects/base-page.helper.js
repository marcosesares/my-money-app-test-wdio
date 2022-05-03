import { StepLogger } from "../../core/config/logger/step-logger";
import { WaitHelper } from "./../../core/helper/wait-helper";

export default class BasePageHelper {
  constructor() {}

  async switchToIframe(xpath) {
    const elementRef = await browser.findElement("xpath", xpath);
    await browser.switchToFrame(elementRef);
  }

  async switchToMainIframe(xpath) {
    await browser.switchToParentFrame();
  }

  static async open(path) {
    let browserUrl = `${browser.config.baseUrl}${path}`;
    let message = `Opening Url: ${browserUrl}`;
    console.log(message);
    await browser.url(`/${path}`);
    await WaitHelper.waitForBrowserUrl(browserUrl);
    await StepLogger.subStep(message);
  }
}
