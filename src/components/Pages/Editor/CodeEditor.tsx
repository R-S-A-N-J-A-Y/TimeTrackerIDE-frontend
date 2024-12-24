import { Editor } from "@monaco-editor/react";
import { styled } from "styled-components";

interface Props {
  getCode: (value: any) => void;
  Code: string;
}

const EditorContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 25px;
  border: 1px solid black;
  padding: 30px 0;
`;

const CodeEditor = ({ getCode, Code }: Props) => {
  return (
    <div className="d-flex flex-column justify-content-between">
      <EditorContainer>
        <Editor
          height="80vh"
          defaultLanguage="python"
          defaultValue={Code}
          theme="vs"
          onChange={getCode}
          options={{
            fontSize: 20,
            scrollbar: {
              vertical: "hidden",
              horizontal: "visible",
            },
          }}
        />
      </EditorContainer>

      
    </div>
  );
};

export default CodeEditor;
