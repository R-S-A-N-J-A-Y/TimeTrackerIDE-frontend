import { Container, Wrapper } from "./AboutEditor";
import EditorPro from "../../..//assets/HomePage/EditorPro.png";
import { BtnStyle } from "../Editor/RunButton";
import { Color } from "./HeroPage";
import { HProps } from "../HomeIndex";
import ProIcon from "../../../assets/HomePage/ProIcon.png";
import { styled } from "styled-components";

const ImagePro = styled.img`
  position: absolute;
  height: 25%;
  top: 0;
  left: 0;
  transition: opacity 0.3s;

  &:hover + div {
    visibility: visible;
    opacity: 1;
  }
`;

const Tooltip = styled.div`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: 10%;
  left: 10%;

  background: linear-gradient(330deg, #ff8a00 0%, rgb(255, 0, 93) 100%);

  color: white;
  color: #fff;
  padding: 8px;
  border-radius: 5px;
  font-size: 14px;
  white-space: nowrap;

  transition: opacity 0.3s;
`;

const AboutEditorPro = ({ onClick }: HProps) => {
  return (
    <Container style={{ backgroundColor: "rgba(255, 255, 255, 0.94)" }}>
      <ImagePro src={ProIcon} alt="" />
      <Tooltip>Subscription Needed!</Tooltip>
      <Wrapper style={{ marginLeft: 0, flex: 1 }}>
        <img src={EditorPro} alt="" style={{ height: "75%" }} />
      </Wrapper>

      <Wrapper style={{ flex: 2 }}>
        <h1
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            marginBottom: "30px",
          }}
        >
          About Our
          <Color
            style={{
              marginLeft: "14px",
              fontSize: "62px",
            }}
          >
            EditorPro
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
            &nbsp; The TimeTracker IDE offers a dual-editor setup that allows
            developers to explore multiple approaches to solving a problem. One
            editor is for writing code, while the other is dedicated to
            executing and analyzing it in real-time. This setup enables you to
            experiment with different solutions and compare their performance.
            By providing insights into execution time and scalability, the IDE
            helps you identify the most efficient and future-proof approach,
            ensuring your code is optimized for both current and future
            requirements.
          </p>
          <BtnStyle
            style={{ fontSize: "20px", padding: "10px", width: "100px" }}
            onClick={() => onClick(2)}
          >
            Try It{" "}
          </BtnStyle>
        </div>
      </Wrapper>
    </Container>
  );
};

export default AboutEditorPro;
