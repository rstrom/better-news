import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import rootSaga from "./sagas";
import FrontPage from "./containers/FrontPage";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

store.dispatch({ type: "INIT" });

render(
  <Provider store={store}>
    <FrontPage />
  </Provider>,
  document.getElementById("root")
);
