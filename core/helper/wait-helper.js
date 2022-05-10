import { StepLogger } from "../config/logger/step-logger";
import { CoreConstants } from "./../core-constants";

const { DEFAULT_TIMEOUT, TIMEOUTS } = CoreConstants;

export class WaitHelper {
  static async pause(sleepTime = TIMEOUTS.s) {
    await browser.pause(sleepTime);
  }

  static async pauseForTenMinutes() {
    await browser.pause(TIMEOUTS.tenMinutes);
  }

  static async waitForBrowserUrl(
    browserUrl,
    message = "browser should have url",
    timeout = DEFAULT_TIMEOUT
  ) {
    try {
      await browser.waitUntil(
        async function () {
          return (await browser.getUrl()) === browserUrl;
        },
        { timeout, message }
      );
    } catch (error) {
      await StepLogger.logError(
        "WAIT",
        `Waiting ${timeout}ms for awaited state: ${message}.`
      );
      throw error;
    }
  }

  static async waitForElementAttributeValue(
    targetElement,
    elementAttribute,
    expectedValue,
    message = "element should have attribute value",
    timeout = DEFAULT_TIMEOUT
  ) {
    try {
      await targetElement.waitUntil(
        async function () {
          return (await this.getAttribute(elementAttribute)) === expectedValue;
        },
        { timeout, message }
      );
    } catch (error) {
      await StepLogger.logError(
        "WAIT",
        `Waiting ${timeout}ms for awaited state: ${message}.`
      );
      throw error;
    }
  }

  static async waitForElementToBeDisplayed(
    targetElement,
    timeout = DEFAULT_TIMEOUT,
    message = "Element should be displayed"
  ) {
    try {
      await targetElement.waitForDisplayed({ timeout, message });
    } catch (error) {
      await StepLogger.logError(
        "WAIT",
        `Waiting ${timeout}ms for awaited state: ${message}.`
      );
      throw error;
    }
  }

  static async waitForElementToBeClickable(
    targetElement,
    timeout = DEFAULT_TIMEOUT,
    message = "Element should be clickable"
  ) {
    try {
      await targetElement.waitForClickable({ timeout, message });
    } catch (error) {
      await StepLogger.logError(
        "WAIT",
        `Waiting ${timeout}ms for awaited state: ${message}.`
      );
      throw error;
    }
  }

  static async waitForElementToExist(
    targetElement,
    timeout = DEFAULT_TIMEOUT,
    message = "Element should exist"
  ) {
    try {
      await targetElement.waitForExist({ timeout, message });
    } catch (error) {
      await StepLogger.logError(
        "WAIT",
        `Waiting ${timeout}ms for awaited state: ${message}.`
      );
      throw error;
    }
  }

  static async waitForElementOptionallyPresent(
    targetElement,
    timeout = TIMEOUTS.s
  ) {
    try {
      await targetElement.waitForDisplayed({ timeout });
    } catch (error) {
      return false;
    }
    return true;
  }

  static assertionHandler(error) {
    if (process.env.SOFT_ASSERTIONS) {
      return false;
    } else {
      throw error;
    }
  }
}
