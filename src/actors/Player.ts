import { Actor, CollisionType, Color, Engine } from 'excalibur';

const width = 50;
const height = 50;

export default class Player extends Actor {
  constructor(engine: Engine) {
    // https://github.com/gotwarlost/istanbul/issues/690
    super(engine.drawWidth / 2, engine.drawHeight / 2, width, height) /* istanbul ignore next */;

    this.color = Color.Green;
    this.collisionType = CollisionType.Fixed;
  }
}
