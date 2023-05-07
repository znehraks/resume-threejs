export const toMinimapPosition = (position: {
  x: number;
  y: number;
  z: number;
}) => {
  return {
    x: position.x * 2 + 100 - 5,
    y: position.z * 1.2 + 60 - 5,
  };
};
