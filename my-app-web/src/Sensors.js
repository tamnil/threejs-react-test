import React from "react";


/* eslint-disable */

function initSensor() {
  sensor = new AbsoluteOrientationSensor({ frequency: 60 });
  sensor.onreading = () => model.quaternion.fromArray(sensor.quaternion);
  sensor.onerror = event => {
    if (event.error.name == "NotReadableError") {
      console.log("Sensor is not available.");
    }
  };
  sensor.start();
  return sensor;
}

console.log('here')


class Sensors extends React.Component {
  constructor() {
    super();
    this.state = {color: "red"};
  }
  render() {
    return <h2>Hi, I am a sensor!</h2>;
  }
}



export default  Sensors
