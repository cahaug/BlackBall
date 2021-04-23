import React from 'react';
import logo from './files/blackballIMG.png';
import './App.css';
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div className="wrapper">
      <Toaster />
      <div className="App">
          <img src={logo} className="logo" alt="BlackBall Logo" />
          {/* <h1>BlackBall.co/</h1> */}
          <hr />
          <h2>A Blockchain solution to tracking abusers.  Verified abusers are added to a blockchain, which may be freely searched by anyone.</h2>
          <br />
          <h3>A Blackball for the Blue Wall of Silence, and more.</h3>
          <br />
          <h3>🚧👷🏗️ Site Under Construction 🏗️👷🚧</h3>
          <br />
          <h3>©{new Date().getUTCFullYear()} <a href="https://blackball.co/">K.P. - BlackBall - Hecatomb - Oblation Corporation (K.P.B.H.O.C.)</a></h3>
      </div>
    </div>
  );
}

export default App;
