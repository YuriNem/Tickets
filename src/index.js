import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import AppContainer from "./containers/App.js";

const initState = {
  tickets: [],
  currency: "RUB",
  stops: {
    allStops: true,
    noStops: true,
    oneStop: true,
    twoStops: true,
    threeStops: true
  },
  mobileSidebar: false
};

const store = createStore(
  reducers,
  initState,
  composeWithDevTools(applyMiddleware(thunk))
);

const render = document.getElementById("render");

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  render
);
