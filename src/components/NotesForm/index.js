import React, { useState } from "react"
// import "./NotesForm.scss"

const NotesForm = ({ patientName, closeNotesForm }) => {
    const [notes, setNotes] = useState("")
    const [prescriptions, setPrescriptions] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="modal-content">
            <button className="modal-close-button" onClick={closeNotesForm}>
                Close
            </button>
            <div className="modal-header">
                <h1 className="modal-title">{patientName}'s Notes</h1>
            </div>
            <div className="modal-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-field">
                        <label htmlFor="notes">Notes</label>
                        <textarea
                            id="notes"
                            name="notes"
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="form-field">
                        <label htmlFor="prescriptions">Prescriptions</label>
                        <input
                            type="text"
                            id="prescriptions"
                            name="prescriptions"
                            value={prescriptions}
                            onChange={(e) => setPrescriptions(e.target.value)}
                        />
                    </div>
                    <button type="submit">Save</button>
                </form>
            </div>
        </div>
    )
}

export default NotesForm
