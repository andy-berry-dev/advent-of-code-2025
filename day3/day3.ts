export const findHighestJoltage = (batteryInput: string) => {
  const numbers = batteryInput.split("").map(Number);

  const firstDigitIndex = numbers.indexOf(Math.max(...numbers.slice(0, -1)));
  const secondDigitIndex = numbers.indexOf(
    Math.max(...numbers.slice(firstDigitIndex + 1))
  );

  return numbers[firstDigitIndex] * 10 + numbers[secondDigitIndex];
};

export const calculateMaxJoltage = (batteryInputs: string[]) => {
  return batteryInputs
    .map(findHighestJoltage)
    .reduce((acc, curr) => acc + curr, 0);
};
