import fs from "fs";

import { calculateMaxJoltage } from "./day3";

const input = fs.readFileSync("day3/input.txt", "utf-8").trim();
const rows = input.split("\n").map((line) => line.trim());

const maxVoltage = calculateMaxJoltage(rows);

console.error(`The maximum voltage is: ${maxVoltage}`);
