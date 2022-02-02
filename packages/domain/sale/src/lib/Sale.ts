import { IEntity } from '@clean-architecture-demo/domain/common';
import { Customer } from '@clean-architecture-demo/domain/customer';
import { Employee } from '@clean-architecture-demo/domain/employee';
import { Product } from '@clean-architecture-demo/domain/product';
import { SaleDate } from './SaleDate';
import { SaleId } from './SaleId';
import { SaleProductQty } from './SaleProductQty';
import { SaleTotalPrice } from './SaleTotalPrice';

interface ISale {
  id: SaleId;
  date: SaleDate;
  customer: Customer;
  employee: Employee;
  product: Product;
}

export class Sale implements IEntity {
  readonly id: SaleId;
  readonly date: SaleDate;
  readonly customer: Customer;
  readonly employee: Employee;
  readonly product: Product;
  private _quantity: SaleProductQty;
  private _totalPrice: SaleTotalPrice;

  constructor({ id, date, customer, employee, product }: ISale) {
    this.id = id;
    this.date = date;
    this.customer = customer;
    this.employee = employee;
    this.product = product;
    this._quantity = new SaleProductQty(0);
    this._totalPrice = new SaleTotalPrice(0);

    this._updateTotalPrice();
  }

  getQuantity() {
    return this._quantity;
  }

  getTotalPrice() {
    return this._totalPrice;
  }

  updateQuantity(qty: number) {
    this._quantity = new SaleProductQty(qty);
    this._updateTotalPrice();
  }

  private _updateTotalPrice() {
    const totalPrice = this._quantity.value * this.product.price.value;

    this._totalPrice = new SaleTotalPrice(totalPrice);
  }
}
