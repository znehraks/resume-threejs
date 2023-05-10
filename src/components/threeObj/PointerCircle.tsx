import { CircleGeometry } from "three";

export const PointerCircle = () => {
  return (
    <mesh
      receiveShadow
      castShadow
      name="pointerMesh"
      position={[0, 0.01, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <circleGeometry args={[1, 32]} />
      <meshStandardMaterial color={"yellow"} transparent opacity={0.8} />
    </mesh>
  );
};
