import PropTypes from "prop-types";
import "./index.scss";
import Button from "../../Button";
import Nav from "../../Nav";

const images = {
  1: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  2: "https://images.unsplash.com/photo-1551407681-70770d521588?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  3: "https://images.unsplash.com/photo-1546707012-0c9f63ba29b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
};

const Hero = (props) => {

  Hero.propTypes = {
    imageID: PropTypes.number,
    onClick: PropTypes.func,
    setView: PropTypes.func,
    view: PropTypes.string
  };

  return (
    <div className="Hero" style={{backgroundImage: `url(${images[props.imageID]})`}}>

      {/* Nav Bar */}
      <Nav setView={props.setView} section="info" />

      {/* Main Content */}
      <main>

        {/* Section Text */}
        <h1>INTERACTIVE CONCERT EXPERIENCE</h1>
        <h3>Experience your favourite artists like never before and from the comfort of your own home.</h3>
        <Button text="TRY IT NOW" styles="bg-rainbow large" onClick={() => props.setView("pricing")} />

      </main>

      {/* Slideshow Controls */}
      <div className="controls">
        <div
          className={`control-button ${props.imageID === 1 ? "selected" : ""}`}
          onClick={() => props.onClick(1)}
        />
        <div
          className={`control-button ${props.imageID === 2 ? "selected" : ""}`}
          onClick={() => props.onClick(2)}
        />
        <div
          className={`control-button ${props.imageID === 3 ? "selected" : ""}`}
          onClick={() => props.onClick(3)}
        />
      </div>

    </div>
  );
};

export default Hero;
