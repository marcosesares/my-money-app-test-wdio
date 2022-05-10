import { StepLogger } from "../config/logger/step-logger";
import { CoreConstants } from "../core-constants";
import { ExpectationHelper } from "./expectation-helper";
import { ValidationsHelper } from "./validations-helper";
import { WaitHelper } from "./wait-helper";

const { DEFAULT_TIMEOUT, TIMEOUTS } = CoreConstants;

export class ElementHelper {
  static async verifyElementTextContains(
    targetElement,
    elementName,
    expectedValue
  ) {
    await ExpectationHelper.verifyElementTextContains(
      targetElement,
      elementName,
      expectedValue
    );
  }

  static async verifyElementTextContains(
    targetElement,
    elementName,
    expectedValue
  ) {
    await ExpectationHelper.verifyElementTextContains(
      targetElement,
      elementName,
      expectedValue
    );
  }

  static async verifyElementAttributeValue(
    targetElement,
    elementName,
    elementAttribute,
    expectedValue
  ) {
    await ExpectationHelper.verifyElementAttributeValue(
      targetElement,
      elementName,
      elementAttribute,
      expectedValue
    );
  }

  static async verifyElementTextEqualToIgnoreCase(
    targetElement,
    elementName,
    expectedValue
  ) {
    await ExpectationHelper.verifyElementTextEqualToIgnoreCase(
      targetElement,
      elementName,
      expectedValue
    );
  }

  static async verifyElementTextEqualTo(
    targetElement,
    elementName,
    expectedValue
  ) {
    await ExpectationHelper.verifyElementTextEqualTo(
      targetElement,
      elementName,
      expectedValue
    );
  }

  static async verifyElementDisplayedStatus(targetElement, elementName) {
    await ExpectationHelper.verifyElementDisplayedStatus(
      targetElement,
      elementName
    );
  }

  static async actionClickIfDisplayed(
    targetElement,
    elementName,
    timeout = TIMEOUTS.s
  ) {
    let message = ValidationsHelper.getClickAction(elementName);
    StepLogger.subStep(message);
    await WaitHelper.waitForElementOptionallyPresent(targetElement, timeout);
    if (await targetElement.isDisplayed()) {
      await targetElement.click();
    }
  }

  static async actionHover(targetElement, elementName) {
    let message = ValidationsHelper.getHoverAction(elementName);
    StepLogger.subStep(message);
    await WaitHelper.waitForElementToBeClickable(targetElement);
    await targetElement.moveTo();
  }

  static async scrollIntoView(targetElement, elementName) {
    let message = ValidationsHelper.getScrollAction(elementName);
    StepLogger.subStep(message);
    await WaitHelper.waitForElementToExist(targetElement);
    await targetElement.scrollIntoView();
  }

  static async actionClick(targetElement, elementName) {
    let message = ValidationsHelper.getClickAction(elementName);
    StepLogger.subStep(message);
    await WaitHelper.waitForElementToBeClickable(targetElement);
    await targetElement.click();
  }

  static async setValue(targetElement, elementName, text) {
    let message = ValidationsHelper.getSetValueAction(elementName, text);
    StepLogger.subStep(message);
    await WaitHelper.waitForElementToBeDisplayed(targetElement);
    await targetElement.setValue(text);
  }

  static async setPasswordValue(targetElement, elementName, text) {
    let message = ValidationsHelper.getSetPasswordValueAction(elementName);
    StepLogger.subStep(message);
    await WaitHelper.waitForElementToBeDisplayed(targetElement);
    await targetElement.setValue(text);
  }
}
