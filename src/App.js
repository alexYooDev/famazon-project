import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/shop' element={<Shop />} />
      </Routes>
    </>
  );
}

export default App;