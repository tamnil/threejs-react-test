import React from "react";
import ReactDOM from "react-dom";
import { connect,Provider } from "react-redux";
import "./index.css";
import App from "./Components/App/App";
import * as serviceWorker from "./serviceWorker";
import { store } from "./Lib/Store";
// import { createLogger } from "redux-logger";

store.subscribe(() => {
  this.setState({
  });
});
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

function mapStateToProps(state) {
  const { todos } = state;
  return { todoList: todos };
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export default connect(mapStateToProps)(App);
