import TextInput from "../Inputs/textinput"
import DropdownInput from "../Inputs/dropdowninput"
import DateInput from "../Inputs/DateInput"
import './_appointmentForm.scss'
import {useEffect, useState} from "react";
import TimeSlots from "../timeslots";

const AppointmentForm = () => {

  const [docArray, setDocArray] = useState([])
  const [selectedDoctor, setSelectedDoctor] = useState("")
  const [selectedDate, setSelectedDate] = useState("")
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await fetch('http://localhost:3001/doctors')
        if (!response.ok) {
          throw new Error("Failed to fetch doctors");
      }
        const data = await response.json()
        const updatedDocArray = []
        data.data.forEach((doctor) => {
          let doctorObj = {
            value: doctor.id.toString(),
            label: doctor.last_name
          };
          updatedDocArray.push(doctorObj)
        })
        setDocArray(updatedDocArray)
        console.log(docArray)
    }   catch (error) {
    setError(error.message)
    }
  }
    fetchData()
  }, [])

  useEffect(() => {
    console.log(selectedDoctor)
  }, [selectedDoctor])

  useEffect(() => {
    console.log(selectedDate)
  }, [selectedDate])

  return (
    <>
      <div className="appointments-form-container">
      <TextInput inputLabel={"First name:"} inputType={"text"} spellCheck={"false"} characterLimit={"255"}/>
      <TextInput inputLabel={"Last name:"} inputType={"text"} spellCheck={"false"} characterLimit={"255"}/>
      <TextInput inputLabel={"Email:"} inputType = {"email"} spellCheck={"false"} characterLimit={"255"}/>
      <TextInput inputLabel={"Reason:"} inputType = {"text"} spellCheck={"true"} characterLimit={"511"}/>
      <DropdownInput inputLabel={"Doctor:"} dropArray={docArray} defaultInput={"Please select..."} setDropdownValue={setSelectedDoctor}/>
      <DateInput inputLabel={"Date:"} setSelectedDate={setSelectedDate}/>
      </div>
      <h3>Select from available appointments:</h3>
      <TimeSlots selectedDoctor={selectedDoctor} selectedDate={selectedDate} error={error} setError={setError}/>
    </>
  )
}
export default AppointmentForm