import { User } from '../../models/user';
import './LoginPage.scss';
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
        <>
         <div className="login-container">
            <p>Log In </p>
            <form>
                <label>
                    username:
                    <input type="text" placeholder="enter username"/>
                </label>
                <label>
                    password:
                    <input type="password"placeholder="enter password" />
                </label>
                <button className="login_btn" onClick={LoginBtnClick}>Log in</button>
                <a href="#">Do you forget password?</a>
                <a href="#">Create a account</a>
            </form>
         </div>
        </>
    )
};