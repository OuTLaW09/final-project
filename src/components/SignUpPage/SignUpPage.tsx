import './SignUpPage.scss';
import { Button, Form, FormItemProps, Input, Select } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import goBackSignUp from '../../assets/Images/left.png';
import leftSignUp from '../../assets/Images/signupbg.jpg';

interface SignupFormProps {
  onSubmit: (values: any) => void;
}
export const SignUpPage: React.FC<SignupFormProps> = ({ onSubmit }) => {
  const onFinish = (values: any) => {
    onSubmit(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
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
    console.log(concatName);
    return <Form.Item name={concatName} {...props} />;
  };

  const { Option } = Select;

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 80 }}>
        <Option value="994">+994</Option>
        <Option value="998">+998</Option>
      </Select>
    </Form.Item>
  );
  return (
    <div className="signup-main">
      <div className="signup-container">
        <div className="left-side-signup">
          <img src={leftSignUp} alt="" className="left-signup-image" />
          <div className="overlay-signup">
            <Link to="/">
              {' '}
              <img src={goBackSignUp} alt="" className="go-back-signup" />
            </Link>
            <p className="welcome-back">Welcome Back,Friend</p>
            <p className="personal-info">To keep connected with us please,log in with your personal info</p>
            <Link to="/login">
              <Button type="primary">LOG IN</Button>
            </Link>
          </div>
        </div>
        <div className="right-side-signup">
          <div className="header-signup">
            <Link to="/">
              {' '}
              <img src={goBackSignUp} alt="" className="go-back-signup" />
            </Link>
            <p className="signup-p">Sign Up </p>
          </div>
          <Form name="form_item_path" layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed} className="Form">
            <MyFormItemGroup prefix={['user']}>
              <MyFormItemGroup prefix={['name']}>
                <div className="user-name">
                  <MyFormItem
                    name="firstName"
                    label="First Name"
                    className="first-name-signup"
                    rules={[{ required: true, message: 'Please input your first name!' }]}
                  >
                    <Input className="first-name-signup-input" placeholder="First Name" />
                  </MyFormItem>
                  <MyFormItem name="lastName" label="Last Name" rules={[{ required: true, message: 'Please input your last name!' }]}>
                    <Input placeholder="Last Name" />
                  </MyFormItem>
                </div>
              </MyFormItemGroup>
              <div className="email-age">
                <MyFormItem
                  name="email"
                  label="Email"
                  rules={[
                    {
                      type: 'email',
                      message: 'The input is not valid E-mail!',
                    },
                    {
                      required: true,
                      message: 'Please input your E-mail!',
                    },
                  ]}
                >
                  <Input placeholder="email" type="email" />
                </MyFormItem>

                <MyFormItem name="age" label="Age" rules={[{ required: true, message: 'Please input your age!' }]}>
                  <Input placeholder="age" />
                </MyFormItem>
              </div>

              <MyFormItem
                name="phone-number"
                label="Phone Number"
                className="phone-number"
                rules={[{ required: true, message: 'Please input your phone number!' }]}
              >
                <Input addonBefore={prefixSelector} style={{ width: '100%' }} placeholder="phone number" />
              </MyFormItem>
              <MyFormItem
                name="password"
                label="Password"
                rules={[
                  {
                    validator(rule, value, reject) {
                      if (!value) {
                        reject('Please input your password!');
                      } else if (!/^[A-Z]/.test(value)) {
                        reject('The first letter of the password must be capitalized!');
                      } else if (!/\d/.test(value)) {
                        reject('The password must contain at least one number!');
                      } else if (value.length < 8) {
                        reject('Your password must be longer than 8 characters!');
                      }else{
                        reject();
                      }
                    },
                  },
                ]}
              >
                <Input.Password
                  className="password-signup"
                  placeholder="input password"
                  iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
              </MyFormItem>
            </MyFormItemGroup>
            <Button type="primary" htmlType="submit">
              SIGN UP
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
