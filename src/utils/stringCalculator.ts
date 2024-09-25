export function add(numbers: string): number {
  if (numbers === "") return 0;

  const numArray = numbers.split(",");
  const parsedNumbers = numArray.map((num) => parseInt(num));

  return parsedNumbers.reduce((sum, current) => sum + current, 0);
}
