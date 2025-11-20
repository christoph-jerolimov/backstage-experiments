// TODO: switch to zod?
// TODO: allow objects as values?
export type MatrixValue = string | number | boolean;

export type Matrix = Record<string, MatrixValue[]>;

export type Combination = Record<string, MatrixValue>;

