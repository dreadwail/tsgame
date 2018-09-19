import { Engine, Logger } from 'excalibur';

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
    add: jest.fn(),
    start: jest.fn(() => ({
      then: jest.fn(),
    })),
    goToScene: jest.fn(),
  };
  return (mock as any) as Engine;
};
