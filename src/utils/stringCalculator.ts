export function add(numbers: string): number {
  if (numbers === "") {
    return 0;
  }

  const numberArray = splitNumbers(numbers);

  return numberArray.reduce((sum, num) => sum + parseInt(num), 0);
}

function splitNumbers(input: string): string[] {
  const result: string[] = [];
  let currentNumber = "";

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (char === "," || char === "\n") {
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
