export const parseInput = (input: string): number => {
  const direction = input.charAt(0);
  const value = parseInt(input.slice(1), 10);

  if (direction === "L") {
    return -value;
  } else if (direction === "R") {
    return value;
  } else {
    return 0;
  }
};

export const calculateNewPosition = (
  currentPosition: number,
  rotation: string
): [number, number] => {
  const rotationsToApply = parseInput(rotation);
  const rotations = Array.from({ length: Math.abs(rotationsToApply) }, (_, i) =>
    1 * rotationsToApply > 0 ? 1 : -1
  );

  return rotations.reduce(
    ([position, wraparounds], rotation) => {
      const newPosition = position + rotation;
      const newPositionWithWraparound =
        newPosition < 0 ? newPosition + 100 : newPosition % 100;
      return [
        newPositionWithWraparound,
        wraparounds + (newPositionWithWraparound == 0 ? 1 : 0),
      ];
    },
    [currentPosition, 0]
  );
};

export const applyRotations = (
  inputs: string[],
  start = 50
): [number[], number] =>
  inputs.reduce<[number[], number]>(
    (acc, curr) => {
      const [currentPositions, currentWorkarounds] = acc;
      const currentPosition = currentPositions.slice(-1)[0];
      const [newPosition, wraparounds] = calculateNewPosition(
        currentPosition,
        curr
      );
      return [
        [...currentPositions, newPosition],
        currentWorkarounds + wraparounds,
      ];
    },
    [[start], 0]
  );
