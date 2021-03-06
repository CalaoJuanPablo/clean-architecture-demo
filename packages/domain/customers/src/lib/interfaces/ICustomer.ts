import { Customer } from '../Customer';
import { CustomerId } from '../CustomerId';
import { CustomerName } from '../CustomerName';

export interface ICustomer {
  id: CustomerId;
  name: CustomerName;
}

export interface ICustomerJSON {
  id: string;
  name: string;
}

export interface ICustomerRepository {
  getAll(): Promise<Array<Customer>>;
  get(id: string): Promise<Customer>;
}

export interface ICustomerEntityFactory {
  createCustomer({ id, name }: ICustomerJSON): Customer;
}
