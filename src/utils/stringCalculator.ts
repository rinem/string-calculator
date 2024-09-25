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
    delimiter = numbers.substring(2, delimiterEndIndex);
    numberPart = numbers.substring(delimiterEndIndex + 1);
  }

  const numberArray = splitNumbers(numberPart, delimiter);

  const parsedNumbers = numberArray.map((num) => parseInt(num));
  const negatives = parsedNumbers.filter((num) => num < 0);

  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }

  return numberArray.reduce((sum, num) => sum + parseInt(num), 0);
}

function splitNumbers(input: string, delimiter: string = ","): string[] {
  const result: string[] = [];
  let currentNumber = "";

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (char === delimiter || char === "," || char === "\n") {
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
