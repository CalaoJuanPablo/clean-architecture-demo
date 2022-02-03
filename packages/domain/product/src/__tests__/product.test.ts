import { ProductEntityFactory } from '../lib/factory';
import { Product } from '../lib/Product';
import { ProductId } from '../lib/ProductId';

describe('Product', () => {
  const productId = ProductId.random().toString();
  const productName = 'Pasta';
  const productPrice = 30;
  const product = ProductEntityFactory.product({
    id: productId,
    name: productName,
    price: productPrice,
  });

  test('product is an instance of Product', () => {
    expect(product).toBeInstanceOf(Product);
  });

  test('product id is equals to productId', () => {
    expect(product.id.value).toBe(productId);
  });

  test('product name is equals to productName', () => {
    expect(product.name.value).toBe(productName);
  });

  test('product price is equals to productPrice', () => {
    expect(product.price.value).toBe(productPrice);
  });
});
