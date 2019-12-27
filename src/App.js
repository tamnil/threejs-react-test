import React, { Component } from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./App.css";
import Header from "./components";
import CanvasBlock from "./CanvasBlock";
import Sensors from "./Sensors";

import client from "./MqttClient"

import store from "./store";

import { gyroAddData } from "./store";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0
    };

    store.subscribe(() => {
      this.setState({
        x: store.getState().x
      });
    });
  }
  static propTypes = {
    // dispatch: PropTypes.func.isRequired
  };

  componentDidMount() {
    //testing store integration
    console.log(store.dispatch(gyroAddData(20, 30, 50), gyroAddData));

console.log(process.env)

  }

  componentDidUpdate(prevProps) {}

  render() {
    // function App() {
    return (
      <div className="App">
        <Header className="App-header" />
        <Sensors />
        {/* <input name="abc" type="text" value={store.getState().gyroVal.x} /> */}
        <CanvasBlock />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { todos } = state;
  return { todoList: todos };
}

export default connect(mapStateToProps)(App);
