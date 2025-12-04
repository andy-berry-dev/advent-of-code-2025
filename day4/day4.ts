type BooleanMatrix = boolean[][];
type NumberMatrix = number[][];

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

        let numberOfAdjacentPaperRolls = 0;
        if (rowIndex > 0) {
          const previousRow = matrix[rowIndex - 1];
          if (cellIndex > 0) {
            numberOfAdjacentPaperRolls += previousRow[cellIndex - 1] ? 1 : 0;
          }
          numberOfAdjacentPaperRolls += previousRow[cellIndex] ? 1 : 0;
          if (cellIndex < row.length - 1) {
            numberOfAdjacentPaperRolls += previousRow[cellIndex + 1] ? 1 : 0;
          }
        }
        if (cellIndex > 0) {
          numberOfAdjacentPaperRolls += row[cellIndex - 1] ? 1 : 0;
        }
        if (cellIndex < row.length - 1) {
          numberOfAdjacentPaperRolls += row[cellIndex + 1] ? 1 : 0;
        }

        if (rowIndex < matrix.length - 1) {
          const nextRow = matrix[rowIndex + 1];
          if (cellIndex > 0) {
            numberOfAdjacentPaperRolls += nextRow[cellIndex - 1] ? 1 : 0;
          }
          numberOfAdjacentPaperRolls += nextRow[cellIndex] ? 1 : 0;
          if (cellIndex < row.length - 1) {
            numberOfAdjacentPaperRolls += nextRow[cellIndex + 1] ? 1 : 0;
          }
        }
        if (numberOfAdjacentPaperRolls < 4) {
          return [...acc, cellIndex];
        }
        return acc;
      }, []),
    ];
  }, []);
};
