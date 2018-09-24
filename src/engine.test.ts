jest.mock('./loader');
jest.mock('./actors/Player');
jest.mock('./scenes/Map');
jest.mock('excalibur');

import { Color, DisplayMode, Engine, Loader } from 'excalibur';

import { start } from './engine';
import { createLoader } from './loader';
import { createMockEngine } from './mocking';
import Map from './scenes/Map';
import Splash from './scenes/Splash';

describe('engine', () => {
  describe('start', () => {
    let engine: Engine;
    let loader: Loader;
    let promise: Promise<void>;

    beforeEach(async () => {
      engine = createMockEngine();
      ((Engine as any) as jest.Mock).mockImplementation(() => engine);

      loader = new Loader();
      (createLoader as jest.Mock).mockReturnValue(loader);
    });

    describe('when there is an engine error', () => {
      let error: Error;

      beforeEach(async () => {
        error = new Error('bang');
        (engine.start as jest.Mock).mockReturnValue(Promise.reject(error));

        promise = start();
      });

      it('returns a rejecting promise', async () => {
        return expect(promise).rejects.toEqual(error);
      });
    });

    describe('when the game starts successfully', () => {
      beforeEach(async () => {
        (engine.start as jest.Mock).mockReturnValue(Promise.resolve());

        promise = start();
        await promise;
      });

      it('returns a resolving promise', () => {
        return expect(promise).resolves.toBeUndefined();
      });

      it('creates an engine with the right dimensions', () => {
        expect(Engine).toHaveBeenCalledWith(expect.objectContaining({ width: 800, height: 600 }));
      });

      it('creates an engine that supresses extraneous logging', () => {
        expect(Engine).toHaveBeenCalledWith(
          expect.objectContaining({
            suppressMinimumBrowserFeatureDetection: true,
            suppressConsoleBootMessage: true,
          })
        );
      });

      it('creates an engine that has the right display mode', () => {
        expect(Engine).toHaveBeenCalledWith(
          expect.objectContaining({ displayMode: DisplayMode.FullScreen })
        );
      });

      it('creates an engine with the right background color', () => {
        expect(Engine).toHaveBeenCalledWith(
          expect.objectContaining({ backgroundColor: Color.Black })
        );
      });

      it('creates an engine with the map scene added', () => {
        expect(engine.add).toHaveBeenCalledWith('map', expect.any(Map));
      });

      it('creates an engine with the splash screen scene added', () => {
        expect(engine.add).toHaveBeenCalledWith('splash', expect.any(Splash));
      });

      it('starts the game with the loader', () => {
        expect(engine.start).toHaveBeenCalledWith(expect.any(Loader));
      });

      it('sets the starting scene to be the splash screen', () => {
        expect(engine.goToScene).toHaveBeenCalledWith('splash');
      });
    });
  });
});
