import { canvasModeAtom } from "../atoms";
import { OrthogonalCanvas } from "./OrthogonalCanvas";
import { useRecoilValue } from "recoil";
import { CANVAS_MODE } from "./enums";
import { PerspectiveCanvas } from "./PerspectiveCanvas";
export const CanvasComponents = () => {
  const cameraType = useRecoilValue(canvasModeAtom);
  if (cameraType === CANVAS_MODE.ORTHOGONAL) {
    return <OrthogonalCanvas />;
  } else {
    return <PerspectiveCanvas />;
  }
};
