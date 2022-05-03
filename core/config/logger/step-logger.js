import logger from "./logger";

const {
  startStep,
  addStep,
  endStep,
  addAttachment,
  addFeature,
  addTestId,
  addEnvironment,
  addStory,
} = require("@wdio/allure-reporter").default;
export class StepLogger {
  static id;
  static testCaseId;

  static setCaseId(theCaseId) {
    this.testCaseId = theCaseId;
    this.logAllure(theCaseId, true, true);
    this.addTestId(theCaseId);
    this.addEnvironment("Environement: ", browser.config.environment);
    this.id = 1;
  }

  static addStory(value) {
    if (JSON.parse(process.env.ALLURE_LOG)) {
      addStory(value);
    }
  }

  static addEnvironment(name, value) {
    if (JSON.parse(process.env.ALLURE_LOG)) {
      addEnvironment(name, value);
    }
  }

  static addTestId(theCaseId) {
    if (JSON.parse(process.env.ALLURE_LOG)) {
      addTestId(theCaseId);
    }
  }

  static feature(featureName) {
    if (JSON.parse(process.env.ALLURE_LOG)) {
      addFeature(featureName);
    }
  }

  static stepId(optionalId = 0) {
    this.id = optionalId > 0 ? optionalId : this.id + 1;
  }

  static preCondition(preConditionDescription) {
    this.commonLogger("Pre-Condition", preConditionDescription);
    let message = StepLogger.getLogMessage(
      "Pre-Condition",
      preConditionDescription
    );
    StepLogger.logAllure(message, true, this.id && this.id > 1);
  }

  static postCondition(postConditionDescription) {
    this.commonLogger("Post-Condition", postConditionDescription);
    let message = StepLogger.getLogMessage(operation, stepName);
    StepLogger.logAllure(message, true, this.id && this.id > 1);
  }

  static step(stepName) {
    let operation = "Pre-Condition";
    if (this.testCaseId) {
      operation = "Step";
    }
    this.commonLogger(operation, stepName);
    let message = StepLogger.getLogMessage(operation, stepName);
    StepLogger.logAllure(message, true, this.id && this.id > 1);
  }

  static verification(verificationDescription) {
    let message = StepLogger.getLogMessage(
      "Verification",
      verificationDescription
    );
    this.commonLogger("Verification", verificationDescription);
    StepLogger.logAllure(message, true, true);
  }

  static async subStep(stepName) {
    this.commonLogger("Sub-step", stepName);
    if (JSON.parse(process.env.EACH_STEP_SCREENSHOT)) {
      await this.takeScreenShot(`Sub-step: ${stepName}`);
    }
  }

  static async subVerification(verificationDescription) {
    this.commonLogger("Sub-verification", verificationDescription);
    if (JSON.parse(process.env.EACH_STEP_SCREENSHOT)) {
      await this.takeScreenShot(`Sub-verification: ${verificationDescription}`);
    }
  }

  static async logError(operation, step) {
    let message = `*${operation}* - ${step}`;
    this.commonLogger(operation, step);
    if (JSON.parse(process.env.EACH_STEP_SCREENSHOT)) {
      await this.takeScreenShot(message, false);
    }
  }

  static commonLogger(operation, step) {
    let message = StepLogger.getLogMessage(operation, step);
    if (JSON.parse(process.env.DEBUG)) {
      let caseIdLog = this.testCaseId ? this.testCaseId : "";
      console.log(`${caseIdLog} - ${message}`);
    }
    logger.debug(message);
  }

  static getLogMessage(operation, step) {
    let message = `*${operation} ${this.id}* - ${step}`;
    return message;
  }

  static logAllure(message, doStartStep = false, doEndStep = false) {
    if (JSON.parse(process.env.ALLURE_LOG)) {
      if (doEndStep) {
        endStep("passed");
      }
      if (doStartStep) {
        startStep(message);
      }
      if (!endStep && !startStep) {
        addStep(message);
      }
    }
  }

  static async takeScreenShot(attachmentName, passed = true) {
    if (JSON.parse(process.env.ALLURE_LOG)) {
      startStep(attachmentName);
      addAttachment(
        attachmentName,
        await browser.takeScreenshot().then((png) => {
          return Buffer.from(png, "base64");
        }),
        "image/png"
      );
      endStep(passed ? "passed" : "failed");
    }
  }
}
