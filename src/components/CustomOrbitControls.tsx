import { PointerLockControls } from "@react-three/drei";
import { PointerLockControls as PLCType } from "three-stdlib";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";

const currentCameraLookAt = new THREE.Vector3(0, 0, -1);
let isLocked = false;
export const CustomOrbitControls = () => {
  const { gl, camera, controls } = useThree();
  const controlsRef = useRef<PLCType>(null);

  const preventMoveOutside = (position: THREE.Vector3) => {
    if (position.y !== 3) {
      position.y = 3;
    }
    if (position.x >= 24) {
      position.x = 24;
    }
    if (position.x <= -24) {
      position.x = -24;
    }
    if (position.z >= 24) {
      position.z = 24;
    }
    if (position.z <= -24) {
      position.z = -24;
    }
  };
  useEffect(() => {
    const handleControlsLock = () => {
      console.log("잠금");
      isLocked = true;
    };

    const handleControlsUnLock = () => {
      console.log("안잠금");
      isLocked = false;
    };

    const handleMouseMove = (event: MouseEvent) => {
      currentCameraLookAt.set(0, 0, -1);
      currentCameraLookAt.applyQuaternion(camera.quaternion);
      console.log("lookAtVector", currentCameraLookAt);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      // 바닥 혹은 벽 밖으로 못 나가게 처리
      if (!isLocked) return;
      switch (event.code) {
        case "ArrowUp":
        case "KeyW":
          console.log("앞으로!");
          camera.position.add(currentCameraLookAt.clone().multiplyScalar(1));
          break;
        case "ArrowLeft":
        case "KeyA":
          console.log("왼쪽으로!");
          camera.position.add(
            currentCameraLookAt
              .clone()
              .set(currentCameraLookAt.x, 0, currentCameraLookAt.z)
              .applyEuler(new THREE.Euler(0, Math.PI / 2, 0))
              .multiplyScalar(1)
          );
          break;
        case "ArrowDown":
        case "KeyS":
          console.log("뒤로!");
          camera.position.sub(currentCameraLookAt.clone().multiplyScalar(1));
          break;
        case "ArrowRight":
        case "KeyD":
          console.log("오른쪽으로!");
          camera.position.add(
            currentCameraLookAt
              .clone()
              .set(currentCameraLookAt.x, 0, currentCameraLookAt.z)
              .applyEuler(new THREE.Euler(0, -Math.PI / 2, 0))
              .multiplyScalar(1)
          );
          break;
      }
      preventMoveOutside(camera.position);
    };

    const handleKeyUp = (event: KeyboardEvent) => {};

    controlsRef?.current?.addEventListener("lock", handleControlsLock);
    controlsRef?.current?.addEventListener("unlock", handleControlsUnLock);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      controlsRef?.current?.removeEventListener("lock", handleControlsLock);
      controlsRef?.current?.removeEventListener("unlock", handleControlsUnLock);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);
  return <PointerLockControls ref={controlsRef} />;
};
