import { useState } from "react";
import HomeIndex from "./components/Pages/HomeIndex";
import SideBarIndex from "./components/SideBarIndex";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle<{ isHome: boolean }>`
  body {
    background-color: ${(props) => (props.isHome ? "black" : "white")};
  }
`;

function App() {
  const [isHome, setHome] = useState(true);
  return (
    <>
      <GlobalStyle isHome={isHome} />
      {isHome && <HomeIndex />}
      {!isHome && <SideBarIndex />}
    </>
  );
}

export default App;
