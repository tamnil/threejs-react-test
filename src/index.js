import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import "./index.css";
import App from "./Components/App/App";
import * as serviceWorker from "./serviceWorker";
import { store } from "./Lib/Store";
// import { createLogger } from "redux-logger";

ReactDOM.render(
  <Provider store={store}>
    <App prop1="teste prop1" />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
