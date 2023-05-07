import { useThree } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import * as THREE from "three";
export const Light = () => {
  const three = useThree();
  const lightRef = useRef<THREE.DirectionalLight>(null);
  useEffect(() => {
    const light = lightRef.current;
    if (light) {
      // mapSize 세팅으로 그림자 퀄리티 설정
      light.shadow.mapSize.width = 2048;
      light.shadow.mapSize.height = 2048;
      // 그림자 범위
      light.shadow.camera.left = -100;
      light.shadow.camera.right = 100;
      light.shadow.camera.top = 100;
      light.shadow.camera.bottom = -100;
      light.shadow.camera.near = -100;
      light.shadow.camera.far = 100;
    }
  }, []);
  return (
    <>
      <ambientLight castShadow intensity={0.3} />
      <directionalLight ref={lightRef} castShadow intensity={0.5} />
    </>
  );
};
