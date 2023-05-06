import styled from "styled-components";
import { MainCanvas } from "./components/MainCanvas";
import { Minimap } from "./components/Minimap";
import { Info } from "./components/Info";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000;
  outline: none;
`;
function App() {
  return (
    <Wrapper>
      <MainCanvas />
      <Minimap />
      <Info />
    </Wrapper>
  );
}

export default App;
