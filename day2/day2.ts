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

  const substrings = Array.from(
    { length: Math.floor(id.length / 2) },
    (_, i) => ({
      appearances: Math.floor(id.length / (i + 1)),
      substring: id.slice(0, i + 1),
    })
  );

  return substrings.some(({ appearances, substring }) => {
    const repeated = substring.repeat(appearances);
    return repeated === id;
  });
};

export const calculateInvalidIdsFromRange = (range: string): string[] => {
  const ids = calculateIdsFromRange(range);
  return ids.filter((id) => isInvalidId(id));
};

export const calculateTotalOfInvalidIds = (ranges: string[]): number => {
  const ids = ranges.flatMap(calculateInvalidIdsFromRange);
  return ids.reduce((sum, id) => sum + Number(id), 0);
};
