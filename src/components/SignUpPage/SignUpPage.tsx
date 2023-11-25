import { UserSignUP } from '../../models/user';
import './SignUpPage.scss';
type SignUpProps={
    signUpHandler:(userSignUp:UserSignUP)=>void;
}
export const SignUpPage=(props:SignUpProps)=>{
  
    const userSignUp:UserSignUP={
        userName:'zeyneb',
        userPassword:'zeyneb2003',
        userEmail:'ddndndn@hhdh',
        userNumber:708080080
    }
    const SignUpBtn=()=>{
       
        props.signUpHandler(userSignUp)

    }
    return (
        <>
        <div className="signUp-container">
            <p>Sign Up </p>
            <form>
                <label>
                    username:
                    <input type="text" placeholder="enter username" id='usernameSignUp'/>
                </label>
                <label>
                    password:
                    <input type="password" placeholder="enter password" id='passwordSignUp' />
                </label>
                <label>
                    E-mail:
                    <input type="email" placeholder="enter email address" id='emailSignUp' />
                </label>
                <label>
                    phone number:
                    <input type="number" placeholder="enter phone number" id='numberSignUp' />
                </label>

                <button type='button' className="signup_btn" onClick={SignUpBtn} >Sign Up</button>
                
            </form>
         </div>
        </>
    )
}

function useState(arg0: string): [any, any] {
    throw new Error('Function not implemented.');
}
