import { Container, TextAreaContainer } from "./InputField";

interface Props {
  Output: string;
}

function OutputField({ Output }: Props) {
  return (
    <Container>
      <h1 className="fs-5">Output</h1>
      <TextAreaContainer name="Code" id="Input-Field" readOnly value={Output} />
    </Container>
  );
}

export default OutputField;
