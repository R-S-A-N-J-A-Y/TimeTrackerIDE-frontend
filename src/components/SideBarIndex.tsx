import SideBar from "./Pages/SideBar/SideBar";
import EditorIndex from "./Pages/EditorIndex";
import HomeIndex from "./Pages/HomeIndex";
import EditorProIndex from "./Pages/EditorProIndex";
import Setting from "./Pages/Setting";
import { useState } from "react";

const SideBarIndex = () => {
  const [pageInd, setPageInd] = useState(0);

  return (
    <>
      <SideBar ind={pageInd} onClick={(ind) => setPageInd(ind)} />
      {pageInd === 0 && <HomeIndex />}
      {pageInd === 1 && <EditorIndex />}
      {pageInd === 2 && <EditorProIndex />}
      {pageInd === 3 && <Setting />}
    </>
  );
};

export default SideBarIndex;
