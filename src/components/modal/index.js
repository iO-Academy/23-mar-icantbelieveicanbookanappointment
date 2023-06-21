import React from "react";
import "./_modal.scss";

const Modal = ({ data, loading, error, closeModal }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                    <button className="modal-close-button" onClick={closeModal}>Close</button>
                <div className="modal-header">
                    <h1 className="modal-title">Patient Name</h1>

                </div>
                <div className="modal-body">
                    <p>Time: Time</p>
                    <p>Date: Date</p>
                    <p>Reason for appointment: Reason</p>
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
