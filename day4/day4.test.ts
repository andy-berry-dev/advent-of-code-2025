import { describe, expect, test } from "vitest";
import {
  applyRollsThatHaveBeenRemoved,
  calculatePaperRollsThatCanBeMoved,
  createMatrixFromInput,
  recrusivelyRemovePaperRolls,
} from "./day4";

describe("createMatrixFromInput", () => {
  test("create an empty matrix from an empty string", () => {
    expect(createMatrixFromInput([""])).toStrictEqual([[]]);
  });

  test("create an empty matrix from multiple empty strings", () => {
    expect(createMatrixFromInput(["", ""])).toStrictEqual([[], []]);
  });

  test("returns true for each slot where there is a a roll of paper", () => {
    expect(createMatrixFromInput([".@.@.@.@.@"])).toStrictEqual([
      [false, true, false, true, false, true, false, true, false, true],
    ]);
  });

  test("returns true for each slot where there is a a roll of paper across multiple rows", () => {
    expect(createMatrixFromInput([".@.@.@.@.@", "@.@.@.@.@."])).toStrictEqual([
      [false, true, false, true, false, true, false, true, false, true],
      [true, false, true, false, true, false, true, false, true, false],
    ]);
  });

  test("ensures every row is the same length padding with false at the end", () => {
    expect(createMatrixFromInput([".@.@.@.@.@", "@.@.@.@."])).toStrictEqual([
      [false, true, false, true, false, true, false, true, false, true],
      [true, false, true, false, true, false, true, false, false, false],
    ]);
  });

  test("creates a matrix from a complex input", () => {
    expect(
      createMatrixFromInput([
        "..@@.@@@@.",
        "@@@.@.@.@@",
        "@@@@@.@.@@",
        "@.@@@@..@.",
        "@@.@@@@.@@",
      ])
    ).toStrictEqual([
      [false, false, true, true, false, true, true, true, true, false],
      [true, true, true, false, true, false, true, false, true, true],
      [true, true, true, true, true, false, true, false, true, true],
      [true, false, true, true, true, true, false, false, true, false],
      [true, true, false, true, true, true, true, false, true, true],
    ]);
  });
});

describe("calculatePaperRollsThatCanBeMoved", () => {
  test("identifies movable paper rolls in a single row matrix where all rolls can move", () => {
    const matrix = [[true, true, true]];
    expect(calculatePaperRollsThatCanBeMoved(matrix)).toStrictEqual([
      [0, 1, 2],
    ]);
  });

  test("identifies movable paper rolls in a 2 row matrix where all rolls can move", () => {
    const matrix = [
      [true, true],
      [true, true],
    ];
    expect(calculatePaperRollsThatCanBeMoved(matrix)).toStrictEqual([
      [0, 1],
      [0, 1],
    ]);
  });

  test("identifies movable paper rolls in a 2 row matrix where all rolls can move", () => {
    const matrix = [
      [true, true],
      [true, true],
    ];
    expect(calculatePaperRollsThatCanBeMoved(matrix)).toStrictEqual([
      [0, 1],
      [0, 1],
    ]);
  });

  test("identifies movable paper rolls in a 3 row matrix where some rolls cannot be moved", () => {
    const matrix = [
      [true, true, true],
      [true, true, true],
      [true, true, true],
    ];
    expect(calculatePaperRollsThatCanBeMoved(matrix)).toStrictEqual([
      [0, 2],
      [],
      [0, 2],
    ]);
  });

  test("identifies movable paper rolls in a complex matrix", () => {
    const matrix = [
      [false, false, true, true, false, true, true, true, true, false],
      [true, true, true, false, true, false, true, false, true, true],
      [true, true, true, true, true, false, true, false, true, true],
      [true, false, true, true, true, true, false, false, true, false],
      [true, true, false, true, true, true, true, false, true, true],
    ];
    console.error(calculatePaperRollsThatCanBeMoved(matrix));
    expect(
      // ignore the last row, we include it so that the previous row can be tested properly
      calculatePaperRollsThatCanBeMoved(matrix).slice(0, -1)
    ).toStrictEqual([[2, 3, 5, 6, 8], [0], [6], []]);
  });
});

describe("applyRollsThatHaveBeenRemoved", () => {
  test("removes rolls from the matrix based on the provided indexes", () => {
    const matrix = [
      [true, true, true],
      [true, true, true],
      [true, true, true],
    ];
    const rollsToRemove = [[0, 2], [1], [0, 1, 2]];
    expect(applyRollsThatHaveBeenRemoved(matrix, rollsToRemove)).toStrictEqual([
      [false, true, false],
      [true, false, true],
      [false, false, false],
    ]);
  });
});

describe("recrusivelyRemovePaperRolls", () => {
  test("removes rolls from a complex matrix until no more can be removed", () => {
    const matrix = createMatrixFromInput([
      "..@@.@@@@.",
      "@@@.@.@.@@",
      "@@@@@.@.@@",
      "@.@@@@..@.",
      "@@.@@@@.@@",
      ".@@@@@@@.@",
      ".@.@.@.@@@",
      "@.@@@.@@@@",
      ".@@@@@@@@.",
      "@.@.@@@.@.",
    ]);
    expect(recrusivelyRemovePaperRolls(matrix)).toBe(43);
  });
});
