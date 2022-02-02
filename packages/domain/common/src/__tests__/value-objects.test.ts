import {
  Uuid,
  StringValueObject,
  NumberValueObject,
  DateValueObject,
} from '../lib/value-objects';

class StringTestClass extends StringValueObject {}
class NumberTestClass extends NumberValueObject {}
class DateTestClass extends DateValueObject {}

describe('Uuid Value Object', () => {
  describe('create Uuid Value Object', () => {
    const id = Uuid.random();

    test('is an instance of Uuid', () => {
      expect(id).toBeInstanceOf(Uuid);
    });

    test('string is valid Uuid', () => {
      const idString = id.toString();
      const newId = new Uuid(idString);

      expect(newId).toBeInstanceOf(Uuid);
    });

    test('invalid string Uuid', () => {
      const invalidStr = 'ramdom-invalid-string';

      expect(() => {
        new Uuid(invalidStr);
      }).toThrow(/<uuid> does not allow the value <ramdom-invalid-string>/i);
    });
  });
});

describe('StringValueObject', () => {
  describe('create string value object', () => {
    const str = 'test random string';
    const stringValueObject = new StringTestClass(str);

    test('it creates a StringValueObject', () => {
      expect(stringValueObject).toBeInstanceOf(StringValueObject);
    });

    test('it returns the string value', () => {
      expect(stringValueObject.value).toBe('test random string');
      expect(stringValueObject.toString()).toBe('test random string');
    });
  });
});

describe('NumberValueObject', () => {
  describe('create number value object', () => {
    const num = 5;
    const numberValueObject = new NumberTestClass(num);

    test('it creates a StringValueObject', () => {
      expect(numberValueObject).toBeInstanceOf(NumberValueObject);
    });

    test('it returns the string value', () => {
      expect(numberValueObject.value).toBe(5);
      expect(numberValueObject.toNumber()).toBe(5);
    });
  });
});
describe('NumberValueObject', () => {
  describe('create number value object', () => {
    const num = 5;
    const numberValueObject = new NumberTestClass(num);

    test('it creates a StringValueObject', () => {
      expect(numberValueObject).toBeInstanceOf(NumberValueObject);
    });

    test('it returns the string value', () => {
      expect(numberValueObject.value).toBe(5);
      expect(numberValueObject.toNumber()).toBe(5);
    });
  });
});
describe('NumberValueObject', () => {
  describe('create number value object', () => {
    const num = 5;
    const numberValueObject = new NumberTestClass(num);

    test('it creates a StringValueObject', () => {
      expect(numberValueObject).toBeInstanceOf(NumberValueObject);
    });

    test('it returns the string value', () => {
      expect(numberValueObject.value).toBe(5);
      expect(numberValueObject.toNumber()).toBe(5);
    });
  });
});

describe('DateValueObject', () => {
  describe('create date value object', () => {
    const date = new Date('2020-03-11');
    const dateTimestamp = date.getTime();
    const dateValueObject = new DateTestClass(date);

    test('it creates a DateValueObject', () => {
      expect(dateValueObject).toBeInstanceOf(DateValueObject);
    });

    test('it returns the date value', () => {
      expect(dateValueObject.value).toBe(date);
    });
    test('it returns the date timestamp', () => {
      expect(dateValueObject.toTimestamp()).toBe(dateTimestamp);
    });
  });
});
