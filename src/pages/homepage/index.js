import './_homepage.scss';
import {Link} from "react-router-dom";
const Homepage = () => {

  return (
  <div className="homepage-content">
    <h2>Welcome to Lawrence Hill Surgery</h2>
    <div className="booking-link">
      <Link to={"/appointments"}>Book an appointment</Link>
    </div>
    <div className="login-link">
      <Link to={"/appointments"}>Doctor Login</Link>
    </div>
  </div>
  )
}

export default Homepage