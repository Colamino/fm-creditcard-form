import React from "react";

function Card({ formData, cardfront, cardBack }) {
  return (
    <div className="left">
      <div className="left-img">
        <div className="first-circle" />
        <div className="sec-circle" />
        <div className="card-number">
          <p>{formData?.number || "0000 0000 0000 0000"}</p>
        </div>
        <div className="cardholder-name">
          <p>{formData?.name || "June Appleseed"}</p>
        </div>
        <div className="card-exp">
          {`${formData?.mm || "00"}/${formData?.yy || "00"}`}
        </div>
        <div className="card-cvc">
          <p>{formData?.cvc || "000"}</p>
        </div>
      </div>
      <div className="card-front">
        <img src={cardfront} alt="front" className="front" />
      </div>

      <div className="card-back">
        <img src={cardBack} alt="back" className="back" />
      </div>
    </div>
  );
}

export default Card;
