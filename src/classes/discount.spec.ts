import {
  Discount,
  FiftyPercentDiscount,
  NoDiscount,
  TenPercentDiscount,
} from './discount';

const createSut = (className: new () => Discount): Discount => {
  return new className();
};

describe('Discount', () => {
  afterEach(() => jest.clearAllMocks);

  it('should have no discount', () => {
    // System under teste
    const sut = createSut(NoDiscount);
    expect(sut.calculate(10.99)).toBe(10.99);
  });

  it('should apply 50% discount', () => {
    // System under teste
    const sut = createSut(FiftyPercentDiscount);
    expect(sut.calculate(150.5)).toBe(75.25);
  });

  it('should apply 10% discount', () => {
    // System under teste
    const sut = createSut(TenPercentDiscount);
    expect(sut.calculate(10)).toBeCloseTo(9);
  });
});
