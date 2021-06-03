import { useState } from "react";
import Hero from "./components/sections/Hero";
import Red from "./components/sections/Red";
import Yellow from "./components/sections/Yellow";
import Perks from "./components/sections/Perks";
import Reviews from "./components/sections/Reviews";
import Get from "./components/sections/Get";
import Pricing from "./components/sections/Pricing";
import Footer from "./components/Footer";
import "./App.scss";

const App = () => {

  const [state, setState] = useState({
    view: "main" // main, pricing
  });

  // Set the current view
  const setView = (view) => {
    window.scrollTo({top: 0});
    setState({ ...state, view: view });
  };

  return (
    <div className="App">

      {state.view === "main" &&
        <div className="view-main">
          <Hero setView={setView} />
          <Red setView={setView} />
          <Yellow setView={setView} />
          <Perks setView={setView} />
          <Reviews setView={setView} />
          <Get setView={setView} />
        </div>
      }

      {state.view === "pricing" &&
        <div className="view-pricing">
          <Pricing setView={setView} />
          <Perks setView={setView} />
        </div>
      }

      <Footer />

    </div>
  );
};

export default App;
