import React from 'react';
import logo from './logo.svg';
import './App.css';

function Test(){
  return(
    <h1>i am hero </h1>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Test />
      </header>
    </div>
  );
}

export default Test;
