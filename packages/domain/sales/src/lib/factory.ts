import { SaleDate } from './SaleDate';
import { SaleId } from './SaleId';
import { Sale } from '../lib/Sale';
import { ISaleJSON, ISaleEntityFactory } from './interfaces';
import { CustomerEntityFactory } from '@clean-architecture-demo/domain-customers';
import { EmployeeEntityFactory } from '@clean-architecture-demo/domain-employees';
import { ProductEntityFactory } from '@clean-architecture-demo/domain-products';

export class SaleEntityFactory implements ISaleEntityFactory {
  createSale({
    id,
    date,
    customer,
    employee,
    product,
  }: Omit<ISaleJSON, 'quantity' | 'totalPrice'>): Sale {
    const customerEntityFactory = new CustomerEntityFactory();
    const employeeEntityFactory = new EmployeeEntityFactory();
    const productEntityFactory = new ProductEntityFactory();

    return new Sale({
      id: new SaleId(id),
      date: new SaleDate(date),
      customer: customerEntityFactory.createCustomer(customer),
      employee: employeeEntityFactory.createEmployee(employee),
      product: productEntityFactory.createProduct(product),
    });
  }
}
