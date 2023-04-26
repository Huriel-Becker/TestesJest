import { Persistancy } from './persistancy';

describe('Persistancy', () => {
  afterEach(() => jest.clearAllMocks);

  it('should return undefined', () => {
    // System under teste
    const sut = new Persistancy();
    expect(sut.saveOrder()).toBeUndefined();
  });

  it('should call console.log once', () => {
    const sut = new Persistancy();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call console.log with "Pedido salvo com sucesso..."', () => {
    const sut = new Persistancy();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso...');
  });
});
