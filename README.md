# French Number Converter

A TypeScript application that converts numbers to their French word representations following modern French conventions and the 1990 orthographic reforms.

## Features

- Converts numbers from 0 to 999999 to French words
- Follows modern French number writing conventions
- Handles special cases (70s, 80s, 90s)
- Fully tested with Jest
- Written in TypeScript with strict type checking

## Project Structure

```
french-number-converter/
├── src/
│   ├── __tests__/          # Test files
│   │   └── NumberConverter.test.ts
│   ├── constants/          # Constant definitions
│   │   └── numbers.ts
│   ├── services/          # Core business logic
│   │   └── NumberConverter.ts
│   ├── types/            # TypeScript type definitions
│   │   └── types.ts
│   └── index.ts         # Main entry point
├── jest.config.js       # Jest configuration
├── package.json         # Project configuration
├── tsconfig.json       # TypeScript configuration
└── README.md          # This file
```

## Requirements

- Node.js (v14 or higher)
- npm or yarn

## Usage

### Basic Usage
```typescript
import { convertNumbers } from './index';

const numbers = [0, 1, 21, 80, 999];
const frenchNumbers = convertNumbers(numbers);
console.log(frenchNumbers);
```

### Example Outputs
```typescript
convertNumbers([0])     // ['zéro']
convertNumbers([1])     // ['un']
convertNumbers([16])    // ['seize']
convertNumbers([21])    // ['vingt-et-un']
convertNumbers([71])    // ['soixante-et-onze']
convertNumbers([80])    // ['quatre-vingts']
convertNumbers([99])    // ['quatre-vingt-dix-neuf']
convertNumbers([100])   // ['cent']
convertNumbers([101])   // ['cent-un']
convertNumbers([999])   // ['neuf-cent-quatre-vingt-dix-neuf']
convertNumbers([1000])  // ['mille']
convertNumbers([1234])  // ['mille-deux-cent-trente-quatre']
```

## Development Commands

1. Run in development mode with auto-reload:
```bash
npm run dev
```

2. Run tests:
```bash
npm test
```

3. Run tests in watch mode:
```bash
npm run test:watch
```

4. Build the project:
```bash
npm run build
```

5. Run the built version:
```bash
npm start
```

## Implementation Notes

- Uses Singleton pattern for the NumberConverter class
- Implements strategy pattern for different number ranges
- Follows SOLID principles and clean code practices
- Handles edge cases and special French number rules
- Full test coverage for all number cases

## Limitations

- Only supports positive integers
- Maximum supported number is 999999
- Negative numbers will throw an error
- Decimals are not supported

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the LICENSE file for details.