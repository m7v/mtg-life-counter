import React from 'react';
import {List, Map} from 'immutable';
import {expect} from 'chai';
import {
  ADD_PLAYER,
  REMOVE_PLAYER,
  INCREASE,
  DECREASE,
  RESET_ALL,
  SET_STATE,
  MAX_PLAYERS,
  MIN_PLAYERS,
  NEXT_HERO,
  PREV_HERO
} from '../helpers/actionTypes';

import {HEROLIST} from "../helpers/heroList";
import reducers from '../reducers/players.reducer';

describe('Players Reducer', () => {
  it('Initialize app state', () => {
    const initialState = List([
      Map({life: 20, position: 0, currentHero: HEROLIST.get(0)}),
      Map({life: 20, position: 1, currentHero: HEROLIST.get(1)})
    ]);

    const nextState = reducers(initialState, {});
    const expected = [
      {life: 20, position: 0, currentHero: HEROLIST.get(0)},
      {life: 20, position: 1, currentHero: HEROLIST.get(1)}
    ];

    expect(JSON.stringify(nextState)).to.equal(JSON.stringify(expected));
  });

  it('Set new application state', () => {
    const initialState = List([
      Map({life: 20, position: 0, currentHero: HEROLIST.get(0)}),
      Map({life: 20, position: 1, currentHero: HEROLIST.get(1)})
    ]);

    const nextState = reducers(initialState, {
      type: SET_STATE,
      newState: List([
        Map({life: 10, position: 2, currentHero: HEROLIST.get(6)}),
        Map({life: 7, position: 1, currentHero: HEROLIST.get(2)})
      ])
    });
    const expected = [
      {life: 10, position: 2, currentHero: HEROLIST.get(6)},
      {life: 7, position: 1, currentHero: HEROLIST.get(2)}
    ];

    expect(JSON.stringify(nextState)).to.equal(JSON.stringify(expected));
  });

  it('Next hero', () => {
    const initialState = List([
      Map({life: 20, position: 0, currentHero: HEROLIST.get(0)}),
      Map({life: 20, position: 1, currentHero: HEROLIST.get(1)})
    ]);

    const nextState1 = reducers(initialState, {type: NEXT_HERO, id: 0});
    const nextState2 = reducers(nextState1, {type: NEXT_HERO, id: 1});
    const expected = [
      {life: 20, position: 1, currentHero: HEROLIST.get(1)},
      {life: 20, position: 2, currentHero: HEROLIST.get(2)}
    ];

    expect(JSON.stringify(nextState2)).to.equal(JSON.stringify(expected));
  });

  it('Next hero after last', () => {
    const initialState = List([
      Map({life: 20, position: 0, currentHero: HEROLIST.get(0)}),
      Map({life: 20, position: 7, currentHero: HEROLIST.get(7)})
    ]);

    const nextState = reducers(initialState, {type: NEXT_HERO, id: 1});
    const expected = [
      {life: 20, position: 0, currentHero: HEROLIST.get(0)},
      {life: 20, position: 0, currentHero: HEROLIST.get(0)}
    ];

    expect(JSON.stringify(nextState)).to.equal(JSON.stringify(expected));
  });

  it('Prev hero', () => {
    const initialState = List([
      Map({life: 20, position: 0, currentHero: HEROLIST.get(0)}),
      Map({life: 20, position: 1, currentHero: HEROLIST.get(1)})
    ]);

    const nextState = reducers(initialState, {type: PREV_HERO, id: 1});
    const expected = [
      {life: 20, position: 0, currentHero: HEROLIST.get(0)},
      {life: 20, position: 0, currentHero: HEROLIST.get(0)}
    ];

    expect(JSON.stringify(nextState)).to.equal(JSON.stringify(expected));
  });

  it('Prev hero after first', () => {
    const initialState = List([
      Map({life: 20, position: 0, currentHero: HEROLIST.get(0)}),
      Map({life: 20, position: 1, currentHero: HEROLIST.get(1)})
    ]);

    const nextState = reducers(initialState, {type: PREV_HERO, id: 0});
    const expected = [
      {life: 20, position: 7, currentHero: HEROLIST.get(7)},
      {life: 20, position: 1, currentHero: HEROLIST.get(1)}
    ];

    expect(JSON.stringify(nextState)).to.equal(JSON.stringify(expected));
  });

  it('Add new player', () => {
    const initialState = List([
      Map({life: 20, position: 0, currentHero: HEROLIST.get(0)}),
      Map({life: 20, position: 1, currentHero: HEROLIST.get(1)})
    ]);

    const nextState = reducers(initialState, {type: ADD_PLAYER});
    const expected = [
      {life: 20, position: 0, currentHero: HEROLIST.get(0)},
      {life: 20, position: 1, currentHero: HEROLIST.get(1)},
      {life: 20, position: 2, currentHero: HEROLIST.get(2)}
    ];

    expect(JSON.stringify(nextState)).to.equal(JSON.stringify(expected));
  });

  it('Check max available players', () => {
    const initialState = List([
      Map({life: 20, position: 0, currentHero: HEROLIST.get(0)}),
      Map({life: 20, position: 1, currentHero: HEROLIST.get(1)}),
      Map({life: 20, position: 2, currentHero: HEROLIST.get(2)}),
      Map({life: 20, position: 3, currentHero: HEROLIST.get(3)})
    ]);

    const nextState = reducers(initialState, {type: ADD_PLAYER});
    const expected = [
      Map({life: 20, position: 0, currentHero: HEROLIST.get(0)}),
      Map({life: 20, position: 1, currentHero: HEROLIST.get(1)}),
      Map({life: 20, position: 2, currentHero: HEROLIST.get(2)}),
      Map({life: 20, position: 3, currentHero: HEROLIST.get(3)})
    ];

    expect(JSON.stringify(nextState)).to.equal(JSON.stringify(expected));
    expect(JSON.stringify(nextState.size)).to.equal(String(MAX_PLAYERS));
  });

  it('Remove players', () => {
    const initialState = List([
      Map({life: 20, position: 0, currentHero: HEROLIST.get(7)}),
      Map({life: 20, position: 1, currentHero: HEROLIST.get(6)}),
      Map({life: 20, position: 2, currentHero: HEROLIST.get(2)}),
    ]);

    const nextState = reducers(initialState, {type: REMOVE_PLAYER});
    const expected = [
      Map({life: 20, position: 0, currentHero: HEROLIST.get(7)}),
      Map({life: 20, position: 1, currentHero: HEROLIST.get(6)}),
    ];

    expect(JSON.stringify(nextState)).to.equal(JSON.stringify(expected));
  });

  it('Check min available players', () => {
    const initialState = List([
      Map({life: 20, position: 0, currentHero: HEROLIST.get(7)}),
      Map({life: 20, position: 1, currentHero: HEROLIST.get(6)}),
    ]);

    const nextState = reducers(initialState, {type: REMOVE_PLAYER});
    const expected = [
      Map({life: 20, position: 0, currentHero: HEROLIST.get(7)}),
      Map({life: 20, position: 1, currentHero: HEROLIST.get(6)}),
    ];

    expect(JSON.stringify(nextState)).to.equal(JSON.stringify(expected));
    expect(JSON.stringify(nextState.size)).to.equal(String(MIN_PLAYERS));
  });

  it('Reset all lifes', () => {
    const initialState = List([
      Map({life: -20, position: 0, currentHero: HEROLIST.get(0)}),
      Map({life: 0, position: 1, currentHero: HEROLIST.get(1)}),
      Map({life: 10, position: 2, currentHero: HEROLIST.get(2)}),
      Map({life: 37, position: 3, currentHero: HEROLIST.get(3)})
    ]);

    const nextState = reducers(initialState, {type: RESET_ALL});
    const expected = [
      Map({life: 20, position: 0, currentHero: HEROLIST.get(0)}),
      Map({life: 20, position: 1, currentHero: HEROLIST.get(1)}),
      Map({life: 20, position: 2, currentHero: HEROLIST.get(2)}),
      Map({life: 20, position: 3, currentHero: HEROLIST.get(3)})
    ];

    expect(JSON.stringify(nextState)).to.equal(JSON.stringify(expected));
  });

  it('Increase life of players ', () => {
    const initialState = List([
      Map({life: -1, position: 0, currentHero: HEROLIST.get(0)}),
      Map({life: -2, position: 1, currentHero: HEROLIST.get(1)}),
      Map({life: 0, position: 2, currentHero: HEROLIST.get(2)}),
      Map({life: 1, position: 3, currentHero: HEROLIST.get(3)})
    ]);

    const nextState = reducers(initialState, {type: INCREASE, id:0});
    const nextState1 = reducers(nextState, {type: INCREASE, id:1});
    const nextState2 = reducers(nextState1, {type: INCREASE, id:2});
    const nextState3 = reducers(nextState2, {type: INCREASE, id:3});
    const expected = [
      Map({life: 0, position: 0, currentHero: HEROLIST.get(0)}),
      Map({life: -1, position: 1, currentHero: HEROLIST.get(1)}),
      Map({life: 1, position: 2, currentHero: HEROLIST.get(2)}),
      Map({life: 2, position: 3, currentHero: HEROLIST.get(3)})
    ];

    expect(JSON.stringify(nextState3)).to.equal(JSON.stringify(expected));
  });

  it('Decrease life of players ', () => {
    const initialState = List([
      Map({life: -1, position: 0, currentHero: HEROLIST.get(0)}),
      Map({life: 0, position: 1, currentHero: HEROLIST.get(1)}),
      Map({life: 1, position: 2, currentHero: HEROLIST.get(2)}),
      Map({life: 2, position: 3, currentHero: HEROLIST.get(3)})
    ]);

    const nextState = reducers(initialState, {type: DECREASE, id:0});
    const nextState1 = reducers(nextState, {type: DECREASE, id:1});
    const nextState2 = reducers(nextState1, {type: DECREASE, id:2});
    const nextState3 = reducers(nextState2, {type: DECREASE, id:3});
    const expected = [
      Map({life: -2, position: 0, currentHero: HEROLIST.get(0)}),
      Map({life: -1, position: 1, currentHero: HEROLIST.get(1)}),
      Map({life: 0, position: 2, currentHero: HEROLIST.get(2)}),
      Map({life: 1, position: 3, currentHero: HEROLIST.get(3)})
    ];

    expect(JSON.stringify(nextState3)).to.equal(JSON.stringify(expected));
  });
});
