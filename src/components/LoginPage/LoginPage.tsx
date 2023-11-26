import { User } from '../../models/user';
import './LoginPage.scss';
import leftPhoto from '../../assets/Images/left-arrow.png'
import logInBg from '../../assets/Images/loginBg.jpg';
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
            <img src={logInBg} className='logInBg' />
            <div className="logInContainer">
            <a href='http://localhost:3000/*' className='leftBtn'>
                <img src={leftPhoto} className='leftPhotoLogIn' />
            </a>
            <div className="Login-container">
                <p className='logInP'>Log In</p>
                

                <form className='Form'>
                    <label>
                        <input type="text" placeholder="Enter Username"/>
                    </label>
                    <label>
                        <input type="password"placeholder="Enter Password" />
                    </label>
                    <button className="login_btn" onClick={LoginBtnClick}>Log in</button>
                    <a href="#">Do you forget password?</a>
                    <a href="http://localhost:3000/SignUp">Create a account</a>
                    
                </form>
         </div>

            </div>
            
        </div>
    )
};