import {BrowserRouter, Route, Routes, redirect} from "react-router-dom";
import './css/styles.css';
import Header from "./components/header";
import Homepage from "./pages/homepage";
import Appointments from "./pages/appointments";
import Login from "./pages/login";
import Admin from "./pages/Admin";
import {useState} from "react";

function App() {
    const [loggedIn, setLoggedIn] = useState(false)


  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/appointments" element={<Appointments/>} />
          <Route path="/login" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/admin" element={loggedIn ? <Admin loggedIn={loggedIn} setLoggedIn={setLoggedIn} /> : redirect('/')} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
