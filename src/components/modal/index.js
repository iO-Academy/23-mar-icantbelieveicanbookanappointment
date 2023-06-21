import React from "react";
import "./_modal.scss";

const Modal = ({ data, patientName, selectedDate, loading, error, closeModal }) => {
    const { time, date, reason } = data

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                    <button className="modal-close-button" onClick={closeModal}>Close</button>
                <div className="modal-header">
                    <h1 className="modal-title">{patientName}</h1>

                </div>
                <div className="modal-body">
                    <p>Time: {time}:00</p>
                    <p>Date: {selectedDate}</p>
                    <p>Reason for appointment: {reason}</p>
                </div>
                <div className="modal-buttons">

                    <button>SEE RECORDS</button>
                    <button>ADD NOTES</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
