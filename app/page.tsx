// import Footer from "./components/Footer";
import Features from "./sections/Features";
import Header from "./sections/Header";

export const universalSideMargin = "px-7 lg:px-30 mx-5 my-5"

export default function Home() {
  return (
    <div >
      <Header />
      <main className={universalSideMargin}>
        <Features/>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
