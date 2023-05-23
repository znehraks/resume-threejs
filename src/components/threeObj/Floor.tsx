import { usePlane } from '@react-three/cannon';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { TextureLoader } from 'three';

export const Floor = () => {
  const [ref] = usePlane<THREE.Mesh>(() => ({
    rotation: [-Math.PI / 2, 0, 0],
  }));
  const floorTexture = useLoader(TextureLoader, '/images/floor.jpg');
  floorTexture.wrapS = THREE.RepeatWrapping;
  floorTexture.wrapT = THREE.RepeatWrapping;
  floorTexture.repeat.x = 4;
  floorTexture.repeat.y = 4;
  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow
      name="floor"
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <planeGeometry args={[50, 50]} />
      <meshStandardMaterial shadowSide={THREE.BackSide} map={floorTexture} />
    </mesh>
  );
};
