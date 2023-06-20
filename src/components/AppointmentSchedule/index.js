import React, { useEffect, useState } from "react";
import './_appointmentSchedule.scss'
import BASE_URL from "../../settings";

const AppointmentSchedule = ({ appointments }) => {
    const [patientNames, setPatientNames] = useState({});

    useEffect(() => {
        fetchPatientNames();
    }, []);

    const fetchPatientNames = async () => {
        const promises = appointments.map(appointment =>
            fetch(`${BASE_URL}patient/${appointment.patientId}`)
                .then(response => response.json())
                .then(data => ({ id: appointment.patientId, name: data.data }))
        );

        const resolvedPromises = await Promise.all(promises);
        const names = resolvedPromises.reduce((acc, { id, name }) => {
            acc[id] = name;
            return acc;
        }, {});

        setPatientNames(names);
    };

    if (appointments.length === 0) {
        return <div>No appointments available.</div>;
    }

    // Helper function to get the full name of a patient using their ID
    const getFullName = (patientId) => {
        const patient = patientNames[patientId];
        if (patient) {
            const { first_name, last_name } = patient;
            return `${first_name} ${last_name}`;
        }
        return ''; // Return an empty string if the patient is not found
    };

    const sortedAppointments = appointments.sort((a, b) => a.time - b.time);

    return (
        <div className="appointment-schedule">
            {sortedAppointments.map((appointment, index) => (
                <div key={index} className="appointment">
                    <div className="time">{appointment.time}:00</div>
                    <div className="patient-name">{getFullName(appointment.patientId)}</div>
                </div>
            ))}
        </div>
    );
};

export default AppointmentSchedule;
