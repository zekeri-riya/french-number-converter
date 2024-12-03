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

## Installation

1. Clone or create the project directory:
```bash
mkdir french-number-converter
cd french-number-converter
```

2. Initialize a new Node.js project:
```bash
npm init -y
```

3. Install required dependencies:
```bash
npm install typescript @types/node jest @types/jest ts-jest
npm install --save-dev ts-node nodemon @types/jest
```

4. Create TypeScript configuration:
```bash
npx tsc --init
```

## Configuration Files

### package.json
```json
{
  "name": "french-number-converter",
  "version": "1.0.0",
  "description": "Converts numbers to French words",
  "main": "dist/index.js",
  "scripts": {
    "start": "node dist/index.js",
    "dev": "nodemon --watch 'src/**/*.ts' --exec 'ts-node' src/index.ts",
    "build": "tsc",
    "test": "jest",
    "test:watch": "jest --watch"
  },
  "keywords": ["french", "numbers", "converter"],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/jest": "^29.5.0",
    "@types/node": "^18.15.11",
    "jest": "^29.5.0",
    "nodemon": "^2.0.22",
    "ts-jest": "^29.1.0",
    "ts-node": "^10.9.1",
    "typescript": "^5.0.4"
  }
}
```

### tsconfig.json
```json
{
  "compilerOptions": {
    "target": "es2020",
    "module": "commonjs",
    "lib": ["es2020"],
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "declaration": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.test.ts"]
}
```

### jest.config.js
```javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.ts'],
  verbose: true
};
```

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