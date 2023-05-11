import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { ILogo, lavaconPositions } from "../data";
import { useEffect, useRef, useState } from "react";

export const Lavacon = () => {
  const modeling = useLoader(FBXLoader, "/lavacon.fbx");
  const [lavaconGroups, setLavaconGroups] = useState<THREE.Group[]>([]);
  useEffect(() => {
    const lavacons = lavaconPositions.map((position) => {
      const cloned = modeling.clone();
      cloned.traverse((child) => {
        child.castShadow = true;
        child.receiveShadow = true;
      });
      cloned.scale.set(3, 3, 3);
      cloned.position.set(position.x, position.y, position.z);
      cloned.rotation.set(0, -Math.PI / 2, 0);
      return cloned;
    });
    setLavaconGroups(lavacons);
  }, []);
  return (
    <>
      {lavaconGroups.map((group) => (
        <primitive key={group.id} object={group} />
      ))}
    </>
  );
};
