import PropTypes from "prop-types";
import Button from "./Button";
import "./Nav.scss";

const Nav = (props) => {

  Nav.propTypes = {
    showButton: PropTypes.bool,
    styles: PropTypes.string,
    setView: PropTypes.func
  };

  Nav.defaultProps = {
    showButton: false,
    styles: ""
  };

  return (
    <div className="Nav">

      <section className="nav-left">
        <i className="fa fa-bars" />
        <h2>EXP | CON</h2>
      </section>

      <section className="nav-right">
        {props.showButton &&
          <Button text="TRY IT NOW" styles={props.styles} onClick={() => props.setView("pricing")} />
        }

      </section>

    </div>
  );
};

export default Nav;
