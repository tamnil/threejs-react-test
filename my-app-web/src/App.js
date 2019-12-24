import React from "react";
import "./App.css";
import Sensors from "./Sensors";
import CanvasBlock from "./CanvasBlock";

import { createStore } from "redux";

function todos(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return state.concat([action.text + "asdfsdf"]);
    default:
      return state;
  }
}


const store = createStore(todos, ["Use Redux"]);
store.dispatch({
  type: "ADD_TODO",
  text: "Read the docs"
});
console.log(store.getState());
function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Sensors />
      <CanvasBlock />
    </div>
  );
}

console.log();

export default App;
