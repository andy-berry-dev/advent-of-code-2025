import { describe, expect, it } from "vitest";
import {
  calculateIdsFromRange,
  calculateInvalidIdsFromRange,
  isInvalidId,
} from "./day2";

describe("calculateIdsFromRange", () => {
  it("should return an array of numbers from start to end inclusive", () => {
    expect(calculateIdsFromRange("5-10")).toEqual([
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
    ]);
  });

  it("should handle ranges where start = end", () => {
    expect(calculateIdsFromRange("5-5")).toEqual(["5"]);
  });

  it("should handle ranges where start < end", () => {
    expect(calculateIdsFromRange("5-6")).toEqual(["5", "6"]);
  });

  it("should handle ranges where start > end", () => {
    expect(calculateIdsFromRange("6-5")).toEqual([]);
  });
});

describe("isInvalidId", () => {
  it("returns true if the id starts with 0", () => {
    expect(isInvalidId("0")).toBe(true);
  });

  it("returns true if the id has a sequence repeated twice", () => {
    expect(isInvalidId("11")).toBe(true);
    expect(isInvalidId("22")).toBe(true);
    expect(isInvalidId("12341234")).toBe(true);
  });

  it("returns true if the id has a sequence repeated more than twice", () => {
    expect(isInvalidId("111")).toBe(true);
    expect(isInvalidId("2222")).toBe(true);
    expect(isInvalidId("123123123")).toBe(true);
    expect(isInvalidId("12341234")).toBe(true);
    expect(isInvalidId("123123123")).toBe(true);
    expect(isInvalidId("1212121212")).toBe(true);
    expect(isInvalidId("1111111")).toBe(true);
  });
});

describe("calculateInvalidIdsFromRange", () => {
  it("should return an empty array for any valid range", () => {
    expect(calculateInvalidIdsFromRange("5-10")).toEqual([]);
  });

  it("should return an invalid ID if it appears in the middle of a range", () => {
    expect(calculateInvalidIdsFromRange("9-13")).toEqual(["11"]);
  });

  it("should return an invalid ID if it appears at the start of a range", () => {
    expect(calculateInvalidIdsFromRange("11-15")).toEqual(["11"]);
  });

  it("should return an invalid ID if it appears at the end of a range", () => {
    expect(calculateInvalidIdsFromRange("9-11")).toEqual(["11"]);
  });

  it("should return mulitple invalid IDs if they appear in the range", () => {
    expect(calculateInvalidIdsFromRange("11-22")).toEqual(["11", "22"]);
  });

  it("works with example data set", () => {
    expect(calculateInvalidIdsFromRange("11-22")).toEqual(["11", "22"]);
    expect(calculateInvalidIdsFromRange("95-115")).toEqual(["99", "111"]);
    expect(calculateInvalidIdsFromRange("998-1012")).toEqual(["999", "1010"]);
    expect(calculateInvalidIdsFromRange("1188511880-1188511890")).toEqual([
      "1188511885",
    ]);
    expect(calculateInvalidIdsFromRange("222220-222224")).toEqual(["222222"]);
    expect(calculateInvalidIdsFromRange("1698522-1698528")).toEqual([]);
    expect(calculateInvalidIdsFromRange("446443-446449")).toEqual(["446446"]);
    expect(calculateInvalidIdsFromRange("38593856-38593862")).toEqual([
      "38593859",
    ]);
    expect(calculateInvalidIdsFromRange("565653-565659")).toEqual(["565656"]);
    expect(calculateInvalidIdsFromRange("824824821-824824827")).toEqual([
      "824824824",
    ]);
    expect(calculateInvalidIdsFromRange("2121212118-2121212124")).toEqual([
      "2121212121",
    ]);
  });
});
