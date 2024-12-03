import { NumberConverter } from './services/NumberConverter';
import { NumberInput, FrenchOutput } from './types/types';

export function convertNumbers(numbers: NumberInput[]): FrenchOutput[] {
  const converter = NumberConverter.getInstance();
  return numbers.map((num) => converter.convert(num));
}
