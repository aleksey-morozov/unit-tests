export class SquareRootService {
  public solve(aValue: number, bValue: number, cValue: number) {
    if (typeof aValue !== 'number' || typeof bValue !== 'number' || typeof cValue !== 'number') {
      throw new Error('Arguments must be number');
    }

    if (aValue === 0) {
      throw new Error('aValue is 0');
    }

    const discriminant = bValue * bValue - 4 * aValue * cValue;
    if (discriminant < 0) {
      return [];
    }

    if (discriminant > 0) {
      const x1 = (-bValue + Math.sqrt(discriminant)) / (2 * aValue);
      const x2 = (-bValue - Math.sqrt(discriminant)) / (2 * aValue);

      return [x1, x2];
    }

    return [(-bValue + Math.sqrt(discriminant)) / (2 * aValue)];
  }
}
