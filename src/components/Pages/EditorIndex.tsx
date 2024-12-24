import styled from "styled-components";
import CodeEditor from "./Editor/CodeEditor";
import InputField from "./Editor/InputField";
import OutputField from "./Editor/OutputField";
import { useState } from "react";
import RunButton from "./Editor/RunButton";

let ExecutionTime = "";
let isError = false;

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
  const [Output, setOutput] = useState("");

  const getCode = (value: string) => {
    code = value;
  };

  let code = "#Code Here";

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    InputData = event.target.value;
  };

  let InputData = "";

  return (
    <FlexContanier style={{ flex: "3" }}>
      <EditorContainer>
        <CodeEditor getCode={getCode} Code={code} />
        <RunButton onClick={() => console.log(code)
        } />
      </EditorContainer>

      <Result>
        <InputField onChange={handleChange} />
        <OutputField
          Output={Output}
          ExecutionTime={ExecutionTime}
          isError={isError}
        />
      </Result>
    </FlexContanier>
  );
};

export default EditorIndex;
