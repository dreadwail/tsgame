import { Actor, CollisionType, Color, Engine } from 'excalibur';

const width = 50;
const height = 50;

export const createPlayer = (engine: Engine): Actor => {
  const x = engine.drawWidth / 2;
  const y = engine.drawHeight / 2;

  const player = new Actor(x, y, width, height);

  player.color = Color.Green;
  player.collisionType = CollisionType.Fixed;

  return player;
};
