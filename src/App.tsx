import IDCard from "./components/IDCard";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import NavList from "./components/nav/NavList";
import Footer from "./components/sections/Footer";

const App = () => {
  return (
    <div className="relative h-full">
      <div className="bg-[url('./assets/page-overlay.png')] absolute w-full h-full bg-repeat opacity-10 pointer-events-none" />
      <div className="w-full h-full flex flex-row px-100 gap-40 justify-center">
        <div className="flex flex-col h-min justify-center sticky top-20 gap-20">
          <IDCard />
          <NavList />
        </div>
        <div className="flex flex-col h-min w-1/2 justify-center items-center sticky top-20">
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
