import { UserSignUP } from "../../models/user";
import "./SignUpPage.scss";
import leftSignUp from '../../assets/Images/signupbg.jpg';
import { Form, Input, Button, Select } from 'antd';
import type { FormItemProps } from 'antd';
import React from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Link } from "react-router-dom";
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

  const onFinish = (value: object) => {
    console.log(value);
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

      return <Form.Item name={concatName} {...props} />;
    };

    const {Option}=Select;

    const prefixSelector = (
      <Form.Item name="prefix" noStyle>
        <Select style={{ width: 70 }}>
          <Option value="70">+70</Option>
          <Option value="50">+50</Option>
        </Select>
      </Form.Item>
    );

  return (
    <div className="signup-main">
      <div className="signup-container">
        <div className="left-side-signup">
          <img src={leftSignUp} alt="" className="left-signup-image" />
          <div className="overlay-signup">
            <p className="welcome-back">Welcome Back,Friend</p>
            <p className="personal-info">To keep connected with us please,log in with your personal info</p>
            <Link to={"/login"}><Button >Log in</Button></Link>
          </div>
          


        </div>
        <div className="right-side-signup">
          <p className="signup-p">Sign Up </p>
          <Form name="form_item_path" layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed} className="Form" >
            <MyFormItemGroup prefix={['user']}>
              <MyFormItemGroup prefix={['name']}>
               <MyFormItem name="firstName"  label='First Name'  className="first-name-signup" 
               rules={[{ required: true, message: 'Please input your first name!' }]}>
                  <Input className="first-name-signup-input" placeholder="First Name" />
                </MyFormItem>
                <MyFormItem name="lastName" label="Last Name"
                rules={[{ required: true, message: 'Please input your last name!' }]}>
                    <Input placeholder="Last Name" />
                </MyFormItem>

              </MyFormItemGroup>
                
                <MyFormItem name="email" label="Email" 
                rules={[ {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
          >
                   <Input placeholder="email" type="email"/>
                </MyFormItem>

                <MyFormItem name="age" label="Age"
                rules={[{ required: true, message: 'Please input your age!' }]}>
                 <Input placeholder="age"/>
                </MyFormItem>
                <MyFormItem name="phone-number" label="Phone Number" className="phone-number"
                rules={[{ required: true, message: 'Please input your age!' }]}>
                 <Input addonBefore={prefixSelector} style={{ width: '100%' }} placeholder="phone number" />
                </MyFormItem>
                <MyFormItem name="password" label="Password" 
                rules={[{ required: true, message: 'Please input your password!' },
                {min:8,message:'your password must be longer than 8'}]}>
                      <Input.Password className="password-signup"
                        placeholder="input password"
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                      />
                </MyFormItem>
            </MyFormItemGroup>
            <Button type="primary" htmlType="submit" onClick={SignUpBtn}>
                   SIGN UP
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

