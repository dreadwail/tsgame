import { CollisionType, Color, Engine } from 'excalibur';

import Player from './Player';

describe('Player', () => {
  let player: Player;

  beforeEach(() => {
    const engine = { drawWidth: 800, drawHeight: 600 };
    player = new Player(engine as Engine);
  });

  it('creates a player actor at the specified coordinates', () => {
    expect([player.x, player.y]).toEqual([400, 300]);
  });

  it('creates a player actor with the right color', () => {
    expect(player.color).toEqual(Color.Green);
  });

  it('creates a player actor with the right collision detection', () => {
    expect(player.collisionType).toEqual(CollisionType.Fixed);
  });
});
