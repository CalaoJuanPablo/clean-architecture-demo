import { IProductJSON } from './interfaces';
import { Product } from './Product';
import { ProductId } from './ProductId';
import { ProductName } from './ProductName';
import { ProductPrice } from './ProductPrice';

export class ProductEntityFactory {
  static product = ({ id, name, price }: IProductJSON) =>
    new Product({
      id: new ProductId(id),
      name: new ProductName(name),
      price: new ProductPrice(price),
    });
}
