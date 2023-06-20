import TextInput from "../Inputs/textinput";
import './_loginForm.scss';
import Submit from "../Submit";
import {useNavigate} from "react-router-dom"
import { useEffect, useState } from "react";

import { redirect } from "react-router-dom";
import BASE_URL from "../../settings";

const LoginForm = () => {
    const [submittedEmail, setSubmittedEmail] = useState('');
    const [submittedPassword, setSubmittedPassword] = useState('');

    const navigate = useNavigate();
    const logInHandleSubmit = (e) => {
        e.preventDefault();
        let form = {
            email: submittedEmail,
            password: submittedPassword
        };

        fetch(BASE_URL + 'login', {
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
                console.log(response)
                if (response.ok) {
                    // alert('logged in')
                    navigate('/admin')
                }
            })
            .catch(error => {
                // Handle the error
                alert('Wrong credentials', error)
            });
    };

    return (
        <form className="login-form-container" onSubmit={logInHandleSubmit}>
            <TextInput
                value={submittedEmail}
                setInputValue={setSubmittedEmail}
                inputLabel="Email:"
                inputType="email"
                spellCheck={false}
                characterLimit={255}
            />
            <TextInput
                value={submittedPassword}
                setInputValue={setSubmittedPassword}
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
