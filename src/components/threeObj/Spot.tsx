export const Spot = () => {
  return (
    <mesh
      name="spot"
      position={[5, 0.005, 5]}
      rotation={[-Math.PI / 2, 0, 0]}
      receiveShadow
    >
      <planeGeometry args={[6, 6]} />
      <meshStandardMaterial color={"yellow"} transparent opacity={0.5} />
    </mesh>
  );
};
