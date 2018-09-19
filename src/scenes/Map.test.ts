jest.mock('../actors/Player');
jest.mock('excalibur');

import { Engine } from 'excalibur';

import Player from '../actors/Player';
import { createMockEngine } from '../mocking/excalibur';

import Map from './Map';

describe('Map', () => {
  let engine: Engine;
  let map: Map;

  beforeEach(() => {
    engine = createMockEngine();
    ((Player as any) as jest.Mock).mockClear();
  });

  describe('onInitialize', () => {
    describe('when the player has not been initialized', () => {
      beforeEach(() => {
        map = new Map(engine);
        map.onInitialize(engine);

        jest.spyOn(map, 'add');
      });

      it('initializes the player', () => {
        expect(Player).toHaveBeenCalledWith(engine);
      });

      it('only initializes the player once', () => {
        expect(Player).toHaveBeenCalledTimes(1);
      });

      it('adds the player to the scene', () => {
        expect(map.add).toHaveBeenCalledWith(expect.any(Player));
      });
    });

    describe('when the player has already been initialized', () => {
      let oldPlayer: Player;

      beforeEach(() => {
        map = new Map(engine);

        jest.spyOn(map, 'add');
        jest.spyOn(map, 'remove');

        map.onInitialize(engine);

        oldPlayer = (map.add as jest.Mock).mock.calls[0][0];
        ((Player as any) as jest.Mock).mockClear();

        map.onInitialize(engine);
      });

      it('initializes a new player', () => {
        expect(Player).toHaveBeenCalledWith(engine);
      });

      it('only initializes the player once', () => {
        expect(Player).toHaveBeenCalledTimes(1);
      });

      it('removes the old player from the scene', () => {
        expect(map.remove).toHaveBeenCalledWith(oldPlayer);
      });

      it('adds the new player to the scene', () => {
        expect(map.add).toHaveBeenCalledWith(expect.any(Player));
      });
    });
  });
});
