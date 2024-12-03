import { convertNumbers } from '../index';

describe('Number to French Converter', () => {
  const testCases = [
    { input: 0, expected: 'zéro' },
    { input: 1, expected: 'un' },
    { input: 16, expected: 'seize' },
    { input: 21, expected: 'vingt-et-un' },
    { input: 71, expected: 'soixante-et-onze' },
    { input: 80, expected: 'quatre-vingts' },
    { input: 99, expected: 'quatre-vingt-dix-neuf' },
    { input: 100, expected: 'cent' },
    { input: 101, expected: 'cent-un' },
    { input: 999, expected: 'neuf-cent-quatre-vingt-dix-neuf' },
    { input: 1000, expected: 'mille' },
    { input: 1234, expected: 'mille-deux-cent-trente-quatre' },
  ];

  testCases.forEach(({ input, expected }) => {
    it(`should convert ${input} to "${expected}"`, () => {
      expect(convertNumbers([input])[0]).toBe(expected);
    });
  });
});
