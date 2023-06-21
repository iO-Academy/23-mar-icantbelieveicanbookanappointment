import React, { useState } from "react";
import "./_modal.scss";
import RecordsModal from "../RecordsModal";
import NotesForm from "../NotesForm";

const Modal = ({ appointments, data, patientName, selectedDate, closeModal }) => {
    const { time, reason } = data;
    const [showRecordsModal, setShowRecordsModal] = useState(false);
    const [showNotesForm, setShowNotesForm] = useState(false);
    const appointmentId = data.id
    const openRecordsModal = () => {
        setShowRecordsModal(true);
    };

    const closeRecordsModal = () => {
        setShowRecordsModal(false);
    };

    const openNotesForm = () => {
        setShowNotesForm(true);
    };

    const closeNotesForm = () => {
        setShowNotesForm(false);
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close-button" onClick={closeModal}>
                    Close
                </button>
                <div className="modal-header">
                    <h1 className="modal-title">{patientName}</h1>
                </div>
                <div className="modal-body">
                    <p>Time: {time}:00</p>
                    <p>Date: {selectedDate}</p>
                    <p>Reason for appointment: {reason}</p>
                </div>
                <div className="modal-buttons-container">
                    <button className="modal-button" onClick={openRecordsModal}>
                        SEE RECORDS
                    </button>
                    <button className="modal-button" onClick={openNotesForm}>
                        ADD NOTES
                    </button>
                </div>
            </div>
            {showRecordsModal && (
                <div className="modal-overlay">
                    <div className="modal-content records-modal">
                        <RecordsModal
                            patientName={patientName}
                            closeRecordsModal={closeRecordsModal}
                        />
                    </div>
                </div>
            )}
            {showNotesForm && (
                <div className="modal-overlay">
                    <div className="modal-content notes-form-modal">
                        <NotesForm
                            appointmentId={appointmentId}
                            patientName={patientName}
                            closeNotesForm={closeNotesForm}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;
