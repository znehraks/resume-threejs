import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Floor } from "./threeObj/Floor";
import { Light } from "./threeObj/Lights";
import { OrbitControls } from "@react-three/drei";
import { Wall } from "./threeObj/Wall";
import { WALL_SIDE_TYPE } from "./types";

// TODO 게임방 입장 시, 튜토리얼 팝업 추가하기 방향키 구역별 게임 설명 등.
export const PerspectiveCanvas = () => {
  const aspectRatio = window.innerWidth / window.innerHeight;
  return (
    <Canvas
      gl={{ antialias: true }}
      shadows={{
        enabled: true,
        autoUpdate: true,
        type: THREE.PCFSoftShadowMap,
      }}
      camera={{
        fov: 30,
        aspect: aspectRatio,
        near: 0.1,
        far: 1000,
        position: [0, 3, 0],
        zoom: 0.5,
      }}
    >
      <OrbitControls target={[1, 3, 0]} />
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
    </Canvas>
  );
};
