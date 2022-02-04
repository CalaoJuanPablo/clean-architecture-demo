import { Customer } from './Customer';
import { CustomerId } from './CustomerId';
import { CustomerName } from './CustomerName';
import { ICustomerJSON } from './interfaces/ICustomer';

export class CustomerEntityFactory {
  static customerEntity = ({ id, name }: ICustomerJSON) =>
    new Customer({
      id: new CustomerId(id),
      name: new CustomerName(name),
    });
}
