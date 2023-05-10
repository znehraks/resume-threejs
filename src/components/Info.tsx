import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { canvasModeAtom } from "../atoms";
import { CANVAS_MODE } from "./enums";
const InfoWrapper = styled.div`
  width: 300px;
  height: 500px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: aliceblue;
  display: none;
`;
// TODO 특정 위치에서 마우스 클릭 등의 이벤트 발생 시, 실제 정보를 보여줄 컴포넌트
export const Info = () => {
  const [canvasMode, setCanvasMode] = useRecoilState(canvasModeAtom);
  const infoWrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const infoWrapperDOM = infoWrapperRef.current;

    const handleResize = () => {
      if (infoWrapperDOM) {
        infoWrapperDOM.style.transform = `translate(${
          window.innerWidth / 2 - 150
        }px,${window.innerHeight / 2 - 250}px)`;
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <InfoWrapper
      className="info-wrapper"
      ref={infoWrapperRef}
      // onClick={() => {
      //   if (canvasMode === CANVAS_MODE.ORTHOGONAL) {
      //     setCanvasMode(CANVAS_MODE.PERSPECTIVE);
      //   } else {
      //     setCanvasMode(CANVAS_MODE.ORTHOGONAL);
      //   }
      // }}
    ></InfoWrapper>
  );
};
