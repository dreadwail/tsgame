import { Engine, Scene } from 'excalibur';

import { Player } from '../actors';

export default class Map extends Scene {
  private player?: Player;

  public onInitialize(engine: Engine) {
    this.initializePlayer(engine);
  }

  private initializePlayer(engine: Engine) {
    if (this.player) {
      this.remove(this.player);
    }
    this.player = new Player(engine);
    this.add(this.player);
  }
}
