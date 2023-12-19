import './LoginPage.scss';
import { Button, Divider, Form, FormItemProps, Input, Modal, message } from 'antd';
import facebookLogo from '../../assets/Images/facebook.png';
import googleLogo from '../../assets/Images/google-plus-logo.png';
import leftPhoto from '../../assets/Images/left-arrow.png';
import linkedinLogo from '../../assets/Images/linkedin.png';
import loginBg from '../../assets/Images/loginPage.jpg';

import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { signUpData } from '../../App';
interface LoginFormProps {
  onSubmit: (values: any) => void;
}
const MyFormItemContext = React.createContext<(string | number)[]>([]);

interface MyFormItemGroupProps {
  prefix: string | number | (string | number)[];
  children: React.ReactNode;
}

function toArr(str: string | number | (string | number)[]): (string | number)[] {
  return Array.isArray(str) ? str : [str];
}

const MyFormItemGroup = ({ prefix, children }: MyFormItemGroupProps) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(() => [...prefixPath, ...toArr(prefix)], [prefixPath, prefix]);

  return <MyFormItemContext.Provider value={concatPath}>{children}</MyFormItemContext.Provider>;
};

const MyFormItem = ({ name, ...props }: FormItemProps) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;

  return <Form.Item name={concatName} {...props} />;
};

export const LoginPage : React.FC<LoginFormProps> = ({ onSubmit }) => {

  const [forgotPasswordOn, setForgotPasswordOn] = useState<boolean>(false);
  const ForgotPasswordClick = () => {
    setForgotPasswordOn(true);
  };
  const ForgotPasswordCancel = () => {
    setForgotPasswordOn(false);
  };
  const handleOk = () => {
    setForgotPasswordOn(false);
  };

  const onFinishLogIn = (values: object) => {
    onSubmit(values);
  };
 
    const [email, setEmail] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string|number>();
    const[password,setPassword]=useState<string>('');
  
    function FindPassword(){
      if((signUpData[1]===email)&&(signUpData[2]===phoneNumber)){
          setPassword(signUpData[0]); 
          message.info(signUpData[0]);
      }else{
          setPassword('No matching');
          message.warning('No matching');
      };
    };

  return (
    <div className="login-Main">
      <div className="login-container">
        <div className="left-side-login">
          <Link to="/">
            <img alt="" src={leftPhoto} className="left-btn" />
          </Link>
          <div className="top-side-login">
            <p className="login-capture">Log in</p>
            <div className="login-logos">
              <a href="/" className="login-logo-link">
                <img alt="" src={googleLogo} className="login-logo" />
              </a>
              <a href="/" className="login-logo-link">
                <img alt="" src={facebookLogo} className="login-logo" />
              </a>
              <a href="/" className="login-logo-link">
                <img alt="" src={linkedinLogo} className="login-logo" />
              </a>
            </div>
            <Divider><p className="use-account">or use your account</p></Divider>
          </div>
          <Form name="form_item_path" layout="vertical" onFinish={onFinishLogIn} className="form">
            <MyFormItemGroup prefix={['user']}>
              <MyFormItemGroup prefix={['name']}>
                <MyFormItem name="firstName" label="First Name" rules={[{ required: true, message: 'please fill the form' }]}>
                  <Input placeholder="First Name" className="input" />
                </MyFormItem>
                <MyFormItem name="lastName" label="Last Name" rules={[{ required: true, message: 'please fill the form' }]}>
                  <Input placeholder="Last Name" className="input" />
                </MyFormItem>
              </MyFormItemGroup>
            </MyFormItemGroup>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
              hasFeedback
              className="password-input"
            >
              <Input.Password placeholder="Password" className="input" />
            </Form.Item>
            <Button type="primary" htmlType="submit"  className="login-btn">
              LOG IN
            </Button>
            <Link  to='/login' className="forgot-password" onClick={ForgotPasswordClick}>
              Forgot Password
            </Link>
                <Modal 
                 visible={forgotPasswordOn}
                 onCancel={ForgotPasswordCancel}
                 onOk={handleOk}
                 closeIcon={null}
                >
                  <Form className='forgot-password-modal'>
                    <Form.Item label='Email Address'>
                        <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item label='Phone Number'>
                        <Input
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button onClick={FindPassword}>Find Password</Button>
                    </Form.Item>
                </Form>
            </Modal>
          </Form>
        </div>
        <div className="right-side-login">
          <img src={loginBg} alt="" className="login-bg" />
          <div className="overlay">
            <div className="right-side-details">
              <p className="hello-friend">Hello,Friend</p>
              <p className="no-account">Don't have an account?</p>
              <p className="enter-detail">Enter your personal details and begin to journey</p>
              <Link to="/sign-up">
                <button className="sign-up-btn">Sign Up</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
