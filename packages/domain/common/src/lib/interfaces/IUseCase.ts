export interface IUseCase<T> {
  run(): Promise<T>;
}
