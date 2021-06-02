import PropTypes from "prop-types";
import Button from "./Button";

const Nav = (props) => {
  Nav.propTypes = {
    showButton: PropTypes.bool,
    styles: PropTypes.string
  }
  return (
    <div className="Nav">
      <section className="left">

      </section>
      <section className="right">
        {props.showButton &&
          <Button text="TRY IT NOW" styles={props.styles} />
        }
      </section>
    </div>
  );
};

export default Nav;
