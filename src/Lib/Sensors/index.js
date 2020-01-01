import React from "react";

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
