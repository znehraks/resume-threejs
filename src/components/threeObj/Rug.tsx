import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three";

export const Rug = () => {
  const rugTexture = useLoader(TextureLoader, "/images/rug.jpg");
  rugTexture.wrapS = THREE.RepeatWrapping;
  rugTexture.wrapT = THREE.RepeatWrapping;
  rugTexture.repeat.x = 4;
  rugTexture.repeat.y = 4;
  return (
    <mesh
      position={[-10, 0, -10]}
      castShadow
      receiveShadow
      name="floor"
      rotation={[0, 0, 0]}
    >
      <cylinderGeometry args={[5, 5, 0.1, 32]} />
      <meshStandardMaterial map={rugTexture} />
    </mesh>
  );
};
