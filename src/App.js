import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import './css/styles.css';
import Header from "./components/header";
import Homepage from "./pages/homepage";
import Appointments from "./pages/appointments";
import Login from "./pages/login";
import Admin from "./pages/Admin";
import { useState } from "react";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [doctorId, setDoctorId] = useState(1)
    return (
        <>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/appointments" element={<Appointments />} />
                    <Route
                        path="/login"
                        element={<Login loggedIn={loggedIn}
                                        setDoctorId={setDoctorId} setLoggedIn={setLoggedIn} />}
                    />
                    <Route
                        path="/admin"
                        element={
                            loggedIn ? (
                                <Admin
                                       loggedIn={loggedIn}
                                       doctorId={doctorId}
                                       setLoggedIn={setLoggedIn} />
                            ) : (
                                <Navigate to="/" replace />
                            )
                        }
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
