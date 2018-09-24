import { Engine } from 'excalibur';

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

    it('initializes the correct actors', () => {
      expect(splash.actors).toMatchSnapshot();
    });
  });
});
