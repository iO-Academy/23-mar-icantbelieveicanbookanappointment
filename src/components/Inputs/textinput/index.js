import '../_input.scss';

const TextInput = ({inputLabel, inputType, spellCheck, characterLimit, setInputValue}) => {

  return (
    <div className="input-container">
      <label>
        {inputLabel}
      </label>
      <input type={inputType} className="input-box" spellCheck={spellCheck} maxLength={characterLimit} onChange={(e) => setInputValue(e.target.value)}/>
    </div>
  )
}

export default TextInput
