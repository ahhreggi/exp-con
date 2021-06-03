import PropTypes from "prop-types";

const InputField = (props) => {
  InputField.propTypes = {
    label: PropTypes.string,
    field: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    dropdown: PropTypes.bool,
    options: PropTypes.array
  };
  InputField.defaultProps = {
    dropdown: false,
    options: []
  };
  const options = props.options.map(opt => {
    return <option key={opt} value={opt}>{opt}</option>;
  });
  return (
    <div className="InputField">
      <div className="label">{props.label}</div>
      {!props.dropdown &&
        <input value={props.value} onChange={(event) => props.onChange(props.field, event.target.value)} />
      }
      {props.dropdown &&
        <select value={props.value} onChange={(event) => props.onChange(props.field, event.target.value)}>
          {options}
        </select>
      }
    </div>
  );
};

export default InputField;
