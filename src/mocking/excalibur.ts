import { Engine, Logger, Scene } from 'excalibur';

export const createMockLogger = (): Logger => {
  const mock = {
    error: jest.fn(),
    warn: jest.fn(),
  };
  return (mock as any) as Logger;
};

export const createMockEngine = (): Engine => {
  const mock = {
    drawWidth: 800,
    drawHeight: 600,
    halfDrawWidth: 400,
    halfDrawHeight: 300,
    add: jest.fn((...args: any[]) => {
      if (args[1] instanceof Scene) {
        const scene = args[1];
        scene.engine = (mock as any) as Engine;
      }
    }),
    start: jest.fn(() => ({
      then: jest.fn(),
    })),
    goToScene: jest.fn(),
  };
  return (mock as any) as Engine;
};
