import TextInput from "../Inputs/textinput";
import './_loginForm.scss';
import Submit from "../Submit";
import { useEffect, useState } from "react";
import { redirect } from "react-router-dom";

const LoginForm = () => {
    const [submittedEmail, setSubmittedEmail] = useState('');
    const [submittedPassword, setSubmittedPassword] = useState('');

    const logInHandleSubmit = (e) => {
        e.preventDefault();
        let form = {
            email: submittedEmail,
            password: submittedPassword
        };

        fetch('https://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: form.email,
                password: form.password,
            }),
        })
            .then(response => {
                // Handle the response
                if (response.ok) {
                    redirect('/appointments')
                }
            })
            .catch(error => {
                // Handle the error
                alert('wrong credentials')
            });
    };

    return (
        <form className="login-form-container" onSubmit={logInHandleSubmit}>
            <TextInput
                value={submittedEmail}
                onChange={(e) => setSubmittedEmail(e.target.value)}
                inputLabel="Email:"
                inputType="email"
                spellCheck={false}
                characterLimit={255}
            />
            <TextInput
                value={submittedPassword}
                onChange={(e) => setSubmittedPassword(e.target.value)}
                inputLabel="Password:"
                inputType="password"
                spellCheck={false}
                characterLimit={255}
            />
            <Submit />
        </form>
    );
};

export default LoginForm;
