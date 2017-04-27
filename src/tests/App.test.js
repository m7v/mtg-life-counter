import React from 'react';
import ReactDOM from 'react-dom';
import {List, Map} from 'immutable';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {expect} from 'chai';

import {HEROLIST} from "../helpers/heroList";
import reducers from '../reducers/players.reducer';
import App from '../components/App/App';

describe('Initial Application', () => {
  it('renders without crashing', () => {
    const initialState = {
      players: List([
        Map({life: 20, position: 0, currentHero: HEROLIST.get(0)}),
        Map({life: 20, position: 1, currentHero: HEROLIST.get(1)})
      ])
    };

    const store = createStore(
      reducers,
      initialState
    );

    ReactDOM.render(
      <Provider store={store}>
        <App/>
      </Provider>,
      document.createElement('div')
    );
  });
});
