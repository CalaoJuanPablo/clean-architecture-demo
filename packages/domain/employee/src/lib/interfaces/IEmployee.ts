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
