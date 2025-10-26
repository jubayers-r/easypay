// import Footer from "./components/Footer";
import Features from "./sections/Features";
import Header from "./sections/Header";
import HowItWorks from "./sections/HowItWorks";
import LogoMarquee from "./sections/LogoMarquee";

export const universalSideMargin = "px-7 lg:px-30";
export const universalSectionPadding = "px-5";


export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <div className="my-30">
          <Features />
          <LogoMarquee />
        </div>
        <HowItWorks />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
