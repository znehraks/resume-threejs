import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

export const MinimapPositionSetter = () => {
  const three = useThree();
  useEffect(() => {
    three.scene.getObjectByName("d");
  }, []);
  return null;
};
