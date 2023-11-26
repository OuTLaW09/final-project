import "./DefaultPage.scss";
import FlightsLogo from "../../assets/Images/FlightsLogo.png"
export const DefaultPage = () => {
  return (
    <div className="DefaultPage-container">
      <div className="DefaultPage-container">
        <div className="HeroSection-container">
          <div className="Info-container">
            <p className="StartingText">You Can Travel Anywhere With Us</p>
            <p className="OverallInfo">
              For Any Dream as Travelling For Job, Journey, Holidays And So On. <br/>
              You Can Select Any Country And City Which You Want And We Will<br/>
              Assist You For Coming True Your Intensions
            </p>
          </div>
          <img src={FlightsLogo}/>
        </div>
      </div>
    </div>
  );
};
