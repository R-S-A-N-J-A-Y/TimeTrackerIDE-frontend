import { styled } from "styled-components";
import HeroPage from "../../../assets/HomePage/HeroPage.png";

const Contanier = styled.div`
  position: relative;
  height: 95vh;

  padding: 30px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Color = styled.span`
  background: linear-gradient(
    180deg,
    rgb(255, 0, 0) 0%,
    rgb(252, 212, 69) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const BackGround = styled.div`
  position: absolute;
  background: linear-gradient(
    40deg,
    rgb(239, 68, 68) 0%,
    rgb(255, 149, 0) 100%
  );
  height: 500px;
  width: 500px;
  border-radius: 50%;

  top: 50px;
  right: 120px;
  z-index: -1;
`;

const home = () => {
  return (
    <Contanier>
      <div style={{ flex: "1", marginRight: "50px" }}>
        <h1
          style={{
            fontSize: "70px",
            marginBottom: "35px",
            fontWeight: "bolder",
          }}
        >
          Welcome to <Color> TimeTracker IDE </Color>
        </h1>
        <p style={{ fontSize: "20px" }}>
          TimeTracker IDE empowers developers by providing deep insights into
          code execution, helping you optimize performance and improve
          efficiency.
        </p>
      </div>

      <div style={{ flex: "1" }}>
        <img
          src={HeroPage}
          style={{
            height: "80vh",
            filter: "drop-shadow(15px 30px 10px rgba(0, 0, 0, 0.5))", // Corrected filter property
            borderRadius: "20px",
          }}
          alt=""
        />
      </div>

      <BackGround></BackGround>
    </Contanier>
  );
};

export default home;
