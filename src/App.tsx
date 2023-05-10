import styled from "styled-components";
import { CanvasComponents } from "./components/CanvasComponents";
import { NormalComponents } from "./components/NormalComponents";
import { RecoilRoot } from "recoil";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000;
  outline: none;
`;
function App() {
  return (
    <RecoilRoot>
      <Wrapper>
        <CanvasComponents />
        <NormalComponents />
      </Wrapper>
    </RecoilRoot>
  );
}

export default App;
