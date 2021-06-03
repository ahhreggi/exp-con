import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./index.scss";
import Nav from "../../Nav";
import Button from "../../Button";
import RadioButton from "./RadioButton";
import InputField from "./InputField";

const Payment = (props) => {

  Payment.propTypes = {
    setView: PropTypes.func
  };

  const [state, setState] = useState({
    plan: null,
    fullName: "",
    billingAddress: "",
    city: "",
    postalCode: "",
    country: "",
    cardholderName: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: ""
  });

  const selectPlan = (plan) => {
    setState({ ...state, plan: plan });
  };

  const updateField = (field, value) => {
    setState({ ...state, [field]: value });
    console.log(state);
  };

  return (
    <div className="Payment">

      {/* Nav Bar */}
      <Nav setView={props.setView} section="info" />

      {/* Main Content */}
      <main>

        {/* Section Header */}
        <h1>PAYMENT</h1>

        <div className="step-one">
          <h3>1. Select your plan</h3>
          <div className="plans">
            <RadioButton
              label="BASIC"
              selected={state.plan === "BASIC"}
              styles="red"
              onClick={selectPlan}
            />
            <RadioButton
              label="ADVANCED"
              selected={state.plan === "ADVANCED"}
              styles="yellow"
              onClick={selectPlan}
            />
            <RadioButton
              label="PRO"
              selected={state.plan === "PRO"}
              styles="blue"
              onClick={selectPlan}
            />
          </div>
        </div>

        <div className="container">
          <div className="step-two">
            <h3>2. Billing Information</h3>
            <div className="fields">
              <InputField label="Full Name" field="fullName" value={state.fullName} onChange={updateField} />
              <InputField label="Billing Address" field="billingAddress" value={state.billingAddress} onChange={updateField} />
              <InputField label="City" field="city" value={state.city} onChange={updateField} />
              <InputField label="Postal Code" field="postalCode" value={state.postalCode} onChange={updateField} />
              <InputField label="Country" field="country" value={state.country} onChange={updateField} dropdown={true} />
            </div>
          </div>
          <div className="step-three">
            <h3>3. Credit Card Information</h3>
            <div className="fields">
              <InputField label="Cardholder's Name" field="cardholderName" value={state.cardholderName} onChange={updateField} />
              <InputField label="Card Number" field="cardNumber" value={state.cardNumber} onChange={updateField} />
              <InputField label="CVV" field="cvv" value={state.cvv} onChange={updateField} />
            </div>
          </div>
        </div>

        <div className="submit">
          <div>
            By continuing, I acknowledge that I&apos;ve read and agree to the <a href="">Terms of Service</a> & <a href="">Privacy Policy</a>.
          </div>
          <Button text="DOWNLOAD" styles="bg-rainbow" />
        </div>

      </main>

    </div>
  );
};

export default Payment;
