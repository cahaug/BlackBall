import React from 'react';
import logo from './files/blackballIMG.png';
import './App.css';
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div className="wrapper">
      <Toaster />
      <div className="App">
          {/*🤠 © капустаПродукт 🥬 La Lechuga 🥬 yksinmatkustaia 🤠*/}
          <img src={logo} className="logo" alt="BlackBall Logo" />
          {/* <h1>BlackBall.co/</h1> */}
          <hr />
          <h2>A Blockchain {`for`} restorative justice.  Anyone can add, anyone can search, anyone can comment.  Kindness and truth allowed, only.</h2>
          <br />
          <h3>A Blackball {`for`} the Blue Wall of Silence, anda whole lot more.</h3>
          <br />
          <h3>🚧👷🏗️ Anticipated Release: {`5/9/2021`}, At the Latest {`5/29/2021`} 🏗️👷🚧</h3>
          <br />
          <h3>©{new Date().getUTCFullYear()} <a href="https://blackball.co/">K.P. - BlackBall - Hecatomb - Oblation Corporation (K.P.B.H.O.C.)</a></h3>
      </div>
    </div>
  );
}

export default App;
