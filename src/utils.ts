export const toMinimapPosition = (position: {
  x: number;
  y: number;
  z: number;
}) => {
  return {
    x: position.x * 2 + 50 - 5,
    y: position.z * 2 + 50 - 5,
  };
};

export const getYOffset = (mesh: THREE.Mesh) => {
  const { boundingBox } = mesh.geometry;
  if (boundingBox) {
    return (boundingBox.max.y - boundingBox.min.y) / 2;
  }
  return 0;
};
