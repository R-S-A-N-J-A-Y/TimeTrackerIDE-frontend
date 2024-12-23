import { styled } from "styled-components";

const FlexContanier = styled.div`
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );

  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

const home = () => {
  return <FlexContanier>home</FlexContanier>;
};

export default home;
