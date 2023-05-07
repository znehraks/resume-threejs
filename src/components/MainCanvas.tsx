import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Player } from "./threeObj/Player";
import { OrbitControls } from "@react-three/drei";
import { Floor } from "./threeObj/Floor";
import { PointerCircle } from "./threeObj/PointerCircle";
import { House } from "./threeObj/House";
import { Spot } from "./threeObj/Spot";
import { Light } from "./threeObj/Lights";
import { Wall } from "./threeObj/Wall";
import { WALL_SIDE_TYPE } from "./types";
import { Books } from "./threeObj/Books";
import { Rug } from "./threeObj/Rug";
import { LogoBox } from "./threeObj/LogoBox";
import { logos } from "./data";

export const MainCanvas = () => {
  const aspectRatio = window.innerWidth / window.innerHeight;
  return (
    <Canvas
      gl={{ antialias: true }}
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
      {["top", "right", "bottom", "left"].map((side) => (
        <Wall side={side as WALL_SIDE_TYPE} width={50} depth={1} height={6} />
      ))}
      <Player />
      <House />
      <Books />
      <Rug />
      {logos.map(({ name, position, width, depth, height, rotation }) => (
        <LogoBox
          name={name}
          url={`/images/${name}.png`}
          position={position}
          rotation={rotation}
          width={width}
          depth={depth}
          height={height}
        />
      ))}
      <Spot />
      <PointerCircle />
    </Canvas>
  );
};
