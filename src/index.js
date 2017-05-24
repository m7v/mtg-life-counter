import React from 'react';
import ReactDOM from 'react-dom';
import {List, Map} from 'immutable';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import App from './components/App/App';
import players from './reducers/players.reducer';
import HEROLIST from './helpers/heroList';
import './index.css';

const rootReducer = combineReducers({
    players,
});

const initialState = {
    players: new List([
        new Map({life: 20, position: 0, currentHero: HEROLIST.get(0)}),
        new Map({life: 20, position: 1, currentHero: HEROLIST.get(1)}),
    ]),
};

const store = createStore(
    rootReducer,
    initialState,
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'),
);
