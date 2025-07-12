import IDCard from "./components/IDCard";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Footer from "./components/sections/Footer";
import NavList from "./components/nav/NavList";

const App = () => {
  return (
    <div className="relative h-full">
      <div className="bg-[url('./assets/page-overlay.png')] absolute w-full h-full bg-repeat opacity-10 pointer-events-none" />
      <div className="w-full h-full flex flex-col xl:flex-row px-5 sm:px-10 lg:px-25 2xl:px-50 gap-0 xl:gap-40 justify-center">
        <div className="flex flex-col h-min w-full xl:w-min justify-center static xl:sticky top-20 mt-20 xl:mt-0 gap-20">
          <IDCard />
          <NavList />
        </div>
        <div className="flex flex-col h-min w-full xl:w-1/2 justify-center items-center sticky top-0 xl:top-20">
          <About />
          <Experience />
          <Projects />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
