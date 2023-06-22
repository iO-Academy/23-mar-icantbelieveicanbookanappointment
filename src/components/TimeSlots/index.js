import './_timeSlot.scss'
import { useEffect, useState } from "react";

const TimeSlot = ({
                    selectedDoctor,
                    selectedDate,
                    selectedTimeSlot,
                    setSelectedTimeSlot
                  }) => {
  const [existingAppointments, setExistingAppointments] = useState([]);
  const [error, setError] = useState(null);
  const [availableAppointments, setAvailableAppointments] = useState([
    9, 10, 11, 12, 13, 14, 15, 16
  ]);

  const handleTimeSlotClick = (time) => {
    setSelectedTimeSlot(time);
  };



  const fetchAppointments = async () => {
    if (selectedDate && selectedDoctor) {
      try {
        console.log("Fetching Appointments...");
        const response = await fetch('http://localhost:3001/appointments/' + selectedDate + '/' + selectedDoctor);
        if (!response.ok) {
          throw new Error("Failed to fetch Appointments");
        }
        const data = await response.json();
        const fetchedAppointments = data.data;

        const updatedAppTimes = [...availableAppointments];
        fetchedAppointments.forEach((appointment) => {
          const index = updatedAppTimes.findIndex((time) => time === appointment.time);
          if (index !== -1) {
            updatedAppTimes.splice(index, 1);
            console.log('Removed time: ' + appointment.time);
          }
        });

        console.log("Fetched Appointments:", fetchedAppointments);
        console.log("Updated available Appointments:", updatedAppTimes);

        setExistingAppointments(fetchedAppointments);
        setAvailableAppointments(updatedAppTimes);

        // Reset available Appointments if no fetched Appointments
        if (fetchedAppointments.length === 0) {
          setAvailableAppointments([9, 10, 11, 12, 13, 14, 15, 16]);
        }
      } catch (error) {
        setError(error.message);
      }
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, [selectedDoctor, selectedDate]);

  let displayTimes = null;
  if (selectedDoctor && selectedDate) {
    displayTimes = availableAppointments.map((time, index) => (
      <div
        className={`timeSlot ${
          selectedTimeSlot === time ? "selected" : ""
        }`}
        key={index}
        onClick={() => handleTimeSlotClick(time)}
      >
        {time}:00
      </div>
    ));
  }

  return <div className="timeSlot-container">{displayTimes}</div>;
};

export default TimeSlot;