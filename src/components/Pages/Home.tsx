import styled from "styled-components";
import CodeEditor from "./CodeEditor";
import InputFeild from "./InputField";

const FlexContanier = styled.div`
  width: 92%;
  height: 95vh;

  display: flex;
  justify-content: space-around;
`;

const EditorContainer = styled.div`
  flex: 2;
`;

const Result = styled.div`
  flex: 1;
  padding: 0 10px 23px 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Home = () => {
  
  return (
    <FlexContanier>

      <EditorContainer>
        <CodeEditor />
      </EditorContainer>

      <Result>
        <InputFeild Name="Input" />
        <InputFeild Name="Output" />
      </Result>
    </FlexContanier>
  );
};

export default Home;
