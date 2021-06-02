import "./index.scss";
import Button from "../../Button";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="title">
        INTERACTIVE CONCERT EXPERIENCE
      </div>
      <Button text="TRY IT NOW" styles="bg-rainbow" />
    </div>
  );
};

export default Hero;
