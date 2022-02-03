import { SaleDate } from './SaleDate';
import { SaleId } from './SaleId';
import { Sale } from '../lib/Sale';
import { ISaleJSON } from './interfaces';
import { CustomerEntityFactory } from '@clean-architecture-demo/domain/customer';
import { EmployeeEntityFactory } from '@clean-architecture-demo/domain/employee';
import { ProductEntityFactory } from '@clean-architecture-demo/domain/product';

export class SaleEntityFactory {
  static sale = ({ id, date, customer, employee, product }: ISaleJSON) =>
    new Sale({
      id: new SaleId(id),
      date: new SaleDate(date),
      customer: CustomerEntityFactory.customerEntity(customer),
      employee: EmployeeEntityFactory.employee(employee),
      product: ProductEntityFactory.product(product),
    });
}
