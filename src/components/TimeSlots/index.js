import './_timeSlot.scss'
import {useEffect, useState} from "react";

const TimeSlot = ({selectedDoctor, selectedDate}) => {

  const [existingAppointments, setExistingAppointments] = useState("")
  const [error, setError] = useState(null); {/*check error here and app form*/}
  const [availableAppointments, setAvailableAppointments] = useState([9, 10, 11, 12, 13, 14, 15, 16])


  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch('http://localhost:3001/appointments/' + selectedDate + '/' + selectedDoctor)
        if (!response.ok) {
          throw new Error("Failed to fetch Appointments")
        }
        const data = await response.json()
        setExistingAppointments(data.data)
        const updatedAppTimes = [...availableAppointments];
        existingAppointments.forEach((appointment) => {
          updatedAppTimes.forEach((time, index) => {
            if (time === appointment.time) {
              updatedAppTimes.splice(index, 1);
              console.log("Removed time: " + time);
            }
          });
        });
        setAvailableAppointments(updatedAppTimes);
      } catch (error) {
        setError(error.message)
      }
    };
    fetchAppointments();
  }, [selectedDoctor, selectedDate]);

  let displayTimes = null;
  if (selectedDoctor && selectedDate) {
    displayTimes = availableAppointments.map((time, index) => (
      <div className="timeSlot" key={index}>
        {time}:00
      </div>
    ));
  }

  return (
    <div className="timeSlot-container">
      {displayTimes}
    </div>
  )
}

export default TimeSlot