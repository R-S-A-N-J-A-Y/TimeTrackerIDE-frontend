import styled from "styled-components";

interface Props {
  onChange: (data: any) => void;
}

export const Container = styled.div`
  flex: 0.7;

  height: 100%;
  margin-bottom: 50px;

  border: 1px solid black;
  border-radius: 30px;

  padding: 20px;
`;

export const TextAreaContainer = styled.textarea`
  height: 88%;
  width: 100%;

  border: none;
  resize: none;
  outline: none;

  font-size: 18px;
  line-height: 2;
  color: black;

  padding: 10px;
`;

// const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
//   InputData = event.target.value;
// };

// let InputData = "";

const InputField = ({ onChange }: Props) => {
  return (
    <Container>
      <h1 className="fs-5">Input</h1>
      <TextAreaContainer name="Code" id="Input-Field" onChange={onChange} />
    </Container>
  );
};

export default InputField;
