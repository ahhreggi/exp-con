import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import "./index.scss";
import Button from "../../Button";

const images = {
  1: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  2: "https://images.unsplash.com/photo-1551407681-70770d521588?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  3: "https://images.unsplash.com/photo-1546707012-0c9f63ba29b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
};

const Hero = (props) => {
  Hero.propTypes = {
    setView: PropTypes.func
  };

  const [state, setState] = useState({
    image: 1
  });

  // Run a default slideshow timer
  let timer;
  useEffect(() => {
    timer = setTimeout(() => {
      const nextImage = state.image === 3 ? 1 : state.image + 1;
      setState({ ...state, image: nextImage});
    }, 10000);
  }, [state.image]);

  // Stop the current slideshow timer when an image is manually selected
  const selectImage = (image) => {
    clearTimeout(timer);
    setState({ image: image });
  };

  return (
    <div className="Hero" style={{backgroundImage: `url(${images[state.image]})`}}>
      <div />
      <main>
        <h1>
          INTERACTIVE CONCERT EXPERIENCE
        </h1>
        <h3>
          Experience your favourite artists like never before and from the comfort of your own home.
        </h3>
        <Button text="TRY IT NOW" styles="bg-rainbow large" onClick={() => props.setView("pricing")} />
      </main>
      <div className="controls">
        <div
          className={`control-button ${state.image === 1 ? "active" : ""}`}
          onClick={() => selectImage(1)}
        />
        <div
          className={`control-button ${state.image === 2 ? "active" : ""}`}
          onClick={() => selectImage(2)}
        />
        <div
          className={`control-button ${state.image === 3 ? "active" : ""}`}
          onClick={() => selectImage(3)}
        />
      </div>
    </div>
  );
};

export default Hero;
