import { useState } from "react";
import Hero from "./components/sections/Hero";
import "./App.scss";

const App = () => {
  const [state, setState] = useState({
    view: "main" // main, pricing
  });
  return (
    <div className="App">
      <Hero />
    </div>
  );
};

export default App;
