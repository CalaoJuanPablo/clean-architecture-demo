import { IEntity } from '@clean-architecture-demo/domain/common';
import { IProduct, IProductJSON } from './interfaces';
import { ProductId } from './ProductId';
import { ProductName } from './ProductName';
import { ProductPrice } from './ProductPrice';
export class Product implements IEntity<IProductJSON> {
  readonly id: ProductId;
  readonly name: ProductName;
  readonly price: ProductPrice;

  constructor({ id, name, price }: IProduct) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  toJSON(): IProductJSON {
    return {
      id: this.id.toString(),
      name: this.name.toString(),
      price: this.price.toNumber(),
    };
  }
}
