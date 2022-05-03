import winston from "winston";

const consoleFormat = winston.format.combine(
  winston.format.printf((debug) => `${debug.message}`)
);

let logger = winston.createLogger({
  level: process.env.LOGGER_LEVEL,
  transports: [
    new winston.transports.Console({
      handleExceptions: true,
      format: consoleFormat,
    }),
  ],
});

logger.on("error", (error) => {
  console.log("Unknown error in Winston logger");
  console.log(error.message);
});
export default logger;
