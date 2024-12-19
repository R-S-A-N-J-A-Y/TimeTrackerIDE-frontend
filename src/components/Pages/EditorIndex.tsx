import styled from "styled-components";
import CodeEditor from "./Editor/CodeEditor";
import InputField from "./Editor/InputField";
import OutputField from "./Editor/OutputField";

const FlexContanier = styled.div`
  height: 95vh;

  display: flex;
  justify-content: space-around;
`;

const EditorContainer = styled.div`
  flex: 1.5;
`;

const Result = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding-left: 30px;
`;

const EditorIndex = () => {
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

export default EditorIndex;
