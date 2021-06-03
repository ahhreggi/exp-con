import PropTypes from "prop-types";
import Button from "../../Button";
import Nav from "../../Nav";
import "./index.scss";

const Yellow = (props) => {

  Yellow.propTypes = {
    setView: PropTypes.func
  };

  return (
    <div className="Yellow">

      {/* Nav Bar */}
      <Nav showButton={true} styles="color-yellow" setView={props.setView} />

      {/* Main Content */}
      <main>

        {/* Interactive Area */}
        <section className="demo-interactive">
          <Button text="REVEAL" styles="circle" />
        </section>

        {/* Section Text */}
        <section className="demo-text">
          <h1>FRONT ROW SEATS</h1>
          <h2>Experience concerts up close and personal.</h2>
          <Button text="SEE DEMO" styles="large color-yellow" />
        </section>

      </main>

    </div>
  );
};

export default Yellow;
