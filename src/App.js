import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className = "App=title">Travels</h1>
          </header>
         <Travel
          travel = "Tresana"
          character ="" 
          image = "https://image.noelshack.com/fichiers/2019/15/2/1554803003-front-fr-16-full.jpg"
          />
              
              
      </div>
    );
  }
}

export default App;