import React from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Player } from "./threeObj/Player";
import { Floor } from "./threeObj/Floor";
import { PointerCircle } from "./threeObj/PointerCircle";
import { House } from "./threeObj/House";
import { Light } from "./threeObj/Lights";
import { Wall } from "./threeObj/Wall";
import { WALL_SIDE_TYPE } from "./types";
import { Books } from "./threeObj/Books";
import { Rug } from "./threeObj/Rug";
import { LogoBox } from "./threeObj/LogoBox";
import { logos } from "./data";
import { Laptop } from "./threeObj/Laptop";
import { Lavacon } from "./threeObj/Lavacons";
import { Arcade } from "./threeObj/Arcade";
import { Basketball } from "./threeObj/Basketball";

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
        <Wall
          key={side}
          side={side as WALL_SIDE_TYPE}
          width={50}
          depth={1}
          height={6}
        />
      ))}
      <Player />
      <House />
      <Books />
      <Laptop />
      <Rug />
      {logos.map(({ name, position, width, depth, height, rotation }) => (
        <LogoBox
          key={name}
          name={name}
          url={`/images/${name}.png`}
          position={position}
          rotation={rotation}
          width={width}
          depth={depth}
          height={height}
        />
      ))}
      <PointerCircle />
      <Basketball />
      <Arcade />
      <Lavacon />
    </Canvas>
  );
};
