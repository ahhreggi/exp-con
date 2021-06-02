import PropTypes from "prop-types";
import Button from "../../Button";
import speaker from "../../../images/speaker.png";
import "./index.scss";

const Red = (props) => {
  Red.propTypes = {

  };
  return (
    <div className="Red">
      <main>
        <h1>SUPERIOR SOUND</h1>
        <h2>Experience live versions of your favourite songs.</h2>
        <Button text="SEE DEMO" styles="large red" />
      </main>
      <section className="interactive">
        <div className="speaker">
          <img src={speaker} />
        </div>
        <div className="speaker">
          <img src={speaker} />
        </div>
        <Button text="CLICK" styles="circle" />
      </section>
    </div>
  );
};

export default Red;
