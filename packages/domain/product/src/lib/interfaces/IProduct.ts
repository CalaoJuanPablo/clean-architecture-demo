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
