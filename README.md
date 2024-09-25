# String Calculator - React + TDD Implementation

## Overview

This project implements a **String Calculator** using **React** for the frontend and **Test-Driven Development (TDD)** principles. It allows users to input numbers as strings and calculates their sum, supporting custom delimiters and handling edge cases like negative numbers. The calculation logic is developed in **TypeScript** with accompanying unit tests.

## Tech Stack

- **Frontend:** React, TypeScript
- **Testing:** Jest for unit tests
- **Styles:** Tailwind CSS

## Requirements

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/rinem/string-calculator.git
   cd string-calculator
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

4. **Run the tests:**

   ```bash
   npm test
   ```

## Usage

The application takes a string input from the user via the frontend and calculates the sum based on predefined rules.

### Input Examples:

- `"1,2,3"` results in `6`.
- `"1\n2,3"` results in `6` (newline support).
- `"//;\n1;2"` results in `3` (custom delimiter).
- `"1,-2,3,-4"` throws an error for negative numbers and displays the error message.

## Project Structure

```bash
/string-calculator
│
├── public
├── src
│   ├── components
│   │   └── Calculator.tsx
│   ├── utils
│   │   └── stringCalculator.ts
│   ├── tests
│   │   └── stringCalculator.test.ts
│   ├── App.tsx
│   └── index.tsx
│
├── package.json
├── tsconfig.json
├── jest.config.js
└── README.md
```

## TDD Approach

This project was developed using the **Test-Driven Development** (TDD) approach:

1. **Red**: Write failing tests based on requirements.
2. **Green**: Implement the minimum logic to pass the tests.
3. **Refactor**: Improve code structure without breaking functionality.

## Example Test Cases

- **Empty string:** `""` should return `0`.
- **Single number:** `"1"` should return `1`.
- **Multiple numbers:** `"1,2,3"` should return `6`.
- **Newline between numbers:** `"1\n2,3"` should return `6`.
- **Custom delimiter:** `"//;\n1;2"` should return `3`.
- **Negative numbers:** `"1,-2,3,-4"` throws an error with the message `"Negative numbers not allowed: -2, -4"`.
