export const findHighestJoltage = (batteryInput: string) => {
  const numbers = batteryInput.split("").map(Number);

  const highestNumbers = numbers.reduce<number[]>(
    (acc, curr, index) => {
      const indexToReplace = Math.max(
        acc.indexOf(Math.min(...acc)),
        acc.indexOf(Math.min(...acc.reverse()))
      );
      if (indexToReplace === -1) return acc;

      if (curr > acc[indexToReplace]) {
        delete acc[indexToReplace];
        acc[index] = curr;
      }
      return acc;
    },
    [0, 0]
  );

  return parseInt(highestNumbers.join(""), 10);
};

export const calculateMaxJoltage = (batteryInputs: string[]) => {
  return batteryInputs
    .map(findHighestJoltage)
    .reduce((acc, curr) => acc + curr, 0);
};
