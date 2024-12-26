import Why from "./Home/Why";
import HeroPage from "./Home/HeroPage";
import AboutEditor from "./Home/AboutEditor";

export interface HProps {
  onClick: () => void;
}

function HomeIndex({ onClick }: HProps) {
  return (
    <>
      <HeroPage />
      <Why />
      <AboutEditor onClick={onClick} />
    </>
  );
}

export default HomeIndex;
