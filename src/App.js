import { useState, useEffect, useRef } from "react";
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

  const [image, setImage] = useState(1);

  let timer;
  // Slideshow timer
  useEffect(() => {
    if (state.view === "main") {
      timer = setTimeout(() => {
        const nextImage = image === 3 ? 1 : image + 1;
        setImage(nextImage);
      }, 10000);
    }
  }, [state.view, image]);

  // Stop the current slideshow timer when a new image is selected
  const selectImage = (newImage) => {
    clearTimeout(timer);
    setImage(newImage);
  };

  // Set the current view
  const setView = (view) => {
    if (view === "perks") {
      scrollTo("perks");
    } else {
      pauseAudio();
      if (state.view !== "main") {
        clearTimeout(timer);
      }
      window.scrollTo({ top: 0 });
      setState({ ...state, view: view });
    }
  };

  // Scroll ref handler
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


  let audio = new Audio("/explore.mp3");
  const playAudio = () => {
    audio.play();
  };
  const pauseAudio = () => {
    audio.pause();
  };


  return (
    <div className="App">

      {/* Main Info Page */}
      {state.view === "main" &&
        <div className="view-main">
          <Hero imageID={image} onClick={selectImage} setView={setView} view={state.view} />
          <Red setView={setView} onPlay={() => playAudio()} onPause={() => pauseAudio()} />
          <Yellow setView={setView} />
          <div ref={perks} />
          <Perks setView={setView} />
          <Reviews setView={setView} />
          <Get setView={setView} />
        </div>
      }

      {/* Pricing Page */}
      {state.view === "pricing" &&
        <div className="view-pricing">
          <Pricing setView={setView} />
          <div ref={perksPricing} />
          <Perks setView={setView} />
        </div>
      }

      {/* Payment Page */}
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
