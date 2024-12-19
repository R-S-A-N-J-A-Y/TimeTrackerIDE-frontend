import styled from "styled-components";

interface Props {
  Name: string;
}

const Container = styled.div`
  flex: 0.7;

  margin-bottom: 50px;

  border: 1px solid black;
  border-radius: 30px;

  padding: 20px;
`;

const TextAreaContainer = styled.textarea`
  height: 88%;
  width: 100%;

  border: none;
  resize: none;
  outline: none;

  font-size: 15px;
  color: black;

  padding: 10px;
`;

const InputField = ({ Name }: Props) => {
  return (
    <Container>
      <h1 className="fs-5">{Name}</h1>
      <TextAreaContainer name="Code" id="Input-Field" />
    </Container>
  );
};

export default InputField;
