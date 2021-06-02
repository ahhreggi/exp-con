import PropTypes from "prop-types";
import "./index.scss";
import Nav from "../../Nav";
import PerkItem from "./PerkItem";

const Perks = (props) => {
  Perks.propTypes = {
    setView: PropTypes.func
  };
  const fillerText = "No commitment, cancel anytime. Never worry about forgetting a payment again!";
  return (
    <div className="Perks">
      <Nav setView={props.setView} />
      <main>
        <PerkItem
          title={"Subscription Payment Model"}
          text={fillerText}
          styles="red"
        />
      </main>
    </div>
  );
};

export default Perks;
