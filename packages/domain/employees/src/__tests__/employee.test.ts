import { EmployeeEntityFactory } from '../lib/factory';
import { Employee } from '../lib/Employee';
import { EmployeeId } from '../lib/EmployeeId';

describe('Employee', () => {
  const employeeId = EmployeeId.random().toString();
  const employeeName = 'John Doe';
  const employeeEntityFactory = new EmployeeEntityFactory();
  const employee = employeeEntityFactory.createEmployee({
    id: employeeId,
    name: employeeName,
  });

  test('employee is an instance of Employee', () => {
    expect(employee).toBeInstanceOf(Employee);
  });

  test('employee id is equal to employeeId', () => {
    expect(employee.id.value).toBe(employeeId);
  });

  test('employee name is equal to employeeName', () => {
    expect(employee.name.value).toBe(employeeName);
  });
});
