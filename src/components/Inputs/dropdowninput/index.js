import '../_input.scss';

const DropdownInput = ({inputLabel, dropArray}) => {

  const listItems = dropArray.map((option) =>
    <option key={option} value="doctor">{option}</option>
  )

  return (
    <div className="input-container">
      <label>
        {inputLabel}
      </label>
      <select id="dropdown" className="input-box">
        {/*<option selected>*/}
        {/*  Choose a doctor*/}
        {/*</option>*/}
        {listItems}
      </select>
    </div>
  )
}

export default DropdownInput
