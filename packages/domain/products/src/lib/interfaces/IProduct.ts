import { Product } from '../Product';
import { ProductId } from '../ProductId';
import { ProductName } from '../ProductName';
import { ProductPrice } from '../ProductPrice';

export interface IProduct {
  id: ProductId;
  name: ProductName;
  price: ProductPrice;
}

export interface IProductJSON {
  id: string;
  name: string;
  price: number;
}

export interface IProductRepository {
  getAll(): Promise<Array<Product>>;
  get(id: ProductId): Promise<Product>;
}
