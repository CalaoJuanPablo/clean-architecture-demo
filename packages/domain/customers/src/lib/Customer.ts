import { IEntity } from '@clean-architecture-demo/domain/common';
import { CustomerId } from './CustomerId';
import { CustomerName } from './CustomerName';
import { ICustomer, ICustomerJSON } from './interfaces';

export class Customer implements IEntity<ICustomerJSON> {
  readonly id: CustomerId;
  readonly name: CustomerName;

  constructor({ id, name }: ICustomer) {
    this.id = id;
    this.name = name;
  }

  toJSON(): ICustomerJSON {
    return {
      id: this.id.toString(),
      name: this.name.toString(),
    };
  }
}
