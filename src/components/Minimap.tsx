import styled from "styled-components";
import { useEffect } from "react";
import { useThree } from "@react-three/fiber";

const MinimapWrapper = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #333333cc;
`;

const CurrentPositionCircle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  top: 10px;
  left: 10px;
  background-color: red;
`;

const UtilityPositionSquare = styled.div`
  width: 10px;
  height: 10px;
  top: 0;
  left: 0;
  &.arcade {
    background-color: blue;
  }
`;

const ZoneSquare = styled.div`
  position: absolute;

  &.logo {
    width: 50px;
    height: 50px;
    top: 0;
    left: 0;
    background-color: #f0ff0055;
  }
  &.game {
    width: 25px;
    height: 25px;
    top: 0px;
    left: 75px;
    background-color: #00ff0055;
  }
`;

export const Minimap = () => {
  return (
    <MinimapWrapper>
      <CurrentPositionCircle id="current-position-circle" />
      <ZoneSquare className="logo" />
      <ZoneSquare className="game" />
      <UtilityPositionSquare className="arcade" />
    </MinimapWrapper>
  );
};
