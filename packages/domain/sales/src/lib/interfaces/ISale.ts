import { SaleId } from '../SaleId';
import { SaleDate } from '../SaleDate';
import {
  Customer,
  ICustomerJSON,
} from '@clean-architecture-demo/domain-customers';
import {
  Employee,
  IEmployeeJSON,
} from '@clean-architecture-demo/domain-employees';
import {
  IProductJSON,
  Product,
} from '@clean-architecture-demo/domain-products';
import { Sale } from '../Sale';

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
  quantity: number;
  totalPrice: number;
}

export interface ISaleRepository {
  getAll(): Promise<Array<Sale>>;
  get(id: SaleId): Promise<Sale>;
  add(sale: Sale): Promise<void>;
}

export interface ISaleEntityFactory {
  createSale({
    id,
    date,
    customer,
    employee,
    product,
  }: Omit<ISaleJSON, 'quantity' | 'totalPrice'>): Sale;
}
