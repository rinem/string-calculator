export function add(numbers: string): number {
  if (numbers === "") {
    return 0;
  }

  let delimiter = ",";
  let numberPart = numbers;

  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");
    delimiter = numbers.substring(2, delimiterEndIndex);
    numberPart = numbers.substring(delimiterEndIndex + 1);
  }

  const numberArray = splitNumbers(numberPart, delimiter);

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
