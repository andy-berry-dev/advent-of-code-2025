import { describe, it, expect } from "vitest";
import { parseInput, calculateNewPosition, applyRotations } from "./day1";

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

describe("calculateNewPosition", () => {
  it("calculates new position correctly without wraparound", () => {
    expect(calculateNewPosition(50, "R10")).toEqual([60, 0]);
  });

  it("calculates new position correctly with wraparound going below 0", () => {
    expect(calculateNewPosition(5, "L10")).toEqual([95, 1]);
  });

  it("calculates new position correctly with wraparound going above 99", () => {
    expect(calculateNewPosition(95, "R10")).toEqual([5, 1]);
  });

  it("calculates the number of times position 0 is landed on", () => {
    expect(calculateNewPosition(1, "L1")).toEqual([0, 1]);
    expect(calculateNewPosition(99, "R1")).toEqual([0, 1]);
  });

  it("calculates the number of times position 0 is rotated past", () => {
    expect(calculateNewPosition(1, "L2")).toEqual([99, 1]);
    expect(calculateNewPosition(99, "R2")).toEqual([1, 1]);
  });

  it("calculates the number of times position 0 is rotated past if rotated past multiple times", () => {
    expect(calculateNewPosition(50, "R1000")).toEqual([50, 10]);
  });
});

describe("applyRotations", () => {
  it("starts at 50", () => {
    expect(applyRotations([])).toEqual([[50], 0]);
  });

  it("applies a series of rotations correctly", () => {
    expect(applyRotations(["R2", "L3", "R2"])).toEqual([[50, 52, 49, 51], 0]);
  });

  it("rotating left from 0 goes to 99", () => {
    expect(applyRotations(["L1"], 0)).toEqual([[0, 99], 0]);
  });

  it("rotating right from 99 goes to 0", () => {
    expect(applyRotations(["R1"], 99)).toEqual([[99, 0], 1]);
  });
});
