import Navbar from "../components/Navbar";

const HeaderSection = () => {
  return (
    <div className="bg-[url('/hero-bg.png')] bg-no-repeat bg-cover bg-center px-7  lg:px-40 mx-5 my-5 rounded-3xl  h-[90vh]">
      <Navbar />
      {/* <Hero /> */}
    </div>
  );
};

export default HeaderSection;
