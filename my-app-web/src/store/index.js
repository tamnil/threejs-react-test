import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";

//
//action
//

export const GYRO_DATA = "GYRO_DATA";
export const GYRO_DATA_X = "GYRO_DATA_X";
export const ACCEL_DATA = "ACCEL_DATA";

//action creators

export const gyroAddData = (x, y, z) => ({
  type: GYRO_DATA,
  x,
  y,
  z,

  sec: x + y + z
});

export const gyroAddDataX = (x,y,z) => ({
  type: GYRO_DATA_X,
  x,
  y,
  z,
});

export const accelData = data => ({
  type: ACCEL_DATA,
  data
});

/* reducers */

export const gyroVal = (state = { x: 0, y: 0, z: 0 }, action) => {
  switch (action.type) {
    case GYRO_DATA:
      return Object.assign({}, state, {
        x: action.x,
        y: action.y,
        z: action.z
      });
    case GYRO_DATA_X:
      return Object.assign({}, state, {
        x: action.x
      });
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  gyroVal
});

const middleware = [thunk];
if (process.env.NODE_ENV !== "production") {
  // middleware.push(createLogger())
}

export const store = createStore(
  rootReducer,
  compose(
    // applyMiddleware(...middleware),
    // window.devToolsExtension ? window.devToolsExtension() : f => f
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
