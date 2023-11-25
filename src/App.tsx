import React from 'react';

import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/MainPage/Footer/Footer';
import { MainPage } from './components/MainPage/MainPage';

function App() {
  return (
    <div className="App">
     <Header/>
     <MainPage/>
     <Footer/>
    </div>
  );
}

export default App;
