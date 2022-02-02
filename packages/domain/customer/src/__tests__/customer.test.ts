import { Customer } from '../lib/Customer';
import { CustomerId } from '../lib/CustomerId';
import { CustomerName } from '../lib/CustomerName';

describe('Customer', () => {
  const customerId = CustomerId.random();
  const customerName = new CustomerName('John Doe');
  const customer = new Customer({ id: customerId, name: customerName });

  test('created customer is an instance of Customer', () => {
    expect(customer).toBeInstanceOf(Customer);
  });

  test('created customer id is customerId', () => {
    expect(customer.id.value).toBe(customerId.value);
  });

  test('created customer name is customerName', () => {
    expect(customer.name.value).toBe(customerName.value);
  });
});
