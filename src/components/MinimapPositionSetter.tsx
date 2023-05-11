import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { toMinimapPosition } from "../utils";
import { radToDeg } from "three/src/math/MathUtils";

export const MinimapPositionSetter = () => {
  const three = useThree();
  useEffect(() => {
    const arcadeMesh = three.scene.getObjectByName("arcade");
    if (arcadeMesh) {
      const arcadePositionDiv = document.querySelector(
        ".arcade"
      ) as HTMLDivElement;
      if (arcadePositionDiv) {
        const minimapPosition = toMinimapPosition(arcadeMesh.position);
        arcadePositionDiv.style.transform = `translate(${minimapPosition.x}px,${
          minimapPosition.y
        }px) rotate(${radToDeg(arcadeMesh.rotation.y)}deg)`;
      }
    }
  }, []);
  return null;
};
