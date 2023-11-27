import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { MainPage } from './components/MainPage/MainPage';
import { Routes,Route } from 'react-router-dom';
import { LoginPage } from './components/LoginPage/LoginPage';
import { SignUpPage } from './components/SignUpPage/SignUpPage';
import { DefaultPage } from './components/DefaultPage/DefaultPage';
import { User, UserSignUP } from './models/user';

function App() {
  const [userInfo, setUserInfo]=useState<UserSignUP | undefined>(undefined)
  function handleLogInBtn(user:User){
    alert(user.userName)

  }
  function handleSignUpBtn(userSignUp:UserSignUP){
    setUserInfo(userSignUp)

  }
  return(
    <>
     <Header/>
     <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="login" element={<LoginPage handleLogin={handleLogInBtn} />} />
      <Route path="sign-up" element={<SignUpPage  signUpHandler={handleSignUpBtn} /> }/>
      <Route path="*" element={<DefaultPage/>}/>
     </Routes>
     current user is:{userInfo ? userInfo.userName : "-there is no such user please enter your data"}
     <Footer/>
    </>
  );
}

export default App;
