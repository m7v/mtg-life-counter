import React from 'react';
import ReactDOM from 'react-dom';
import {List, Map} from 'immutable';
import {Provider} from 'react-redux';
import {expect} from 'chai';
import configureMockStore from 'redux-mock-store';

import {HEROLIST} from "../helpers/heroList";
import App from '../components/App/App';

describe('Initial Application', () => {
  const mockStore = configureMockStore();
  let store;

  beforeEach(function() {
    const initialState = {
      players: List([
        Map({life: 20, position: 0, currentHero: HEROLIST.get(0)}),
        Map({life: 20, position: 1, currentHero: HEROLIST.get(1)})
      ])
    };
    store = mockStore(initialState);
  });

  it('renders without crashing', () => {
    ReactDOM.render(
      <Provider store={store}>
        <App/>
      </Provider>,
      document.createElement('div')
    );
  });
});
