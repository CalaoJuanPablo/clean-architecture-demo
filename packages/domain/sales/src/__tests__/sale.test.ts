import { SaleId } from '../lib/SaleId';
import { SaleEntityFactory } from '../lib/factory';
import { Uuid } from '@clean-architecture-demo/domain/common';
import { Sale } from '../lib/Sale';

describe('Sale', () => {
  const customer = {
    id: Uuid.random().toString(),
    name: 'John Doe',
  };
  const employee = {
    id: Uuid.random().toString(),
    name: 'Peter Green',
  };
  const product = {
    id: Uuid.random().toString(),
    name: 'Pasta',
    price: 30,
  };

  const saleEntityFactory = new SaleEntityFactory();
  const sale = saleEntityFactory.createSale({
    id: SaleId.random().toString(),
    date: new Date('2020-03-11'),
    customer,
    employee,
    product,
  });

  test('sale is an instance of Sale', () => {
    expect(sale).toBeInstanceOf(Sale);
  });

  test('initial quantity equals to 0', () => {
    expect(sale.getQuantity().toNumber()).toBe(0);
  });

  test('initial total price equals to 0', () => {
    expect(sale.getTotalPrice().toNumber()).toBe(0);
  });

  test('update quantity', () => {
    sale.updateQuantity(2);

    expect(sale.getQuantity().toNumber()).toBe(2);
    expect(sale.getTotalPrice().toNumber()).toBe(60);
  });
});
