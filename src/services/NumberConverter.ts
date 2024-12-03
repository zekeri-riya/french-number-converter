import { NumberInput, FrenchOutput, NumberRange } from '../types/types';
import { UNITS, SPECIAL_NUMBERS, TENS } from '../constants/numbers';

export class NumberConverter {
  private static instance: NumberConverter;

  private constructor() {}

  public static getInstance(): NumberConverter {
    if (!NumberConverter.instance) {
      NumberConverter.instance = new NumberConverter();
    }
    return NumberConverter.instance;
  }

  public convert(number: NumberInput): FrenchOutput {
    if (number === 0) return UNITS[0];
    if (number < 0) throw new Error('Negative numbers are not supported');

    return this.convertPositiveNumber(number);
  }

  private convertPositiveNumber(number: number): string {
    // Handle special cases first
    if (number <= 16 && number in SPECIAL_NUMBERS) {
      return SPECIAL_NUMBERS[number];
    }

    if (number < 10) {
      return UNITS[number as NumberRange];
    }

    // Handle thousands
    if (number >= 1000) {
      const thousands = Math.floor(number / 1000);
      const remainder = number % 1000;

      const thousandText =
        thousands === 1 ? 'mille' : `${this.convertPositiveNumber(thousands)}-mille`;

      return remainder === 0
        ? thousandText
        : `${thousandText}-${this.convertPositiveNumber(remainder)}`;
    }

    // Handle hundreds
    if (number >= 100) {
      const hundreds = Math.floor(number / 100);
      const remainder = number % 100;

      const hundredText =
        hundreds === 1
          ? 'cent'
          : `${UNITS[hundreds as NumberRange]}-cent${remainder === 0 ? 's' : ''}`;

      return remainder === 0
        ? hundredText
        : `${hundredText}-${this.convertPositiveNumber(remainder)}`;
    }

    // Handle tens
    if (number >= 20) {
      const ten = Math.floor(number / 10) * 10;
      const unit = number % 10;

      // Special case for 71: "soixante-et-onze"
      if (number === 71) {
        return 'soixante-et-onze';
      }

      // Special case for 80: "quatre-vingts"
      if (number === 80) {
        return 'quatre-vingts';
      }

      if (unit === 1 && ten !== 80 && ten !== 90) {
        return `${TENS[ten]}-et-un`;
      }

      if (ten === 70) {
        return unit === 0
          ? TENS[70]
          : unit <= 6
            ? `soixante-${SPECIAL_NUMBERS[10 + unit]}`
            : `soixante-dix-${UNITS[unit as NumberRange]}`;
      }

      if (ten === 90) {
        return unit === 0
          ? `${TENS[80]}s`
          : unit <= 6
            ? `quatre-vingt-${SPECIAL_NUMBERS[10 + unit]}`
            : `quatre-vingt-dix-${UNITS[unit as NumberRange]}`;
      }

      return unit === 0 ? TENS[ten] : `${TENS[ten]}-${UNITS[unit as NumberRange]}`;
    }

    // Handle teens (17-19)
    return `dix-${UNITS[(number % 10) as NumberRange]}`;
  }
}
