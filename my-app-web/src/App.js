'use strict'

import React from "react";
import "./App.css";
import Sensors from "./Sensors";
import CanvasBlock from "./CanvasBlock";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Sensors />
      <CanvasBlock />
    </div>
  );
}


export default App;
