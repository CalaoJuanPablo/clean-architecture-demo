import { Employee } from '@clean-architecture-demo/domain/employee';
import { EmployeeName } from './../lib/EmployeeName';
import { EmployeeId } from './../lib/EmployeeId';

describe('Employee', () => {
  const employeeId = EmployeeId.random();
  const employeeName = new EmployeeName('John Doe');
  const employee = new Employee({ id: employeeId, name: employeeName });

  test('employee is an instance of Employee', () => {
    expect(employee).toBeInstanceOf(Employee);
  });

  test('employee id is equal to employeeId', () => {
    expect(employee.id.value).toBe(employeeId.value);
  });

  test('employee name is equal to employeeName', () => {
    expect(employee.name.value).toBe(employeeName.value);
  });
});
