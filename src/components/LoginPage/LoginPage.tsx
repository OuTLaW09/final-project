import { User } from '../../models/user';
import './LoginPage.scss';
import leftPhoto from '../../assets/Images/left-arrow.png'
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
            {/* <img src={bacgroundimage} className='logInBg'/> */}
            <img src={leftPhoto} className='leftPhotoLogIn' />
         <div className="Login-container">
            <p>Log In</p>
            

            <form className='Form'>
                <label>
                    <span>Username:</span>
                    <input type="text" placeholder="Enter Username"/>
                </label>
                <label>
                <span>Password:</span>
                    <input type="password"placeholder="Enter Password" />
                </label>
                <button className="login_btn" onClick={LoginBtnClick}>Log in</button>
                <a href="#">Do you forget password?</a>
                <a href="http://localhost:3000/SignUp">Create a account</a>
                
            </form>
         </div>
        </div>
    )
};