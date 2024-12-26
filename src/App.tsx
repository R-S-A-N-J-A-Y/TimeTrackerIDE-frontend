import { useState } from "react";
import HomeIndex from "./components/Pages/HomeIndex";
import SideBarIndex from "./components/SideBarIndex";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle<{ isHome: boolean }>`
  body {
    background-color: ${(props) => (props.isHome ? "black" : "white")};
  }

  #root{
    margin: 25px 70px 0px 120px;
  }
`;

function App() {
  const [isHome, setHome] = useState(true);
  return (
    <>
      <GlobalStyle isHome={isHome} />
      {isHome && <HomeIndex onClick={() => setHome(false)} />}
      {!isHome && <SideBarIndex setHome={() => setHome(true)} />}
    </>
  );
}

export default App;
