import { describe, it, expect } from "vitest";
import { parseInput, applyRotations, calculateCode } from "./day1";

describe("parseInput", () => {
  it("parses input of L1", () => {
    expect(parseInput("L1")).toEqual(-1);
  });

  it("parses input of R1", () => {
    expect(parseInput("R1")).toEqual(1);
  });

  it("parses input of R100", () => {
    expect(parseInput("R100")).toEqual(100);
  });

  it("returns 0 for invalid direction", () => {
    expect(parseInput("X10")).toEqual(0);
  });
});

describe("applyRotations", () => {
  it("starts at 50", () => {
    expect(applyRotations([])).toEqual([50]);
  });

  it("applies a series of rotations correctly", () => {
    expect(applyRotations(["R2", "L3", "R2"])).toEqual([50, 52, 49, 51]);
  });

  it("rotating left from 0 goes to 99", () => {
    expect(applyRotations(["L1"], 0)).toEqual([0, 99]);
  });

  it("rotating right from 99 goes to 0", () => {
    expect(applyRotations(["R1"], 99)).toEqual([99, 0]);
  });
});

describe("calculateCode", () => {
  it("calculates code with no rotations", () => {
    expect(calculateCode([], 50)).toEqual(0);
  });

  it("calculates code with example rotations", () => {
    expect(
      calculateCode(
        ["L68", "L30", "R48", "L5", "R60", "L55", "L1", "L99", "R14", "L82"],
        50
      )
    ).toEqual(3);
  });
});
