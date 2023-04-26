import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

describe('IndividualCustomer', () => {
  afterEach(() => jest.clearAllMocks);

  it('should have firstName, lastName and cpf', () => {
    // System under teste
    const sut = createIndividualCustomer('Luiz', 'Otavio', '111.111.111-11');
    expect(sut).toHaveProperty('firstName', 'Luiz');
    expect(sut).toHaveProperty('lastName', 'Otavio');
    expect(sut).toHaveProperty('cpf', '111.111.111-11');
  });

  it('should have methods to getName and getIDN for individual customers', () => {
    // System under teste
    const sut = createIndividualCustomer('Luiz', 'Otavio', '111.111.111-11');
    expect(sut.getName()).toBe('Luiz Otavio');
    expect(sut.getIDn()).toBe('111.111.111-11');
  });
});

describe('EnterpriseCustomer', () => {
  afterEach(() => jest.clearAllMocks);

  it('should have name and cnpj', () => {
    // System under teste
    const sut = createEnterpriseCustomer('Udemy', '111.111.111-11');
    expect(sut).toHaveProperty('name', 'Udemy');
    expect(sut).toHaveProperty('cnpj', '111.111.111-11');
  });

  it('should have methods to getName and getIDN for enterprise customer', () => {
    // System under teste
    const sut = createEnterpriseCustomer('Udemy', '111.111.111-11');
    expect(sut.getName()).toBe('Udemy');
    expect(sut.getIDn()).toBe('111.111.111-11');
  });
});
