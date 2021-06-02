import "./index.scss";
import Button from "../../Button";

const Hero = () => {
  return (
    <div className="Hero">
      <h1>
        INTERACTIVE CONCERT EXPERIENCE
      </h1>
      <h2>
        Experience live versions of your favourite songs.
      </h2>
      <h3>
        Experience your favourite artists like never before and from the comfort of your own home.
      </h3>
      <Button text="TRY IT NOW" styles="bg-rainbow" />
    </div>
  );
};

export default Hero;
