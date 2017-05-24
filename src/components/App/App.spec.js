import React from 'react';
import ReactDOM from 'react-dom';
import { List, Map } from 'immutable';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import HEROLIST from '../../helpers/heroList';
import App from './App';

describe('Initial Application', () => {
    const mockStore = configureMockStore();
    let store; // eslint-disable-line immutable/no-let

    beforeEach(() => {
        const initialState = {
            players: new List([
                new Map({ life: 20, position: 0, currentHero: HEROLIST.get(0) }),
                new Map({ life: 20, position: 1, currentHero: HEROLIST.get(1) }),
            ]),
        };
        store = mockStore(initialState);
    });

    it('renders without crashing', () => {
        ReactDOM.render(
            <Provider store={store}>
                <App/>
            </Provider>,
            document.createElement('div'),
        );
    });
});
