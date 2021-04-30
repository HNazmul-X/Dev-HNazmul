import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import LandingPages from './Pages/LandingPages/LandingPages';

function App() {
  return (
    <BrowserRouter>
      <LandingPages/>
    </BrowserRouter>
  );
}

export default App;
