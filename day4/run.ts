import fs from "fs";

import { createMatrixFromInput, recrusivelyRemovePaperRolls } from "./day4";

const input = fs.readFileSync("day4/input.txt", "utf-8").trim();

const matrix = createMatrixFromInput(input.split("\n"));
const countOfRollsThatCanMove = recrusivelyRemovePaperRolls(matrix);

console.error(
  `The total of rolls that can move is: ${countOfRollsThatCanMove}`
);
