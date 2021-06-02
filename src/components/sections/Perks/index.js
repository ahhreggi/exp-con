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
      <Nav showButton={true} styles="bg-rainbow" setView={props.setView} />
      <main>
        <div className="title">
          <h1>PERKS</h1>
        </div>
        <section className="perks">
          <PerkItem
            title={"Subscription Payment Model"}
            text={fillerText}
            styles="color-red"
          />
          <PerkItem
            title={"No Fee Cancellation Policy"}
            text={fillerText}
            styles="color-blue"
          />
          <PerkItem
            title={"Subscription Payment Model"}
            text={fillerText}
            styles="color-yellow"
          />
        </section>
      </main>
    </div>
  );
};

export default Perks;
