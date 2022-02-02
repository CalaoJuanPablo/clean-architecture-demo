import { Sale, SaleId, SaleDate } from '../lib';
import {
  Customer,
  CustomerId,
  CustomerName,
} from '@clean-architecture-demo/domain/customer';
import {
  Employee,
  EmployeeId,
  EmployeeName,
} from '@clean-architecture-demo/domain/employee';
import {
  Product,
  ProductId,
  ProductName,
  ProductPrice,
} from '@clean-architecture-demo/domain/product';

describe('Sale', () => {
  const customer = new Customer({
    id: CustomerId.random(),
    name: new CustomerName('John Doe'),
  });
  const employee = new Employee({
    id: EmployeeId.random(),
    name: new EmployeeName('Peter Green'),
  });
  const product = new Product({
    id: ProductId.random(),
    name: new ProductName('Pasta'),
    price: new ProductPrice(30),
  });

  const sale = new Sale({
    id: SaleId.random(),
    date: new SaleDate(new Date('2020-03-11')),
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
