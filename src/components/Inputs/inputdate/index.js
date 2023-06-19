import '../_input.scss';

const DateInput = ({inputLabel}) => {

  return (
    <div className="input-container">
      <label>
        {inputLabel}
      </label>
      {/* if input is reason add spellcheck = true */}
      <input type="text" className="input-box" spellCheck="false"/>
    </div>
  )
}

export default DateInput
