import React from "react";
import './_appointmentSchedule.scss'

const AppointmentSchedule = ({ appointments }) => {
    if (appointments.length === 0) {
        return <div>No appointments available.</div>;
    }

    // Sort appointments array based on time in ascending order
    const sortedAppointments = appointments.sort((a, b) => a.time - b.time);

    return (
        <div className="appointment-schedule">
            {sortedAppointments.map((appointment, index) => (
                <div key={index} className="appointment">
                    <div className="time">{appointment.time}:00</div>
                    <div className="patient-id">{appointment.patientId}</div>
                </div>
            ))}
        </div>
    );
};

export default AppointmentSchedule;
