import './LoginPage.scss';
import { Button, Form, FormItemProps, Input } from 'antd';
import { User } from '../../models/user';
import facebookLogo from '../../assets/Images/facebook.png';
import googleLogo from '../../assets/Images/google-plus-logo.png';
import leftPhoto from '../../assets/Images/left-arrow.png';
import linkedinLogo from '../../assets/Images/linkedin.png';
import loginBg from '../../assets/Images/loginPage.jpg';

import { Link } from 'react-router-dom';
import React from 'react';
type LoginPageProps = {
  handleLogin: (user: User) => void;
};
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

const onFinish = (value: object) => {
  console.log(value);
};

export const LoginPage = (props: LoginPageProps) => {
  const user: User = {
    userName: 'Zeyneb',
    userPassword: 'Zeyneb2003',
  };
  const LoginBtnClick = () => {
    props.handleLogin(user);
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
            <p className="use-account">or use your account</p>
          </div>
          <Form name="form_item_path" layout="vertical" onFinish={onFinish} className="form">
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

            <Button type="primary" htmlType="submit" onClick={LoginBtnClick} className="login-btn">
              LOG IN
            </Button>
            <a href="/" className="forgot-password">
              Forgot Password
            </a>
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
