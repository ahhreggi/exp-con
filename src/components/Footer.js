import PropTypes from "prop-types";
import "./Footer.scss";

const Footer = () => {

  Footer.propTypes = {
    setView: PropTypes.func
  };

  return (
    <div className="Footer">

      <div className="contact">
        <span>
          <i className="fa fa-envelope" />
          support@experienceconcerts.co
        </span>
      </div>

      <div className="copyright">
        <h2>
          EXP | CON
        </h2>
        <div>
          2019 &copy; All Rights Reserved | Speer Technologies Incorporated
        </div>
      </div>

    </div>
  );
};

export default Footer;
