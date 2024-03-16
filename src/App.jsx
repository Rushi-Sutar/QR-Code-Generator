import React, { useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  

  return (
<>
<Header/>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/Home' element={<Home/>} />
      </Routes>
      <Footer/>
      </>
  );
}

export default App;
