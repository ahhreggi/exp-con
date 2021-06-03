import PropTypes from "prop-types";
import "./index.scss";
import Nav from "../../Nav";
import PricingItem from "./PricingItem";

const Pricing = (props) => {

  Pricing.propTypes = {
    setView: PropTypes.func
  };

  const fillerText = "No commitment, cancel anytime. Never worry about forgetting a payment again!";

  const pricingData = [
    {
      package: "Basic",
      timeframe: "Monthly",
      price: "$9",
      info: [
        "Very good",
        "Amazing",
        "Perfect job",
        "Love this",
        "It's so good",
        "Features"
      ],
      styles: "red"
    },
    {
      package: "Advanced",
      timeframe: "Yearly",
      price: "$99",
      info: [
        "Very very good",
        "Even more amazing",
        "Perfect job",
        "Love this more",
        "It's so so good",
        "More features"
      ],
      styles: "yellow"
    },
    {
      package: "Pro",
      timeframe: "Yearly",
      price: "$120",
      info: [
        "Very very good",
        "Even more amazing",
        "Perfect job",
        "Love this more",
        "It's so so good",
        "More features"
      ],
      styles: "blue"
    }
  ];

  // Create PerkItem components
  const pricing = pricingData.map((package, index) => {
    return (
      <PricingItem
        key={index}
        package={package.package}
        timeframe={package.timeframe}
        price={package.price}
        info={package.info}
      />
    );
  });

  return (
    <div className="Perks">

      {/* Nav Bar */}
      <Nav showButton={true} styles="bg-rainbow" setView={props.setView} />

      {/* Main Content */}
      <main>

        {/* Section Text */}
        <div className="title">
          <h1>PRICING</h1>
        </div>

        {/* PricingItem Components */}
        <section className="perks">
          {pricing}
        </section>

      </main>

    </div>
  );
};

export default Pricing;
