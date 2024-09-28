// NOTE: should update name to something like "calculate" as it can perform multiply also
export function add(numbers: string): number {
  if (numbers === "") {
    return 0;
  }

  // We get \\n instead of \n from react input 
  numbers = numbers.replace("\\n", "\n");

  const { delimiters, numberPart } = extractDelimiter(numbers);

  const numberArray = splitNumbers(numberPart, delimiters);

  const parsedNumbers = parseNumbers(numberArray);
  
  // NOTE: should extend to include more handlers
  handleNegativeNumbers(parsedNumbers);

  const operation = getOperation(delimiters);
  
  return performOperation(parsedNumbers, operation);
}

function extractDelimiter(numbers: string): { delimiters: string[], numberPart: string } {
  let delimiters = [",", "\n"];
  let numberPart = numbers;

  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");
    const delimiterSection = numbers.substring(2, delimiterEndIndex);

    if (delimiterSection.startsWith("[") && delimiterSection.endsWith("]")) {
      delimiters = delimiterSection.slice(1, -1).split("][");
    } else {
      delimiters = [delimiterSection];
    }

    numberPart = numbers.substring(delimiterEndIndex + 1);
  }

  return { delimiters, numberPart };
}

function splitNumbers(input: string, delimiters: string[]): string[] {
  let result = [input];

  delimiters.forEach(delim => {
    let temp: string[] = [];
    result.forEach(part => {
      temp = temp.concat(part.split(delim));
    });
    result = temp;
  });

  return result.filter(Boolean);
}

function parseNumbers(numberArray: string[]): number[] {
  return numberArray
    .map(num => parseInt(num))
    .filter(num => !isNaN(num) && num <= 1000);
}

function handleNegativeNumbers(numbers: number[]): void {
  const negatives = numbers.filter(num => num < 0);

  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }
}

function getOperation(delimiters: string[]): "sum" | "multiply" {
  if (delimiters.includes("*")) {
    return "multiply";
  }
  return "sum";
}

function performOperation(numbers: number[], operation: "sum" | "multiply"): number {
  if (operation === "sum") {
    return numbers.reduce((total, num) => total + num, 0);
  } else if (operation === "multiply") {
    return numbers.reduce((total, num) => total * num, 1);
  }
  return 0;
}
