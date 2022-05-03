export default class DateHelper {
  static getDate(shiftDays) {
    let date = new Date();
    date.setDate(date.getDate() + shiftDays);
    return date.getDate();
  }

  static getNthDay(day) {
    const dayString = String(day);
    const last = +dayString.slice(-2);
    if (last > 3 && last < 21) return "th";
    switch (last % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

  static getFormatedDate(shiftDays) {
    let date = new Date();
    date.setDate(date.getDate() + shiftDays);
    let day = date.getDate();
    let dateString = date.toLocaleDateString("en-us", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    return dateString.replace(`${day},`, `${day}${this.getNthDay(day)},`);
  }
}
