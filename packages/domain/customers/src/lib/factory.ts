import { Customer } from './Customer';
import { CustomerId } from './CustomerId';
import { CustomerName } from './CustomerName';
import { ICustomerEntityFactory } from './interfaces';
import { ICustomerJSON } from './interfaces/ICustomer';

export class CustomerEntityFactory implements ICustomerEntityFactory {
  createCustomer({ id, name }: ICustomerJSON) {
    return new Customer({
      id: new CustomerId(id),
      name: new CustomerName(name),
    });
  }
}
