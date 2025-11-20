import { getCombinations } from './getCombinations';

describe('getCombinations', () => {
  it('should create one combination for an empty matrix', () => {
    const matrix = {};
    const combinations = getCombinations(matrix);
    expect(combinations).toEqual([{}]);
  });

  it('should create 2 combination for each value in param1', () => {
    const matrix = {
      param1: ['value1', 'value2'],
    };
    const combinations = getCombinations(matrix);
    expect(combinations).toEqual([
      { param1: 'value1' },
      { param1: 'value2' },
    ]);
  });

  it('should create 6 combination for a 2 x 3 matrix', () => {
    const matrix = {
      param1: ['value1', 'value2'],
      param2: [1, 2, 3],
    };
    const combinations = getCombinations(matrix);
    expect(combinations).toEqual([
      { param1: 'value1', param2: 1 },
      { param1: 'value1', param2: 2 },
      { param1: 'value1', param2: 3 },
      { param1: 'value2', param2: 1 },
      { param1: 'value2', param2: 2 },
      { param1: 'value2', param2: 3 },
    ]);
  });

  it('should create 12 combination for a 2 x 3 x 2 matrix', () => {
    const matrix = {
      param1: ['value1', 'value2'],
      param2: [1, 2, 3],
      param3: ['a', 'b'],
    };
    const combinations = getCombinations(matrix);
    expect(combinations).toEqual([
      { param1: 'value1', param2: 1, param3: 'a' },
      { param1: 'value1', param2: 1, param3: 'b' },
      { param1: 'value1', param2: 2, param3: 'a' },
      { param1: 'value1', param2: 2, param3: 'b' },
      { param1: 'value1', param2: 3, param3: 'a' },
      { param1: 'value1', param2: 3, param3: 'b' },
      { param1: 'value2', param2: 1, param3: 'a' },
      { param1: 'value2', param2: 1, param3: 'b' },
      { param1: 'value2', param2: 2, param3: 'a' },
      { param1: 'value2', param2: 2, param3: 'b' },
      { param1: 'value2', param2: 3, param3: 'a' },
      { param1: 'value2', param2: 3, param3: 'b' },
    ]);
  });

  it('should create 24 combination for a 2 x 3 x 2 x 2 matrix', () => {
    const matrix = {
      param1: ['value1', 'value2'],
      param2: [1, 2, 3],
      param3: ['a', 'b'],
      param4: [true, false],
    };
    const combinations = getCombinations(matrix);
    expect(combinations).toEqual([
      { param1: 'value1', param2: 1, param3: 'a', param4: true },
      { param1: 'value1', param2: 1, param3: 'a', param4: false },
      { param1: 'value1', param2: 1, param3: 'b', param4: true },
      { param1: 'value1', param2: 1, param3: 'b', param4: false },
      { param1: 'value1', param2: 2, param3: 'a', param4: true },
      { param1: 'value1', param2: 2, param3: 'a', param4: false },
      { param1: 'value1', param2: 2, param3: 'b', param4: true },
      { param1: 'value1', param2: 2, param3: 'b', param4: false },
      { param1: 'value1', param2: 3, param3: 'a', param4: true },
      { param1: 'value1', param2: 3, param3: 'a', param4: false },
      { param1: 'value1', param2: 3, param3: 'b', param4: true },
      { param1: 'value1', param2: 3, param3: 'b', param4: false },
      { param1: 'value2', param2: 1, param3: 'a', param4: true },
      { param1: 'value2', param2: 1, param3: 'a', param4: false },
      { param1: 'value2', param2: 1, param3: 'b', param4: true },
      { param1: 'value2', param2: 1, param3: 'b', param4: false },
      { param1: 'value2', param2: 2, param3: 'a', param4: true },
      { param1: 'value2', param2: 2, param3: 'a', param4: false },
      { param1: 'value2', param2: 2, param3: 'b', param4: true },
      { param1: 'value2', param2: 2, param3: 'b', param4: false },
      { param1: 'value2', param2: 3, param3: 'a', param4: true },
      { param1: 'value2', param2: 3, param3: 'a', param4: false },
      { param1: 'value2', param2: 3, param3: 'b', param4: true },
      { param1: 'value2', param2: 3, param3: 'b', param4: false },
    ]);
  });
});
