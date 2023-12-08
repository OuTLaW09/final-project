import './App.css';
import { HeroPage } from './components/HeroPage/HeroPage';
import { LoginPage } from './components/LoginPage/LoginPage';
import { Mainpage } from './components/MainPage/MainPage';
import { MapMainPage } from './components/MapMainPage/MapMainPage';
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage';
import { Route, Routes } from 'react-router-dom';
import { SignUpPage } from './components/SignUpPage/SignUpPage';
import { User, UserSignUP } from './models/user';
import React, { useState } from 'react';

function App() {
  const [userInfo, setUserInfo] = useState<UserSignUP | undefined>(undefined);
  function handleLogInBtn(user: User) {
    alert(user.userName);
  }
  function handleSignUpBtn(userSignUp: UserSignUP) {
    setUserInfo(userSignUp);
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="login" element={<LoginPage handleLogin={handleLogInBtn} />} />
        <Route path="sign-up" element={<SignUpPage signUpHandler={handleSignUpBtn} />} />
        <Route path="map-page" element={<MapMainPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
