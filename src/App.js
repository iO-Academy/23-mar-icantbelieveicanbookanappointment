import {BrowserRouter, Route, Routes} from "react-router-dom";
import './css/styles.css';
import Header from "./components/header";
import Homepage from "./pages/homepage";
import Appointments from "./pages/appointments";
import Login from "./pages/login";
import Admin from "./pages/Admin";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/appointments" element={<Appointments/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
