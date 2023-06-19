import './_appointments.scss'
import AppointmentForm from "../../components/appointmentform";


const Appointments = () => {

  return (
    <div className="appointments-container">
      <h2>Book an appointment:</h2>
      <AppointmentForm />
    </div>
  )
}

export default Appointments