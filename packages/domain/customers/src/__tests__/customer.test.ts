import { CustomerEntityFactory } from '../lib/factory';
import { Customer } from '../lib/Customer';
import { CustomerId } from '../lib/CustomerId';

describe('Customer', () => {
  const customerId = CustomerId.random().toString();
  const customerName = 'John Doe';
  const customerEntityFactory = new CustomerEntityFactory();
  const customer = customerEntityFactory.createCustomer({
    id: customerId,
    name: customerName,
  });

  test('created customer is an instance of Customer', () => {
    expect(customer).toBeInstanceOf(Customer);
  });

  test('created customer id is customerId', () => {
    expect(customer.id.value).toBe(customerId);
  });

  test('created customer name is customerName', () => {
    expect(customer.name.value).toBe(customerName);
  });
});
