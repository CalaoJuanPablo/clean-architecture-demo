import { IProductJSON, IProductEntityFactory } from './interfaces';
import { Product } from './Product';
import { ProductId } from './ProductId';
import { ProductName } from './ProductName';
import { ProductPrice } from './ProductPrice';

export class ProductEntityFactory implements IProductEntityFactory {
  createProduct({ id, name, price }: IProductJSON): Product {
    return new Product({
      id: new ProductId(id),
      name: new ProductName(name),
      price: new ProductPrice(price),
    });
  }
}
