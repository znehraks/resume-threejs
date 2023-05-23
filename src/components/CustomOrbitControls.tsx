import { PointerLockControls } from "@react-three/drei";
import { PointerLockControls as PLCType } from "three-stdlib";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";

export const CustomOrbitControls = () => {
  const { camera, gl } = useThree();
  const controlsRef = useRef<PLCType>(null);
  const [moveForward, setMoveForward] = useState(false);
  const [moveBackward, setMoveBackward] = useState(false);
  const [moveLeft, setMoveLeft] = useState(false);
  const [moveRight, setMoveRight] = useState(false);

  useFrame(() => {
    const velocity = new THREE.Vector3();
    const direction = new THREE.Vector3();

    const onKeyDown = (event: KeyboardEvent) => {
      switch (event.keyCode) {
        case 38: // up
        case 87: // w
          setMoveForward(true);
          break;
        case 37: // left
        case 65: // a
          setMoveLeft(true);
          break;
        case 40: // down
        case 83: // s
          setMoveBackward(true);
          break;
        case 39: // right
        case 68: // d
          setMoveRight(true);
          break;
        default:
          break;
      }
    };

    const onKeyUp = (event: KeyboardEvent) => {
      switch (event.keyCode) {
        case 38: // up
        case 87: // w
          setMoveForward(false);
          break;
        case 37: // left
        case 65: // a
          setMoveLeft(false);
          break;
        case 40: // down
        case 83: // s
          setMoveBackward(false);
          break;
        case 39: // right
        case 68: // d
          setMoveRight(false);
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);

    if (moveForward) velocity.z += 0.1;
    if (moveBackward) velocity.z -= 0.1;
    if (moveLeft) velocity.x -= 0.1;
    if (moveRight) velocity.x += 0.1;

    const controls = controlsRef.current;
    if (!controls) return;
    controls.moveRight(velocity.x);
    controls.moveForward(velocity.z);

    camera.position.copy(controls.getObject().position);

    document.removeEventListener("keydown", onKeyDown);
    document.removeEventListener("keyup", onKeyUp);
  });
  return <PointerLockControls ref={controlsRef} />;
};
