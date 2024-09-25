export function add(numbers: string): number {
  if (numbers === "") {
    return 0;
  }
  // we get \\n instead of \n from react input
  numbers = numbers.replace(/\\n/g, "\n");

  let delimiter = ",";
  let numberPart = numbers;

  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");
    const delimiterSection = numbers.substring(2, delimiterEndIndex);

    if (delimiterSection.startsWith("[") && delimiterSection.endsWith("]")) {
      // delimiter section is like [***] , so we want to ignore first and last character
      delimiter = delimiterSection.substring(1, delimiterSection.length - 1);
    } else {
      delimiter = delimiterSection;
    }

    numberPart = numbers.substring(delimiterEndIndex + 1);
  }

  const numberArray = splitNumbers(numberPart, delimiter);

  const parsedNumbers = numberArray.map((num) => parseInt(num)).filter((num) => num <= 1000);
  const negatives = parsedNumbers.filter((num) => num < 0);

  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }

  return parsedNumbers.reduce((sum, num) => sum + num, 0);
}

function splitNumbers(input: string, delimiter: string = ","): string[] {
  const result: string[] = [];
  let currentNumber = "";

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (i + delimiter.length <= input.length && input.substring(i, i + delimiter.length) === delimiter) {
      if (currentNumber !== "") {
        result.push(currentNumber);
        currentNumber = "";
      }
      i += delimiter.length - 1;
    } else if (char === "," || char === "\n") {
      if (currentNumber !== "") {
        result.push(currentNumber);
        currentNumber = "";
      }
    } else {
      currentNumber += char;
    }
  }

  if (currentNumber !== "") {
    result.push(currentNumber);
  }

  return result;
}
