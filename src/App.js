// import logo from './logo.svg';
// import './App.css';
import './style.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import HomePage from './HomePage';

export default function App() {
// function App() {
  return (
    <div>
      <Header heading="PetLand" />
      <HomePage />
    </div>
  );
}

// export default App;
