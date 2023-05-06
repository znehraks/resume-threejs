import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three";

export const Floor = () => {
  const floorTexture = useLoader(TextureLoader, "/images/floor.jpg");
  floorTexture.wrapS = THREE.RepeatWrapping;
  floorTexture.wrapT = THREE.RepeatWrapping;
  floorTexture.repeat.x = 8;
  floorTexture.repeat.y = 8;
  return (
    <mesh name="floor" rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[100, 100]} />
      <meshBasicMaterial map={floorTexture} />
    </mesh>
  );
};
