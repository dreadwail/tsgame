import { start } from './engine';
import { configureLogger, getLogger } from './logger';

configureLogger();

start().then(
  () => {
    getLogger().info('Game started');
  },
  e => {
    getLogger().error(e);
  }
);
