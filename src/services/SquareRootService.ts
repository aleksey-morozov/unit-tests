export class SquareRootService {
  public solve(aValue: number, bValue: number, cValue: number) {
    if (
      !SquareRootService.isNumber(aValue) ||
      !SquareRootService.isNumber(bValue) ||
      !SquareRootService.isNumber(cValue)
    ) {
      throw new Error('Arguments must be number');
    }

    if (aValue < Number.EPSILON) {
      throw new Error('aValue is 0');
    }

    const discriminant = bValue * bValue - 4 * aValue * cValue;
    if (discriminant < -Number.EPSILON) {
      return [];
    }

    if (discriminant > Number.EPSILON) {
      const x1 = (-bValue + Math.sqrt(discriminant)) / (2 * aValue);
      const x2 = (-bValue - Math.sqrt(discriminant)) / (2 * aValue);

      return [x1, x2];
    }

    return [-bValue / (2 * aValue)];
  }

  private static isNumber(value: any) {
    return !isNaN(value) && Number.isFinite(value);
  }
}
