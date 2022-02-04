import { Employee } from '../Employee';
import { EmployeeId } from '../EmployeeId';
import { EmployeeName } from '../EmployeeName';

export interface IEmployee {
  id: EmployeeId;
  name: EmployeeName;
}

export interface IEmployeeJSON {
  id: string;
  name: string;
}

export interface IEmployeeRepository {
  getAll(): Promise<Array<Employee>>;
  get(id: EmployeeId): Promise<Employee>;
}
