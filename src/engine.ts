import { Color, DisplayMode, Engine } from 'excalibur';

import { createLoader } from './loader';
import { MainMenu, Map, Splash } from './scenes';

const engineOptions = {
  width: 800,
  height: 600,
  suppressMinimumBrowserFeatureDetection: true,
  suppressConsoleBootMessage: true,
  displayMode: DisplayMode.FullScreen,
  backgroundColor: Color.Black,
};

export const start = (): Promise<void> =>
  new Promise((resolve, reject) => {
    const engine = new Engine(engineOptions);

    const splash = new Splash(engine);
    engine.add(Splash.sceneName, splash);

    const mainMenu = new MainMenu(engine);
    engine.add(MainMenu.sceneName, mainMenu);

    const map = new Map(engine);
    engine.add(Map.sceneName, map);

    const loader = createLoader();
    engine.start(loader).then(resolve, reject);

    engine.goToScene(Splash.sceneName);
  });
