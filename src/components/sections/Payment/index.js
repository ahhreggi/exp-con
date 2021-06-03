import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./index.scss";
import Nav from "../../Nav";
import Button from "../../Button";

const Payment = (props) => {

  Payment.propTypes = {
    setView: PropTypes.func
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

          </div>
        </div>

        <div className="container">
          <div className="step-two">
            <h3>2. Billing Information</h3>
            <div className="fields">

            </div>
          </div>
          <div className="step-three">
            <h3>3. Credit Card Information</h3>
            <div className="fields">

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
