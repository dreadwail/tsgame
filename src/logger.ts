import { Logger, LogLevel } from 'excalibur';

export const configureLogger = (level: LogLevel = LogLevel.Info): void => {
  const logger = getLogger();
  logger.defaultLevel = level;
};

export const getLogger = (): Logger => {
  return Logger.getInstance();
};
