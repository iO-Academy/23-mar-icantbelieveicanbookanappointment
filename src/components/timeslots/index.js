import './_timeSlot.scss'
import {useEffect, useState} from "react";

const TimeSlot = ({ selectedDoctor, selectedDate }) => {
  const [existingAppointments, setExistingAppointments] = useState([]);
  const [error, setError] = useState(null);
  const [availableAppointments, setAvailableAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      document.querySelector('.timeSlot-container').classList.add('hidden')
      if (selectedDoctor && selectedDate) {
        setAvailableAppointments([9, 10, 11, 12, 13, 14, 15, 16])
        try {
          const response = await fetch(
            `http://localhost:3001/appointments/${selectedDate}/${selectedDoctor}`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch appointments");
          }
          const data = await response.json();
          setExistingAppointments(data.data);
        } catch (error) {
          setError(error.message);
        }
      }
    }
    fetchAppointments();
  }, [selectedDoctor, selectedDate]);

  useEffect(() => {
    const updatedAppTimes = availableAppointments.filter(
      (time) => !existingAppointments.some((appointment) => appointment.time === time)
    );
    setAvailableAppointments(updatedAppTimes);
    window.setTimeout(() =>
    {document.querySelector('.timeSlot-container').classList.remove('hidden')}, 300)
  }, [existingAppointments]);

  let displayTimes = null;
  if (selectedDoctor && selectedDate) {
    displayTimes = availableAppointments.map((time, index) => (
      <div className="timeSlot" key={index}>
        {time}:00
      </div>
    ));
  }

  return (
    <div className="timeSlot-container hidden">
      {displayTimes}
    </div>
  );
};

export default TimeSlot;