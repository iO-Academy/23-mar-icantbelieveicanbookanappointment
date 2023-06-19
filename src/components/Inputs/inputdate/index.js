import '../_input.scss';

const DateInput = ({inputLabel, setInputValue}) => {

  return (
    <div className="input-container">
      <label>
        {inputLabel}
      </label>
      <input type="date" className="input-box" onChange={(e) => setInputValue(e.target.value)}/>
    </div>
  )
}

export default DateInput
