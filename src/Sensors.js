import React from "react";

/* eslint-disable */

function initSensor() {
  let sensor = new AbsoluteOrientationSensor({ frequency: 60 });
  sensor.onreading = () => {
    console.log("quaternion read", sensor.quaternion);
    // model.quaternion.fromArray(sensor.quaternion);
  };
  sensor.onerror = event => {
    if (event.error.name == "NotReadableError") {
      console.log("Sensor is not available.", event.error.message);
    }
  };
  sensor.start();
  return sensor;
}

console.log("here");
var  a=initSensor();

console.log(initSensor());

class Sensors extends React.Component {
  constructor() {
    super();
    this.state = { color: "red" };
  }
  render() {
    return (
      <div>
        <div id="gyro"> gyroData </div>
        <div id="acc"> accData </div>

      </div>
    );
  }
}

export default Sensors;
