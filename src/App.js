import {BrowserRouter, Route, Routes} from "react-router-dom";
import './css/styles.css';
import Header from "./components/header";
import Homepage from "./pages/homepage";
import Appointments from "./pages/appointments";
import Login from "./pages/login";

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
