import { Logger, LogLevel } from 'excalibur';

import { start } from './engine';

const logger = Logger.getInstance();
logger.defaultLevel = LogLevel.Info;

const onStart = () => {
  logger.info('Game started');
};

start().then(onStart, logger.error);
