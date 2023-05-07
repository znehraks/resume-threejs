import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Player } from "./threeObj/Player";
import { OrbitControls } from "@react-three/drei";
import { Floor } from "./threeObj/Floor";
import { PointerCircle } from "./threeObj/PointerCircle";
import { House } from "./threeObj/House";
import { Spot } from "./threeObj/Spot";
import { Light } from "./threeObj/Lights";

export const MainCanvas = () => {
  const aspectRatio = window.innerWidth / window.innerHeight;
  return (
    <Canvas
      shadows={{
        enabled: true,
        autoUpdate: true,
        type: THREE.PCFSoftShadowMap,
      }}
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
      <Light />
      <Floor />
      <Player />
      <House />
      <Spot />
      <PointerCircle />
    </Canvas>
  );
};
