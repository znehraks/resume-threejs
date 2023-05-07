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
export const Minimap = () => {
  return (
    <MinimapWrapper>
      <CurrentPositionCircle id="current-position-circle" />
    </MinimapWrapper>
  );
};
