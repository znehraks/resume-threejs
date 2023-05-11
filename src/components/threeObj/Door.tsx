import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

export const Door = () => {
  const modeling = useLoader(OBJLoader, "/door.obj");
  modeling.scale.set(0.3, 0.3, 0.3);
  modeling.position.set(20, 0, -23);
  modeling.rotation.set(0, -Math.PI / 2, 0);
  modeling.name = "gameDoor";
  return <primitive object={modeling}></primitive>;
};
