const numberOfBatteriesToTurnOn = 12;

const bases = Array.from(
  { length: numberOfBatteriesToTurnOn },
  (_, i) => 10 ** (numberOfBatteriesToTurnOn - i - 1)
);

export const findHighestJoltage = (batteryInput: string) => {
  const batteries = batteryInput.split("").map(Number);

  return bases.reduce(
    ({ runningCount, currentBatteries }, base, baseIndex) => {
      const isLastBatteryToChoose = baseIndex === numberOfBatteriesToTurnOn - 1;
      const batteriesToChooseFrom = isLastBatteryToChoose
        ? currentBatteries
        : currentBatteries.slice(0, baseIndex - numberOfBatteriesToTurnOn + 1);
      const indexOfNextHighest = currentBatteries.indexOf(
        Math.max(...batteriesToChooseFrom)
      );
      const batteryJoltage = currentBatteries[indexOfNextHighest];

      return {
        runningCount: runningCount + batteryJoltage * base,
        currentBatteries: currentBatteries.slice(indexOfNextHighest + 1),
      };
    },
    {
      runningCount: 0,
      currentBatteries: batteries,
    }
  ).runningCount;
};

export const calculateMaxJoltage = (batteryInputs: string[]) => {
  return batteryInputs
    .map(findHighestJoltage)
    .reduce((acc, curr) => acc + curr, 0);
};
