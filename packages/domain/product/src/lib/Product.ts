import { IEntity } from '@clean-architecture-demo/domain/common';
import { ProductId } from './ProductId';
import { ProductName } from './ProductName';
import { ProductPrice } from './ProductPrice';

interface IProduct {
  id: ProductId;
  name: ProductName;
  price: ProductPrice;
}

export class Product implements IEntity {
  readonly id: ProductId;
  readonly name: ProductName;
  readonly price: ProductPrice;

  constructor({ id, name, price }: IProduct) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}
