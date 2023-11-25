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
    <div className="Signup-Main">
      <div className="Signup-container">
        <p>Sign Up </p>
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
        </form>
      </div>
    </div>
  );
};

function useState(arg0: string): [any, any] {
  throw new Error("Function not implemented.");
}
