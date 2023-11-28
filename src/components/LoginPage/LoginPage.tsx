import { User } from '../../models/user';
import './LoginPage.scss';
import leftPhoto from '../../assets/Images/left-arrow.png'
import loginBg from '../../assets/Images/loginPage.jpg';
import googleLogo from '../../assets/Images/google-plus-logo.png';
import facebookLogo from '../../assets/Images/facebook.png';
import linkedinLogo from '../../assets/Images/linkedin.png';

import { Link } from 'react-router-dom';
type LoginPageProps={
    handleLogin: (user:User)=>void;

};
export const LoginPage=(props:LoginPageProps)=>{
    const user:User={
        userName:'Zeyneb',
        userPassword:'Zeyneb2003'

    };
    const LoginBtnClick=()=>{
        props.handleLogin(user)
    };
  
    return (
        <div className="Login-Main">
            <div className="login-container">
                <div className='left-side-login'>
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
                       
                    </div>
                    {/* <a href="#">Do you forget password?</a>
                    <Link to="/sign-up">Create a account</Link> */}

                        
                    

                </div>
                {/* <Link to='/' className='leftBtn'>
                    <img src={leftPhoto} className='leftPhotoLogIn' />
                </Link> */}
           

            </div>
            
        </div>
    )
};