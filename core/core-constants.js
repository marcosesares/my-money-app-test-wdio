export class CoreConstants {
  static MAX_RETRY_ATTEMPTS = 3;
  static TIMEOUTS = {
    xxs: 1000,
    xs: 2000,
    s: 5000,
    m: 10000,
    l: 25000,
    xl: 50000,
    xxl: 100000,
    xxxl: 200000,
    xxxxl: 300000,
    xxxxxl: 400000,
    tenMinutes: 600000,
  };
  static DEFAULT_TIMEOUT = CoreConstants.TIMEOUTS.xl;
  static INITIAL_DATE = "1970-01-01T00:00:00.000Z";
  static END_DATE = "2022-01-01T00:00:00.000Z";
  static PASSWORD_REGEX = "aZ?#@*****###";
}
