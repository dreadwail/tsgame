import { start } from './engine';
import { configureLogger } from './logger';

const logger = configureLogger();

const onStart = () => {
  logger.info('Game started');
};

const onError = (error: Error) => {
  logger.error(error);
};

start().then(onStart, onError);
