import { PointerLockControls } from "@react-three/drei";
import { PointerLockControls as PLCType } from "three-stdlib";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";

export const CustomOrbitControls = () => {
  const { camera, gl } = useThree();
  const controlsRef = useRef<PLCType>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const lookAtVector = new THREE.Vector3(0, 0, -1);
      lookAtVector.applyQuaternion(camera.quaternion);
      console.log("lookAtVector", lookAtVector);
    };
    gl.domElement.addEventListener("mousemove", handleMouseMove);
    return () => {
      gl.domElement.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <PointerLockControls ref={controlsRef} />;
};
