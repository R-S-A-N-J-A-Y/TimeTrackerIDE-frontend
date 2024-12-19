import styled from "styled-components";
import CodeEditor from "./CodeEditor";

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
  background-color: blue;
`;

// maintaining the code
const Home = () => {
  
  return (
    <FlexContanier>

      <EditorContainer>
        <CodeEditor />
      </EditorContainer>


      <Result>
        
      </Result>
    </FlexContanier>
  );
};

export default Home;
