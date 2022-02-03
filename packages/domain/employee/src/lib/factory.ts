import { Employee } from './Employee';
import { EmployeeId } from './EmployeeId';
import { EmployeeName } from './EmployeeName';
import { IEmployeeJSON } from './interfaces';

export class EmployeeEntityFactory {
  static employee = ({ id, name }: IEmployeeJSON) =>
    new Employee({
      id: new EmployeeId(id),
      name: new EmployeeName(name),
    });
}
