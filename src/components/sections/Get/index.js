import PropTypes from "prop-types";
import "./index.scss";
import Nav from "../../Nav";
import Button from "../../Button";

const Get = (props) => {

  Get.propTypes = {
    setView: PropTypes.func
  };

  return (
    <div className="Get">

      {/* Nav Bar */}
      <Nav />

      {/* Main Content */}
      <main>

        {/* Section Text */}
        <div className="left">
          <h1>GET EXP|CON NOW</h1>
          <h2>Purchase and download the app.</h2>
        </div>

        {/* Try It Now Button */}
        <div className="right">
          <Button text="TRY IT NOW" styles="bg-rainbow" />
        </div>

      </main>

    </div>
  );
};

export default Get;
