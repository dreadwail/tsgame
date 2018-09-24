import { Color, DisplayMode, Engine } from 'excalibur';

import { createLoader } from './loader';
import { Map, Splash } from './scenes';

const engineOptions = {
  width: 800,
  height: 600,
  suppressMinimumBrowserFeatureDetection: true,
  suppressConsoleBootMessage: true,
  displayMode: DisplayMode.FullScreen,
  backgroundColor: Color.Black,
};

export const start = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    const engine = new Engine(engineOptions);

    const map = new Map(engine);
    engine.add('map', map);

    const splash = new Splash(engine);
    engine.add('splash', splash);

    const loader = createLoader();
    engine.start(loader).then(resolve, reject);

    engine.goToScene('splash');
  });
};
