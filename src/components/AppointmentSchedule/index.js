import BASE_URL from "../../settings";

import React, { useEffect, useState } from "react";
import './_appointmentSchedule.scss';

const AppointmentSchedule = ({ appointments }) => {
    const [patientNames, setPatientNames] = useState({});

    useEffect(() => {
        const fetchPatientNames = async () => {
            const promises = appointments.map(appointment =>
                fetch(`${BASE_URL}patient/${appointment.patientId}`)
                    .then(response => response.json())
                    .then(data => ({
                        id: appointment.patientId,
                        name: `${data.data.first_name} ${data.data.last_name}`
                    }))
            );

            const resolvedPatientNames = await Promise.all(promises);

            const patientNameMap = resolvedPatientNames.reduce(
                (map, patient) => ({ ...map, [patient.id]: patient.name }),
                {}
            );

            setPatientNames(patientNameMap);
        };

        fetchPatientNames();
    }, [appointments]);

    if (appointments.length === 0) {
        return <div>No appointments available.</div>;
    }

    const sortedAppointments = appointments.sort((a, b) => a.time - b.time);

    return (
        <div className="appointment-schedule">
            {sortedAppointments.map((appointment, index) => (
                <div key={index} className="appointment">
                    <div className="time">{appointment.time}:00</div>
                    <div className="patient-name">
                        {patientNames[appointment.patientId] || "Loading..."}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AppointmentSchedule;


