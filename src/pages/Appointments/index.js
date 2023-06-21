import './_appointments.scss'
import AppointmentForm from "../../components/AppointmentForm";

const Appointments = () => {

  return (
    <div className="appointments-container">
      <h2>Book an appointment:</h2>
      <AppointmentForm />
    </div>
  )
}

export default Appointments