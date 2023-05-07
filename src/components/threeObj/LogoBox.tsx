import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three";
import { ILogo } from "../data";

interface IProps extends ILogo {
  url: string;
}
export const LogoBox = ({
  url,
  name,
  position,
  width,
  depth,
  height,
  rotation,
}: IProps) => {
  const logoTexture = useLoader(TextureLoader, url);
  logoTexture.wrapS = THREE.RepeatWrapping;
  logoTexture.wrapT = THREE.RepeatWrapping;
  logoTexture.repeat.x = 1;
  logoTexture.repeat.y = 1;
  return (
    <mesh
      castShadow
      receiveShadow
      name={name}
      position={position}
      rotation={rotation}
    >
      <boxGeometry args={[width, height, depth]} />
      <meshStandardMaterial
        clipShadows
        shadowSide={THREE.FrontSide}
        map={logoTexture}
        metalness={0.2}
        roughness={0.9}
      />
    </mesh>
  );
};
