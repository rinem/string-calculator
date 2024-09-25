export function add(numbers: string): number {
  if (numbers === "") return 0;

  const parsedNumber = parseInt(numbers);
  if (!isNaN(parsedNumber)) return parsedNumber;

  return 0;
}
