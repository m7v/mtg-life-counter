import React from 'react';
import {
    renderIntoDocument,
    findRenderedDOMComponentWithClass,
    Simulate
} from 'react-dom/test-utils';
import {expect} from 'chai';
import configureMockStore from 'redux-mock-store';

import Remover from '../components/CounterContainer/Remover/Remover';

describe('Creater', () => {
    const mockStore = configureMockStore();
    let store; // eslint-disable-line immutable/no-let

    beforeEach(() => {
        store = mockStore({});
    });

    it('renders without crashing', () => {
        const component = renderIntoDocument(
            <Remover store={store}/>
        );
        const btn = findRenderedDOMComponentWithClass(component, 'action--remover');
        Simulate.click(btn);
        expect(btn.className).to.equal('action action--remover');
    });
});
