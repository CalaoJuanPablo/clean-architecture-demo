import { IEntity } from '@clean-architecture-demo/domain/common';
import { EmployeeId } from './EmployeeId';
import { EmployeeName } from './EmployeeName';

interface IEmployee {
  id: EmployeeId;
  name: EmployeeName;
}

export class Employee implements IEntity {
  readonly id: EmployeeId;
  readonly name: EmployeeName;

  constructor({ id, name }: IEmployee) {
    this.id = id;
    this.name = name;
  }
}
