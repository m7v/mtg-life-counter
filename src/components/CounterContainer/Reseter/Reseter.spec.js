import React from 'react';
import {
    renderIntoDocument,
    findRenderedDOMComponentWithClass,
    Simulate,
} from 'react-dom/test-utils';
import { expect } from 'chai';
import configureMockStore from 'redux-mock-store';
import Reseter from './Reseter';

describe('Creater', () => {
    const mockStore = configureMockStore();
    let store; // eslint-disable-line immutable/no-let

    beforeEach(() => {
        store = mockStore({});
    });

    it('renders without crashing', () => {
        const component = renderIntoDocument(
            <Reseter store={store}/>,
        );
        const btn = findRenderedDOMComponentWithClass(component, 'action--reset');
        Simulate.click(btn);
        expect(btn.className).to.equal('action action--reset');
    });
});
