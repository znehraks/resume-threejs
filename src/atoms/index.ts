import { atom } from "recoil";
import { CANVAS_MODE } from "../components/enums";

export const canvasModeAtom = atom({
  key: "canvasMode",
  default: CANVAS_MODE.ORTHOGONAL,
});

export const dialogStartTriggerAtom = atom({
  key: "dialogStartTrigger",
  default: 0,
});
