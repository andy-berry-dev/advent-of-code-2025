type BooleanMatrix = boolean[][];
type NumberMatrix = number[][];

const directions = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

export const createMatrixFromInput = (input: string[]): BooleanMatrix => {
  const maximumLength = Math.max(...input.map((line) => line.length));
  return input.map((line) =>
    line
      .split("")
      .map((char) => (char === "@" ? true : false))
      .concat(new Array(maximumLength - line.length).fill(false))
  );
};

export const calculatePaperRollsThatCanBeMoved = (
  matrix: BooleanMatrix
): NumberMatrix => {
  return matrix.reduce<NumberMatrix>((moveableIndexes, row, rowIndex) => {
    return [
      ...moveableIndexes,
      row.reduce<number[]>((acc, cell, cellIndex) => {
        if (!cell) {
          return acc;
        }

        const numberOfAdjacentPaperRolls = directions.reduce<number>(
          (currentCount, [dx, dy]) => {
            const newRow = rowIndex + dx;
            const newCol = cellIndex + dy;
            if (
              newRow >= 0 &&
              newRow < matrix.length &&
              newCol >= 0 &&
              newCol < row.length
            ) {
              return currentCount + (matrix[newRow][newCol] ? 1 : 0);
            }
            return currentCount;
          },
          0
        );

        if (numberOfAdjacentPaperRolls < 4) {
          return [...acc, cellIndex];
        }
        return acc;
      }, []),
    ];
  }, []);
};

export const applyRollsThatHaveBeenRemoved = (
  matrix: BooleanMatrix,
  rollsToRemove: NumberMatrix
): BooleanMatrix => {
  return matrix.map((row, rowIndex) => {
    return row.map((cell, cellIndex) => {
      if (rollsToRemove[rowIndex].includes(cellIndex)) {
        return false;
      }
      return cell;
    });
  });
};

export const recrusivelyRemovePaperRolls = (
  matrix: BooleanMatrix,
  totalRollsRemoved = 0
): number => {
  const rollsThatCanBeRemoved = calculatePaperRollsThatCanBeMoved(matrix);
  const newMatrix = applyRollsThatHaveBeenRemoved(
    matrix,
    rollsThatCanBeRemoved
  );
  const totalRollsThatCanBeRemoved = rollsThatCanBeRemoved.reduce(
    (acc, curr) => acc + curr.length,
    0
  );
  const newTotalRollsRemoved = totalRollsRemoved + totalRollsThatCanBeRemoved;

  if (totalRollsThatCanBeRemoved === 0) {
    return totalRollsRemoved;
  }
  return recrusivelyRemovePaperRolls(newMatrix, newTotalRollsRemoved);
};
