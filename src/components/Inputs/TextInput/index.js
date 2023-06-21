import '../_input.scss';

const TextInput = ({ inputLabel, inputType, spellCheck, characterLimit, setInputValue }) => {
  const handleBlur = (e) => {
    if (inputType === "email") {
      setInputValue(e.target.value);
    }
  };

  const handleChange = (e) => {
    if (inputType !== "email") {
      setInputValue(e.target.value);
    }
  };

  return (
    <div className="input-container">
      <label>{inputLabel}</label>
      <input
        type={inputType}
        className="input-box"
        spellCheck={spellCheck}
        maxLength={characterLimit}
        onBlur={handleBlur}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextInput;