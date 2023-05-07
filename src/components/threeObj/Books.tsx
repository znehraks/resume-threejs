/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useState } from "react";
import { Mesh } from "three";

/* eslint-disable react/no-unknown-property */
export const Books = () => {
  const { scene: bookMesh } = useLoader(GLTFLoader, "/book.glb");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    bookMesh.traverse((child) => {
      if ((child as Mesh).isMesh) {
        child.receiveShadow = true;
        child.castShadow = true;
      }
    });
    bookMesh.castShadow = true;
    bookMesh.receiveShadow = true;
    bookMesh.position.set(-10, 0, -12);
    bookMesh.scale.set(3, 3, 3);
    bookMesh.rotation.set(0, -Math.PI / 4, 0);

    setIsReady(true);
  }, [bookMesh]);
  if (isReady) {
    return (
      <group castShadow receiveShadow>
        <primitive name="book" object={bookMesh} />
      </group>
    );
  }
  return null;
};
