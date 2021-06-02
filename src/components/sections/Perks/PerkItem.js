import PropTypes from "prop-types";

const PerkItem = (props) => {
  PerkItem.propTypes = {
    title: PropTypes.string,
    text: PropTypes.text,
    styles: PropTypes.string
  };
  return (
    <div className="PerkItem">
      <h2 className={props.styles}>
        {props.title}
      </h2>
      <h3>
        {props.text}
      </h3>
    </div>
  );
};

export default PerkItem;
