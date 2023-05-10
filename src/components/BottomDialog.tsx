import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { canvasModeAtom, dialogStartTriggerAtom } from "../atoms";
import { CANVAS_MODE } from "./enums";

const dialogStringTopLeft = `이곳은 Jay가 능숙하게 다루는 툴들을 모아둔 곳이에요.     천천히 둘러보세요.!. 혹시나 추가했으면 하는 궁금한 점이 있다면, 제 Velog에 댓글로 남겨주시면 감사하겠습니다.`;
const dialogStringTopRight = `이곳은 간단한 미니게임방으로 연결되는 통로입니다. 하지만 아직 준비중입니다.!`;
const DialogWrapper = styled.div`
  width: 1000px;
  height: 200px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #ddddddee;
  display: none;
  border-radius: 10px;
  padding: 10px 15px;
`;
const DialogSpan = styled.span`
  font-size: 32px;
  color: #000;
`;
// TODO 특정 위치에서 마우스 클릭 등의 이벤트 발생 시, 실제 정보를 보여줄 컴포넌트
export const BottomDialog = () => {
  const [canvasMode, setCanvasMode] = useRecoilState(canvasModeAtom);
  const [dialogStartTrigger, setDialogStartTrigger] = useRecoilState(
    dialogStartTriggerAtom
  );
  const dialogWrapperRef = useRef<HTMLDivElement>(null);
  const dialogSpanRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const dialogWrapperDOM = dialogWrapperRef.current;

    const handleResize = () => {
      if (dialogWrapperDOM) {
        dialogWrapperDOM.style.transform = `translate(${
          window.innerWidth / 2 - 500
        }px,${window.innerHeight - 300}px)`;
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const animatedWriter = (textArr: string, dialogSpan: HTMLSpanElement) => {
    let timeoutFunc: number | undefined;
    for (let i = 0; i < textArr.length; i += 1) {
      timeoutFunc = setTimeout(() => {
        dialogSpan.innerHTML += textArr[i];
      }, (i + 1) * 80);
    }
    return timeoutFunc;
  };

  useEffect(() => {
    if (dialogStartTrigger === 0) return;
    const dialogSpan = dialogSpanRef.current;
    if (!dialogSpan) return () => {};
    dialogSpan.innerHTML = "";

    let timeoutFunc: number | undefined;
    if (dialogStartTrigger === 1) {
      timeoutFunc = animatedWriter(dialogStringTopLeft, dialogSpan);
      // for (let i = 0; i < dialogStringTopLeft.length; i += 1) {
      //   timeoutFunc = setTimeout(() => {
      //     dialogSpan.innerHTML += dialogStringTopLeft[i];
      //   }, (i + 1) * 80);
      // }
    } else if (dialogStartTrigger === 2) {
      timeoutFunc = animatedWriter(dialogStringTopRight, dialogSpan);
      // for (let i = 0; i < dialogStringTopRight.length; i += 1) {
      //   timeoutFunc = setTimeout(() => {
      //     dialogSpan.innerHTML += dialogStringTopRight[i];
      //   }, (i + 1) * 80);
      // }
    }
    return () => {
      if (timeoutFunc) clearTimeout(timeoutFunc);
    };
  }, [dialogStartTrigger]);
  return (
    <DialogWrapper
      className="dialog-wrapper"
      ref={dialogWrapperRef}
      // onClick={() => {
      //   if (canvasMode === CANVAS_MODE.ORTHOGONAL) {
      //     setCanvasMode(CANVAS_MODE.PERSPECTIVE);
      //   } else {
      //     setCanvasMode(CANVAS_MODE.ORTHOGONAL);
      //   }
      // }}
    >
      {dialogStartTrigger !== 0 && <DialogSpan ref={dialogSpanRef} />}
    </DialogWrapper>
  );
};
