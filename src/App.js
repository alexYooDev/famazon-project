import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/shop' element={<ShopPage />} />
        <Route exact path='/sign-in' element={<SignInAndSignUp />} />
      </Routes>
    </>
  );
}

export default App;
