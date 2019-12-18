import React from "react";
import "./App.css";
import Sensors from "./Sensors";
import * as THREE from "three";
import * as mqtt from './MqttClient'

import * as Paho from 'paho-mqtt';


console.log(Paho)

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>

      <Sensors />
    </div>
  );
}

export default App;
