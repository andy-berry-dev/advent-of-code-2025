import fs from "fs";

import { calculateTotalIds, parseInput } from "./day5";

const input = fs.readFileSync("day5/input.txt", "utf-8").trim();

const { ranges } = parseInput(input);
const totalFreshVeggies = calculateTotalIds(ranges);

console.error(`The total of fresh veggies is: ${totalFreshVeggies}`);
