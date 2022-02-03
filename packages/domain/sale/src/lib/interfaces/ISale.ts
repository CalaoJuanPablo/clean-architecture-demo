import { SaleId } from '../SaleId';
import { SaleDate } from '../SaleDate';
import {
  Customer,
  ICustomerJSON,
} from '@clean-architecture-demo/domain/customer';
import {
  Employee,
  IEmployeeJSON,
} from '@clean-architecture-demo/domain/employee';
import { IProductJSON, Product } from '@clean-architecture-demo/domain/product';

export interface ISale {
  id: SaleId;
  date: SaleDate;
  customer: Customer;
  employee: Employee;
  product: Product;
}

export interface ISaleJSON {
  id: string;
  date: Date;
  customer: ICustomerJSON;
  employee: IEmployeeJSON;
  product: IProductJSON;
  quantity?: number;
  totalPrice?: number;
}
