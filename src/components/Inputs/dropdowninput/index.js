import '../_input.scss';

const DropdownInput = ({inputLabel, dropArray}) => {

  const listItems = dropArray.map((option, index)  =>
    <option key={index} value="doctor">{option}</option>
  )

  return (
    <div className="input-container">
      <label>
        {inputLabel}
      </label>
      <select id="dropdown" defaultValue="null" className="input-box" required>
        <option key="-1" value="" hidden>
          Choose a doctor...
        </option>
        {listItems}
      </select>
    </div>
  )
}

export default DropdownInput
