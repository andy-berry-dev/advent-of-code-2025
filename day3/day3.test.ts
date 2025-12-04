import { describe, it, expect } from "vitest";
import { calculateMaxJoltage, findHighestJoltage } from "./day3";

describe("findHighestJoltage", () => {
  it.skip("picks the two highest digits in a string", () => {
    expect(findHighestJoltage("987654321111111")).toBe(98);
    expect(findHighestJoltage("234234234234278")).toBe(78);
  });

  it.skip("does not reoder the batteries", () => {
    expect(findHighestJoltage("811111111111119")).toBe(89);
    expect(findHighestJoltage("818181911112111")).toBe(92);
  });

  it("only turns on two batteries", () => {
    expect(findHighestJoltage("1111")).toBe(11);
  });
});

// describe("calculateMaxJoltage", () => {
//   it("calculates the maximum joltage from a bank", () => {
//     expect(
//       calculateMaxJoltage([
//         "987654321111111",
//         "811111111111119",
//         "234234234234278",
//         "818181911112111",
//       ])
//     ).toBe(357);
//   });
// });
