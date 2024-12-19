import { Editor } from "@monaco-editor/react";
import { styled } from "styled-components";

const getCode = (value: any) => {
  code = value;
}

let code = ""

const BtnStyle = styled.button`
  background: linear-gradient(
    90deg,
    rgba(253, 29, 29, 1) 0%,
    rgba(252, 176, 69, 1) 100%
  );
  color: black;
  font-size: 15px;
  font-weight: bold;
`

const CodeEditor = () => {

  return (
    <div className="d-flex flex-column justify-content-between">

      <div style={{flex: 1}} className="border p-3">
        <Editor
          height="85vh"
          defaultLanguage="python"
          defaultValue="#code here"
          theme="vs"
          onChange={getCode}
          options={{
            fontSize: 20,
            scrollbar: {
              vertical: "hidden", 
              horizontal: "visible", 
            }
          }}
        />
      </div>
      
      <div style={{flex: 1}} className="d-flex border justify-content-end">
        <button className="btn btn-primary m-2 pt-2 pb-2 pe-4  ps-4 border" onClick={() => console.log(code)}>Run</button>
        <BtnStyle className="btn m-2 pt-2 pb-2 pe-4  ps-4 border" onClick={() => console.log(code)}>Time</BtnStyle>
      </div>
      
    </div>
  );
};

export default CodeEditor;
