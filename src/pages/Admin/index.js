import DateInput from "../../components/Inputs/DateInput";
import AppointmentSchedule from "../../components/AppointmentSchedule";
import './_admin.scss'
import { useEffect, useState } from "react";
import BASE_URL from "../../settings";

const Admin = () => {
    const [selectedDate, setSelectedDate] = useState("");
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        if (selectedDate) {

            fetch(`${BASE_URL}appointments/${selectedDate}/2`)
                .then(response => {
                    if (response.ok) {
                        console.log("fetched appointments")
                        return response.json();
                    } else {
                        throw new Error("Failed to fetch appointments");
                    }
                })
                .then(data => {
                    console.log(data)
                    setAppointments(data.data);
                })
                .catch(error => {
                    console.error(error)
                });
        }
    }, [selectedDate]);

    return (
        <div className="container">
            <DateInput inputLabel={"Date:"} setSelectedDate={setSelectedDate} />
            <AppointmentSchedule selectedDate={selectedDate} appointments={appointments} />
        </div>
    );
}

export default Admin;
