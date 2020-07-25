import React from 'react';
import logo from './files/blackballIMG.png';
import './App.css';

function App() {
  return (
    <div className="App">
        <img src={logo} className="logo" alt="BlackBall Logo" />
        {/* <h1>BlackBall.co/</h1> */}
        <hr />
        <h2>A Blockchain solution to tracking law enforcement civil rights abuses.  Verified abuse of power complaints would be added to a blockchain, which may be freely searched by anyone.</h2>
        <br />
        <h3>A Blackball for the Blue Wall of Silence.</h3>
        <br />
        <h3>🚧👷🏗️ Site Under Construction 🏗️👷🚧</h3>
        <br />
  <h3>©{new Date().getUTCFullYear()} <a href="https://github.com/cahaug/BlackBall">BlackBall.co/</a></h3>
    </div>
  );
}

export default App;
