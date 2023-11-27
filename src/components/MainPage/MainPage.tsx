import "./MainPage.scss";
import FlightsLogo from "../../assets/Images/FlightsLogo.png"
export const MainPage = () => {
  return (
    <div className="DefaultPage-container">
      <div className="DefaultPage-container">
        <div className="HeroSection-container">
          <div className="Info-container">
            <p className="StartingText">You Can Travel Anywhere With Us</p>
            <p className="OverallInfo">
              For Any Dream as Travelling For Job, Journey, Holidays  <br/>And So On.
              You Can Select Any Country And City<br/> Which You Want And We Will
              Assist You For Coming True<br/> Your Intensions
            </p>
          </div>
          <img src={FlightsLogo}/>
        </div>
      </div>
    </div>
  );
};
