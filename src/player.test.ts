import { Actor, CollisionType, Color, Engine } from 'excalibur';

import { createPlayer } from './player';

describe('player', () => {
  describe('createPlayer', () => {
    let player: Actor;

    beforeEach(() => {
      const engine = { drawWidth: 800, drawHeight: 600 };
      player = createPlayer(engine as Engine);
    });

    it('creates a player actor at the correct coordinates', () => {
      expect([player.x, player.y]).toEqual([400, 300]);
    });

    it('creates a player actor with the right color', () => {
      expect(player.color).toEqual(Color.Green);
    });

    it('creates a player actor with the right collision detection', () => {
      expect(player.collisionType).toEqual(CollisionType.Fixed);
    });
  });
});
