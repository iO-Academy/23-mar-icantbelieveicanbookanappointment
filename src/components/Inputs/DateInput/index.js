import '../_input.scss';

const DateInput = ({inputLabel, setSelectedDate}) => {

  return (
    <div className="input-container">
      <label>
        {inputLabel}
      </label>
      <input type="date" className="input-box" onChange={(e) => setSelectedDate(e.target.value)}/>
    </div>
  )
}

export default DateInput
