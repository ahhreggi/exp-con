import { useState, useEffect } from "react";
import "./index.scss";
import Button from "../../Button";

const images = {
  1: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  2: "https://images.unsplash.com/photo-1551407681-70770d521588?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  3: "https://images.unsplash.com/photo-1546707012-0c9f63ba29b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
};

const Hero = () => {
  const [state, setState] = useState({
    image: 1
  });
  useEffect(() => {
    setTimeout(() => {
      const nextImage = state.image === 3 ? 1 : state.image + 1;
      setState({ ...state, image: nextImage});
    }, 5000);
  }, [state.image]);
  return (
    <div className="Hero" style={{backgroundImage: `url(${images[state.image]})`}}>
      <h1>
        INTERACTIVE CONCERT EXPERIENCE
      </h1>
      <h3>
        Experience your favourite artists like never before and from the comfort of your own home.
      </h3>
      <Button text="TRY IT NOW" styles="bg-rainbow large" />
    </div>
  );
};

export default Hero;
