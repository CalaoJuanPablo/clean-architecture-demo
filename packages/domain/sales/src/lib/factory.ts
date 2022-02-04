import { SaleDate } from './SaleDate';
import { SaleId } from './SaleId';
import { Sale } from '../lib/Sale';
import { ISaleJSON } from './interfaces';
import { CustomerEntityFactory } from '@clean-architecture-demo/domain-customers';
import { EmployeeEntityFactory } from '@clean-architecture-demo/domain-employees';
import { ProductEntityFactory } from '@clean-architecture-demo/domain-products';

export class SaleEntityFactory {
  static sale = ({
    id,
    date,
    customer,
    employee,
    product,
  }: Omit<ISaleJSON, 'quantity' | 'totalPrice'>) =>
    new Sale({
      id: new SaleId(id),
      date: new SaleDate(date),
      customer: CustomerEntityFactory.customerEntity(customer),
      employee: EmployeeEntityFactory.employee(employee),
      product: ProductEntityFactory.product(product),
    });
}
