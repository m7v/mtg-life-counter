import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {List, Map} from 'immutable';
import './index.css';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import players from './reducers/players.reducer';
import {HEROLIST} from "./helpers/heroList";

const rootReducer = combineReducers({
  players
});

const initialState = {
  players: List([
    Map({life: 20, position: 0, currentHero: HEROLIST.get(0)}),
    Map({life: 20, position: 1, currentHero: HEROLIST.get(1)})
  ])
};

const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);