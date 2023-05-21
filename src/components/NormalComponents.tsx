import { BottomDialog } from "./BottomDialog";
import { Info } from "./Info";
import { Minimap } from "./Minimap";
import { MinimapPositionSetter } from "./MinimapPositionSetter";

export const NormalComponents = () => {
  return (
    <>
      <Minimap />
      <Info />
      <BottomDialog />
    </>
  );
};
