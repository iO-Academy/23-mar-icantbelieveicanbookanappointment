import React, { useState } from "react";
import "./_notesForm.scss";
import TextInput from "../Inputs/TextInput";
import BASE_URL from "../../settings";

const NotesForm = ({ appointmentId, patientName, closeNotesForm }) => {
    const [notes, setNotes] = useState("");
    const [prescriptions, setPrescriptions] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let form = {
            appointmentId: appointmentId,
            notes: notes,
            prescriptions: prescriptions
        };


        fetch(BASE_URL + 'record', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                appointmentId: form.appointmentId,
                notes: form.notes,
                prescriptions: form.prescriptions,
            }),
        })
            .then(response => {
                if (response.ok) {
                    closeNotesForm()
                }
            })
            .catch(error => {
                alert('Did not submit', error)
            });
    };


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
                        <TextInput
                            inputType="textarea"
                            inputLabel="Notes"
                            spellCheck={false}
                            characterLimit={500}
                            setInputValue={setNotes}
                        />
                    </div>
                    <div className="form-field">
                        <TextInput
                            inputType="text"
                            inputLabel="Prescriptions"
                            spellCheck={false}
                            characterLimit={200}
                            setInputValue={setPrescriptions}
                        />
                    </div>
                    <div className="submit-button-container">
                    <button type="submit" className="submit-button">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NotesForm;
