import { Logger, LogLevel } from 'excalibur';

import { configureLogger, getLogger } from './logger';

describe('logger', () => {
  describe('configureLogger', () => {
    beforeEach(() => {
      configureLogger();
    });

    it('returns the logger instance', () => {
      expect(getLogger()).toBe(Logger.getInstance());
    });

    describe('when no level is specified', () => {
      beforeEach(() => {
        configureLogger();
      });

      it('sets the log level to info', () => {
        expect(Logger.getInstance().defaultLevel).toEqual(LogLevel.Info);
      });
    });

    describe('when a level is specified', () => {
      beforeEach(() => {
        configureLogger(LogLevel.Debug);
      });

      it('sets the log level as specified', () => {
        expect(Logger.getInstance().defaultLevel).toEqual(LogLevel.Debug);
      });
    });
  });

  describe('getLogger', () => {
    it('returns the logger instance', () => {
      expect(getLogger()).toBe(Logger.getInstance());
    });
  });
});
