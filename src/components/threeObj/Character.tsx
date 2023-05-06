import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import * as THREE from "three";
const meshHeight = 1;

let isPressed = false;
const mouse = new THREE.Vector2();
const destinationPoint = new THREE.Vector2();

export const Character = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const three = useThree();
  function calculateMousePosition(e: PointerEvent) {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -((e.clientY / window.innerHeight) * 2 - 1);
  }
  useEffect(() => {
    const handlePointerDown = (e: PointerEvent) => {
      isPressed = true;
      calculateMousePosition(e);
    };
    const handlePointerMove = (e: PointerEvent) => {
      calculateMousePosition(e);
    };
    const handlePointerUp = () => {
      isPressed = false;
    };
    three.gl.domElement.addEventListener("pointerdown", handlePointerDown);
    three.gl.domElement.addEventListener("pointermove", handlePointerMove);
    three.gl.domElement.addEventListener("pointerup", handlePointerUp);
    return () => {
      three.gl.domElement.removeEventListener("pointerdown", handlePointerDown);
      three.gl.domElement.removeEventListener("pointermove", handlePointerMove);
      three.gl.domElement.removeEventListener("pointerup", handlePointerUp);
    };
  }, []);
  useFrame(() => {
    // TODO 이곳에서 이동로직 처리
  });
  return (
    <mesh ref={meshRef} name="character" position={[0, meshHeight / 2, 0]}>
      <boxGeometry args={[1, meshHeight, 1]} />
      <meshBasicMaterial color={0xff0000} />
    </mesh>
  );
};
