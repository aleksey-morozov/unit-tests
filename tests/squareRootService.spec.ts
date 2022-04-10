import assert from 'assert';

import { SquareRootService } from '@app/services/SquareRootService';

const squareRootService = new SquareRootService();

describe('SquareRootService', () => {
  it('Roots must be []', () => {
    const roots = squareRootService.solve(1, 0, 1);

    assert.deepStrictEqual(roots, []);
  });

  it('Roots must be equal [1, -1]', () => {
    const roots = squareRootService.solve(1, 0, -1);

    assert.deepStrictEqual(roots, [1, -1]);
  });

  it('Value "a" can`t be 0', () => {
    const call = () => squareRootService.solve(-Number.EPSILON, 0, -1);

    assert.throws(call, 'Must throw error');
  });

  it('Value "a" must be number', () => {
    // @ts-ignore
    const callString = () => squareRootService.solve('string', 0, -1);
    assert.throws(callString, 'Can`t be string');

    // @ts-ignore
    const callNaN = () => squareRootService.solve(NaN, 0, -1);
    assert.throws(callNaN, 'Can`t be NaN');

    // @ts-ignore
    const callInfinity = () => squareRootService.solve(Infinity, 0, -1);
    assert.throws(callInfinity, 'Can`t be Infinity');
  });

  it('Value "b" must be number', () => {
    // @ts-ignore
    const callString = () => squareRootService.solve(0, 'string', -1);
    assert.throws(callString, 'Can`t be string');

    // @ts-ignore
    const callNaN = () => squareRootService.solve(0, NaN, -1);
    assert.throws(callNaN, 'Can`t be NaN');

    // @ts-ignore
    const callInfinity = () => squareRootService.solve(0, Infinity, -1);
    assert.throws(callInfinity, 'Can`t be Infinity');
  });

  it('Value "c" must be number', () => {
    // @ts-ignore
    const call = () => squareRootService.solve(0, 0, 'string');

    assert.throws(call, 'Must be number');
  });
});
