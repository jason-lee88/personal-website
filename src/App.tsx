import IDCard from "./components/IDCard";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";

const App = () => {
  return (
    <div className="relative h-full">
      <div className="bg-[url('./assets/overlay.png')] absolute w-full h-full bg-repeat opacity-10 pointer-events-none" />
      <div className="w-full h-full flex flex-row px-100 pt-20 pb-60 gap-40 justify-center">
        <div className="flex h-min justify-center items-center sticky top-20">
          <IDCard />
        </div>
        <div className="flex flex-col h-min w-1/2 justify-center items-center sticky top-20">
          <About />
          <Experience />
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default App;
