
import { Link } from 'react-router-dom';
import './Header.scss';
export function Header(){
  return (
    <div className="Header-container">
      <p className="agent-name">Lorem Impus</p>
      <Link to="login"><button className="Login-button">Login</button></Link>
      <Link to="signUp"><button className="Signup-button">Sign Up</button></Link>
    </div>
  );
}
