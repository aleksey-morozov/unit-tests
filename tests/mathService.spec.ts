import assert from 'assert';

import MathService from '@app/services/mathService';

const mathService = new MathService();

describe('MathService', () => {
  it('Check sum', () => {
    const sum = mathService.sum(1, 2);
    assert.strictEqual(sum, 3, 'Sum must be equal 3');
  });
});
