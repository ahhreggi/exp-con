import PropTypes from "prop-types";

const InputField = (props) => {
  InputField.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
  };
  return (
    <div className="InputField">
      <input value={props.value} onChange={(event) => props.onChange(event)} />
    </div>
  );
};

export default InputField;
