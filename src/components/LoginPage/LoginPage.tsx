import { User } from '../../models/user';
import './LoginPage.scss';
import bacgroundimage from "../../assets/Images/Enterinimage.jpg"
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
            <img src={bacgroundimage}/>
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
                <a href="#">Create a account</a>
                <p>Hello Murad!</p>
            </form>
         </div>
        </div>
    )
};