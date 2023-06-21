import {BrowserRouter, Route, Routes} from "react-router-dom";
import './css/styles.css';
import Header from "./components/Header";
import Homepage from "./pages/Homepage/index";
import Appointments from "./pages/Appointments/index";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/appointments" element={<Appointments/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
