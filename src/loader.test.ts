import { Loader } from 'excalibur';

import { createLoader } from './loader';

describe('loader', () => {
  describe('createLoader', () => {
    let loader: Loader;

    beforeEach(() => {
      jest.spyOn(Loader.prototype, 'addResource');
      loader = createLoader();
    });

    it('creates a loader with the correct loading screen', () => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d') as CanvasRenderingContext2D;

      jest.spyOn(context, 'drawImage');

      loader.draw(context);

      expect(context.drawImage).not.toHaveBeenCalled();
    });

    it('adds the correct resources', () => {
      expect(Loader.prototype.addResource).not.toHaveBeenCalled();
    });
  });
});
