import { styled } from "styled-components";
import CodeEditor from "./Editor/CodeEditor";
import RunButton from "./Editor/RunButton";
import InputField from "./Editor/InputField";
import OutputField from "./Editor/OutputField";
import { useState } from "react";

let ExecutionTime = "";
let isError = false;

const Container = styled.div`
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

const EditorProIndex = () => {

  const [Output1, setOutput1] = useState("");
  const [Output2, setOutput2] = useState("");
  
  const getCode1 = (value: string) => {
    code1 = value;
  };

  
  const getCode2 = (value: string) => {
    code2 = value;
  };

  let code1 = "#Code Here";
  let code2 = "#Code Here";

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    InputData = event.target.value;
  };

  let InputData = "";

  return (
    <Container>
    
        <RunButton center={true}
          onClick={() => {
            setOutput1(Output1);
            setOutput2(Output2);
          }}
        />
      
      <EditorWrapper>
        <div style={{flex: 1, margin: "30px", marginTop: "20px"}}>
          <CodeEditor getCode={getCode1} Code={code1} />
        </div>
        <div style={{flex: 1, margin: "30px", marginTop: "0px"}}>
          <CodeEditor getCode={getCode2} Code={code1} />
        </div>
      </EditorWrapper>

      <InputWrapper>
        <div style={{flex: 1, margin: "30px"}}>
          <InputField onChange={handleChange} />
        </div>
        <div style={{flex: 1, margin: "30px"}}>
          <InputField onChange={handleChange} />
        </div>  
      </InputWrapper>

      <InputWrapper>
        <div style={{flex: 1, margin: "30px"}}>
          <OutputField
            Output={Output1}
            ExecutionTime={ExecutionTime}
            isError={isError}
          />
        </div>
        <div style={{flex: 1, margin: "30px"}}>
          <OutputField
            Output={Output2}
            ExecutionTime={ExecutionTime}
            isError={isError}
          />
        </div>  
      </InputWrapper>
      
      
    </Container>)
}

export default EditorProIndex