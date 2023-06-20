import LoginForm from "../../components/LoginForm";

const Login = ({loggedIn, setLoggedIn}) => {

  return (
    <>
        <h1>Doctor Login Form</h1>
     <LoginForm loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
    </>
  )
}

export default Login