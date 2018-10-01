import { Actor, Engine, Label } from 'excalibur';

import { createMockEngine } from '../mocking/excalibur';

import Splash from './Splash';

describe('Splash', () => {
  let engine: Engine;
  let splash: Splash;

  beforeEach(() => {
    engine = createMockEngine();
  });

  describe('onInitialize', () => {
    beforeEach(() => {
      splash = new Splash(engine);
      splash.onInitialize(engine);
    });

    it('initializes the correct labels', () => {
      const labels = splash.actors
        .filter((actor: Actor): actor is Label => actor instanceof Label)
        .map(label => label.text);

      expect(labels).toEqual(['Invaded', '(press any key to continue)', '© Ben Lakey 2018']);
    });
  });
});
