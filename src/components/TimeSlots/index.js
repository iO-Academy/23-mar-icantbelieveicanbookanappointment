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
  //
  // useEffect(() => {
  //   const fetchAppointments = async () => {
  //     if (selectedDate && selectedDoctor) {
  //       try {
  //         setAvailableAppointments([9, 10, 11, 12, 13, 14, 15, 16]);
  //         const response = await fetch(
  //           `http://localhost:3001/appointments/${selectedDate}/${selectedDoctor}`
  //         );
  //         if (!response.ok) {
  //           throw new Error("Failed to fetch Appointments");
  //         }
  //         const data = await response.json();
  //         const fetchedAppointments = data.data;
  //
  //         const updatedAppTimes = availableAppointments.filter(
  //           (time) => !fetchedAppointments.some((appointment) => appointment.time === time)
  //         );
  //
  //         setAvailableAppointments(updatedAppTimes);
  //       } catch (error) {
  //         setError(error.message);
  //       }
  //     }
  //
  //   };
  //
  //   fetchAppointments();
  //   return () => {
  //     setAvailableAppointments([9, 10, 11, 12, 13, 14, 15, 16]);
  //   }
  // }, [selectedDoctor, selectedDate]);

  // useEffect(() => {
  //   const fetchAppointments = async () => {
  //     setAvailableAppointments([9, 10, 11, 12, 13, 14, 15, 16]);
  //     if (selectedDate && selectedDoctor) {
  //       try {
  //         const response = await fetch(
  //           `http://localhost:3001/appointments/${selectedDate}/${selectedDoctor}`
  //         );
  //         if (!response.ok) {
  //           throw new Error("Failed to fetch Appointments");
  //         }
  //         const data = await response.json();
  //         const fetchedAppointments = data.data;
  //
  //         console.log("Fetched appointments:", fetchedAppointments);
  //
  //         console.log("Updated available appointments:", availableAppointments);
  //         const updatedAppTimes = [...availableAppointments];
  //         fetchedAppointments.forEach((appointment) => {
  //           const index = updatedAppTimes.findIndex(
  //             (time) => time === appointment.time
  //           );
  //           if (index !== -1) {
  //             updatedAppTimes.splice(index, 1);
  //             console.log('Removed time: ' + appointment.time);
  //             return updatedAppTimes
  //           }
  //         });
  //         console.log("Updated available times:", updatedAppTimes);
  //         // setExistingAppointments(fetchedAppointments);
  //         setAvailableAppointments(updatedAppTimes);
  //         console.log("Updated available appointments:", availableAppointments);
  //
  //         // console.log("ExistingAppointments:", existingAppointments);
  //
  //       } catch (error) {
  //         setError(error.message);
  //       }
  //     }
  //   };
  //
  //   fetchAppointments();
  //   return () => {
  //     setAvailableAppointments([9, 10, 11, 12, 13, 14, 15, 16]);
  //   }
  // }, [selectedDoctor, selectedDate]);

  useEffect(() => {
    const fetchAppointments = async () => {
      if (selectedDate && selectedDoctor) {
        try {
          setAvailableAppointments([9, 10, 11, 12, 13, 14, 15, 16]); // Reset the availableAppointments state
          console.log("Available appointments:", availableAppointments);

          const response = await fetch(
            `http://localhost:3001/appointments/${selectedDate}/${selectedDoctor}`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch Appointments");
          }
          const data = await response.json();
          const fetchedAppointments = data.data;

          console.log("Fetched appointments:", fetchedAppointments);

          setAvailableAppointments(prevAppointments => {
            const updatedAppTimes = prevAppointments.filter(
              (time) => !fetchedAppointments.some((appointment) => appointment.time === time)
            );
            console.log("Updated available times:", updatedAppTimes);
            return updatedAppTimes;
          });
          // console.log("Updated available appointments:", availableAppointments);

          // console.log("Updated available times:", updatedAppTimes);

        } catch (error) {
          setError(error.message);
        }
      }
    };

    fetchAppointments();

    // Clean up the state when the component unmounts
    return () => {
      setAvailableAppointments([9, 10, 11, 12, 13, 14, 15, 16]);
    };
  }, [selectedDoctor, selectedDate]);

  let displayTimes = null;
  if (selectedDoctor && selectedDate) {
    const updatedAppTimes = availableAppointments; // Move the declaration here
    console.log("Updated available times:", updatedAppTimes);
    displayTimes = updatedAppTimes.map((time, index) => (
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
