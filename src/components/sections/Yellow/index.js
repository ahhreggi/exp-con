import PropTypes from "prop-types";
import Button from "../../Button";
import Nav from "../../Nav";
import speaker from "../../../images/speaker.png";
import "./index.scss";

const Yellow = (props) => {

  Yellow.propTypes = {
    setView: PropTypes.func
  };

  return (
    <div className="Yellow">

      {/* Nav Bar */}
      <Nav showButton={true} styles="color-red" setView={props.setView} />

      {/* Main Content */}
      <main>

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

        {/* Section Text */}
        <section className="demo-text">
          <h1>SUPERIOR SOUND</h1>
          <h2>Experience live versions of your favourite songs.</h2>
          <Button text="SEE DEMO" styles="large color-red" />
        </section>

      </main>

    </div>
  );
};

export default Yellow;
