import Why from "./Home/Why";
import HeroPage from "./Home/HeroPage";
import AboutEditor from "./Home/AboutEditor";
import AboutEditorPro from "./Home/AboutEditorPro";

export interface HProps {
  onClick: (Ind: number) => void;
}

function HomeIndex({ onClick }: HProps) {
  return (
    <>
      <HeroPage />
      <Why />
      <AboutEditor onClick={onClick} />
      <AboutEditorPro onClick={onClick} />
    </>
  );
}

export default HomeIndex;
