import { useBox } from '@react-three/cannon';
import { Mesh } from 'three';

export const TestMesh = () => {
  const [ref] = useBox<Mesh>(() => ({ mass: 0.01 }));
  return (
    <mesh ref={ref} position={[3, 10, 0]}>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  );
};
