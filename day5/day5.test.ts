import { describe, expect, test } from "vitest";
import { calculateFreshVeggies, parseIdRange, parseInput } from "./day5";

describe("parseIdRange", () => {
  test("parses a range string into an array of numbers", () => {
    expect(parseIdRange("3-5")).toEqual([3, 5]);
  });
});

describe("calculateFreshVeggies", () => {
  test("calculates whether a veggie is fresh if it falls within a range, with a single range", () => {
    expect(calculateFreshVeggies([[3, 5]], [4])).toEqual([true]);
  });

  test("calculates whether a veggie is fresh if it falls at the start of a range, with a single range", () => {
    expect(calculateFreshVeggies([[3, 5]], [3])).toEqual([true]);
  });

  test("calculates whether a veggie is fresh if it falls at the end of a range, with a single range", () => {
    expect(calculateFreshVeggies([[3, 5]], [5])).toEqual([true]);
  });

  test("calculates whether a veggie is fresh if it falls inside any range", () => {
    expect(
      calculateFreshVeggies(
        [
          [3, 5],
          [7, 9],
        ],
        [8, 5]
      )
    ).toEqual([true, true]);
  });

  test("calculates whether a veggie is fresh if it falls inside any range with ranges overlapping", () => {
    expect(
      calculateFreshVeggies(
        [
          [3, 5],
          [4, 6],
        ],
        [5]
      )
    ).toEqual([true]);
  });

  test("test against example input", () => {
    expect(
      calculateFreshVeggies(
        [
          [3, 5],
          [10, 14],
          [16, 20],
          [12, 18],
        ],
        [1, 5, 8, 11, 17, 32]
      )
    ).toEqual([false, true, false, true, true, false]);
  });
});

describe("parseInput", () => {
  test("returns an array of string rangers and an array of veggie IDs", () => {
    expect(
      parseInput(`3-5
10-14
16-20
12-18

1
5
8
11
17
32`)
    ).toEqual({
      ranges: [
        [3, 5],
        [10, 14],
        [16, 20],
        [12, 18],
      ],
      veggieIds: [1, 5, 8, 11, 17, 32],
    });
  });
});
