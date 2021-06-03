import { useState, useRef } from "react";
import Hero from "./components/sections/Hero";
import Red from "./components/sections/Red";
import Yellow from "./components/sections/Yellow";
import Perks from "./components/sections/Perks";
import Reviews from "./components/sections/Reviews";
import Get from "./components/sections/Get";
import Pricing from "./components/sections/Pricing";
import Payment from "./components/sections/Payment";
import Footer from "./components/Footer";
import "./App.scss";

const App = () => {

  const [state, setState] = useState({
    view: "main" // main, pricing, payment
  });

  // Set the current view
  const setView = (view) => {
    if (view === "perks") {
      scrollTo("perks");
    } else {
      window.scrollTo({ top: 0 });
      setState({ ...state, view: view });
    }
  };

  const scrollTo = (refName) => {
    if (refName === "perks") {
      if (state.view === "main") {
        perks.current.scrollIntoView({ behavior: "smooth" });
      } else if (state.view === "pricing") {
        perksPricing.current.scrollIntoView({ behavior: "smooth" });
      } else if (state.view === "payment") {
        setView("main");
        setTimeout(() => {
          perks.current.scrollIntoView({ behavior: "smooth" });
        }, 10);
      }
    }
  };

  // Scroll refs
  const perks = useRef(null);
  const perksPricing = useRef(null);

  return (
    <div className="App">

      {state.view === "main" &&
        <div className="view-main">
          <Hero setView={setView} />
          <Red setView={setView} />
          <Yellow setView={setView} />
          <div ref={perks} />
          <Perks setView={setView} />
          <Reviews setView={setView} />
          <Get setView={setView} />
        </div>
      }

      {state.view === "pricing" &&
        <div className="view-pricing">
          <Pricing setView={setView} />
          <div ref={perksPricing} />
          <Perks setView={setView} />
        </div>
      }

      {state.view === "payment" &&
        <div className="view-payment">
          <Payment setView={setView} />
        </div>
      }

      <Footer />

    </div>
  );
};

export default App;
