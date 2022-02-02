import { IEntity } from '@clean-architecture-demo/domain/common';
import { CustomerId } from './CustomerId';
import { CustomerName } from './CustomerName';

interface ICustomer {
  id: CustomerId;
  name: CustomerName;
}

export class Customer implements IEntity {
  readonly id: CustomerId;
  readonly name: CustomerName;

  constructor({ id, name }: ICustomer) {
    this.id = id;
    this.name = name;
  }
}
