import "./Header.scss";
import { Link } from "react-router-dom";
import airplane from "../../assets/Images/airplane.png"

export function Header() {
  return (
    <div className="Header-container">
      <div className="TravelAgent-container">
        <span className="agent-name">Travel</span>
        <img src={airplane}/>
        <span className="agent-name">Agent</span>
      </div>
      <div className="Button-container">
        <Link to="/"><button className="Home-button">Home</button></Link>
        <Link to="login">
          <button className="Login-button">Login</button>
        </Link>
        <Link to="sign-up">
          <button className="Signup-button">Sign Up</button>
        </Link>
      </div>
    </div>
  );
}
