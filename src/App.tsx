import IDCard from "./components/IDCard";
import About from "./components/sections/About";

const App = () => {
  return (
    <div className="w-full h-full flex flex-row px-10 pt-20 justify-center">
      <div className="flex h-100vh justify-center items-center sticky">
        <IDCard />
      </div>
      <About />
    </div>
  );
};

export default App;
