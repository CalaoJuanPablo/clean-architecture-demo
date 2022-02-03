import { Uuid } from '../value-objects';

export interface IEntity<T> {
  id: Uuid;
  toJSON(): T;
}
