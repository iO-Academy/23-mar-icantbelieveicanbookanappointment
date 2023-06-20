import React from "react";
import './_appointmentSchedule.scss'

const AppointmentSchedule = ({ appointments }) => {
    if (appointments.length === 0) {
        return <div>No appointments available.</div>;
    }

    return (
        <div className="appointment-schedule">
            {appointments.map((appointment, index) => (
                <div key={index} className="appointment">
                    <div className="time">{appointment.time}:00</div>
                    <div className="patient-id">{appointment.patientId}</div>
                </div>
            ))}
        </div>
    );
};

export default AppointmentSchedule;
