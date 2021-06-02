import PropTypes from "prop-types";
import Button from "../../Button";

const Red = (props) => {
  Red.propTypes = {

  };
  return (
    <div className="Red">
      <h1>SUPERIOR SOUND</h1>
      <h2>Experience live versions of your favourite songs.</h2>
      <Button text="SEE DEMO" styles="large red" />
    </div>
  )
};

export default Red;
