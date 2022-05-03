export default class NumberHelper {
  static getFormatedMoney(number) {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "GBP",
      maximumFractionDigits: 2,
      minimumFractionDigits: 0,
    });
  }
}
