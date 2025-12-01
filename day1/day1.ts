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

export const applyRotations = (inputs: string[], start = 50): number[] =>
  inputs.reduce(
    (acc, curr) => {
      const newPosition = acc.slice(-1)[0] + parseInput(curr);
      const newPositionWithWraparound =
        newPosition % 100 < 0 ? 100 + (newPosition % 100) : newPosition % 100;
      return [...acc, newPositionWithWraparound];
    },
    [start]
  );

export const calculateCode = (rotations: string[], start = 50): number => {
  const positions = applyRotations(rotations, start);
  return positions.reduce((count, pos) => (pos === 0 ? count + 1 : count), 0);
};
