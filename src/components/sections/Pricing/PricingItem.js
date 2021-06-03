import PropTypes from "prop-types";
import Button from "../../Button";

const PricingItem = (props) => {
  PricingItem.propTypes = {
    package: PropTypes.string,
    timeframe: PropTypes.string,
    price: PropTypes.string,
    info: PropTypes.array,
    styles: PropTypes.string
  };
  const details = props.info.map((item, index) => {
    return <li key={index}><i className="fa fa-music" /><h3>{item}</h3></li>;
  });
  return (
    <div className="PricingItem">
      <h2 className={"color-" + props.styles}>
        {props.package}
      </h2>
      <div className={`line border-${props.styles}`} />
      <h2 className={"color-" + props.styles}>
        {props.timeframe}
      </h2>
      <h1 className={"color-" + props.styles}>{props.price}</h1>
      <div className="list">
        {details}
      </div>
      <Button text={"SELECT"} styles={"bg-" + props.styles} />
    </div>
  );
};

export default PricingItem;
