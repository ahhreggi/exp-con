import PropTypes from "prop-types";
import "./Button.scss";

const Button = (props) => {
  Button.propTypes = {
    text: PropTypes.string,
    styles: PropTypes.string,
    onClick: PropTypes.func
  };
  return (
    <div
      className={`Button ${props.styles}`}
      onClick={() => props.onClick()}
    >
      <span>{props.text}</span>
    </div>
  );
};

export default Button;
