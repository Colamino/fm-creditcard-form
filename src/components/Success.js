import React from "react";
import Card from "./Card";
import { MdDone } from "react-icons/md";

function Success({ formData, cardfront, cardBack }) {
  return (
    <>
      <Card formData={formData} cardfront={cardfront} cardBack={cardBack} />
      <div className="success-content">
        <div className="done-icon">
          <div className="icon">
            <MdDone className="done" />
          </div>
        </div>
        <div className="heading">
          <p>thank you!</p>
        </div>
        <div className="subtitle">
          <p>We've added your card details</p>
        </div>
        <div className="submit-btn">
          <button type="submit">Continue</button>
        </div>
      </div>
    </>
  );
}

export default Success;
