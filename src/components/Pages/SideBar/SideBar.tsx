import styled from "styled-components";
import { GrHomeRounded } from "react-icons/gr";
import { FaCode } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";

interface Props {
  ind: number;
  onClick: (data: number) => void;
}

const FlexContanier = styled.div`
  position: fixed;

  width: 60px;
  height: 280px;

  padding: 10px 2px;
  top: 36%;
  left: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  border-radius: 50px;

  background: rgba(253, 29, 29, 0.5); /* Adding transparency */

  background: linear-gradient(
    125deg,
    rgba(253, 29, 29, 1) 0%,
    rgba(252, 176, 69, 1) 100%
  );

  box-shadow: -5px 7px 20px black;
`;

const Container = styled.div`
  width: 45px;
  height: 45px;
  padding: 5px;
  border-radius: 50px;
`;

const SideBar = ({ ind, onClick }: Props) => {
  return (
    <FlexContanier>
      <Container
        style={{
          backgroundColor: ind === 0 ? "black" : "Transparent",
          opacity: ind === 0 ? "100%" : "40%",
        }}
      >
        <GrHomeRounded
          size={"26px"}
          style={{ margin: "3px 4px" }}
          color={ind === 0 ? "white" : "black"}
          onClick={() => onClick(0)}
        />
      </Container>
      <Container
        style={{
          backgroundColor: ind === 1 ? "black" : "Transparent",
          opacity: ind === 1 ? "100%" : "40%",
        }}
      >
        <FaCode
          size={"30px"}
          style={{ margin: "3px" }}
          color={ind === 1 ? "white" : "black"}
          onClick={() => onClick(1)}
        />
      </Container>
      <Container
        style={{
          backgroundColor: ind === 2 ? "black" : "Transparent",
          opacity: ind === 2 ? "100%" : "40%",
        }}
      >
        <FaCode
          size={"30px"}
          style={{ margin: "3px" }}
          color={ind === 2 ? "white" : "black"}
          onClick={() => onClick(2)}
        />
      </Container>
      <Container
        style={{
          backgroundColor: ind === 3 ? "black" : "Transparent",
          opacity: ind === 3 ? "100%" : "40%",
        }}
      >
        <IoIosSettings
          size={"35px"}
          color={ind === 3 ? "white" : "black"}
          onClick={() => onClick(3)}
        />
      </Container>
    </FlexContanier>
  );
};

export default SideBar;
