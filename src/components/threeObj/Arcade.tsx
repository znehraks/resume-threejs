import { useLoader, useThree } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { useEffect } from "react";
import { getThreeCoord } from "../../utils";
import * as THREE from "three";
const vector2 = new THREE.Vector2();
export const Arcade = () => {
  const { raycaster, gl, camera } = useThree();
  const modeling = useLoader(FBXLoader, "/arcade.fbx");

  modeling.scale.set(0.05, 0.05, 0.05);
  modeling.position.set(22, 0, -22);
  modeling.rotation.set(0, -Math.PI / 4, 0);
  modeling.name = "arcade";

  useEffect(() => {
    const handlePointerdown = (e: PointerEvent) => {
      const { clientX, clientY } = e;
      const coord = getThreeCoord({ clientX, clientY });
      vector2.set(coord.x, coord.y);
      raycaster.setFromCamera(vector2, camera);
      const intersects = raycaster.intersectObject(modeling);
      if (intersects.length > 0) {
        const infoDOM = document.querySelector(
          ".info-wrapper"
        ) as HTMLDivElement;
        infoDOM.style.display = "flex";
      }
    };

    gl.domElement.addEventListener("pointerdown", handlePointerdown);
    return () => {
      gl.domElement.removeEventListener("pointerdown", handlePointerdown);
    };
  }, []);

  return <primitive object={modeling} />;
};
