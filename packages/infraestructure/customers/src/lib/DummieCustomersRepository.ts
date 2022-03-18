import {
  ICustomerRepository,
  CustomerEntityFactory,
} from '@clean-architecture-demo/domain-customers';
import { Uuid } from '@clean-architecture-demo/domain/common';

const customersList = [
  {
    id: Uuid.random.toString(),
    name: 'Juan Calao',
  },
  {
    id: Uuid.random.toString(),
    name: 'Pablo Perez',
  },
  {
    id: Uuid.random.toString(),
    name: 'Luis Diaz',
  },
];

interface IDummieCustomersRepository {
  customerEntityFactory: CustomerEntityFactory;
}

export class DummieCustomersRepository implements ICustomerRepository {
  private _customerEntityFactory: CustomerEntityFactory;

  constructor({ customerEntityFactory }: IDummieCustomersRepository) {
    this._customerEntityFactory = customerEntityFactory;
  }

  getAll() {
    const listOfCustomers = customersList.map(({ id, name }) =>
      this._customerEntityFactory.createCustomer({ id, name })
    );

    return Promise.resolve(listOfCustomers);
  }

  get(id: string) {
    const retrivedCustomer = customersList.find(
      (customer) => customer.id === id
    );

    if (!retrivedCustomer) return Promise.reject('Customer not found');

    return Promise.resolve(
      this._customerEntityFactory.createCustomer(retrivedCustomer)
    );
  }
}
