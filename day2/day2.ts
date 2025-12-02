export const calculateIdsFromRange = (range: string): string[] => {
  const [start, end] = range.split("-").map(Number);
  const ids = Array.from({ length: end - start + 1 }).map((_, i) =>
    (start + i).toString()
  );
  return ids;
};

export const isInvalidId = (id: string): boolean => {
  if (id.startsWith("0")) {
    return true;
  }
  const part1 = id.slice(0, id.length / 2);
  const part2 = id.slice(id.length / 2);
  return part1 === part2;
};

export const calculateInvalidIdsFromRange = (range: string): string[] => {
  const ids = calculateIdsFromRange(range);
  return ids.filter((id) => isInvalidId(id));
};

export const calculateTotalOfInvalidIds = (ranges: string[]): number => {
  const ids = ranges.flatMap(calculateInvalidIdsFromRange);
  return ids.reduce((sum, id) => sum + Number(id), 0);
};
