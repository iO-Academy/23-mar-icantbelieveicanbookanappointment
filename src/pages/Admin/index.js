import DateInput from "../../components/Inputs/DateInput";
import AppointmentSchedule from "../../components/AppointmentSchedule";
import './_admin.scss'
import {useEffect, useState} from "react";

const Admin = () => {
    const [selectedDate, setSelectedDate] = useState("")
    useEffect(() => {
        console.log(selectedDate)
    }, [selectedDate])
    return (
        <div className="container">
            <DateInput inputLabel={"Date:"} setSelectedDate={setSelectedDate}/>
            <AppointmentSchedule />
        </div>
    )
}

export default Admin