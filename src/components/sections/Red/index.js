import PropTypes from "prop-types";
import Button from "../../Button";
import Nav from "../../Nav";
import speaker from "../../../images/speaker.png";
import "./index.scss";

const Red = (props) => {

  Red.propTypes = {
    setView: PropTypes.func
  };

  return (
    <div className="Red">

      {/* Nav Bar */}
      <Nav showButton={true} styles="color-red" setView={props.setView} />

      {/* Main Content */}
      <main>

        {/* Section Text */}
        <section className="demo-text">
          <h1>SUPERIOR SOUND</h1>
          <h2>Experience live versions of your favourite songs.</h2>
          <Button text="SEE DEMO" styles="large color-red" />
        </section>

        {/* Interactive Area */}
        <section className="demo-interactive">
          <div className="speaker">
            <img src={speaker} />
          </div>
          <div className="speaker">
            <img src={speaker} />
          </div>
          <Button text="CLICK" styles="circle" />
        </section>

      </main>

    </div>
  );
};

export default Red;
