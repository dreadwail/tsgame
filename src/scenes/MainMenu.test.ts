import { Actor, Engine, Label } from 'excalibur';

import { createMockEngine } from '../mocking/excalibur';

import MainMenu from './MainMenu';

describe('MainMenu', () => {
  let engine: Engine;
  let mainMenu: MainMenu;

  beforeEach(() => {
    engine = createMockEngine();
    mainMenu = new MainMenu(engine);
    engine.add(MainMenu.sceneName, mainMenu);
  });

  describe('onInitialize', () => {
    beforeEach(() => {
      mainMenu.onInitialize(engine);
    });

    it('initializes the correct labels', () => {
      const labels = mainMenu.actors
        .filter((actor: Actor): actor is Label => actor instanceof Label)
        .map(label => label.text);

      expect(labels).toEqual(['New Game', 'Continue', 'Exit']);
    });
  });

  describe('onActivate', () => {
    beforeEach(() => {
      mainMenu.onInitialize(engine);
      mainMenu.onActivate();
    });

    it('correctly positions the menu entries', () => {
      const labels = mainMenu.actors
        .filter((actor: Actor): actor is Label => actor instanceof Label)
        .map(label => label.pos);

      expect(labels).toMatchSnapshot();
    });
  });
});
