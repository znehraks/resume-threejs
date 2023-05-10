import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { ILogo } from "../data";

export const Lavacon = () => {
  const modeling = useLoader(OBJLoader, "/lavacon.obj");

  console.log(modeling);
  modeling.scale.set(1, 1, 1);
  modeling.position.set(20, 0, -23);
  modeling.rotation.set(0, -Math.PI / 2, 0);

  return <primitive object={modeling}></primitive>;
};
