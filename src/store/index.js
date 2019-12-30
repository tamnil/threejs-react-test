import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import { combineReducers } from "redux";
import { helloSaga } from '../sagas'

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

export const gyroAddDataX = (x) => ({
  type: GYRO_DATA_X,
  x,
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

const sagaMiddleware = createSagaMiddleware()


// const middleware = [thunk];
if (process.env.NODE_ENV !== "production") {
  // middleware.push(createLogger())
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware),
  )
);

sagaMiddleware.run(helloSaga)

export default store;
