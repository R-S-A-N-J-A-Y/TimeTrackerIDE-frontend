import { Container, TextAreaContainer } from "./InputField";

interface Props {
  Output: string;
  ExecutionTime: string;
  isError: boolean;
}

function OutputField({ Output, ExecutionTime, isError }: Props) {
  return (
    <Container>
      <h1 className="fs-5">Output</h1>
      <TextAreaContainer
        name="Code"
        id="Input-Field"
        readOnly
        value={Output}
        style={{ height: "80%" }}
      />
      {Output && !isError && (
        <h1 className="fs-5">Execution Time: {ExecutionTime}</h1>
      )}
    </Container>
  );
}

export default OutputField;
