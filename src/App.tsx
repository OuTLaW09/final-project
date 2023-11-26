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
  const [userInfo,SetUserInfo]=useState<UserSignUP | undefined>(undefined)
  function HandleLogInBtn(user:User){
    alert(user.userName)

  }
  function HandleSignUpBtn(userSignUp:UserSignUP){
    SetUserInfo(userSignUp)

  }
  return(
    <>
     <Header/>
     <Routes>
      <Route index path="Login" element={<LoginPage handleLogin={HandleLogInBtn} />} />
      <Route path="SignUp" element={<SignUpPage  signUpHandler={HandleSignUpBtn} /> }/>
      <Route path="*" element={<DefaultPage/>}/>
     </Routes>
     current user is:{userInfo ? userInfo.userName : "-there is no such user please enter your data"}
     <MainPage/>
     <Footer/>
    <DefaultPage/>
    </>
  );
}

export default App;
function UseState(): [any, any] {
  throw new Error('Function not implemented.');
}

