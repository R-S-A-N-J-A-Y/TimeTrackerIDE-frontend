import styled from "styled-components";
import CodeEditor from "./Edior/CodeEditor";
import InputField from "./Edior/InputField";
import OutputField from "./Edior/OutputField";

const FlexContanier = styled.div`
  width: 92%;
  height: 95vh;

  display: flex;
  justify-content: space-around;
`;

const EditorContainer = styled.div`
  flex: 1.3;
`;

const Result = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding-left: 30px;
`;

const Home = () => {
  return (
    <FlexContanier>
      <EditorContainer>
        <CodeEditor />
      </EditorContainer>

      <Result>
        <InputField />
        <OutputField Output="" />
      </Result>
    </FlexContanier>
  );
};

export default Home;
