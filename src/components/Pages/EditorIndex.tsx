import styled from "styled-components";
import CodeEditor from "./Editor/CodeEditor";
import InputField from "./Editor/InputField";
import OutputField from "./Editor/OutputField";
import { useState } from "react";
import RunButton from "./Editor/RunButton";

interface Props {
  column?: boolean;
}

let ExecutionTime = "";
let isError = false;

const FlexContanier = styled.div<Props>`
  flex: 1;
  height: 95vh;

  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
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

const EditorIndex = ({ column }: Props) => {
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
    <FlexContanier style={{ flex: "3" }} column={column}>
      <EditorContainer>
        <CodeEditor getCode={getCode} Code={code} />
        <RunButton onClick={() => setOutput(code)} center={false} />
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
