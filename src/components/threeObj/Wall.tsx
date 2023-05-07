import { useLoader } from "@react-three/fiber";
import { RepeatWrapping, TextureLoader, Vector3 } from "three";
import { WALL_SIDE_TYPE } from "../constants";

export const Wall = ({
  side,
  width,
  depth,
  height,
}: {
  side: WALL_SIDE_TYPE;
  width: number;
  depth: number;
  height: number;
}) => {
  const brickTexture = useLoader(TextureLoader, "/images/brick.jpg");
  brickTexture.wrapS = RepeatWrapping;
  brickTexture.wrapT = RepeatWrapping;
  brickTexture.repeat.x = 4;
  brickTexture.repeat.y = 1;
  return (
    <mesh
      position={(() => {
        switch (side) {
          case "top":
            return [0, height / 2, -width / 2];

          case "right":
            return [width / 2, height / 2, 0];

          case "bottom":
            return [0, height / 2, width / 2];

          case "left":
            return [-width / 2, height / 2, 0];
        }
      })()}
    >
      <boxGeometry
        args={(() => {
          switch (side) {
            case "top":
              return [width, height, depth];

            case "right":
              return [depth, height, width];

            case "bottom":
              return [width, height, depth];

            case "left":
              return [depth, height, width];
          }
        })()}
      />
      <meshStandardMaterial map={brickTexture} />
    </mesh>
  );
};
