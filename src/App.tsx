import React, { useState } from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import { LoginPage } from './components/LoginPage/LoginPage';
import { SignUpPage } from './components/SignUpPage/SignUpPage';
import { User, UserSignUP } from './models/user';
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage';
import { MainPage } from './components/MainPage/MainPage';


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
     <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path="login" element={<LoginPage handleLogin={handleLogInBtn} />} />
      <Route path="sign-up" element={<SignUpPage  signUpHandler={handleSignUpBtn} /> }/>
      <Route path="*" element={<NotFoundPage/>}/>
     </Routes>
     
    </>
  );
}

export default App;
