jest.mock('./loader');
jest.mock('./player');
jest.mock('excalibur');

import { Actor, Color, DisplayMode, Engine, Loader } from 'excalibur';

import { start } from './engine';
import { createLoader } from './loader';
import { createPlayer } from './player';

describe('engine', () => {
  describe('start', () => {
    let player: Actor;
    let loader: Loader;

    beforeEach(async () => {
      player = new Actor({ id: 42 });
      (createPlayer as jest.Mock).mockReturnValue(player);

      loader = new Loader();
      (createLoader as jest.Mock).mockReturnValue(loader);

      await start();
    });

    it('creates an engine with the right dimensions', () => {
      expect(Engine).toHaveBeenCalledWith(
        expect.objectContaining({
          width: 800,
          height: 600,
        })
      );
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
        expect.objectContaining({
          displayMode: DisplayMode.FullScreen,
        })
      );
    });

    it('creates an engine with the right background color', () => {
      expect(Engine).toHaveBeenCalledWith(
        expect.objectContaining({
          backgroundColor: Color.Black,
        })
      );
    });

    it('creates an engine with the player added', () => {
      expect(Engine.prototype.add).toHaveBeenCalledWith(player);
    });

    it('starts the game with the loader', () => {
      expect(Engine.prototype.start).toHaveBeenCalledWith(loader);
    });
  });
});
