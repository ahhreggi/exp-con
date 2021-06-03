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

      </main>

    </div>
  );
};

export default Payment;
