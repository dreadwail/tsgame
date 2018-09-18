import { start } from './engine';
import { configureLogger, getLogger } from './logger';

configureLogger();

const logger = getLogger();

const onStart = () => {
  logger.info('Game started');
};

const onError = (error: Error) => {
  logger.error(error);
};

start().then(onStart, onError);
