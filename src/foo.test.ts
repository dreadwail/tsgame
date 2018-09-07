import { foo } from './foo';

describe('game', () => {
  it('blends', () => {
    expect(foo).toBe('hi');
  });
});
