export const parseIdRange = (input: string): [number, number] => {
  return input.split("-").map(Number) as [number, number];
};

export const calculateFreshVeggies = (
  ranges: [number, number][],
  veggieIds: number[]
) => {
  return veggieIds.map((id) =>
    ranges.some(([start, end]) => id >= start && id <= end)
  );
};

export const parseInput = (
  input: string
): {
  ranges: [number, number][];
  veggieIds: number[];
} => {
  return input.split("\n\n").reduce(
    (acc, section, index) => {
      const lines = section.split("\n").filter((line) => line.trim() !== "");
      if (index === 0) {
        acc.ranges = lines.map(parseIdRange);
      } else if (index === 1) {
        acc.veggieIds = lines.map(Number);
      }
      return acc;
    },
    { ranges: [] as [number, number][], veggieIds: [] as number[] }
  );
};

export const calculateTotalIds = (ranges: [number, number][]): number => {
  const sortedRanges = ranges.sort((a, b) => a[0] - b[0]);

  return sortedRanges.reduce(
    (acc, [start, end]) => {
      return {
        count:
          acc.count +
          Math.max(0, end - Math.max(start, acc.currentEnd + 1) + 1),
        currentEnd: Math.max(acc.currentEnd, end),
      };
    },
    { count: 0, currentEnd: -Infinity } as { count: number; currentEnd: number }
  ).count;
};
