import { expect } from 'chai';
import {
    increment,
    decrement,
    addPlayer,
    removePlayer,
    nextHero,
    prevHero,
    resetAll,
    setState,
} from './actionCreators';
import {
    INCREASE,
    DECREASE,
    ADD_PLAYER,
    REMOVE_PLAYER,
    NEXT_HERO,
    PREV_HERO,
    RESET_ALL,
    SET_STATE,
} from './actionTypes';

describe('Actions', () => {
    it('Increase', () => {
        const id = 1;
        const action = increment(id);
        const expected = {
            type: INCREASE,
            id,
        };

        expect(JSON.stringify(action)).to.equal(JSON.stringify(expected));
    });

    it('Decrease', () => {
        const id = 1;
        const action = decrement(id);
        const expected = {
            type: DECREASE,
            id,
        };

        expect(JSON.stringify(action)).to.equal(JSON.stringify(expected));
    });

    it('Add Player', () => {
        const action = addPlayer();
        const expected = {
            type: ADD_PLAYER,
        };

        expect(JSON.stringify(action)).to.equal(JSON.stringify(expected));
    });

    it('Remove Player', () => {
        const action = removePlayer();
        const expected = {
            type: REMOVE_PLAYER,
        };

        expect(JSON.stringify(action)).to.equal(JSON.stringify(expected));
    });

    it('Next Hero', () => {
        const id = 3;
        const action = nextHero(id);
        const expected = {
            type: NEXT_HERO,
            id,
        };

        expect(JSON.stringify(action)).to.equal(JSON.stringify(expected));
    });

    it('Prev Hero', () => {
        const id = 3;
        const action = prevHero(id);
        const expected = {
            type: PREV_HERO,
            id,
        };

        expect(JSON.stringify(action)).to.equal(JSON.stringify(expected));
    });

    it('Reset All', () => {
        const action = resetAll();
        const expected = {
            type: RESET_ALL,
        };

        expect(JSON.stringify(action)).to.equal(JSON.stringify(expected));
    });

    it('Set state', () => {
        const action = setState();
        const expected = {
            type: SET_STATE,
        };

        expect(JSON.stringify(action)).to.equal(JSON.stringify(expected));
    });
});
