import { styled } from "styled-components";
import HeroPage from "../../../assets/HomePage/HeroPage.png";

const Contanier = styled.div`
  position: relative;
  height: 95vh;

  padding: 30px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background-color: transparent;
`;

export const Color = styled.span`
  background: linear-gradient(
    180deg,
    rgb(239, 68, 68) 0%,
    rgb(255, 149, 0) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bolder;
`;

export const BackGround = styled.div`
  position: absolute;
  background: linear-gradient(
    120deg,
    rgb(239, 68, 68) 0%,
    rgb(255, 149, 0) 100%
  );
  border-radius: 50%;

  z-index: 3;
`;

export const BackGroundText = styled.div`
  position: absolute;
  background: rgba(17, 15, 15, 0.1);
  color: white;
  backdrop-filter: blur(10px);

  border-radius: 10px;
  border: 1px solid white;

  padding: 20px;
`;

const home = () => {
  return (
    <Contanier>
      <div style={{ flex: "2", marginRight: "50px" }}>
        <h1
          style={{
            fontSize: "40px",
            fontWeight: "bolder",
            color: "white",

            marginTop: "130px",
            marginBottom: "0px",
          }}
        >
          Welcome to{" "}
        </h1>{" "}
        <Color
          style={{
            fontSize: "82px",
          }}
        >
          {" "}
          TimeTracker IDE{" "}
        </Color>
        <BackGround
          style={{
            left: "50px",
            top: "430px",
            height: "200px",
            width: "200px",
            zIndex: "-1",
          }}
        />
        <BackGround
          style={{
            left: "650px",
            top: "420px",
            height: "100px",
            width: "100px",
            zIndex: "-1",
          }}
        />
        <BackGroundText
          style={{
            width: "600px",
            top: "400px",
            left: "120px",
          }}
        >
          <p
            style={{
              fontSize: "20px",
              color: "white",
            }}
          >
            TimeTracker IDE empowers developers by providing deep insights into
            code execution, helping you optimize performance and improve
            efficiency.
          </p>
        </BackGroundText>
      </div>

      <div style={{ flex: "1", zIndex: "1" }}>
        <img
          src={HeroPage}
          style={{
            height: "80vh",
            filter: "drop-shadow(15px 30px 10px rgba(46, 44, 44, 0.5))",
            borderRadius: "20px",
          }}
          alt=""
        />
      </div>

      {/* <BackGround
        style={{
          top: "-150px",
          left: "150px",
          background: "transparent",
          height: "1200px",
          width: "1560px",
          backgroundImage: `url("data:image/svg+xml;utf8,%3Csvg%20viewBox%20=%20'-120%20-120%20240%20240'%20xmlns%20=%20'http://www.w3.org/2000/svg'%3E%3Cpath%20d%20=%20'M%2080.77411210885082%2C0%20C%2080.77411210885082%2C25.048972135069967%2027.25661830610597%2C76.38154478169007%200%2C76.38154478169007%20C%20-27.256618306105963%2C76.38154478169007%20-84.41751398876107%2C25.048972135069977%20-84.41751398876107%2C1.0338163829831316e-14%20C%20-84.41751398876107%2C-25.048972135069956%20-27.25661830610598%2C-75.43040755206731%20-1.3856341075052935e-14%2C-75.43040755206731%20C%2027.256618306105953%2C-75.43040755206731%2080.77411210885082%2C-25.048972135069967%2080.77411210885082%2C0%20Z'%20fill%20=%20'black'%20/%3E%3C/svg%3E")`,
        }}
      /> */}
    </Contanier>
  );
};

export default home;
