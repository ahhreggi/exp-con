import { useState } from "react";
import Hero from "./components/sections/Hero";
import Red from "./components/sections/Red";
import Perks from "./components/sections/Perks";
import Reviews from "./components/sections/Reviews";
import Get from "./components/sections/Get";
import Footer from "./components/Footer";
import "./App.scss";

const App = () => {

  const [state, setState] = useState({
    view: "main" // main, pricing
  });

  // Set the current view
  const setView = (view) => {
    setState({ ...state, view: view });
  };

  return (
    <div className="App">

      {state.view === "main" &&
        <>
          <Hero setView={setView} />
          <Red setView={setView} />
          <Perks setView={setView} />
          <Reviews setView={setView} />
          <Get setView={setView} />
        </>
      }

      {state.view === "pricing" &&
        <div>PRICING</div>
      }

      <Footer />

    </div>
  );
};

export default App;
