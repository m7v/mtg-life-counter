import {List, Map} from 'immutable';
import {
  ADD_PLAYER,
  REMOVE_PLAYER,
  INCREASE,
  DECREASE,
  RESET_ALL,
  SET_STATE,
  SET_WINNER
} from '../helpers/actionTypes';

function setWinner(state, id) {
  const player = state.get(id);
  return state.set(id, player.set('winner', true));
}

function increase(state, id) {
  const player = state.get(id);
  return state.set(id, player.set('life', player.get('life') + 1));
}

function decrease(state, id) {
  const player = state.get(id);
  return state.set(id, player.set('life', player.get('life') - 1));
}

function addPlayer(state, name, manaStack) {
  return state.push(Map({
    name,
    manaStack,
    life: 20,
    winner: false
  }));
}

function removePlayer(state) {
  return state.pop();
}

function resetAll(state) {
  return state.map(player => player.set('life', 20))
}

function setState(state, newState) {
  return state.merge(newState);
}

export default function(state = List([]), action) {
  switch (action.type) {
    case INCREASE:
      return increase(state, action.id);
    case DECREASE:
      return decrease(state, action.id);
    case ADD_PLAYER:
      return addPlayer(state, action.name, action.manaStack);
    case REMOVE_PLAYER:
      return removePlayer(state);
    case RESET_ALL:
      return resetAll(state);
    case SET_STATE:
      return setState(state, action.newState);
    case SET_WINNER:
      return setWinner(state, action.id);
    default:
      return state;
  }
}
