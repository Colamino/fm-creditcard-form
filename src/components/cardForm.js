import React from "react";
import Card from "./Card";
import { FormInput } from "./Form";

function CardForm({
  formData,
  cardfront,
  cardBack,
  handleSubmit,
  handleNumberDisplay,
  format,
  numBlank,
  FormatError,
  BlankEorror,
  myformat,
  myBlank,
  cvcFormat,
  cvcBlank,
  handleChange,
}) {
  const { name, number, mm, yy, cvc } = formData;

  const disableButton = () => {
    if (
      name === "" ||
      number === "" ||
      mm === "" ||
      yy === "" ||
      cvc === "" ||
      format ||
      numBlank ||
      myformat ||
      myBlank ||
      cvcFormat ||
      cvcBlank
    ) {
      return true;
    }
  };
  return (
    <>
      <Card formData={formData} cardfront={cardfront} cardBack={cardBack} />
      <div className="right">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <FormInput
                label="CARDHOLDER NAME"
                display="none"
                type="text"
                name="name"
                value={formData.name}
                placeholder="e.g. June Appleseed"
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <FormInput
                label="CARD NUMBER"
                display="none"
                type="tel"
                name="number"
                value={handleNumberDisplay()}
                placeholder="e.g. xxxx xxxx xxxx xxxx"
                maxLength="19"
                pattern="[0-9\s]{13,19}"
                onChange={handleChange}
                mode="numeric"
                numError={format}
                numError2={numBlank}
              />
              {format && <FormatError />}
              {numBlank && <BlankEorror />}
            </div>
            <div className="expNcvc">
              <div className="exp">
                <FormInput
                  label="EXP. DATE (MM/YY)"
                  display="flex"
                  type="tel"
                  name="mm"
                  name2="yy"
                  value={formData.mm}
                  value2={formData.yy}
                  placeholder="MM"
                  placeholder2="YY"
                  maxLength="2"
                  onChange={handleChange}
                  mode="numeric"
                  myError={myformat}
                  myError2={myBlank}
                />
                {myformat && <FormatError />}
                {myBlank && <BlankEorror />}
              </div>
              <div className="cvc">
                <FormInput
                  label="CVC"
                  display="none"
                  type="tel"
                  name="cvc"
                  value={formData.cvc}
                  placeholder="e.g. 123"
                  maxLength="3"
                  onChange={handleChange}
                  mode="numeric"
                  cvcError={cvcFormat}
                  cvcError2={cvcBlank}
                />
                {cvcFormat && <FormatError />}
                {cvcBlank && <BlankEorror />}
              </div>
            </div>
            <div className="submit-btn">
              <button type="submit" disabled={disableButton()}>
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CardForm;
