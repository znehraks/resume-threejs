import { CircleGeometry } from "three";

export const PointerCircle = () => {
  return (
    <mesh
      name="pointerMesh"
      position={[0, 0.01, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <circleGeometry args={[1, 32]} />
      <meshBasicMaterial color={"green"} depthWrite={false} />
    </mesh>
  );
};
