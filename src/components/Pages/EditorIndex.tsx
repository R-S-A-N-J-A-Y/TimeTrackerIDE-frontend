import styled from "styled-components";
import CodeEditor from "./Editor/CodeEditor";
import InputField from "./Editor/InputField";
import OutputField from "./Editor/OutputField";
import { useState } from "react";

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
    execute();
  };

  let code = "#Code Here";

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    InputData = event.target.value;
  };

  let InputData = "";

  const execute = () => {
    fetch("http://localhost:3000/execute", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code, input: InputData }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // console.log("Server Response:", data);
        setOutput(data.output);
        // console.log(`Execution Time: ${data.executionTime}`);
        ExecutionTime = data.executionTime;
        if (data.error) {
          // console.error(`Python Error: ${data.error}`);
          setOutput(data.error);
          isError = true;
        }
      })
      .catch((error) => {
        alert("Error fetching execution result");
        console.error("Error fetching execution result:", error);
      });
  };

  return (
    <FlexContanier>
      <EditorContainer>
        <CodeEditor onClick={getCode} Code={code} />
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
