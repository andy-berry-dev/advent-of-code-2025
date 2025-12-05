import fs from "fs";

import { calculateFreshVeggies, parseInput } from "./day5";

const input = fs.readFileSync("day5/input.txt", "utf-8").trim();

const { ranges, veggieIds } = parseInput(input);
const freshVeggies = calculateFreshVeggies(ranges, veggieIds);

const totalFreshVeggies = freshVeggies.filter(Boolean).length;

console.error(`The total of fresh veggies is: ${totalFreshVeggies}`);
