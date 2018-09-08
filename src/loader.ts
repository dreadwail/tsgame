import { ILoadable, Loader } from 'excalibur';

export default class GameLoader extends Loader {
  public draw(_context: CanvasRenderingContext2D) {
    // provide custom loading screen instead of the default
  }
}

export const createLoader = (): Loader => {
  const loader = new GameLoader();
  const resources: Record<string, ILoadable> = {};

  /* istanbul ignore next */
  Object.keys(resources).forEach(key => {
    loader.addResource(resources[key]);
  });

  return loader;
};
