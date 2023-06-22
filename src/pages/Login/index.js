import LoginForm from "../../components/LoginForm";

const Login = ({loggedIn, setLoggedIn, setDoctorId}) => {

  return (
    <>
        <h1>Doctor Login Form</h1>
     <LoginForm loggedIn={loggedIn} setLoggedIn={setLoggedIn} setDoctorId={setDoctorId} />
    </>
  )
}

export default Login