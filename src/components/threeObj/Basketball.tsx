import { useFrame, useLoader } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
export const Basketball = () => {
  const modeling = useLoader(FBXLoader, '/basketball.fbx').clone();

  modeling.scale.set(0.1, 0.1, 0.1);
  modeling.position.set(19, 0.5, -19);
  modeling.traverse((child) => {
    child.castShadow = true;
    child.receiveShadow = true;
  });

  useFrame(() => {
    modeling.rotation.y += 0.03;
  });
  return <primitive object={modeling} />;
};
