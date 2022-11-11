export const FormInput = (props) => {
  const {
    htmlFor,
    type,
    mode,
    label,
    name,
    value,
    placeholder,
    display,
    pattern,
    onChange,
    maxLength,
    name2,
    value2,
    placeholder2,
    numError,
    numError2,
    myError,
    myError2,
    cvcError,
    cvcError2,
  } = props;

  return (
    <>
      <label htmlFor={htmlFor}>{label}</label>
      <div className="form-input">
        <input
          type={type}
          name={name}
          inputMode={mode}
          value={value}
          placeholder={placeholder}
          pattern={pattern}
          onChange={onChange}
          maxLength={maxLength}
          style={{
            borderColor:
              numError ||
              numError2 ||
              myError ||
              myError2 ||
              cvcError ||
              cvcError2
                ? "red"
                : null,
            outlineColor:
              numError ||
              numError2 ||
              myError ||
              myError2 ||
              cvcError ||
              cvcError2
                ? "red"
                : null,
          }}
        ></input>
        <input
          style={{
            display: display,
            borderColor: myError || myError2 ? "red" : null,
            outlineColor: myError || myError2 ? "red" : null,
          }}
          type={type}
          name={name2}
          inputMode={mode}
          value={value2}
          placeholder={placeholder2}
          pattern={pattern}
          onChange={onChange}
          maxLength={maxLength}
        ></input>
      </div>
    </>
  );
};
