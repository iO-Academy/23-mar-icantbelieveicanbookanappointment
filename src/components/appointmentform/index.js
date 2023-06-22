import TextInput from "../Inputs/TextInput"
import DropdownInput from "../Inputs/DropdownInput"
import DateInput from "../Inputs/DateInput"
import './_appointmentForm.scss'
import React, {useEffect, useState} from "react"
import TimeSlots from "../TimeSlots";
import Submit from "../Submit"
import BASE_URL from "../../settings"
import {useNavigate} from "react-router-dom"
import SuccessModal from "../SuccessModal";

const AppointmentForm = () => {

    const [typedEmail, setTypedEmail] = useState("")
    const [patientId, setPatientId] = useState(0)
    const [docArray, setDocArray] = useState([])
    const [selectedDoctor, setSelectedDoctor] = useState("")
    const [selectedDate, setSelectedDate] = useState("")
    const [inputReason, setInputReason] = useState("")
    const [inputFirstName, setInputFirstName] = useState("")
    const [inputLastName, setInputLastName] = useState("")
    const [selectedTimeSlot, setSelectedTimeSlot] = useState(null)
    const [appointmentToDb, setAppointmentToDb] = useState({})
    const [newAppointmentData, setNewAppointmentData] = useState({})
    const [error, setError] = useState(null)

    const navigate = useNavigate()
    const [modalOpen, setModalOpen] = useState(false)
    // const [selectedAppointment, setSelectedAppointment] = useState(null)



    const setInputEmail = (email) => {
        setTypedEmail(email)
    }

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
            })
            if (!response.ok) {
                throw new Error("Failed to fetch patient")
            }
            const data = await response.json()
            let patientData = data.data
            setPatientId(patientData)
        } catch (error) {
            setError(error.message)
        }
    }


    useEffect(() => {
        if (typedEmail) {
            fetchPatient()
        }
    }, [typedEmail])


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3001/doctors')
                if (!response.ok) {
                    throw new Error("Failed to fetch doctors")
                }
                const data = await response.json()
                const updatedDocArray = data.data.map(doctor => ({
                    value: doctor.id.toString(),
                    label: doctor.last_name
                }));
                setDocArray(updatedDocArray)
            } catch (error) {
                setError(error.message)
            }
        }
        fetchData()
    }, [])

    useEffect(() => {
    }, [selectedDoctor])

    useEffect(() => {
    }, [selectedDate])


    const handleAppointmentSubmit = async (e) => {
        e.preventDefault()
        if (patientId < 1) {
            alert('Email not recognised. Please try again.', error)
        } else {
            const newAppointmentData = {
                firstName: inputFirstName,
                lastName: inputLastName,
                email: setInputEmail,
                patientId: patientId,
                doctorId: selectedDoctor,
                time: selectedTimeSlot,
                date: selectedDate,
                reason: inputReason
            }
            const addAppointment = async () => {

            }

                try {
                    await addAppointment();
                    await fetch(BASE_URL + 'appointment', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            patientId: newAppointmentData.patientId,
                            doctorId: newAppointmentData.doctorId,
                            time: selectedTimeSlot,
                            date: selectedDate,
                            reason: inputReason
                        }),
                    })
                        .then(response => {
                            if (response.ok) {
                                const data = response.json()
                                let appointmentData = data.data
                                setAppointmentToDb(appointmentData)
                                setNewAppointmentData(newAppointmentData)
                                console.log(newAppointmentData)
                                // navigate("/success")
                                setModalOpen(true)
                            }
                        })
                } catch (error) {
                    setError("Failed to book appointment")
                }
            }

    }

    const handleModalClose = () => {
        setModalOpen(false)
        // setSelectedAppointment(null)
        navigate('/')
    };

    return (
        <>
            <div className="appointments-form-container">
                <TextInput
                    inputLabel={"First name:"}
                    inputType={"text"}
                    spellCheck={false}
                    characterLimit={"255"}
                    setInputValue={setInputFirstName}
                />
                <TextInput
                    inputLabel={"Last name:"}
                    inputType={"text"}
                    spellCheck={false}
                    characterLimit={"255"}
                    setInputValue={setInputLastName}
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
                <DateInput
                    inputLabel={"Date:"}
                    setSelectedDate={setSelectedDate} />
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
            {modalOpen && (
                <SuccessModal
                    newAppointmentData={newAppointmentData}
                    onClose={() => setNewAppointmentData(null)}
                />
            )}

        </>
    )
}
export default AppointmentForm