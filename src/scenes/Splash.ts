import { Color, Engine, Label, Scene, TextAlign, Vector } from 'excalibur';
import { ILabelArgs } from 'excalibur/dist/Label';

const baseLabelOptions: ILabelArgs = {
  fontFamily: 'Sigmar One',
  textAlign: TextAlign.Center,
};

export default class Splash extends Scene {
  public onInitialize(engine: Engine) {
    const gameName = this.createGameName();
    const pressKey = this.createPressAnyKeyToContinue();
    const credit = this.createCredit();

    gameName.pos = new Vector(engine.halfDrawWidth, engine.halfDrawHeight);
    pressKey.pos = new Vector(engine.halfDrawWidth, gameName.getBottom());
    credit.pos = new Vector(engine.halfDrawWidth, engine.drawHeight - 70);

    this.add(gameName);
    this.add(pressKey);
    this.add(credit);
  }

  private createGameName = (): Label => {
    return new Label({
      ...baseLabelOptions,
      text: 'Invaded',
      fontSize: 150,
      color: Color.Red,
    });
  };

  private createPressAnyKeyToContinue = (): Label => {
    return new Label({
      ...baseLabelOptions,
      text: '(press any key to continue)',
      fontSize: 35,
      color: Color.White,
    });
  };

  private createCredit = (): Label => {
    return new Label({
      ...baseLabelOptions,
      text: '© Ben Lakey 2018',
      fontSize: 20,
      color: Color.Gray,
    });
  };
}
