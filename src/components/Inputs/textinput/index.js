import '../_input.scss';

const TextInput = ({inputLabel, inputType, spellCheck, characterLimit}) => {

  return (
    <div className="input-container">
      <label>
        {inputLabel}
      </label>
      <input type={inputType} className="input-box" spellCheck={spellCheck} maxLength={characterLimit}/>
    </div>
  )
}

export default TextInput
