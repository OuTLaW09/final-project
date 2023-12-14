import './HeroPage.scss';
import { Link } from 'react-router-dom';
import FlightsLogo from '../../assets/Images/FlightsLogo.png';
import airplane from '../../assets/Images/headerLogo.png';

export const HeroPage = () => {
  return (
    <div className="hero-page-container">
      <div className="Header-container">
        <div className="TravelAgent-container">
          <span className="agent-name">Travel</span>
          <img alt="" src={airplane} />
          <span className="agent-name">Agent</span>
        </div>
        <div className="Button-container">
          <Link to="/">
            <button className="Home-button">Home</button>
          </Link>
          <Link to="login">
            <button className="Login-button">Login</button>
          </Link>
          <Link to="sign-up">
            <button className="Signup-button">Sign Up</button>
          </Link>
        </div>
      </div>

      <div className="HeroSection-container">
        <div className="Info-container">
          <p className="StartingText">You Can Travel Anywhere With Us</p>
          <p className="OverallInfo">
            For Any Dream as Travelling For Job, Journey, Holidays And So On. You Can Select Any Country And City Which You Want And We Will Assist
            You For Coming True Your Intensions
          </p>
        </div>
        <img alt="" src={FlightsLogo} />
      </div>
      <div className="AboutPlaces-container"></div>
    </div>
  );
};
