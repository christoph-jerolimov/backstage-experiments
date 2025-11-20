import { Combination, Matrix } from "../types";

export function getCombinations(matrix: Matrix): Array<Combination> {
  const keys = Object.keys(matrix);
  const values = Object.values(matrix);
  
  const combinations: Array<Combination> = [];
  
  function cartesianProduct(index: number, current: Combination) {
    if (index === keys.length) {
      combinations.push({ ...current });
      return;
    }
    
    for (const value of values[index]) {
      current[keys[index]] = value;
      cartesianProduct(index + 1, current);
    }
  }
  
  cartesianProduct(0, {});
  return combinations;
}
