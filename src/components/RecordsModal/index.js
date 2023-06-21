import React from "react"
// import "./RecordsModal.scss"

const RecordsModal = ({patientName, closeRecordsModal }) => {

    // USE EFFECT TO PERFORM A GET REQUEST TO GET THE RECORDS
    return (
        <div className="modal-content">
            <button className="modal-close-button" onClick={closeRecordsModal}>
                Close
            </button>
            <div className="modal-header">
                <h1 className="modal-title">{patientName}'s Records</h1>
            </div>
            <div className="modal-body">
                {/* Display patient records here */}
            </div>
        </div>
    )
}

export default RecordsModal
