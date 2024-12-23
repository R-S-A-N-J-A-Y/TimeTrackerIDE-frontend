import EditorIndex from "./components/Pages/EditorIndex";
import SideBar from "./components/SideBar";
import HomeIndex from "./components/Pages/HomeIndex";
import EditorProIndex from "./components/Pages/EditorProIndex";
import Setting from "./components/Pages/Setting";
import { useState } from "react";

function App() {
  const [pageInd, setPageInd] = useState(0);

  return (
    <>
      <SideBar ind={pageInd} onClick={(ind) => setPageInd(ind)} />
      {pageInd == 0 && <HomeIndex />}
      {pageInd == 1 && <EditorIndex />}
      {pageInd == 2 && <EditorProIndex />}
      {pageInd == 3 && <Setting />}
    </>
  );
}

export default App;
