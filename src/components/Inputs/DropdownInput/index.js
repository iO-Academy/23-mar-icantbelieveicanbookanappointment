import '../_input.scss';

const DropdownInput = ({inputLabel, dropArray, defaultInput, setDropdownValue}) => {

  const listItems = dropArray.map((option, index)  =>
    <option key={index} value={option.value}>{option.label}</option>
  )

  return (
    <div className="input-container">
      <label>
        {inputLabel}
      </label>
      <select id="dropdown" defaultValue="null" className="input-box" required onChange={(e) => setDropdownValue(e.target.value)}>
        <option key="-1" value="" hidden>
          {defaultInput}
        </option>
        {listItems}
      </select>
    </div>
  )
}

export default DropdownInput
