import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./index.scss";
import Nav from "../../Nav";

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
        <div className="text">PAYMENT</div>

      </main>

    </div>
  );
};

export default Payment;
