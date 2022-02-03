export abstract class DateValueObject {
  readonly value: Date;

  constructor(value: Date) {
    this.value = value;
  }

  toTimestamp() {
    return this.value.getTime();
  }

  toDate() {
    return this.value;
  }
}
