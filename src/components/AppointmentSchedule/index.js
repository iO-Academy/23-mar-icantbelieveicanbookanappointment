import React from "react";

const AppointmentSchedule = ({ appointments }) => {
    if (appointments.length === 0) {
        return <div>No appointments available.</div>;
    }

    return (
        <div className="appointment-schedule">
            {appointments.map((appointment, index) => (
                <div key={index} className="appointment">
                    <div className="time">{appointment.time}</div>
                    <div className="patient-id">{appointment.patientId}</div>
                </div>
            ))}
        </div>
    );
};

export default AppointmentSchedule;
