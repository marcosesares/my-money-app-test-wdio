export class ValidationsHelper {
  static get types() {
    return {
      field: "Field",
      dropDown: "Drop down",
      page: "Page",
      button: "Button",
      label: "Label",
      image: "Image",
      window: "Window",
      notification: "Notification",
      grid: "Grid",
      alert: "Alert",
      menu: "Menu",
      link: "Link",
    };
  }

  static getFieldTextContainsValidation(fieldLabel, value) {
    return `${this.types.field} ${fieldLabel} text should contain ${value}`;
  }

  static getFieldFieldAttributeEqualsToValidation(
    attribute,
    fieldLabel,
    value
  ) {
    return `${this.types.field} ${fieldLabel} should have attribute ${attribute} equals to ${value}`;
  }

  static getFieldTextEqualsToValidation(fieldLabel, value) {
    return `${this.types.field} ${fieldLabel} should have text equals to ${value}`;
  }

  static getHoverAction(name) {
    return `Hover over the '${name}'`;
  }

  static getScrollAction(name) {
    return `Scroll into the '${name}'`;
  }

  static getClickAction(name) {
    return `Click the '${name}'`;
  }

  static getSetValueAction(name, text) {
    return `Type the '${text}' on the '${name}'`;
  }

  static getSetPasswordValueAction(name) {
    return `Type the user password on the '${name}'`;
  }

  static getDisplayedValidation(name) {
    return `'${name}' should be displayed`;
  }

  static getBrowserUrlValidation(browserUrl) {
    return `browser should have url: '${browserUrl}'`;
  }
}
