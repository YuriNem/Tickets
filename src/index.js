import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import AppContainer from './containers/App.js';

//import ControlsBar from './components/ControlsBar/index.jsx';
//import Ticket from './components/Ticket/index.jsx';

const initState = {
    tickets: [],
    currency: 'RUB',
    stops: {
        allStops: true,
        noStops: true,
        oneStop: true,
        twoStops: true,
        threeStops: true,
    },
};

const store = createStore(
    reducers,
    initState,
    composeWithDevTools(applyMiddleware(thunk)),
);

const main = document.querySelector('#main');

ReactDOM.render(
    <Provider store={store}>
      <AppContainer />
    </Provider>, 
main);
