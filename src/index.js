import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import rootSaga from "./sagas";
import Router from "./containers/Router";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

store.dispatch({
  type: "ROUTE",
  hash: location.hash,
  silent: true
});

window.onpopstate = event => {
  store.dispatch({
    type: "ROUTE",
    hash: location.hash,
    silent: true
  });
};

render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);
