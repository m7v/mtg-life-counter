import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './index.css';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import tournament from './reducers/tournament.reducer';
import players from './reducers/players.reducer';

const rootReducer = combineReducers({
  tournament,
  players
});

const initialState = {
  tournament: [],
  players: [
    {name:'Player 1', manaStack: '', life: 20},
    {name:'Player 2', manaStack: '', life: 20}
  ],
};

const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// if (localStorage.getItem('counter') && localStorage.getItem('counter').split(',').length) {
//   const newState = localStorage
//     .getItem('counter')
//     .split(',')
//     .map(value => Number(value));
//   store.dispatch({
//     type: 'SET_STATE',
//     newState
//   });
// }

// store.subscribe(() => localStorage.setItem('magicApp', store.getState().toArray()));

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);