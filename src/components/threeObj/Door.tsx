import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { ILogo } from "../data";

export const Door = () => {
  const modeling = useLoader(OBJLoader, "/door.obj");
  modeling.scale.set(0.3, 0.3, 0.3);
  modeling.position.set(20, 0, -23);
  modeling.rotation.set(0, -Math.PI / 2, 0);
  return <primitive object={modeling}></primitive>;
};
