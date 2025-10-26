// import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { universalSideMargin } from "../page";

const Header = () => {
  return (
    <div className={`bg-[url('/hero-bg.png')] bg-no-repeat bg-cover bg-center ${universalSideMargin} rounded-3xl`}>
      <Navbar />
      {/* <Hero /> */}
    </div>
  );
};

export default Header;
