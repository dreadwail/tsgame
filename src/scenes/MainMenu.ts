import { BaseAlign, Color, Engine, Label, Scene, TextAlign, Vector } from 'excalibur';
import { ILabelArgs } from 'excalibur/dist/Label';

const menuEntryDefaults: ILabelArgs = {
  fontFamily: 'Sigmar One',
  textAlign: TextAlign.Center,
  fontSize: 50,
  color: Color.White,
  baseAlign: BaseAlign.Middle,
};

export default class MainMenu extends Scene {
  public static sceneName = 'mainMenu';

  private menuEntries: Label[];

  constructor(engine: Engine) {
    super(engine);
    this.menuEntries = [
      this.createMenuEntry('New Game'),
      this.createMenuEntry('Continue'),
      this.createMenuEntry('Exit'),
    ];
  }

  public onInitialize(_engine: Engine) {
    this.menuEntries.forEach(entry => {
      this.add(entry);
    });
  }

  public onActivate() {
    this.flowMenuEntries();
  }

  private createMenuEntry = (text: string) => {
    const label = new Label({ ...menuEntryDefaults, text });
    label.setHeight(label.fontSize);
    return label;
  };

  private flowMenuEntries = () => {
    const { halfDrawWidth, halfDrawHeight } = this.engine;
    let drawY = halfDrawHeight;
    this.menuEntries.forEach(entry => {
      entry.pos = new Vector(halfDrawWidth, drawY);
      drawY += entry.fontSize;
    });
  };
}
