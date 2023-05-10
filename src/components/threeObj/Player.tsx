import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import * as THREE from "three";
import { toMinimapPosition } from "../../utils";
import { gsap } from "gsap";
import { useRecoilState } from "recoil";
import { dialogStartTriggerAtom } from "../../atoms";
const meshHeight = 1;

let isPressed = false;
const mouse = new THREE.Vector2();
const destinationPoint = new THREE.Vector3();
let angle = 0;

export const Player = () => {
  const [dialogStartTrigger, setDialogStartTrigger] = useRecoilState(
    dialogStartTriggerAtom
  );
  const meshRef = useRef<THREE.Mesh>(null);
  const { scene, camera, raycaster, gl, frameloop, setFrameloop } = useThree();

  const checkIntersects = () => {
    const floorMesh = scene.getObjectByName("floor") as THREE.Mesh;

    const intersects = raycaster.intersectObject(floorMesh);
    const player = meshRef.current;
    const pointerMesh = scene.getObjectByName("pointerMesh") as THREE.Mesh;

    if (!player) return;
    for (const item of intersects) {
      if (item.object.name === "floor") {
        destinationPoint.x = item.point.x;
        destinationPoint.y = 0.3;
        destinationPoint.z = item.point.z;
        player.lookAt(destinationPoint);

        player.userData.moving = true;

        pointerMesh.position.x = destinationPoint.x;
        pointerMesh.position.z = destinationPoint.z;
      }
      break;
    }
  };
  // 변환된 마우스 좌표를 이용해 래이캐스팅
  const raycasting = () => {
    raycaster.setFromCamera(mouse, camera);
    checkIntersects();
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

    gl.domElement.addEventListener("pointerdown", handlePointerDown);
    gl.domElement.addEventListener("pointermove", handlePointerMove);
    gl.domElement.addEventListener("pointerup", handlePointerUp);
    return () => {
      isPressed = false;
      gl.domElement.removeEventListener("pointerdown", handlePointerDown);
      gl.domElement.removeEventListener("pointermove", handlePointerMove);
      gl.domElement.removeEventListener("pointerup", handlePointerUp);
    };
  }, []);

  useFrame(() => {
    const player = meshRef.current;
    if (!player) return;
    const house = scene.getObjectByName("house");
    if (!house) return;
    const spotMesh = scene.getObjectByName("spot") as THREE.Mesh;
    if (!spotMesh) return;
    const currentPositionCircle = document.getElementById(
      "current-position-circle"
    );
    if (currentPositionCircle) {
      const minimapPosition = toMinimapPosition(player.position);
      currentPositionCircle.style.transform = `translate(${minimapPosition.x}px, ${minimapPosition.y}px)`;
    }
    const infoDOM = document.querySelector(".info-wrapper") as HTMLDivElement;

    const dialogDOM = document.querySelector(
      ".dialog-wrapper"
    ) as HTMLDivElement;

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

      camera.position.x = 1 + player.position.x;
      camera.position.z = 5 + player.position.z;

      console.log("player.position.x", player.position.x);
      console.log("player.position.z", player.position.z);
      if (player.position.x < -4 && player.position.z < -4) {
        // infoDOM.style.display = "block";
        setDialogStartTrigger(1);
        dialogDOM.style.display = "block";
      } else {
        // infoDOM.style.display = "none";
        setDialogStartTrigger(0);
        dialogDOM.style.display = "none";
      }
      if (
        Math.abs(destinationPoint.x - player.position.x) < 0.03 &&
        Math.abs(destinationPoint.z - player.position.z) < 0.03
      ) {
        player.userData.moving = false;
        console.log("멈춤");
      }
    }
  });
  return (
    <mesh
      castShadow
      receiveShadow
      ref={meshRef}
      name="player"
      position={[0, meshHeight / 2 + 1, 0]}
    >
      <boxGeometry args={[1, meshHeight, 1]} />
      <meshStandardMaterial color={"red"} />
    </mesh>
  );
};
