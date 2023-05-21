import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { canvasModeAtom } from "../atoms";
import { CANVAS_MODE } from "./enums";
const InfoWrapper = styled.div`
  width: 300px;
  height: 150px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: aliceblue;
  border: 1px solid grey;
  border-radius: 10px;
  box-shadow: 2px 2px #33333344;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &.closed {
    display: none;
  }
  & > span {
    font-size: 22px;
  }
`;
const ButtonContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  & > button {
    transition-duration: 0.3s;
    text-decoration: none;
    outline: none;
    padding: 5px 10px;
    border: 1px solid grey;
    background-color: beige;
    font-size: 20px;
    cursor: pointer;
    :hover {
      background-color: burlywood;
    }
  }
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
        }px,${window.innerHeight / 2 - 75}px)`;
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClose = () => {
    const infoWrapperDOM = infoWrapperRef.current;
    if (infoWrapperDOM) {
      infoWrapperDOM.style.display = "none";
    }

    const bottomDialogDOM = document.querySelector(
      ".dialog-wrapper"
    ) as HTMLDivElement;
    if (bottomDialogDOM) {
      bottomDialogDOM.style.display = "none";
    }
  };
  return (
    <InfoWrapper className={`info-wrapper`} ref={infoWrapperRef}>
      <span>게임방으로 이동할까요?</span>
      <ButtonContainer>
        <button
          onClick={() => {
            if (canvasMode === CANVAS_MODE.ORTHOGONAL) {
              setCanvasMode(CANVAS_MODE.PERSPECTIVE);
              handleClose();
            }
          }}
        >
          YES
        </button>
        <button onClick={handleClose}>NO</button>
      </ButtonContainer>
    </InfoWrapper>
  );
};
