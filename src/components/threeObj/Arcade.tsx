import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
export const Arcade = () => {
  const modeling = useLoader(FBXLoader, "/arcade.fbx");

  modeling.scale.set(0.05, 0.05, 0.05);
  modeling.position.set(22, 0, -22);
  modeling.rotation.set(0, -Math.PI / 4, 0);
  modeling.name = "arcade";
  return <primitive object={modeling} />;
};
