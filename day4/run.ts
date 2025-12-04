import fs from "fs";

import {
  calculatePaperRollsThatCanBeMoved,
  createMatrixFromInput,
} from "./day4";

const input = fs.readFileSync("day4/input.txt", "utf-8").trim();

const matrix = createMatrixFromInput(input.split("\n"));
const rollsThatCanMove = calculatePaperRollsThatCanBeMoved(matrix);
const countOfRollsThatCanMove = rollsThatCanMove.reduce(
  (acc, curr) => acc + curr.length,
  0
);

console.error(
  `The total of rolls that can move is: ${countOfRollsThatCanMove}`
);
