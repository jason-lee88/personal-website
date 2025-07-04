import IDCard from "./components/IDCard";
import About from "./components/sections/About";

const App = () => {
  return (
    <div className="flex flex-row">
      <IDCard />
      <About />
    </div>
  );
};

export default App;
