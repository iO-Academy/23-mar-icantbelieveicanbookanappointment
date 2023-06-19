import TextInput from "../Inputs/textinput"
import DropdownInput from "../Inputs/dropdowninput"
import DateInput from "../Inputs/inputdate"
import './_appointmentForm.scss'
import {useEffect, useState} from "react";
import TimeSlots from "../timeslots";

const AppointmentForm = () => {

  const nameLabel = "Name:"
  const emailLabel = "Email:"
  const reasonLabel = "Reason:"
  const doctorLabel = "Doctor:"
  const dateLabel = "Date:"

  const [docArray, setDocArray] = useState([])
  const [selectedDoctor, setSelectedDoctor] = useState("")
  const [selectedDate, setSelectedDate] = useState("")
  const [dropdownValue, setDropdownValue] = useState("")
  const [dateValue, setDateValue] = useState("")
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

  return (
    <>
      <div className="appointments-form-container">
      <TextInput inputLabel={nameLabel} inputType={"text"} spellCheck={"false"} characterLimit={"255"}/>
      <TextInput inputLabel={emailLabel} inputType = {"email"} spellCheck={"false"} characterLimit={"255"}/>
      <TextInput inputLabel={reasonLabel} inputType = {"text"} spellCheck={"true"} characterLimit={"511"}/>
      <DropdownInput inputLabel={doctorLabel} dropArray={docArray} defaultInput={"Please select..."} setDropdownValue={setSelectedDoctor}/>
      <DateInput inputLabel={dateLabel}/>
      </div>
      <TimeSlots />
    </>
  )
}
export default AppointmentForm