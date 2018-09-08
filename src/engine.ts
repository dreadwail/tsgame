import { Color, DisplayMode, Engine } from 'excalibur';

import { createLoader } from './loader';
import { createPlayer } from './player';

export const start = () => {
  const engine = new Engine({
    width: 800,
    height: 600,
    suppressMinimumBrowserFeatureDetection: true,
    suppressConsoleBootMessage: true,
    displayMode: DisplayMode.FullScreen,
    backgroundColor: Color.Black,
  });

  const player = createPlayer(engine);
  const loader = createLoader();

  engine.add(player);

  return engine.start(loader);
};
