import fs from "fs";

import { calculateTotalOfInvalidIds } from "./day2";

const input = fs.readFileSync("day2/input.txt", "utf-8").trim();

const invalidIds = calculateTotalOfInvalidIds(input.split(","));

console.error(`The total of invalid IDs is: ${invalidIds}`);
