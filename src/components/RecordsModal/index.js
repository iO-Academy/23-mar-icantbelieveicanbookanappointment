import React, {useEffect, useState} from "react"
import BASE_URL from "../../settings";
// import "./RecordsModal.scss"

const RecordsModal = ({ patientId, patientName, closeRecordsModal }) => {
    const [patientRecord, setPatientRecord] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // USE EFFECT TO PERFORM A GET REQUEST TO GET THE RECORDS
    useEffect(() => {
        const fetchPatientRecord = async () => {
            fetch(`${BASE_URL}record/${patientId}`)
                .then(response => response.json())
                .then((data) => {
                    setPatientRecord(data.data);
                    setIsLoading(false);
                });
        };
        fetchPatientRecord();
    }, [patientId]);

    return (
        <div className="modal-content">
            <button className="modal-close-button" onClick={closeRecordsModal}>
                Close
            </button>
            <div className="modal-header">
                <h1 className="modal-title">{patientName}'s Records</h1>
            </div>
            <div className="modal-body">
                {isLoading ? (
                    <p>Loading...</p>
                ) : patientRecord.length === 0 ? (
                    <p>This patient has no record</p>
                ) : (
                    <>
                        <p>This patient has {patientRecord.length} records</p>
                        <ul>
                            {patientRecord.map((record) => (
                                <li key={record.id}>
                                    {/* Display record information here */}
                                    <p>Doctor: {record.doctor}</p>
                                    <p>Time: {record.time}</p>
                                    <p>Date: {record.date}</p>
                                    <p>Reason: {record.reason}</p>
                                    <p>Notes: {record.notes}</p>
                                    <p>Prescriptions: {record.prescriptions}</p>
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </div>
    );
};

export default RecordsModal;
