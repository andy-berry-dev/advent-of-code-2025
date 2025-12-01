import fs from "fs";

import { applyRotations } from "./day1";

const input = fs.readFileSync("day1/input.txt", "utf-8").trim().split("\n");

const [, code] = applyRotations(input, 50);
console.log(`The code is: ${code}`);
