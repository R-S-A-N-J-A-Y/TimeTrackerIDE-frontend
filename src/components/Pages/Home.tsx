import styled from "styled-components";
import CodeEditor from "./CodeEditor";

const FlexContanier = styled.div`
  width: 92%;
  height: 95vh;

  background-color: aqua;
  display: flex;
  justify-content: space-around;
`;

const EditorContainer = styled.div`
  flex: 2;
  background-color: green;
`;

const Result = styled.div`
  flex: 1;
  background-color: blue;
`;

const Home = () => {
  return (
    <FlexContanier>
      <EditorContainer>
        <CodeEditor />
        <button className="btn btn-primary m-2 pt-2 pb-2 pe-4  ps-4">
          Run
        </button>
      </EditorContainer>
      <Result></Result>
    </FlexContanier>
  );
};

export default Home;
