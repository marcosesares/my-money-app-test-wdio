import { HtmlHelper } from "../../../core/misc-utils/html-helper";
import { xpath } from "../../../core/misc-utils/xpath-builder";
import { CommonPageConstant } from "./common-page.constant";

const {
  attributes: { selectors, labels },
} = CommonPageConstant;

export class CommonPage {
  static get sideMenu() {
    return {
      get dashboardMenuLink() {
        return $(selectors.dashboardMenuLink);
      },
      get registerMenuLink() {
        return $(selectors.registerMenuLink);
      },
      get paymentCyclesMenuLink() {
        return $(selectors.paymentCyclesMenuLink);
      },
    };
  }

  static get form() {
    return {
      get headerSectionLabel() {
        return $(selectors.headerSectionLabel);
      },
      get userNameLabel() {
        return $(selectors.userNameLabel);
      },
      get appLogo() {
        return $(selectors.appLogo);
      },
    };
  }

  static getElementByPlaceHolder(value, name) {
    return $(`[${HtmlHelper.attributes.placeholder}='${value}']`);
  }

  static getElementByTextAndHref(href, text) {
    return $(
      xpath().contains(HtmlHelper.attributes.href, href).text(text).build(),
      text
    );
  }

  static getElementByContainsTextAndHref(href, text) {
    return $(
      xpath()
        .contains(HtmlHelper.attributes.href, href)
        .textContains(text)
        .buildByObject(),
      text
    );
  }

  static getElementByIdEndsWith(idValue, name) {
    return $(`[${HtmlHelper.attributes.id}$='${idValue}']`);
  }

  static getElementByIdContains(idValue, name) {
    return $(`[${HtmlHelper.attributes.id}*='${idValue}']`);
  }

  static getElementByIdStartsWith(idValue, name) {
    return $(`[${HtmlHelper.attributes.id}^='${idValue}']`);
  }

  static getElementByNameStartsWith(nameValue, name) {
    return $(`[${HtmlHelper.attributes.name}^='${nameValue}']`);
  }

  static getElementByNameContains(nameValue, name) {
    return $(`[${HtmlHelper.attributes.name}*='${nameValue}']`);
  }

  static getElementByNameEndsWith(nameValue, name) {
    return $(`[${HtmlHelper.attributes.name}$='${nameValue}']`);
  }

  static getElementByClassContains(className, name) {
    return $(`[${HtmlHelper.attributes.class}*='${className}']`);
  }

  static getElementByClassEndsWith(className, name) {
    return $(`[${HtmlHelper.attributes.class}$='${className}']`);
  }

  static getElementByClassStartsWith(className, name) {
    return $(`[${HtmlHelper.attributes.class}^='${className}']`);
  }
}
