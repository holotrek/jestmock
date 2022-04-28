import * as self from './factorial';

export const multiply = (a: number, b: number): number => {
  return a * b;
};

export const factorial = (n: number): number => {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = self.multiply(result, i);
  }
  return result;
};
