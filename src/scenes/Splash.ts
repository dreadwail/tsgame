import { BaseAlign, Color, Engine, Label, Scene, TextAlign, Vector } from 'excalibur';
import { ILabelArgs } from 'excalibur/dist/Label';

const baseLabelOptions: ILabelArgs = {
  fontFamily: 'Sigmar One',
  textAlign: TextAlign.Center,
  baseAlign: BaseAlign.Middle,
};

export default class Splash extends Scene {
  public static sceneName = 'splash';

  private gameName: Label;
  private pressKey: Label;
  private credit: Label;

  constructor(engine: Engine) {
    super(engine);

    this.gameName = this.createLabel({
      text: 'Invaded',
      fontSize: 150,
      color: Color.Red,
    });

    this.pressKey = this.createLabel({
      text: '(press any key to continue)',
      fontSize: 35,
      color: Color.White,
    });

    this.credit = this.createLabel({
      text: '© Ben Lakey 2018',
      fontSize: 20,
      color: Color.Gray,
    });
  }

  public onInitialize(engine: Engine) {
    this.add(this.gameName);
    this.add(this.pressKey);
    this.add(this.credit);

    engine.input.keyboard.on('press', () => {
      // emit an event to change the scene. code elsewhere will
      // be responsible for listening and performing the actual scene change.
    });
  }

  public onActivate() {
    this.flowLabels();
  }

  private createLabel = (overrides: Partial<ILabelArgs>): Label => {
    const label = new Label({ ...baseLabelOptions, ...overrides });
    label.setHeight(label.fontSize);
    return label;
  };

  private flowLabels() {
    const { drawHeight, halfDrawWidth, halfDrawHeight } = this.engine;

    this.gameName.pos = new Vector(halfDrawWidth, halfDrawHeight);
    this.pressKey.pos = new Vector(halfDrawWidth, this.gameName.getBottom());
    this.credit.pos = new Vector(halfDrawWidth, drawHeight - this.credit.fontSize);
  }
}
