/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import AddStation from './features/stations/addStation';
import Stream from './features/stream';

function App() {
  return (
    <div className="container mt-3">
      <header className="text-center d-inline-block">
        <div>
          radio!
        </div>
        <div>
          <img src="radio.png" alt="radio" width="35" height="35" />
        </div>
      </header>
      <div className="row justify-content-center mt-2">
        <div className="col">
          <Stream url="http://96.aac.pls.kdfc.live/" />
        </div>
      </div>
    </div>
  );
}

export default App;
