import { styled } from "styled-components";
import CodeEditor from "./Editor/CodeEditor";
import RunButton from "./Editor/RunButton";
import InputField from "./Editor/InputField";
import OutputField from "./Editor/OutputField";
import { useState } from "react";

const Container = styled.div`
  margin-top: -17px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;

const EditorWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`;

const InputWrapper = styled.div`
  height: 500px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`;

let code1 = "#Code Here";
let code2 = "#Code Here";
let InputData1 = "";
let InputData2 = "";
let ExecutionTime = "";
let isError = false;

const EditorProIndex = () => {
  const [Output1, setOutput1] = useState("");
  const [Output2, setOutput2] = useState("");

  const getCode1 = (value: string) => {
    code1 = value;
  };

  const getCode2 = (value: string) => {
    code2 = value;
  };

  const handleInputChange1 = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    InputData1 = event.target.value;
  };

  const handleInputChange2 = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    InputData2 = event.target.value;
  };

  return (
    <Container>
      <RunButton
        center={true}
        onClick={() => {
          console.log(code1);
          setOutput1(code1);
          setOutput2(code2);
        }}
      />

      <EditorWrapper>
        <div style={{ flex: 1, margin: "30px", marginTop: "10px" }}>
          <CodeEditor getCode={getCode1} Code={code1} />
        </div>
        <div style={{ flex: 1, margin: "30px", marginTop: "10px" }}>
          <CodeEditor getCode={getCode2} Code={code2} />
        </div>
      </EditorWrapper>

      <InputWrapper>
        <div style={{ flex: 1, margin: "30px" }}>
          <InputField onChange={handleInputChange1} />
        </div>
        <div style={{ flex: 1, margin: "30px" }}>
          <InputField onChange={handleInputChange2} />
        </div>
      </InputWrapper>

      <InputWrapper>
        <div style={{ flex: 1, margin: "30px" }}>
          <OutputField
            Output={Output1}
            ExecutionTime={ExecutionTime}
            isError={isError}
          />
        </div>
        <div style={{ flex: 1, margin: "30px" }}>
          <OutputField
            Output={Output2}
            ExecutionTime={ExecutionTime}
            isError={isError}
          />
        </div>
      </InputWrapper>
    </Container>
  );
};

export default EditorProIndex;
