import TextInput from "../Inputs/TextInput"
import DropdownInput from "../Inputs/DropdownInput"
import DateInput from "../Inputs/InputDate"
import './_appointmentForm.scss'
import {useEffect, useState} from "react";
import TimeSlots from "../Inputs/Timeslots";
import Submit from "../Submit";
import BASE_URL from "../../settings";

const AppointmentForm = () => {

  const [typedEmail, setTypedEmail] = useState("")
  const [patientId, setPatientId] = useState(0);
  const [docArray, setDocArray] = useState([])
  const [selectedDoctor, setSelectedDoctor] = useState("")
  const [selectedDate, setSelectedDate] = useState("")
  const [inputValue, setInputValue] = useState("");
  const [inputReason, setInputReason] = useState("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [error, setError] = useState(null);

  const setInputEmail = (email) => {
    setTypedEmail(email);
  };

  const fetchPatient = async () => {
    try {
      const response = await fetch(BASE_URL + 'patient', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: typedEmail
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch patient");
      }
      const data = await response.json();
      let patientData = data.data;
      setPatientId(patientData);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (typedEmail) {
      console.log(typedEmail)
      fetchPatient();
    }
  }, [typedEmail]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/doctors');
        if (!response.ok) {
          throw new Error("Failed to fetch doctors");
        }
        const data = await response.json();
        const updatedDocArray = data.data.map(doctor => ({
          value: doctor.id.toString(),
          label: doctor.last_name
        }));
        setDocArray(updatedDocArray);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(selectedDoctor);
  }, [selectedDoctor]);

  useEffect(() => {
    console.log(selectedDate);
  }, [selectedDate]);

  const handleAppointmentSubmit = () => {
    const newAppointmentData = {
      patient_id: patientId, // Value fetched from fetchPatient
      doctor_id: selectedDoctor, // Value selected from DropdownInput
      time: selectedTimeSlot, // Value selected from TimeSlots
      date: selectedDate, // Value selected from DateInput
      reason: inputReason // Value entered in the Reason TextInput
    }; console.log(newAppointmentData)
  };

  return (
    <>
      <div className="appointments-form-container">
        <TextInput
          inputLabel={"First name:"}
          inputType={"text"}
          spellCheck={false}
          characterLimit={"255"}
          setInputValue={setInputValue}
        />
        <TextInput
          inputLabel={"Last name:"}
          inputType={"text"}
          spellCheck={false}
          characterLimit={"255"}
          setInputValue={setInputValue}
        />
        <TextInput
          inputLabel={"Email:"}
          inputType={"email"}
          spellCheck={false}
          characterLimit={"255"}
          setInputValue={setInputEmail}
        />
        <TextInput
          inputLabel={"Reason:"}
          inputType={"text"}
          spellCheck={true}
          characterLimit={"511"}
          setInputValue={setInputReason}
        />
        <DropdownInput
          inputLabel={"Doctor:"}
          dropArray={docArray}
          defaultInput={"Please select..."}
          setDropdownValue={setSelectedDoctor}
        />
        <DateInput inputLabel={"Date:"} setSelectedDate={setSelectedDate} />
      </div>
      <h3>Select from available appointments:</h3>
      <TimeSlots
        selectedDoctor={selectedDoctor}
        selectedDate={selectedDate}
        selectedTimeSlot={selectedTimeSlot}
        setSelectedTimeSlot={setSelectedTimeSlot}
        error={error}
        setError={setError}
      />

      <Submit handleSubmit={handleAppointmentSubmit} />
    </>
  )
}
export default AppointmentForm
