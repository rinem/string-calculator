import { add } from "../utils/stringCalculator";

describe("String Calculator", () => {
  test("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  test("should return the number itself for a single number", () => {
    expect(add("1")).toBe(1);
    expect(add("5")).toBe(5);
  });

  test("should return the sum of two numbers", () => {
    expect(add("1,2")).toBe(3);
    expect(add("3,7")).toBe(10);
  });

  test("should return the sum of multiple numbers", () => {
    expect(add("1,2,3,4")).toBe(10);
    expect(add("10,20,30")).toBe(60);
  });

  test("should handle newlines between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
    expect(add("4\n5\n6")).toBe(15);
  });

  test("should handle custom delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
    expect(add("//|\n3|4|5")).toBe(12);
  });

  test("should throw an exception for negative numbers", () => {
    expect(() => add("1,-2,3,-5")).toThrow("negative numbers not allowed -2,-5");
  });

  test("should ignore numbers bigger than 1000", () => {
    expect(add("2,1001")).toBe(2);
    expect(add("1000,1001,1002")).toBe(1000);
  });

  test("should handle delimiters of any length", () => {
    expect(add("//[***]\n1***2***3")).toBe(6);
    expect(add("//[;;]\n3;;2;;4")).toBe(9);
  });

  test("should handle multiplication if delimiter is *", () => {
    expect(add("//*\n1*2")).toBe(2);
    expect(add("//*\n3*4*5")).toBe(60);
  });

  // we want to log the error if there is some negative numbers
  test("should check if error is logged when there are some negative numbers", () => {
    const consoleErrorMock = jest.spyOn(console, 'error').mockImplementation();

    expect(() => add("1,-2,3,-5")).toThrow("negative numbers not allowed -2,-5");
    expect(console.error).toHaveBeenCalledWith("negative numbers not allowed -2,-5");
    expect(console.error).toHaveBeenCalledTimes(1);

    
  })

});
