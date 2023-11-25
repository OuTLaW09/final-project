import "./Header.scss";
export function Header() {
  return (
    <div className="Header-container">
      <p className="agent-name">Lorem Impus</p>
      <div className="Button-container">
        <button className="Home-button ">Home</button>
        <button className="Login-button ">Login</button>
        <button className="Signup-button ">Sign Up</button>
      </div>
    </div>
  );
}
