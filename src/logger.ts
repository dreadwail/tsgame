import { Logger, LogLevel } from 'excalibur';

export const configureLogger = (level: LogLevel = LogLevel.Info): Logger => {
  const logger = getLogger();
  logger.defaultLevel = level;
  return logger;
};

export const getLogger = (): Logger => {
  return Logger.getInstance();
};
