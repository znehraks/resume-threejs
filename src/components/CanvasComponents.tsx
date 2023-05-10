import { canvasModeAtom } from "../atoms";
import { MainCanvas } from "./OrthogonalCanvas";
import { useRecoilValue } from "recoil";
import { CANVAS_MODE } from "./enums";
export const CanvasComponents = () => {
  const cameraType = useRecoilValue(canvasModeAtom);
  if (cameraType === CANVAS_MODE.ORTHOGONAL) {
    return <MainCanvas />;
  } else {
    return <div>hi</div>;
  }
};
