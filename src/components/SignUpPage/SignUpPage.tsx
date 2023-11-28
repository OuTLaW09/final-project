import { Link } from "react-router-dom";
import { UserSignUP } from "../../models/user";
import "./SignUpPage.scss";
type SignUpProps = {
  signUpHandler: (userSignUp: UserSignUP) => void;
};
export const SignUpPage = (props: SignUpProps) => {
  const userSignUp: UserSignUP = {
    userName: "zeyneb",
    userPassword: "zeyneb2003",
    userEmail: "ddndndn@hhdh",
    userNumber: 708080080,
  };
  const SignUpBtn = () => {
    props.signUpHandler(userSignUp);
  };
  return (
    <div className="signup-main">
      <div className="signup-container">
        <div className='left-side-login'>
        {/* <Link to='/' >
                          <img src={} className='left-btn' />
                      </Link>
                      <div className='top-side-login'>
                          <p className='login-capture'>Log in</p>
                          <div className="login-logos">
                              <a href="" className='login-logo-link'><img src={googleLogo} className='login-logo'/></a>
                              <a href="" className='login-logo-link'><img src={facebookLogo} className='login-logo'/></a>
                              <a href=""className='login-logo-link' ><img src={linkedinLogo} className='login-logo'/></a>
                          </div>
                          <p className='use-account'>or use your account</p>
                      </div>
                      <form className='form'>
                          <label>
                              USERNAME
                              <input type="text" placeholder="Username"/>
                          </label>
                          <label>
                              PASSWORD
                              <input type="password"placeholder="Password" />
                          </label>
                          <button className="login-btn" onClick={LoginBtnClick}>LOG IN</button>
                          <a href="" className='forgot-password'>Forgot Password</a>
                      </form>

                  </div>
                    
                  <div className="right-side-login">
                      <img src={loginBg} alt="" className='login-bg'/>
                      <div className='overlay'>
                          <div className='right-side-details'>
                              <p className='hello-friend'>Hello,Friend</p>
                              <p className='no-account'>Don't have an account?</p>
                              <p className='enter-detail'>Enter your personal details and begin to journey</p>
                              <Link to="/sign-up"><button className='sign-up-btn'>Sign Up</button></Link>

                          </div>
                      </div> */}
                  </div>
        {/* <p>Sign Up </p>
        <form className="Form">
          <label>
            <span>Username:</span>
            <input
              type="text"
              placeholder="Enter Username"
              id="usernameSignUp"
            />
          </label>
          <label>
            <span>Password:</span>
            <input
              type="password"
              placeholder="Enter Password"
              id="passwordSignUp"
            />
          </label>
          <label>
            <span>Email:</span>
            <input
              type="email"
              placeholder="Enter Email Address"
              id="emailSignUp"
            />
          </label>
          <label>
            <span>Phone Number:</span>
            <input
              type="number"
              placeholder="Enter Phone Number"
              id="numberSignUp"
            />
          </label>

          <button type="button" className="signup_btn" onClick={SignUpBtn}>
            Sign Up
          </button>
        </form> */}
      </div>
    </div>
  );
};


