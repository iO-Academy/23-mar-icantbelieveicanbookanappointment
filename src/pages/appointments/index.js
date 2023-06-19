import Input from "../../components/Input"
import './_appointments.scss'

const Appointments = () => {

  const label = "Name:"

  return (
    <div className="appointments-container">
      <h2>Book an appointment:</h2>
      <Input inputLabel={label}/>
    </div>
  )
}

export default Appointments