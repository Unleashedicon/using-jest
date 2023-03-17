const stringLength = require('./task1');

describe('stringLength function', () => {
it('character count', () => {
  expect(stringLength("Hello")).toBe(5);
});

it('characters should at least 1 character long and not longer than 10 characters', () => {
  expect(() => {stringLength('Hello World')}).toThrow('string length must be between 1 and 10 characters long');
});
});

const reversedString = require('./task2');
describe('reversedString function', () => {
  it('reverse string', () => {
    expect(reversedString("Hello")).toBe("olleH");
  });
});

const calculator = require('./task3');

describe('calculator class', () => {
  describe('add', () => {
    it('return sum', () => {
        const calc = new calculator();
        expect(calc.add(2, 3)).toBe(5);
    });
    it('sum of a negative number', () => {
        const calc = new calculator();
        expect(calc.add(-2, 3)).toBe(1);
    });

    it('return 0 when both numbers are 0', () => {
        const calc = new calculator();
        expect(calc.add(0, 0)).toBe(0);
    });
  });

  describe('subtract', () => {
    it('substraction of positive numbers with firstnumber being larger', () => {
        const calc = new calculator();
        expect(calc.subtract(5, 2)).toBe(3);
    });
    it('substraction of positive numbers with second number being larger', () => {
        const calc = new calculator();
        expect(calc.subtract(2, 5)).toBe(-3);
    });
    it('substraction of equal numbers', () => {
        const calc = new calculator();
        expect(calc.subtract(3, 3)).toBe(0);
    });
  });

  describe('divide', () => {
    it('dividing equal numbers', () => {
        const calc = new calculator();
        expect(calc.divide(6, 3)).toBe(2);
    })
    it('dividing by 0', () => {
        const calc = new calculator();
        expect(() => calc.divide(2, 0)).toThrow('cannot divide by 0');
    });

    it('dividing numbers that return decimals', () => {
        const calc = new calculator();
        expect(calc.divide(5, 2)).toBe(2.5);
    });
  });

  describe('multiply', () => {
    it('multiplying two positive numbers', () => {
        const calc = new calculator();
        expect(calc.multiply(2, 3)).toBe(6);
    })
    it('multiplying a number with 0', () => {
        const calc = new calculator();
        expect(calc.multiply(0, 5)).toBe(0);
    });
    it('multiplying a negative number with a positive number', () => {
        const calc = new calculator();
        expect(calc.multiply(-2, 3)).toBe(-6);
    });
  });
});

const capitalize = require('./task4');
describe('capitalize string', () => {
  it('first letter to capital', () => {
    expect(capitalize("kelvin")).toBe('Kelvin');
  })
})