import './App.css';
import { LoginPage } from './components/LoginPage/LoginPage';
import { Mainpage } from './components/MainPage/MainPage';
import { MapMainPage } from './components/MapMainPage/MapMainPage';
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage';
import { Route, Routes } from 'react-router-dom';
import { SignUpPage } from './components/SignUpPage/SignUpPage';
import React, { useState } from 'react';
export let checkLogIn: boolean | undefined = false;
function App() {
  const [signupInfo, setSignupInfo] = useState<any | null>(null);
  const handleSignUpSubmit = async (values: any) => {
    const backendUrl = 'https://jsonplaceholder.typicode.com/users';

    try {
      const response = await fetch('http://localhost:3000', {
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
  };

  const handleLoginSubmit = (values: any) => {
    console.log(values);

    if (
      signupInfo &&
      values['user']['name']['firstName'] === signupInfo['user']['name']['firstName'] &&
      values['user']['name']['lastName'] === signupInfo['user']['name']['lastName'] &&
      values['password'] === signupInfo['user']['password']
    ) {
      checkLogIn = true;
    } else {
      checkLogIn = false;
    }

    console.log(checkLogIn);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="login" element={<LoginPage onSubmit={handleLoginSubmit} />} />
        <Route path="sign-up" element={<SignUpPage onSubmit={handleSignUpSubmit} />} />
        <Route path="map-page" element={<MapMainPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
