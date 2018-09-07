import { Engine, ILoadable, Loader, Logger, LogLevel } from 'excalibur';

Logger.getInstance().defaultLevel = LogLevel.Info;

const game = new Engine({
  width: 800,
  height: 600,
  suppressMinimumBrowserFeatureDetection: false,
  suppressConsoleBootMessage: false,
});

const loader = new Loader();
const resources: Record<string, ILoadable> = {};

Object.keys(resources).forEach(key => {
  loader.addResource(resources[key]);
});

export const start = () => game.start(loader);
