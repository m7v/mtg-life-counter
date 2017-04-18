import {List} from 'immutable';

function increase(state, id) {
  const player = state.get(id);
  player.life++;
  return state.set(id, player);
}

function decrease(state, id) {
  const player = state.get(id);
  player.life--;
  return state.set(id, player);
}

function addPlayer(state, name, manaStack) {
  return state.push({
    name,
    manaStack,
    life: 20
  });
}

function removePlayer(state) {
  return state.pop();
}

function resetAll(state) {
  return state.map(player => player.life = 20)
}

function setState(state, newState) {
  return state.merge(newState);
}

export default function(state = List([]), action) {
  switch (action.type) {
    case 'INCREASE':
      return increase(state, action.id);
    case 'DECREASE':
      return decrease(state, action.id);
    case 'ADD_PLAYER':
      return addPlayer(state, action.name, action.manaStack);
    case 'REMOVE_PLAYER':
      return removePlayer(state);
    case 'RESET_ALL':
      return resetAll(state);
    case 'SET_STATE':
      return setState(state, action.newState);
    default:
      return state;
  }
}
