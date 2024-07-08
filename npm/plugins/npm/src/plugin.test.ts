import { npmPlugin } from './plugin';

describe('npm', () => {
  it('should export plugin', () => {
    expect(npmPlugin).toBeDefined();
  });
});
