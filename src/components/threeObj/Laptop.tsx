/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useState } from "react";
import * as THREE from "three";
import { Mesh } from "three";

/* eslint-disable react/no-unknown-property */
export const Laptop = () => {
  const { scene: entireLaptopScene } = useLoader(GLTFLoader, "/laptop.glb");
  const [laptopMesh, setLaptopMesh] = useState<THREE.Group | undefined>();
  useEffect(() => {
    entireLaptopScene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        child.receiveShadow = true;
        child.castShadow = true;
      }
    });
    const group = new THREE.Group();
    const [laptopTopPart, laptopBottomPart] = entireLaptopScene.children;
    group.add(laptopTopPart.clone(), laptopBottomPart.clone());
    group.position.set(-8, -0.5, -15);
    group.scale.set(1, 1, 1);
    group.rotation.set(0, (Math.PI * 3) / 4, 0);

    setLaptopMesh(group);
  }, [laptopMesh]);
  if (laptopMesh) {
    return <primitive name="book" object={laptopMesh} />;
  }
  return null;
};
