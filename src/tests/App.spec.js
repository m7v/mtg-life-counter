import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';

import App from '../components/App/App';

describe('Initial Application', () => {
    const mockStore = configureMockStore();
    let store; // eslint-disable-line immutable/no-let

    beforeEach(() => {
        store = mockStore({});
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
