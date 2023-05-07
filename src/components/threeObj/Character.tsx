import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import * as THREE from "three";
const meshHeight = 1;

let isPressed = false;
const mouse = new THREE.Vector2();
const destinationPoint = new THREE.Vector3();
let angle = 0;

export const Character = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const three = useThree();

  const checkIntersects = () => {
    console.log("checkIntersects");

    const floorMesh = three.scene.getObjectByName("floor") as THREE.Mesh;

    const intersects = three.raycaster.intersectObject(floorMesh);
    const player = meshRef.current;
    const pointerMesh = three.scene.getObjectByName(
      "pointerMesh"
    ) as THREE.Mesh;

    if (!player) return;
    for (const item of intersects) {
      if (item.object.name === "floor") {
        destinationPoint.x = item.point.x;
        destinationPoint.y = 0.3;
        destinationPoint.z = item.point.z;
        player.lookAt(destinationPoint);

        // console.log(item.point)

        player.userData.moving = true;

        pointerMesh.position.x = destinationPoint.x;
        pointerMesh.position.z = destinationPoint.z;
      }
      break;
    }
  };
  // 변환된 마우스 좌표를 이용해 래이캐스팅
  const raycasting = () => {
    three.raycaster.setFromCamera(mouse, three.camera);
    checkIntersects();
    console.log("raycasting");
  };

  const calculateMousePosition = (e: PointerEvent) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -((e.clientY / window.innerHeight) * 2 - 1);
  };

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
      isPressed = false;
      three.gl.domElement.removeEventListener("pointerdown", handlePointerDown);
      three.gl.domElement.removeEventListener("pointermove", handlePointerMove);
      three.gl.domElement.removeEventListener("pointerup", handlePointerUp);
    };
  }, []);
  useFrame(() => {
    const player = meshRef.current;
    if (!player) return;
    // TODO 이곳에서 이동로직 처리
    // console.log("isPressed", isPressed);
    // console.log("mouse", mouse);
    if (isPressed) {
      raycasting();
    }
    if (player.userData.moving) {
      angle = Math.atan2(
        destinationPoint.z - player.position.z,
        destinationPoint.x - player.position.x
      );
      player.position.x += Math.cos(angle) * 0.05;
      player.position.z += Math.sin(angle) * 0.05;

      three.camera.position.x = 1 + player.position.x;
      three.camera.position.z = 5 + player.position.z;
    }
  });
  return (
    <mesh ref={meshRef} name="character" position={[0, meshHeight / 2, 0]}>
      <boxGeometry args={[1, meshHeight, 1]} />
      <meshBasicMaterial color={0xff0000} />
    </mesh>
  );
};
