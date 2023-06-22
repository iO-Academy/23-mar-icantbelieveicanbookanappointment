import React, {useState} from "react"
import './_successModal.scss'

const SuccessModal = ({ newAppointmentData, onClose }) => {

    if (!newAppointmentData) {
        return null
    }

    return (
      <div className="modal-overlay">
        <div className="modal-content">
            <div className="button-container">
                <button className="modal-close-button" onClick={onClose}>
                    X
                </button>
            </div>
            <p className="modal-text">
            {newAppointmentData.firstName}{" "}{newAppointmentData.lastName}, you have successfully booked an appointment with Dr{" "}
            {newAppointmentData.doctorName}{" "}at{" "}{newAppointmentData.time}{" "}on{" "}{newAppointmentData.date}.
            </p>
        </div>
      </div>

    )
}

export default SuccessModal