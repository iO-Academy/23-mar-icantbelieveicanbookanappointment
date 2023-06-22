import React, {useEffect, useState} from "react"
import BASE_URL from "../../settings";
// import "./RecordsModal.scss"

const RecordsModal = ({patientId, patientName, closeRecordsModal }) => {
    const [patientRecord, setPatientRecord] = useState([])

    let tableData = 'Loading...'

        // USE EFFECT TO PERFORM A GET REQUEST TO GET THE RECORDS
    useEffect(() => {
        const fetchPatientRecord = async () => {
                fetch(`${BASE_URL}record/${patientId}`)
                    .then(response => response.json())
                    .then((data) => {
                        setPatientRecord(data.data)
                    }
            )

        }
        fetchPatientRecord()
    }, [])

    useEffect(() => {
        if (patientRecord.length === 0) {
            tableData = `<p>This patient has no record<p>`
        } else {
            tableData = `<p>This patient has ${patientRecord.length} records<p>`
            tableData = <ul><li></li></ul>
        }
    }, [patientRecord])

    return (
        <div className="modal-content">
            <button className="modal-close-button" onClick={closeRecordsModal}>
                Close
            </button>
            <div className="modal-header">
                <h1 className="modal-title">{patientName}'s Records</h1>
            </div>
            <div className="modal-body">
                    {tableData}
                {/* Display patient records here */}
            </div>
        </div>
    )
}

export default RecordsModal
