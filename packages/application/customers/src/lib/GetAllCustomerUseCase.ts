import {
  Customer,
  ICustomerRepository,
} from '@clean-architecture-demo/domain-customers';
import { IUseCase } from '@clean-architecture-demo/domain/common';

interface IGetAllCustomersUseCase {
  repository: ICustomerRepository;
}

export class GetAllCustomersUseCase implements IUseCase<Customer[]> {
  private _repository: ICustomerRepository;

  constructor({ repository }: IGetAllCustomersUseCase) {
    this._repository = repository;
  }
  run(): Promise<Customer[]> {
    return this._repository.getAll();
  }
}
