import Home from "./components/Pages/Home";
import SideBar from "./components/SideBar/SideBar";
import styled from "styled-components";

const Header = styled.div`
  margin-top: 30px;
  background-color: white;
  height: 95vh;
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

function App() {
  return (
    <Header>
      <SideBar />
      <Home />
    </Header>
  );
}

export default App;
