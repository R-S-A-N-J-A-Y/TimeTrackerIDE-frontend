import styled from "styled-components";
import { GrHomeRounded } from "react-icons/gr";
import { FaCode } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import { useState } from "react";

const FlexContanier = styled.div`
  width: 4%;
  height: 40vh;
  padding: 10px 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 50px;

  border: 1px solid black;
  background: rgb(253, 29, 29);
  background: linear-gradient(
    11deg,
    rgba(253, 29, 29, 1) 0%,
    rgba(252, 176, 69, 1) 100%
  );
`;

const Container = styled.div`
  width: 45px;
  height: 45px;
  padding: 5px;
  border-radius: 50px;
`;

const SideBar = () => {
  const [icon, setIcon] = useState(0);

  return (
    <FlexContanier>
      <Container
        style={{
          backgroundColor: icon === 0 ? "black" : "Transparent",
          opacity: icon === 0 ? "100%" : "40%",
        }}
      >
        <GrHomeRounded
          size={"26px"}
          style={{ margin: "3px 4px" }}
          color={icon === 0 ? "white" : "black"}
          onClick={() => setIcon(0)}
        />
      </Container>
      <Container
        style={{
          backgroundColor: icon === 1 ? "black" : "Transparent",
          opacity: icon === 1 ? "100%" : "40%",
        }}
      >
        <FaCode
          size={"30px"}
          style={{ margin: "3px" }}
          color={icon === 1 ? "white" : "black"}
          onClick={() => setIcon(1)}
        />
      </Container>
      <Container
        style={{
          backgroundColor: icon === 2 ? "black" : "Transparent",
          opacity: icon === 2 ? "100%" : "40%",
        }}
      >
        <FaCode
          size={"30px"}
          style={{ margin: "3px" }}
          color={icon === 2 ? "white" : "black"}
          onClick={() => setIcon(2)}
        />
      </Container>
      <Container
        style={{
          backgroundColor: icon === 3 ? "black" : "Transparent",
          opacity: icon === 3 ? "100%" : "40%",
        }}
      >
        <IoIosSettings
          size={"35px"}
          color={icon === 3 ? "white" : "black"}
          onClick={() => setIcon(3)}
        />
      </Container>
    </FlexContanier>
  );
};
export default SideBar;
