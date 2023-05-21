import { atom } from "recoil";
import { CANVAS_MODE, DIALOG_MODE } from "../components/enums";

export const canvasModeAtom = atom({
  key: "canvasMode",
  default: CANVAS_MODE.ORTHOGONAL,
});

export const dialogStartTriggerAtom = atom<DIALOG_MODE>({
  key: "dialogStartTrigger",
  default: DIALOG_MODE.NONE,
});
