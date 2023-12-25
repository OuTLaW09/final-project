import './App.css';
import { LoginPage } from './components/LoginPage/LoginPage';
import { Mainpage } from './components/MainPage/MainPage';
import { MapMainPage } from './components/MapMainPage/MapMainPage';
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage';
import { Route, Routes } from 'react-router-dom';
import { SignUpPage } from './components/SignUpPage/SignUpPage';
import React, { useState } from 'react';
import { message } from 'antd';
export let checkLogIn: boolean | undefined = false;
export const signUpData:any=[];
function App() {
  const [signupInfo, setSignupInfo] = useState<any | null>(null);
  const handleSignUpSubmit = async (values: any) => {
    try {
      const response = await fetch('https://devedu-az.com:7001/api/travel/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      console.log('Data sent to backend:', data);
    } catch (error) {
      console.error('Error sending data to backend:', error);
    }

    setSignupInfo(values);
    message.success('you create new account,succesfully');
    signUpData.push(values['password']);
    signUpData.push(values['email']);
    signUpData.push(values['phone-number']);
    console.log(signUpData.push(values['email']),'jgjjgjgjgjg');
    console.log(signUpData.push(values['phone-number']),'jgjjggj');

    console.log(values);
  };

  const handleLoginSubmit = (values: any) => {
    console.log(values);

    if (
      signupInfo &&
      values['firstName'] === signupInfo['firstName'] &&
      values['lastName'] === signupInfo['lastName'] &&
      values['password'] === signupInfo['password']
    ) {
      checkLogIn = true;
      message.success('Login succesfull');
    } else {
      console.log( values['firstName'],signupInfo['firstName']);
      console.log( values['lastName'],signupInfo['lastName']);
      console.log( values['password'],signupInfo['password']);
      checkLogIn = false;
      message.warning('some information is wrong,please check');
    }

    console.log(checkLogIn);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="login" element={<LoginPage onSubmit={handleLoginSubmit} />} />
        <Route path="sign-up" element={<SignUpPage onSubmit={handleSignUpSubmit} />} />
        <Route path="map-page/:signature" element={<MapMainPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
