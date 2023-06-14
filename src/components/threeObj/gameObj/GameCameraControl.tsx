import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";

const currentCameraLookAt = new THREE.Vector3(0, 0, -1);
export const GameCameraControl = () => {
  const { gl, camera, controls } = useThree();
  useEffect(() => {
    const handleControlsLock = () => {
      console.log("잠금");
    };

    const handleControlsUnLock = () => {
      console.log("안잠금");
    };

    const handleMouseMove = (event: MouseEvent) => {
      currentCameraLookAt.set(0, 0, -1);
      currentCameraLookAt.applyQuaternion(camera.quaternion);
      console.log("lookAtVector", currentCameraLookAt);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.code) {
        case "ArrowUp":
        case "KeyW":
          console.log("앞으로!");
          camera.position.add(currentCameraLookAt.multiplyScalar(1));
          break;
        case "ArrowLeft":
        case "KeyA":
          console.log("왼쪽으로!");
          break;
        case "ArrowDown":
        case "KeyS":
          console.log("뒤로!");
          camera.position.sub(currentCameraLookAt.multiplyScalar(1));
          break;
        case "ArrowRight":
        case "KeyD":
          console.log("오른쪽으로!");
          break;
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {};

    controls?.addEventListener("lock", handleControlsLock);
    controls?.addEventListener("unlock", handleControlsUnLock);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      controls?.removeEventListener("lock", handleControlsLock);
      controls?.removeEventListener("unlock", handleControlsUnLock);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);
  return null;
};
