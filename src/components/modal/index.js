import React from "react";
import "./_modal.scss";

const Modal = ({ data, loading, error, closeModal }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title">Patient Name</h1>
                    <button className="modal-close-button" onClick={closeModal}>Close</button>
                </div>
                <div className="modal-body">
                    <button>SEE RECORDS</button>
                    <button>ADD NOTES</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
