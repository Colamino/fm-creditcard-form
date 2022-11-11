import "./styles.css";
import desktopImg from "./images/bg-main-desktop.png";
import cardfront from "./images/bg-card-front.png";
import cardBack from "./images/bg-card-back.png";
import { useState } from "react";
import { FormInput } from "./components/Form";
import CardForm from "./components/cardForm";
import Success from "./components/Success";
import Card from "./components/Card";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    mm: "",
    yy: "",
    cvc: "",
  });

  //submit successful
  const [success, setSuccess] = useState(false);

  //string only contain num
  function containsOnlyNum(str) {
    return /^\d+$/.test(str);
  }

  //number error
  const [format, setFormat] = useState(false);
  const [numBlank, setNumBlank] = useState(false);

  //mm/yy error
  const [myformat, setmyformat] = useState(false);
  const [myBlank, setmyBlank] = useState(false);

  //cvc error
  const [cvcFormat, setCvcFormat] = useState(false);
  const [cvcBlank, setcvcBlank] = useState(false);

  const handleNumberDisplay = () => {
    const rawText = [...formData.number.split(" ").join("")];
    const creditCard = []; // Create card as array
    rawText.forEach((t, i) => {
      if (i % 4 === 0 && i !== 0) creditCard.push(" "); // Add space
      creditCard.push(t);
    });

    return creditCard.join("");
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    const parseintValue = containsOnlyNum(value.replace(/\s+/g, ""));

    setFormData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });

    if (name === "number") {
      if (!parseintValue) {
        setFormat(true);
      } else {
        setFormat(false);
      }
      if (value.length !== 19 && parseintValue) {
        setNumBlank(true);
      } else {
        setNumBlank(false);
      }
    }

    if (name === "mm" || name === "yy") {
      if (!parseintValue) {
        setmyformat(true);
      } else {
        setmyformat(false);
      }

      if (value.length !== 2 && parseintValue) {
        setmyBlank(true);
      } else {
        setmyBlank(false);
      }
    }

    if (name === "cvc") {
      if (!parseintValue) {
        setCvcFormat(true);
      } else {
        setCvcFormat(false);
      }

      if (value.length !== 3 && parseintValue) {
        setcvcBlank(true);
      } else {
        setcvcBlank(false);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccess(true);
  };

  const FormatError = () => (
    <div className="error">
      <p>Format error, number only.</p>
    </div>
  );

  const BlankEorror = () => (
    <div className="error">
      <p>Can't be blank.</p>
    </div>
  );

  // const {htmlFor, type, mode, label, name, value, placeholder,display } = props;
  return (
    <>
      <div className="App">
        {success ? (
          <Success
            formData={formData}
            cardBack={cardBack}
            cardfront={cardfront}
          />
        ) : (
          <CardForm
            formData={formData}
            cardBack={cardBack}
            cardfront={cardfront}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleNumberDisplay={handleNumberDisplay}
            format={format}
            numBlank={numBlank}
            FormatError={FormatError}
            BlankEorror={BlankEorror}
            myformat={myformat}
            myBlank={myBlank}
            cvcFormat={cvcFormat}
            cvcBlank={cvcBlank}
          />
        )}
      </div>
    </>
  );
}
