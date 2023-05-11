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
  top: 10px;
  left: 10px;
  &.door {
    background-color: blue;
  }
`;

const ZoneSquare = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #f0ff0033;
`;

export const Minimap = () => {
  return (
    <MinimapWrapper>
      <CurrentPositionCircle id="current-position-circle" />
      <ZoneSquare />
      <UtilityPositionSquare className="door" />
    </MinimapWrapper>
  );
};
