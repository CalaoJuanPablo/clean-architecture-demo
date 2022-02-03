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
