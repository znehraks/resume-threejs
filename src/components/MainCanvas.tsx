import { Canvas } from "@react-three/fiber";
import { Character } from "./threeObj/Character";
import { OrbitControls } from "@react-three/drei";
import { Floor } from "./threeObj/Floor";

export const MainCanvas = () => {
  const aspectRatio = window.innerWidth / window.innerHeight;
  return (
    <Canvas
      orthographic
      camera={{
        zoom: 50,
        position: [1, 5, 5],
        left: -1 * aspectRatio,
        right: 1 * aspectRatio,
        top: 1,
        bottom: -1,
        near: -1000,
        far: 1000,
      }}
    >
      <Character />
      <Floor />
    </Canvas>
  );
};
