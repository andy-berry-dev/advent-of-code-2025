import { describe, it, expect } from "vitest";
import { calculateMaxJoltage, findHighestJoltage } from "./day3";

describe("findHighestJoltage", () => {
  it("picks exactly 12 numbers", () => {
    expect(findHighestJoltage("111111111111111111111")).toBe(111111111111);
  });

  it.each([
    ["987654321111111", 987654321111],
    ["811111111111119", 811111111119],
    ["234234234234278", 434234234278],
    ["818181911112111", 888911112111],
  ])(
    "picks the highest possible joltage given the input %s",
    (input, expected) => {
      expect(findHighestJoltage(input)).toBe(expected);
    }
  );
});

describe("calculateMaxJoltage", () => {
  it("calculates the maximum joltage from a bank when turning on 12 batteries in each bank", () => {
    expect(
      calculateMaxJoltage([
        "987654321111111",
        "811111111111119",
        "234234234234278",
        "818181911112111",
      ])
    ).toBe(3121910778619);
  });
});
