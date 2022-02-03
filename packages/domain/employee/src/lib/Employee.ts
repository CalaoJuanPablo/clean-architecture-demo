import { IEntity } from '@clean-architecture-demo/domain/common';
import { EmployeeId } from './EmployeeId';
import { EmployeeName } from './EmployeeName';
import { IEmployee, IEmployeeJSON } from './interfaces';

export class Employee implements IEntity<IEmployeeJSON> {
  readonly id: EmployeeId;
  readonly name: EmployeeName;

  constructor({ id, name }: IEmployee) {
    this.id = id;
    this.name = name;
  }

  toJSON(): IEmployeeJSON {
    return {
      id: this.id.toString(),
      name: this.name.toString(),
    };
  }
}
