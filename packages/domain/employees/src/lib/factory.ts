import { Employee } from './Employee';
import { EmployeeId } from './EmployeeId';
import { EmployeeName } from './EmployeeName';
import { IEmployeeJSON, IEmployeeEntityFactory } from './interfaces';

export class EmployeeEntityFactory implements IEmployeeEntityFactory {
  createEmployee({ id, name }: IEmployeeJSON): Employee {
    return new Employee({
      id: new EmployeeId(id),
      name: new EmployeeName(name),
    });
  }
}
