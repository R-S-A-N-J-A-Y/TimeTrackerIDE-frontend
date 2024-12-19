import { Editor } from "@monaco-editor/react";

const CodeEditor = () => {
  return (
    <Editor
      height="87vh"
      defaultLanguage="python"
      defaultValue="#code here"
      theme="vs-dark"
    />
  );
};

export default CodeEditor;
