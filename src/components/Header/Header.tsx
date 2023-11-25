import "./Header.scss";
export function Header() {
  return (
    <div className="Header-container">
      <div className="TravelAgent-container">
        <span className="agent-name">TRAVEL </span>
        <img src="" />
        <span className="agent-name">AGENT</span>
      </div>
      <div className="Button-container">
        <button className="Home-button">Home</button>
        <button className="Login-button">Login</button>
        <button className="Signup-button">Sign Up</button>
      </div>
    </div>
  );
}
