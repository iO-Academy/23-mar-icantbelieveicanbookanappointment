import './_input.scss';

const Input = ({inputLabel}) => {

  return (
    <div className="input-container">
      <label>
        {inputLabel}
      </label>
      {/* if input is reason add spellcheck = true */}
      <input type="text" className="input-text" spellCheck="false"/>
    </div>
  )
}

export default Input
