import React, {useState} from "react"
// import '_modal.scss'

const SuccessModal = ({ newAppointmentData, onClose }) => {

    if (!newAppointmentData) {
        return null
    }

    return (
        <div className="modal-content">
            <button className="modal-close-button" onClick={onClose}>
                Close
            </button>
            <p>
                {newAppointmentData.firstName}
                {newAppointmentData.lastName}
                you have successfully booked an appointment at
                {newAppointmentData.time}
                on
                {newAppointmentData.date}.
            </p>
        </div>
    )
}

export default SuccessModal