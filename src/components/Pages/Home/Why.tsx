import { styled } from "styled-components";
import SandClock from "../../../assets/HomePage/SandClock.png";
import { BackGroundText, Color, BackGround } from "./HeroPage";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 80vh;
  position: relative;
`;

const Why = () => {
  return (
    <Container>
      <img
        src={SandClock}
        alt=""
        height={"600px"}
        style={{ filter: "drop-shadow(60px 40px 10px rgba(46, 44, 44, .6))" }}
      />
      <BackGroundText style={{ width: "500px", top: "50px", left: "100px" }}>
        <p
          style={{
            fontSize: "20px",
            color: "white",
            margin: 0,
          }}
        >
          <Color style={{ border: "1px solid black" }}>
            Scalability Assessment:{" "}
          </Color>{" "}
          Project runtime for larger inputs and track performance trends
        </p>
      </BackGroundText>
      <BackGroundText
        style={{
          width: "500px",
          top: "50px",
          right: "50px",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <p
          style={{
            fontSize: "20px",
            color: "white",
            margin: 0,
          }}
        >
          <Color>Insightful Analytics: </Color>Break down your code's execution
          phases and identify bottlenecks.
        </p>
      </BackGroundText>
      <BackGroundText
        style={{
          width: "500px",
          bottom: "100px",
          right: "150px",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <p
          style={{
            fontSize: "20px",
            color: "white",
            margin: 0,
          }}
        >
          <Color>Enhanced Debugging: </Color>
          Gain visibility into unexecuted code paths and optimize error
          handling.
        </p>
      </BackGroundText>
      <BackGround
        style={{
          right: "360px",
          top: "-10px",
          height: "700px",
          width: "700px",
          zIndex: "-1",
        }}
      ></BackGround>

      <div style={{ position: "absolute", top: "410px", left: "20px" }}>
        <p
          style={{
            margin: 0,
            fontSize: "80px",
            fontWeight: "bolder",
            color: "white",
          }}
        >
          WHY
        </p>
        <Color
          style={{
            fontSize: "50px",
            fontWeight: "bolder",
            background:
              "linear-gradient(180deg, rgb(0, 0, 0) 0%, rgb(150, 137, 137) 50%, rgb(255, 255, 255) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          TimeTracker IDE ?
        </Color>
      </div>
    </Container>
  );
};

export default Why;
