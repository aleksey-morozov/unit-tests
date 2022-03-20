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
    const call = () => squareRootService.solve(0, 0, -1);

    assert.throws(call, 'Must throw error');
  });

  it('Value "a" must be number', () => {
    // @ts-ignore
    const call = () => squareRootService.solve('string', 0, -1);

    assert.throws(call, 'Must be number');
  });

  it('Value "b" must be number', () => {
    // @ts-ignore
    const call = () => squareRootService.solve(0, 'string', -1);

    assert.throws(call, 'Must be number');
  });

  it('Value "c" must be number', () => {
    // @ts-ignore
    const call = () => squareRootService.solve(0, 0, 'string');

    assert.throws(call, 'Must be number');
  });
});
