/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { getYOffset } from "../../utils";

interface IProps {
  position: {
    x: number;
    y: number;
    z: number;
  };
}

/* eslint-disable react/no-unknown-property */
export const House = () => {
  const { scene: houseMesh } = useLoader(GLTFLoader, "/house.glb");
  useEffect(() => {
    const mesh = houseMesh.children[0] as THREE.Mesh;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    houseMesh.castShadow = true;
    houseMesh.receiveShadow = true;
    const yOffset = getYOffset(mesh);
    houseMesh.position.set(5, 0 + yOffset, 2);
    houseMesh.visible = false;
    houseMesh.scale.set(2, 2, 2);
  }, [houseMesh]);
  return <primitive name="house" object={houseMesh} />;
};
