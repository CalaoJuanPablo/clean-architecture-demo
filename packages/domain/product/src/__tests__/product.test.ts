import { Product } from '@clean-architecture-demo/domain/product';
import { ProductPrice } from './../lib/ProductPrice';
import { ProductName } from './../lib/ProductName';
import { ProductId } from './../lib/ProductId';

describe('Product', () => {
  const productId = ProductId.random();
  const productName = new ProductName('Pasta');
  const productPrice = new ProductPrice(30);
  const product = new Product({
    id: productId,
    name: productName,
    price: productPrice,
  });

  test('product is an instance of Product', () => {
    expect(product).toBeInstanceOf(Product);
  });

  test('product id is equals to productId', () => {
    expect(product.id.value).toBe(productId.value);
  });

  test('product name is equals to productName', () => {
    expect(product.name.value).toBe(productName.value);
  });

  test('product price is equals to productPrice', () => {
    expect(product.price.value).toBe(productPrice.value);
  });
});
