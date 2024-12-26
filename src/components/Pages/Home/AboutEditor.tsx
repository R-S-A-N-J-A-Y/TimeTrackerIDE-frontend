import styled from "styled-components";
import { Color } from "./HeroPage";
import Editor from "../../../assets/HomePage/Editor.jpg";
import { BtnStyle } from "../Editor/RunButton";

const Container = styled.div`
  margin: 100px 0;
  height: 80vh;
  width: 100%;

  padding: 40px 100px;
  background: white;

  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  flex: 1;
  height: 100%;
  margin-right: 50px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const AboutEditor = () => {
  return (
    <Container>
      <Wrapper style={{ flex: 2 }}>
        <h1
          style={{
            fontSize: "40px",
            fontWeight: "bold",
          }}
        >
          About Our
          <Color
            style={{
              marginLeft: "14px",
              fontSize: "62px",
            }}
          >
            Editor
          </Color>
        </h1>

        <div
          style={{
            border: "1px solid Black",
            borderRadius: "30px",
            padding: "30px",
            fontSize: "20px",
            marginBottom: "70px",
          }}
        >
          {" "}
          <p style={{ textAlign: "justify" }}>
            &nbsp; The TimeTracker IDE is your all-in-one coding companion,
            designed to simplify development and improve code performance. It
            provides precise execution time for debugging, helping developers
            identify inefficiencies and optimize their code. By analyzing
            runtime and offering insights into better approaches, the IDE
            ensures you focus on writing smarter, faster, and more efficient
            solutions.
          </p>
          <BtnStyle
            style={{ fontSize: "20px", padding: "10px", width: "100px" }}
          >
            Try It{" "}
          </BtnStyle>
        </div>
      </Wrapper>
      <Wrapper style={{ marginRight: "0px" }}>
        <img src={Editor} alt="" style={{ height: "100%" }} />
      </Wrapper>
    </Container>
  );
};

export default AboutEditor;
